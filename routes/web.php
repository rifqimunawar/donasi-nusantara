<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CampaignForUserCont;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\Auth\SocialiteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/email', [HomeController::class, 'email'])->name('email');

Route::get('/auth/google', [GoogleLoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);

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
Route::put('/like/{id}', [HomeController::class, 'like']);

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
  Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

  Route::get('/dashboard/user', [DashboardController::class, 'admin'])->name('admin');
  Route::get('/dashboard/user/{id}/edit', [DashboardController::class, 'editAdmin'])->name('admin.edit');
  Route::put('/dashboard/user/{id}/update', [DashboardController::class, 'updateAdmin'])->name('admin.update');
  Route::delete('/dashboard/user/{id}/delete', [DashboardController::class, 'destroyAdmin'])->name('admin.destroy');

  Route::get('/d/withdraw', [DashboardController::class, 'withdraw'])->name('d.withdraw');
  Route::get('/d/withdraw/{id}/edit', [DashboardController::class, 'withdrawedit'])->name('d.withdraw.edit');
  Route::put('/d/withdraw/{id}/update', [DashboardController::class, 'withdrawupdate'])->name('d.withdraw.update');

  Route::get('/category', [CategoryController::class, 'index'])->name('category');
  Route::get('/category/create', [CategoryController::class, 'create'])->name('category.create');
  Route::post('/category/store', [CategoryController::class, 'store'])->name('category.store');
  Route::get('/category/{id}/edit', [CategoryController::class, 'edit'])->name('category.edit');
  Route::put('/category/{id}/update', [CategoryController::class, 'update'])->name('category.update');
  Route::delete('/category/{id}/delete', [CategoryController::class, 'destroy'])->name('category.destroy');

  Route::get('/campaign', [CampaignController::class, 'index'])->name('campaign');
  Route::post('/upload', [CampaignController::class, 'upload'])->name('ckeditor.upload');
  Route::get('/campaign/create', [CampaignController::class, 'create'])->name('campaign.create');
  Route::post('/campaign/store', [CampaignController::class, 'store'])->name('campaign.store');
  Route::get('/campaign/{id}/edit', [CampaignController::class, 'edit'])->name('campaign.edit');
  Route::put('/campaign/{id}/update', [CampaignController::class, 'update'])->name('campaign.update');
  Route::delete('/campaign/{id}/delete', [CampaignController::class, 'destroy'])->name('campaign.destroy');
  
});

Route::middleware('auth')->group(function () {

  Route::get('/u/camp/', [CampaignForUserCont::class, 'index'])->name('user.campaign');
  Route::get('/u/camp/create', [CampaignForUserCont::class, 'create'])->name('user.campaign.create');
  Route::post('/u/camp/store', [CampaignForUserCont::class, 'store'])->name('user.campaign.store');
  Route::get('/u/camp/{id}/edit', [CampaignForUserCont::class, 'edit'])->name('user.campaign.edit');
  Route::put('/u/camp/{id}/update', [CampaignForUserCont::class, 'update'])->name('user.campaign.update');
  Route::get('/u/camp/withdraw', [HomeController::class, 'withdraw'])->name('user.withdraw');
  Route::get('/u/camp/withdraw/{id}/history', [HomeController::class, 'history'])->name('withdraw.history');
  Route::get('/u/camp/w/{id}/con', [HomeController::class, 'confirmasi'])->name('user.confirmasi');
  Route::post('/u/camp/w/con/store', [HomeController::class, 'conStore'])->name('user.conStore');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
