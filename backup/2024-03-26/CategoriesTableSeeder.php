<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('categories')->delete();
        
        \DB::table('categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Bencana Alam',
                'slug' => 'bencana-alam',
                'file' => 'icon_1711438263.png',
                'created_at' => '2024-03-26 07:31:03',
                'updated_at' => '2024-03-26 07:31:03',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Kemanusiaan',
                'slug' => 'kemanusiaan',
                'file' => 'icon_1711439275.png',
                'created_at' => '2024-03-26 07:47:55',
                'updated_at' => '2024-03-26 07:52:28',
            ),
            2 => 
            array (
                'id' => 5,
                'title' => 'Lingkungan',
                'slug' => 'lingkungan',
                'file' => 'icon_1711439569.png',
                'created_at' => '2024-03-26 07:52:49',
                'updated_at' => '2024-03-26 07:52:49',
            ),
            3 => 
            array (
                'id' => 6,
                'title' => 'Pendidikan',
                'slug' => 'pendidikan',
                'file' => 'icon_1711439585.png',
                'created_at' => '2024-03-26 07:53:05',
                'updated_at' => '2024-03-26 07:53:05',
            ),
            4 => 
            array (
                'id' => 7,
                'title' => 'Infrastruktur',
                'slug' => 'infrastruktur',
                'file' => 'icon_1711439611.png',
                'created_at' => '2024-03-26 07:53:31',
                'updated_at' => '2024-03-26 07:53:31',
            ),
        ));
        
        
    }
}