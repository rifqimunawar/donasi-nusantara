<?php

namespace App\Http\Controllers\frontend;

use Inertia\Inertia;
use App\Models\Donatur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mail\KonfirmasiEmail;
use App\Models\Campaign;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
  public function admin(){
  return view('backend.index');
  }


  public function home(){
    $campaigns = DB::table('campaigns')->get();

        foreach ($campaigns as $campaign) {
          $campaign->img = config('app.MASTER_IMG_URL') . 'img/' . $campaign->img;
      }

        return Inertia::render('frontend/Homepage', [
            'campaigns' => $campaigns
        ]);
    }
    public function detail($id)
    {
        $campaign = Campaign::findOrFail($id);
        if (!$campaign) {
            abort(404);
        }
        $donaturs = $campaign->donaturs()->latest()->get();
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
    
    public function create($id)
    {
      $campaignID = $id;
        return view('frontend/checkout', compact('campaignID'));
    }
    public function store(Request $request)
    {
      // menyimpan data donatur
      $donasi = Donatur::create([
          'name' => $request->input('name'),
          'message' => $request->input('message'),
          'nominal' => $request->input('nominal'),
          'campaign_id' => $request->input('campaign_id'),
      ]);

      $campaign = Campaign::findOrFail($request->campaign_id);
      $campaign->collected += $request->nominal;
      $campaign->save();

      $pesan ="
      <h3>Terima Kasih</h3>
      <h4>$donasi->name anda sudah berdonasi pada $campaign->title sebesar Rp: $donasi->nominal rupiah</h4>
      <p>Semoga menjadi amal ibadah yang baik untuk anda</p>
      ";
  
      $data_email = [
          'subject' => "Terima Kasih Sudah Berdonasi",
          'sender_name' => 'rifqimunawar48@gmail.com',
          'isi' => $pesan
      ];
      Mail::to('rifqimunawar47@gmail.com')->send(new KonfirmasiEmail($data_email));

        return response()->json(['message' => 'Data donatur berhasil disimpan'], 200);
    }
    public function about(){
      return Inertia::render('frontend/Aboutpage');
    }


}
