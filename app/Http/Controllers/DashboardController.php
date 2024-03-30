<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Donatur;
use App\Models\Campaign;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
      $totalDonatur = Donatur::count();
      $totalDonasi = 0;
      $campaigns = Campaign::all(); // Mengambil semua data Campaign
  
      foreach ($campaigns as $campaign) {
          $totalDonasi += $campaign->collected; // Menambahkan nominal campaign ke totalDonasi
      }
  
      return view('backend.index', [
          'totalDonatur' => $totalDonatur,
          'totalDonasi' => $totalDonasi,
      ]);
  }
  
  public function admin(){
    $users = User::all();
    return view('backend.admin.index', ['users'=>$users]);
  }
  public function editAdmin($id){
    $users = User::find($id);
    return view('backend.admin.edit', ['users'=>$users]);
  }
  
}
