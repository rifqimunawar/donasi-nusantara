<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Donatur;
use App\Models\Campaign;
use App\Models\User;
use App\Models\Withdraw;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
      $totalDonatur = Donatur::count();
      $totalDonasi = 0;
      $campaigns = Campaign::all(); // Mengambil semua data Campaign
      $user = User::all(); // Mengambil semua data Campaign

      $jan = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 1)->count();
      $feb = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 2)->count();
      $mar = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 3)->count();
      $apr = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 4)->count();
      $mei = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 5)->count();
      $jun = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 6)->count();
      $jul = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 7)->count();
      $ags = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 8)->count();
      $sep = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 9)->count();
      $okt = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 10)->count();
      $nov = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 11)->count();
      $des = Donatur::whereYear('created_at', 2024)->whereMonth('created_at', 12)->count();


    // dd($mar);
      foreach ($campaigns as $campaign) {
          $totalDonasi += $campaign->collected; // Menambahkan nominal campaign ke totalDonasi
      }
      $totalCamp = Campaign::where('statusAktif', 1);
      return view('backend.index', [
        'totalDonatur' => $totalDonatur,
        'totalDonasi' => $totalDonasi,
        'totalCamp' => $totalCamp,
        'user' => $user,
        'jan' => $jan,
        'feb' => $feb,
        'mar' => $mar,
        'apr' => $apr,
        'mei' => $mei,
        'jun' => $jun,
        'jul' => $jul,
        'ags' => $ags,
        'sep' => $sep,
        'okt' => $okt,
        'nov' => $nov,
        'des' => $des
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

  public function updateAdmin($id, Request $request){
    // dd($request);
    $user = User::find($id);
    $user->role=$request->input('role');
    $user->save();
    return redirect()->route('admin');
  }

  public function withdraw()  {
    $withdraw = Withdraw::latest()->get();
    return view('backend.withdraw.index', ['withdraw' =>$withdraw]);
  }
  
  public function withdrawedit($id){
    $withdraw = Withdraw::findOrFail($id);
    return view('backend.withdraw.edit', ['withdraw' =>$withdraw]);
  }
  
  public function withdrawupdate($id, Request $request) {
    $withdraw = Withdraw::findOrFail($id);
    $withdraw->status = $request->input('status');
    $withdraw->save();

    return redirect()->route('d.withdraw');
}
}
