<?php

namespace App\Http\Controllers;

use App\Mail\WithdrawRequest;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Donatur;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Withdraw;
use App\Mail\RegisterEmail;
use Illuminate\Http\Request;
use App\Mail\DonasiInputEmail;
use App\Mail\EmailForDonatur;
use App\Mail\Withdraw as MailWithdraw;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
  public function home()
{
    $masterUrl = env('MASTER_IMG_URL') . 'img/';
    
    // Load campaigns with their associated donaturs
    $campaigns = Campaign::latest()
        ->where('statusAktif', true)
        ->with(['donaturs' => function ($query) {
            $query->select(['id', 'name', 'nominal', 'campaign_id']) // Include selected columns
                ->where('statusPay', true)
                ->latest();
        }])
        ->get();
    
    $categories = Category::all();

    foreach ($campaigns as $campaign) {
        $campaign->img = $masterUrl . $campaign->img;
    }

    foreach ($categories as $item) {
        $item->file = $masterUrl . $item->file;
    }

    $data = [
        [
            'id' => 1,
            'img' => $masterUrl . 'dela.jpg',
        ],
        [
            'id' => 2,
            'img' => $masterUrl . 'ndi.jpg',
        ],
        [
            'id' => 3,
            'img' => $masterUrl . 'IKI.JPG',
        ],
    ];

    return Inertia::render('frontend/Homepage', [
        'campaigns' => $campaigns,
        'categories' => $categories,
        'data' => $data,
    ]);
}

  

    public function detail($id){ 
      {
          $campaign = Campaign::findOrFail($id);
      
          if (!$campaign) {
              abort(404);
          }
      
          $donaturs = $campaign->donaturs()->where('statusPay', true)->latest()->get();
          $messDonaturs = $campaign->donaturs()
              ->whereNotNull('message') // Filter out records where message column is null
              ->where('statusPay', true)
              ->select(['id', 'name', 'message', 'like'])->get(); // Include selected columns
      
          // Modify campaign image URL
          $campaign->img = env('MASTER_IMG_URL') . 'img/' . $campaign->img;
      // dd($messDonaturs);
          return Inertia::render('frontend/DetailCampaign', [
              'campaign' => $campaign,
              'donaturs' => $donaturs,
              'messDonaturs' => $messDonaturs,
          ]);
      }
      
    }

    public function like($id, Request $request)
    {
        $donatur = Donatur::findOrFail($id);
        $like = $request->input('count');
        $donatur->update(['like' => $like]);
    }
    public function list(){
      $campaigns = Campaign::latest()
      ->where('statusAktif', true)
      ->with(['donaturs' => function ($query) {
          $query->select(['id', 'name', 'nominal', 'campaign_id']) // Include selected columns
              ->where('statusPay', true)
              ->latest();
      }])
      ->get();

      foreach ($campaigns as $campaign) {
        $campaign->img = env('MASTER_IMG_URL') . 'img/' . $campaign->img;
    }

      return Inertia::render('frontend/ListPage', [
          'campaigns' => $campaigns
      ]);
    }

    public function categorylist($id) {
      $campaigns = Campaign::where('category_id', $id)->where('statusAktif', true)
      ->with(['donaturs' => function ($query) {
          $query->select(['id', 'name', 'nominal', 'campaign_id'])
              ->where('statusPay', true)
              ->latest();
      }])
      ->get();
      foreach ($campaigns as $campaign) {
          $campaign->img = env('MASTER_IMG_URL') . 'img/' . $campaign->img;
      }
      $category = Category::find($id); // Tidak perlu menggunakan get() setelah findOrFail
      $category ->file = env('MASTER_IMG_URL') . 'img/' . $category->file;
      return Inertia::render('frontend/CategoryList', ['campaigns' => $campaigns, 'category' => $category]);
    }

    public function create($id)
    {
        $campaignID = $id;
        return view('frontend/checkout', compact('campaignID'));
        // return Inertia::render('frontend/FormDonasi', ['campaignID' => $campaignID]);
    }
    public function store(Request $request)
    {
      $donasi = new Donatur();
      $donasi->name = $request->name;
      $donasi->nominal = $request->nominal;
      $donasi->campaign_id = $request->campaign_id;
      $donasi->message = $request->message;
      $donasi->email = $request->email;
      $gross_amount = $request->nominal;

      $nameCampaign = Campaign::findOrFail($donasi->campaign_id)->name;
      
      \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
      \Midtrans\Config::$isProduction = env('MIDTRANS_IS_PRODUCTION');
      \Midtrans\Config::$isSanitized = env('MIDTRANS_IS_SANITIZED');
      \Midtrans\Config::$is3ds = env('MIDTRANS_IS_3DS');
      
      if ($gross_amount >= 10000) {
          $enabledPayments = [
              "credit_card", "cimb_clicks", "bca_klikbca", "bca_klikpay", 
              "bri_epay", "echannel", "permata_va", "bca_va", "bni_va", 
              "bri_va", "cimb_va", "other_va", "gopay", "indomaret", 
              "danamon_online", "akulaku", "shopeepay", "kredivo", 
              "uob_ezpay", "other_qris"
          ];
      } else {
          $enabledPayments = [
              "gopay", "shopeepay", "other_qris"
          ];
      }
      
      $params = array(
          'transaction_details' => array(
              'order_id' => rand(),
              'gross_amount' => $gross_amount,
          ),
          'customer_details' => array(
              'first_name' => $donasi->name,
              'email' => $donasi->email,
          ),
          'enabled_payments' => $enabledPayments, // Masukkan jenis pembayaran berdasarkan kondisi
      );
      
    
      $snapToken = \Midtrans\Snap::getSnapToken($params);
      $donasi->snap_token = $snapToken;
      $donasi->save();
      $campaign_id = $donasi->campaign_id;


      return view('frontend.payment', compact('snapToken'));
    }
      public function payment($snapToken){
      $donatur = Donatur::where('snap_token', $snapToken)->firstOrFail();
      $campaign = Campaign::where('id', $donatur->campaign_id)->firstOrFail();
      $campaign->collected += $donatur->nominal;
      $campaign->save();
      $donatur->statusPay = true;
      $donatur->save();


      $data_donatur = [
          'name' => $donatur->name,
          'nominal' => $donatur->nominal,
          'message' => $donatur->message,
      ];

      $toDonatur = $donatur->name;

      // dd($toDonatur);
    // Mendapatkan pengguna yang terkait dengan campaign
      $user = User::findOrFail($campaign->user_id);
      Mail::to($user->email)->send(new DonasiInputEmail($data_donatur));
      Mail::to($donatur->email)->send(new EmailForDonatur($toDonatur));

      return Inertia::render('frontend/TerimaKasih', ['donatur'=>$donatur, 'campaign'=>$campaign]);
        // return response()->json(['Data donatur berhasil disimpan Terima Kasih'], 200);
    }
    public function rincian($id){
      $campaign = Campaign::findOrFail($id);
      $withdraws = Withdraw::where('campaign_id', $campaign->id)->get();

      // Menggunakan withCount() untuk menghitung jumlah nominal dari setiap objek Withdraw
      $nominalsCount = $withdraws->sum(function ($withdraw) {
          return $withdraw->nominal;
      });
      
      // dd($nominalsCount);
      return Inertia::render('frontend/RincianPage', [
        'campaign' => $campaign,
        'nominalsCount' => $nominalsCount
      ]);
    }


    public function galang(){
      $categories = Category::all();
      foreach ($categories as $category) {
        $category->file = env('MASTER_IMG_URL') . 'img/' . $category->file;
    }
      return Inertia::render('frontend/GalangDana', ['categories'=>$categories]);
    }
    

    public function withdraw() {
      $user_id = Auth::user()->id;
      $campaigns = Campaign::where('user_id', $user_id)->get();
      $saldoBersih = 0;
  
      foreach ($campaigns as $campaign) {
          $saldoBersih += $campaign->collected * 0.75;
          $withdraws = Withdraw::where('campaign_id', $campaign->id)->get();
          $nominalsCount = $withdraws->sum('nominal');
          $remainingAmount = $campaign->collected - $nominalsCount;
          $campaign->collected = $remainingAmount;
      }
      $withdrawnAmount = Withdraw::where('user_id', $user_id)->sum('nominal');
      $sisaSaldo = $saldoBersih - $withdrawnAmount;
  
      return Inertia::render('frontend/withdraw/index', [
          'campaigns' => $campaigns,
          'user_id' => $user_id,
          'sisaSaldo' => $sisaSaldo,
      ]);
  }
  
  public function history ($id){
    $withdraw = Withdraw::where('user_id', $id)->latest()->get();
    // dd($withdraw);
    return Inertia::render('frontend/withdraw/history', ['withdraw'=>$withdraw]);
  }
  
    public function confirmasi($id){
      $user = Auth::user();
      $campaigns = Campaign::findOrFail($id);
      $saldoBersih = 0;

      $saldoBersih += $campaigns->collected * 0.75; 
      $withdraws = Withdraw::where('campaign_id', $campaigns->id)->get();
      $nominalsCount = $withdraws->sum(function ($withdraw) {
          return $withdraw->nominal;
      });
      $sisaSaldo = $saldoBersih -= $nominalsCount;
      return Inertia::render('frontend/withdraw/confir', [
        'campaigns' =>$campaigns,
        'saldoBersih' =>$sisaSaldo,
        'user' =>$user
      ]);
    }

    public function conStore(Request $request)
    {
        // Menyimpan data penarikan saldo
        $withdraw = new Withdraw();
        $withdraw->name = $request->name;
        $withdraw->user_id = $request->user_id;
        $withdraw->campaign_id = $request->campaign_id;
        $withdraw->email = $request->email;
        $withdraw->nominal = $request->nominal;
        $withdraw->bank = $request->bank;
        $withdraw->norek = $request->norek;
        $withdraw->save();
        
        $penarikSaldo = $withdraw->name;
        Mail::to($withdraw->email)->send(new MailWithdraw($penarikSaldo));
        
        $dataPenarik = [
            'name' => $withdraw->name,
            'nominal' => $withdraw->nominal,
            'bank' => $withdraw->bank,
            'norek' => $withdraw->norek,
        ];
        Mail::to("rifqimunawar47@gmail.com")->send(new WithdrawRequest($dataPenarik));

        $campaign = Campaign::findOrFail($request->campaign_id);
        return Inertia::render('frontend/withdraw/waiting', [
            'withdraw' => $withdraw,
            'campaign' => $campaign
        ]);
    }

    

    public function email(){
      $userName = "Kontol";
      Mail::to("rifqimunawar48@gmail.com")->send(new RegisterEmail($userName));
      return "email berhasil dikirim";
    }
}
