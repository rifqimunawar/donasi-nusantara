<?php

use App\Http\Controllers\backend\CampaignController;
use App\Http\Controllers\backend\CategoryCampaignController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\frontend\HomeController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/galang/dana', [HomeController::class, 'galang'])->name('galang');
Route::get('/home', [HomeController::class, 'home'])->name('home');
Route::get('/list', [HomeController::class, 'list'])->name('list');
Route::get('/create/{id}/donasi', [HomeController::class, 'create'])->name('createDonasi');
Route::post('/store/donasi', [HomeController::class, 'store'])->name('storeDonasi');
Route::get('/sukses/payment/{snapToken}', [HomeController::class, 'payment'])->name('payment');
Route::get('/getTest', [HomeController::class, 'getTest'])->name('getTest');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/donasi/campaign/{id}/detail', [HomeController::class, 'detail'])->name('detail');
Route::get('category/{id}/campaign', [HomeController::class, 'categorylist']);
Route::get('/rincian/{id}', [HomeController::class, 'rincian']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');


})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('/admin', [HomeController::class, 'admin']);
  
  
  Route::get('/category/campaign', [CategoryCampaignController::class, 'index'])->name('category.campaign');
  Route::get('/category/campaign/create', [CategoryCampaignController::class, 'create'])->name('category.create');
  Route::post('/category/campaign/store', [CategoryCampaignController::class, 'store'])->name('category.store');
  Route::get('/category/campaign/{id}/edit', [CategoryCampaignController::class, 'edit'])->name('category.edit');
  Route::put('/category/campaign/{id}/update', [CategoryCampaignController::class, 'update'])->name('category.update');
  Route::delete('/category/campaign/{id}/delete', [CategoryCampaignController::class, 'destroy'])->name('category.destroy');
  
  Route::get('/campaign', [CampaignController::class, 'index'])->name('campaign');
  Route::get('/campaign/create', [CampaignController::class, 'create'])->name('campaign.create');
  Route::post('/campaign/store', [CampaignController::class, 'store'])->name('campaign.store');
  Route::get('/campaign/{id}/edit', [CampaignController::class, 'edit'])->name('campaign.edit');
  Route::put('/campaign/{id}/update', [CampaignController::class, 'update'])->name('campaign.update');
  Route::delete('/campaign/{id}/delete', [CampaignController::class, 'destroy'])->name('campaign.destroy');
  
  
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
