<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Campaign;
use App\Models\Category;
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
    if ($request->hasFile('img')) {
        $image = $request->file('img');
        $newFileName = 'pamflet' . now()->timestamp . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('img/'), $newFileName);
        $img = $newFileName;
    }
    $title = $request->input('title');
    $description = $request->input('description');
    $price = $request->input('price');
    $time = $request->input('time');
    $user_id = $request->input('user_id');
    $category_id = $request->input('category_id');
    $norek = $request->input('norek');
    $bank = $request->input('bank');

    $affected = Campaign::insert([
        'title' => $title,
        'img' => $img,
        'description' => $description,
        'price' => $price,
        'time' => $time,
        'bank' => $bank,
        'norek' => $norek,
        'user_id'=>$user_id,
        'category_id' => $category_id,
        'created_at' => now(),
    ]);

    return redirect()->route('user.campaign'); 
  }

  public function edit($id){
    $user = Auth::user();
    $categories = Category::all();
    $campaign = Campaign::findOrFail($id);
    $campaign->img = env('MASTER_IMG_URL') . 'img/' . $campaign->img;
    // return view('frontend/edit-campaign', [
    //   'campaign'=>$campaign,
    //   'categories'=>$categories,
    //   'user'=>$user,
    // ]);
    return Inertia::render('frontend/campaign/edit', [
      'campaign'=>$campaign,
      'categories'=>$categories,
      'user'=>$user,
    ]);
  }
  public function update(Request $request, $id)
  {
    // return response()->json($request->all());

    // dd($request);
      $campaign = Campaign::findOrFail($id);  
      if ($request->hasFile('img')) {
        $image = $request->file('img');
        if ($image->isValid()) {
            $newFileName = 'pamflet_' . now()->timestamp . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/img', $newFileName);
            $campaign->img = $newFileName;
        } else {
            return back()->withErrors(['img' => 'File tidak valid'])->withInput(); // Pesan kesalahan spesifik
        }
    }
  
      // Update other fields
      $campaign->title = $request->input('title', $campaign->title);
      $campaign->description = $request->input('description', $campaign->description);
      $campaign->price = $request->input('price', $campaign->price);
      $campaign->time = $request->input('time', $campaign->time);
      $campaign->bank = $request->input('bank', $campaign->bank);
      $campaign->norek = $request->input('norek', $campaign->norek);
      $campaign->user_id = $request->input('user_id', $campaign->user_id);
      $campaign->category_id = $request->input('category_id', $campaign->category_id);
      $campaign->statusAktif = $request->input('statusAktif', $campaign->statusAktif);
      $campaign->updated_at = now();
  
      $campaign->update();
  
      return redirect()->route('user.campaign'); // Arahkan ke route yang benar
  }
  


  
}
