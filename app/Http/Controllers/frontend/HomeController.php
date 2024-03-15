<?php

namespace App\Http\Controllers\frontend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function home(){
      return Inertia::render('frontend/Homepage');
    }

    public function about(){
      return Inertia::render('frontend/Aboutpage');
    }
}
