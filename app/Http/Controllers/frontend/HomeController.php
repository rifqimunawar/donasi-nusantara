<?php

namespace App\Http\Controllers\frontend;

use Inertia\Inertia;
use App\Models\Donatur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Campaign;

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
        
        // Jika kampanye tidak ditemukan, kembalikan 404
        if (!$campaign) {
            abort(404);
        }
    
        // Mengambil semua donatur yang terkait dengan kampanye ini
        $donaturs = $campaign->donaturs()->latest()->get();
    
        // dd($donaturs);
        // Mengubah URL gambar kampanye
        $campaign->img = 'http://127.0.0.1:8000/' . 'img/' . $campaign->img;
    
        // Mengirimkan data kampanye dan donatur ke tampilan
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
      // Menambahkan nominal ke campaign
      $campaign = Campaign::findOrFail($request->campaign_id);
      $campaign->collected += $request->nominal;
      $campaign->save();


      // menyimpan data donatur
      $donasi = Donatur::create([
          'name' => $request->input('name'),
          'message' => $request->input('message'),
          'nominal' => $request->input('nominal'),
          'campaign_id' => $request->input('campaign_id'),
      ]);

        // Memberikan respon kepada pengguna
        return response()->json(['message' => 'Data donatur berhasil disimpan'], 200);
    }
    public function about(){
      return Inertia::render('frontend/Aboutpage');
    }


}
