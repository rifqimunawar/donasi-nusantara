<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CateogoryCampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_campaigns')->insert([ // Perbaiki nama tabel di sini
            'id'=>'1',
            'title' => "kemanusiaan",
            'slug' => "kemanusiaan",
            'file' => "img.png",
            'created_at'=>"2024-03-15 15:54:27",
            'updated_at'=>"2024-03-15 15:54:27",
        ]);
    }
    
}
