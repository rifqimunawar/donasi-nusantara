<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect(){
      return Socialite::driver('google')->redirect();
    }

    public function callback(){
      $googleUser = Socialite::driver('google')->user();
      return ($googleUser);
    }
}