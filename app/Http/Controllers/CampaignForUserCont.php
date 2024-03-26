<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class CampaignForUserCont extends Controller
{
  public function index(){
    $user = Auth::user();
    $campaigns = Campaign::where('user_id', $user->id)->get();
    // dd($campaigns);
    return Inertia::render('frontend/campaign/index', [
        'user' => $user,
        'campaigns' => $campaigns,
    ]); 
}

  public function create()
  {
    $user = Auth::user();
      // dd($user);
      $categories = DB::table('categories')->get(); // Mengambil semua kategori dari database
      return Inertia::render('frontend/campaign/create', [
        'categories' => $categories, 
        'user'=>$user,
      ]);
  }
}
