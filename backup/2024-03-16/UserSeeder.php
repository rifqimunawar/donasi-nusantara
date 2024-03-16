<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('users')->insert([
        'id'=>'1',
        'name' => "rifqi",
        'email' => "rifqi@gmail.com",
        'email_verified_at' => null,
        'password' =>"$2y$12$/WlNXLxHUFENOMjLS0jzYOAeBqlOOojr71JMyav.cEvR6OeX/uZOa",
        'created_at'=>"2024-03-15 15:54:27",
        'updated_at'=>"2024-03-15 15:54:27",
        'remember_token'=>null
    ]);
    }
}
