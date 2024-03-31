<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\RegisterEmail;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Facades\Socialite;

class GoogleLoginController extends Controller
{
  public function redirectToGoogle(): RedirectResponse
  {
      return Socialite::driver('google')->redirect();
  }

  public function handleGoogleCallback(): RedirectResponse
  {
      $user = Socialite::driver('google')->user();

      $existingUser = User::where('google_id', $user->id)->first();

      if ($existingUser) {
          // Log in the existing user.
          auth()->login($existingUser, true);
      } else {
          // Create a new user.
          $newUser = new User();
          $newUser->name = $user->name;
          $newUser->email = $user->email;
          $newUser->google_id = $user->id;
          $newUser->password = bcrypt(request(Str::random())); // Set some random password
          $newUser->save();

          // Log in the new user.
          auth()->login($newUser, true);
          Mail::to($newUser->email)->send(new RegisterEmail($newUser->name));
      }

      return redirect()->intended('/profile');
  }
}
