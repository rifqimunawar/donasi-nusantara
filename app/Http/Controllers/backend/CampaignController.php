<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CampaignController extends Controller
{
  public function index()
  {
    $campaign = DB::table('campaigns')->get();
    return view('backend.campaign.index', compact('campaign'));
  }
  public function create()
  {
      $categories = DB::table('category_campaigns')->get(); // Mengambil semua kategori dari database
      return view('backend.campaign.create', ['categories' => $categories]);
  }
  public function store(Request $request)
  {
    $title = $request->input('title');
    $img = null; // Inisialisasi $img dengan null

    if ($request->hasFile('img')) {
        $image = $request->file('img');
        $newFileName = 'pamflet' . now()->timestamp . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('img/'), $newFileName);
        $img = $newFileName; // Menyimpan nama file gambar ke dalam variabel $img
    }

    $description = $request->input('description');
    $price = $request->input('price');
    $time = $request->input('time');
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
