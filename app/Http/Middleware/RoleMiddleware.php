<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role)
    {
        // Periksa apakah pengguna telah login
        if (Auth::check()) {
            // Periksa apakah peran pengguna sesuai dengan peran yang diizinkan
            if ($request->user()->role == $role) {
                return $next($request);
            }
        }

        // Jika peran tidak sesuai atau pengguna belum login, kembalikan respons akses ditolak
        return abort(403, 'AKSES DITOLAK!!!!');
    }
}
