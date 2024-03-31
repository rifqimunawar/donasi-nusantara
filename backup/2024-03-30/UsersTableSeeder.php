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
                'role' => 'admin',
                'saldo' => 0,
                'email' => 'rifqi@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$si3ziGbbfWa2ot1KHH48BuVFWmimrOwxjpgt7N/j76QdgkntVjesS',
                'remember_token' => NULL,
                'created_at' => '2024-03-25 19:14:28',
                'updated_at' => '2024-03-25 19:14:28',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'munawar',
                'role' => 'user',
                'saldo' => 0,
                'email' => 'munawar@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$hDtLxmqzFRH0Wru4WNJEB.ADluAzGKz1EJrvqkLQ/jxihmNhcYIWS',
                'remember_token' => NULL,
                'created_at' => '2024-03-27 15:23:09',
                'updated_at' => '2024-03-27 15:23:09',
            ),
            2 => 
            array (
                'id' => 4,
                'name' => 'ikeh',
                'role' => 'user',
                'saldo' => 0,
                'email' => 'ikeh@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$12$0D2lt9egm8EnaXUKJ8BlYOmglzrRoC1b23SQJscl8nWev43o8KLiu',
                'remember_token' => NULL,
                'created_at' => '2024-03-28 16:56:19',
                'updated_at' => '2024-03-28 16:56:19',
            ),
        ));
        
        
    }
}