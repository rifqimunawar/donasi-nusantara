<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Campaign;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user_id = Auth::user()->id;
        $campaigns = Campaign::where('user_id', $user_id)->get();
        $totalSaldoCampaign = 0;
    
        foreach ($campaigns as $campaign) {
            $totalSaldoCampaign += $campaign->collected * 0.75; 
            
            // Pindahkan kode yang memproses withdraw ke dalam lingkup foreach
            $withdraws = Withdraw::where('campaign_id', $campaign->id)->get();
            $nominalsCount = $withdraws->sum(function ($withdraw) {
                return $withdraw->nominal;
            });
            $totalSaldoCampaign -= $nominalsCount;
        }
    
        // Inisialisasi saldo jika tidak ada kampanye
        $sisaSaldo = $totalSaldoCampaign;
    
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'campaigns' => $campaigns,
            'saldo' => $sisaSaldo,
            'user_id' => $user_id,
        ]);
    }
    

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
