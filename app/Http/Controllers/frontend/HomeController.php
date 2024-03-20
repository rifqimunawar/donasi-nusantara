<?php

namespace App\Http\Controllers\frontend;

use Inertia\Inertia;
use App\Models\Donatur;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Mail\KonfirmasiEmail;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Category_Campaign;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
  public function admin(){
  return view('backend.index');
  }


  public function home(){
    $campaigns = DB::table('campaigns')->get();
    $categories = DB::table('category_campaigns')->get();

        foreach ($campaigns as $campaign) {
          $campaign->img = config('app.MASTER_IMG_URL') . 'img/' . $campaign->img;
      }
        foreach ($categories as $item) {
          $item->file = config('app.MASTER_IMG_URL') . 'img/' . $item->file;
      }

        return Inertia::render('frontend/Homepage', [
            'campaigns' => $campaigns,
            'categories'=>$categories
        ]);
    }
    public function detail($id)
    {
        $campaign = Campaign::findOrFail($id);
        if (!$campaign) {
            abort(404);
        }
        $donaturs = $campaign->donaturs()->where('statusPay', true)->latest()->get();
        $campaign->img = 'http://127.0.0.1:8000/' . 'img/' . $campaign->img;
        return Inertia::render('frontend/DetailCampaign', [
            'campaign' => $campaign,
            'donaturs' => $donaturs,
        ]);
    }
    public function list(){
      $campaigns = DB::table('campaigns')->get();

      foreach ($campaigns as $campaign) {
        $campaign->img = config('app.MASTER_IMG_URL') . 'img/' . $campaign->img;
    }

      return Inertia::render('frontend/ListPage', [
          'campaigns' => $campaigns
      ]);
    }

    public function categorylist($id) {
      $campaigns = DB::table('campaigns')->where('category_id', $id)->get();
      foreach ($campaigns as $campaign) {
          $campaign->img = config('app.MASTER_IMG_URL') . 'img/' . $campaign->img;
      }
      $category = DB::table('category_campaigns')->findOrFail($id); // Tidak perlu menggunakan get() setelah findOrFail
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
      // \Midtrans\Config::$serverKey = config('midtrans.serverKey');
      // \Midtrans\Config::$isProduction = config('midtrans.isProduction');
      // \Midtrans\Config::$isSanitized = config('midtrans.isSanitized');
      // \Midtrans\Config::$is3ds = config('midtrans.is3ds');
      \Midtrans\Config::$serverKey = "SB-Mid-server-jDkHnM0kbcCW5rQSpQv6gJkf";
      \Midtrans\Config::$isProduction = false;
      \Midtrans\Config::$isSanitized = true;
      \Midtrans\Config::$is3ds = true;
      $params = array(
          'transaction_details' => array(
              'order_id' => rand(),
              'gross_amount' => $gross_amount,
          )
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

      // $pesan ="
      // <h3>Terima Kasih</h3>
      // <h4>$donasi->name anda sudah berdonasi pada $campaign->title sebesar Rp: $donasi->nominal rupiah</h4>
      // <p>Semoga menjadi amal ibadah yang baik untuk anda</p>
      // ";
  
      // $data_email = [
      //     'subject' => "Terima Kasih Sudah Berdonasi",
      //     'sender_name' => 'rifqimunawar48@gmail.com',
      //     'isi' => $pesan
      // ];
      // Mail::to('rifqimunawar47@gmail.com')->send(new KonfirmasiEmail($data_email));

      return Inertia::render('frontend/TerimaKasih', ['donatur'=>$donatur, 'campaign'=>$campaign]);
        // return response()->json(['Data donatur berhasil disimpan Terima Kasih'], 200);
    }
    public function about(){
      return Inertia::render('frontend/Aboutpage');
    }


    public function galang(){
      $categories = DB::table('category_campaigns')->get();
      foreach ($categories as $category) {
        $category->file = config('app.MASTER_IMG_URL') . 'img/' . $category->file;
    }
      return Inertia::render('frontend/GalangDana', ['categories'=>$categories]);
    }
}
