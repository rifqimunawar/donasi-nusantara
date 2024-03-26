<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $category = Category::all();
      return view('backend.category.index', compact('category'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      return view('backend.category.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $title = $request->input('title');
        $img = null;
    
        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $newFileName = 'icon_' . now()->timestamp . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/'), $newFileName);
            $img = $newFileName; // Menyimpan nama file gambar ke dalam variabel $img
        }
    
        $slug = Str::slug($title);
        $affected = Category::insert([
            'title' => $title,
            'slug' => $slug,
            'file' => $img, // Menggunakan variabel $img untuk menyimpan nama file
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    
        return redirect()->route('category');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
      $category=  Category::find($id);
        return view('backend.category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Mendapatkan data kategori berdasarkan id
        $category = Category::where('id', $id)->first();
    
        // Jika kategori tidak ditemukan, kembalikan respons
        if (!$category) {
            return redirect()->route('category')->with('error', 'Kategori tidak ditemukan.');
        }
    
        // Mendapatkan data input dari form
        $title = $request->input('title');
    
        // Inisialisasi variabel untuk menyimpan nama file gambar
        $img = $category->file;
    
        // Jika terdapat file baru yang diunggah, proses file tersebut
        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $newFileName = 'icon_' . now()->timestamp . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/'), $newFileName);
            $img = $newFileName;
        }
    
        // Menghasilkan slug dari judul
        $slug = Str::slug($title);
    
        // Melakukan update data kategori
        $affected = Category           
            ::where('id', $id)
            ->update([
                'title' => $title,
                'slug' => $slug,
                'file' => $img,
                'updated_at' => now(),
            ]);
    
        // Jika data berhasil diupdate, kembalikan respons
        if ($affected) {
            return redirect()->route('category')->with('success', 'Kategori berhasil diperbarui.');
        } else {
            return redirect()->route('category')->with('error', 'Gagal memperbarui kategori.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Lakukan penghapusan data berdasarkan id
        $affected = Category::where('id', $id)->delete();
    
        // Jika penghapusan berhasil, kembalikan respons
        if ($affected) {
            return redirect()->route('category')->with('success', 'Kategori berhasil dihapus.');
        } else {
            return redirect()->route('category')->with('error', 'Gagal menghapus kategori.');
        }
    }
}
