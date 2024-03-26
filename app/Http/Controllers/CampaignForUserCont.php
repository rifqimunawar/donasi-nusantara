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
  public function upload(Request $request)
  {
    if ($request->hasFile('upload')) {
        $extension = $request->file('upload')->getClientOriginalExtension();
        $fileName = now()->timestamp . '_' . uniqid() . '.' . $extension;
        $request->file('upload')->move(public_path('media'), $fileName);
        $url = asset('media/' . $fileName);
        return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
    }

  }
  public function store(Request $request)
  {
    // return $request;
    $title = $request->input('title');
    $img = null;

    if ($request->hasFile('img')) {
        $image = $request->file('img');
        $newFileName = 'pamflet' . now()->timestamp . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('img/'), $newFileName);
        $img = $newFileName;
    }

    $description = $request->input('description');
    $price = $request->input('price');
    $time = $request->input('time');
    $user_id = $request->input('user_id');
    $category_id = $request->input('category_id');

    $affected = Campaign::insert([
        'title' => $title,
        'img' => $img,
        'description' => $description,
        'price' => $price,
        'time' => $time,
        'user_id'=>$user_id,
        'category_id' => $category_id,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return redirect()->route('user.campaign'); 
  }
}
