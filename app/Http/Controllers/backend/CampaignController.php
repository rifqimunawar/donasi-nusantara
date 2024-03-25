<?php

namespace App\Http\Controllers\backend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CampaignController extends Controller
{
  public function index()
  {
    $campaign = DB::table('campaigns')->get();
    return view('backend.campaign.index', compact('campaign'));
  }
  public function create()
  {   $user = Auth::user();
      $categories = DB::table('category_campaigns')->get(); // Mengambil semua kategori dari database
      return view('backend.campaign.create', ['categories' => $categories, 'user'=>$user]);
  }
  public function usercreate()
  {
    $user = Auth::user();
      // dd($user);
      $categories = DB::table('category_campaigns')->get(); // Mengambil semua kategori dari database
      return Inertia::render('frontend/campaign/create', [
        'categories' => $categories, 
        'user'=>$user,
      ]);
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

    $affected = DB::table('campaigns')->insert([
        'title' => $title,
        'img' => $img,
        'description' => $description,
        'price' => $price,
        'time' => $time,
        'category_id' => $category_id,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return redirect()->route('campaign'); 
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

  public function edit(string $id)
  {
    $campaign = DB::table('campaigns')->find($id);
    $categories=  DB::table('category_campaigns')->get();
      return view('backend.campaign.edit', compact('categories', 'campaign'));
  }

  public function update(Request $request, $id)
  {
      $campaign = DB::table('campaigns')->where('id', $id)->first();

      // Pastikan campaign dengan id yang diberikan ada dalam database
      if (!$campaign) {
          return redirect()->route('campaign')->with('error', 'Campaign tidak ditemukan.');
      }

      $title = $request->input('title');
      $description = $request->input('description');
      $price = $request->input('price');
      $time = $request->input('time');
      $category_id = $request->input('category_id');

      $img = $campaign->img; // Tetapkan nilai img sebelumnya sebagai default

      if ($request->hasFile('img')) {
          $image = $request->file('img');
          $newFileName = 'pamflet_' . now()->timestamp . '.' . $image->getClientOriginalExtension();
          $image->move(public_path('img/'), $newFileName);
          $img = $newFileName; // Menyimpan nama file gambar ke dalam variabel $img
      }

      $affected = DB::table('campaigns')
          ->where('id', $id)
          ->update([
              'title' => $title,
              'img' => $img,
              'description' => $description,
              'price' => $price,
              'time' => $time,
              'category_id' => $category_id,
              'updated_at' => now(),
          ]);

      if ($affected) {
          return redirect()->route('campaign')->with('success', 'Campaign berhasil diperbarui.');
      } else {
          return redirect()->route('campaign')->with('error', 'Gagal memperbarui campaign.');
      }
  }

  public function destroy(string $id)
  {
      // Lakukan penghapusan data berdasarkan id
      $affected = DB::table('campaigns')->where('id', $id)->delete();
  
      // Jika penghapusan berhasil, kembalikan respons
      if ($affected) {
          return redirect()->route('campaign')->with('success', 'Kategori berhasil dihapus.');
      } else {
          return redirect()->route('campaign')->with('error', 'Gagal menghapus kategori.');
      }
  }
}
