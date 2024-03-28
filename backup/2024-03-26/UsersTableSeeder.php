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
                'id' => 1,
                'name' => 'rifqi',
                'role' => 'user',
                'email' => 'rifqi@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$si3ziGbbfWa2ot1KHH48BuVFWmimrOwxjpgt7N/j76QdgkntVjesS',
                'remember_token' => NULL,
                'created_at' => '2024-03-25 19:14:28',
                'updated_at' => '2024-03-25 19:14:28',
            ),
        ));
        
        
    }
}