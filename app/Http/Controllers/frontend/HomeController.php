<?php

namespace App\Http\Controllers\frontend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

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
        $campaign = DB::table('campaigns')->where('id', $id)->first();
    
        if (!$campaign) {
            abort(404); // Kampanye tidak ditemukan
        }
    
        // Memperbarui URL gambar
        // $campaign->img = config('app.MASTER_IMG_URL') ."/". 'img/' . $campaign->img;
        $campaign->img = 'http://127.0.0.1:8000/' . 'img/' . $campaign->img;
        // dd($campaign);
    
        return Inertia::render('frontend/DetailCampaign', ['campaign' => $campaign]);
    }
    
    

    public function about(){
      return Inertia::render('frontend/Aboutpage');
    }


}
