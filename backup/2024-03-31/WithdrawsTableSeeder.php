<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WithdrawsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('withdraws')->delete();
        
        \DB::table('withdraws')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'munawar',
                'user_id' => 2,
                'campaign_id' => 3,
                'email' => 'munawar@gmail.com',
                'nominal' => 27000,
                'bank' => 'BNI',
                'norek' => 0,
                'status' => 0,
                'created_at' => '2024-03-29 17:21:57',
                'updated_at' => '2024-03-29 17:21:57',
            ),
        ));
        
        
    }
}