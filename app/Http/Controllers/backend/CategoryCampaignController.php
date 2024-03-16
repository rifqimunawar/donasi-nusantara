<?php

namespace App\Http\Controllers\backend;

use App\Models\Category_Campaign;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryCampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('backend/categorycampaign/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('backend/categorycampaign/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $categories = new Category_Campaign();
      $request->input('title');


      if ($request->hasFile('file')) {
        $image = $request->file('file');
          $newFileName = 'icon_' . now()->timestamp . '.' . $image->getClientOriginalExtension();
          $image->move(public_path('img/'), $newFileName);
          $categories->img = $newFileName;
          $categories->save();
          return "sukess";
        } else {
          return "erroimg";
    }
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
