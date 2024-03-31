<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DonatursTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('donaturs')->delete();
        
        \DB::table('donaturs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Hamba Allah',
                'email' => 'Hamba@gmail.com',
                'snap_token' => 'ae6a9b25-fd16-49b5-9302-69f61392acdb',
                'message' => NULL,
                'nominal' => '30000',
                'statusPay' => '0',
                'like' => '0',
                'campaign_id' => '2',
                'created_at' => '2024-03-29 09:38:54',
                'updated_at' => '2024-03-29 09:38:54',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'bismillah',
                'email' => 'Hamba@gmail.com',
                'snap_token' => 'be25bef7-830f-4a21-94f6-e031c6f92aaf',
                'message' => NULL,
                'nominal' => '30000',
                'statusPay' => '0',
                'like' => '0',
                'campaign_id' => '3',
                'created_at' => '2024-03-29 17:04:30',
                'updated_at' => '2024-03-29 17:04:30',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'bismillah',
                'email' => 'Hamba@gmail.com',
                'snap_token' => '45a88514-fca2-4761-87e4-d18417e6728e',
                'message' => NULL,
                'nominal' => '30000',
                'statusPay' => '0',
                'like' => '0',
                'campaign_id' => '3',
                'created_at' => '2024-03-29 17:05:14',
                'updated_at' => '2024-03-29 17:05:14',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'bismillah',
                'email' => 'Hamba@gmail.com',
                'snap_token' => 'aedf36d6-8669-40a7-957c-c4dbfda03d54',
                'message' => NULL,
                'nominal' => '300000',
                'statusPay' => '0',
                'like' => '0',
                'campaign_id' => '3',
                'created_at' => '2024-03-29 17:05:31',
                'updated_at' => '2024-03-29 17:05:31',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'ummat',
                'email' => 'Hamba@gmail.com',
                'snap_token' => '60929551-32d6-4a25-a285-88900d0906bd',
                'message' => NULL,
                'nominal' => '40000',
                'statusPay' => '0',
                'like' => '0',
                'campaign_id' => '3',
                'created_at' => '2024-03-29 17:06:17',
                'updated_at' => '2024-03-29 17:06:17',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'ummat',
                'email' => 'Hamba@gmail.com',
                'snap_token' => 'b010801e-4888-4221-a64a-5349a2de1549',
                'message' => NULL,
                'nominal' => '40000',
                'statusPay' => '1',
                'like' => '0',
                'campaign_id' => '3',
                'created_at' => '2024-03-29 17:07:13',
                'updated_at' => '2024-03-29 17:08:04',
            ),
        ));
        
        
    }
}