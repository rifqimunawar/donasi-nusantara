<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 6,
                'name' => 'Rifqi Munawar R.',
                'role' => 'admin',
                'saldo' => 0,
                'email' => 'rifqimunawar48@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$wYY8Rywj6H6X.TmkEUvdoOOLXVhr68d9Ru7ztDjDqpiuLSUz1u7t2',
                'remember_token' => 'ql68xV0OXPoiyPLLXMhYmg7hWc1JT3tSveql5DWpZMbzUyJnLXWNfeSPCx53',
                'google_id' => '116773779989527340914',
                'created_at' => '2024-03-30 21:57:12',
                'updated_at' => '2024-03-30 21:57:12',
            ),
        ));
        
        
    }
}