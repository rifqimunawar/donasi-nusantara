<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CampaignsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('campaigns')->delete();
        
        \DB::table('campaigns')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Donasi Copernicus',
                'img' => 'pamflet1711440308.png',
                'description' => '<p>Sesuai dengan Surat Keputusan Rektor Nomor 2/UNINUS.R/2024 tentang Syarat Kelulusan Mahasiswa S1, publikasi jurnal ilmiah menjadi salah satu syarat penting bagi mahasiswa untuk menyelesaikan studi pada Program Studi Sarjana Teknik. Kelompok ke-8 dari mahasiswa yang sedang dalam tahap bimbingan bersama Pak Dr. Tedjo, tidak terkecuali juga berkeinginan untuk menyelesaikan studi dengan cepat.</p><p>&nbsp;</p><p>Namun, tantangan muncul ketika mereka menyadari bahwa publikasi jurnal ilmiah dalam jurnal internasional ternama seperti Copernicus memerlukan biaya publikasi yang tidak murah. Kelompok 8 merasa kewalahan dengan kewajiban untuk membayar biaya publikasi ini.</p><p>&nbsp;</p><p>Untuk menangani tantangan ini, Kelompok 8 mulai merumuskan strategi kreatif agar dapat melewati hambatan dengan lebih lancar. Salah satu ide cemerlang yang muncul adalah dengan menggalang dana melalui platform Donasi Nusantara. Yang menarik, mereka sendirilah yang telah menciptakan dan mengembangkan website donasi tersebut.</p><p>&nbsp;</p><p>Namun, tidak hanya sampai di situ, inovasi mereka melangkah lebih jauh. Website donasi yang mereka buat ternyata juga menjadi objek penelitian untuk pembuatan jurnal ilmiah. Langkah ini bukan hanya menunjukkan kecerdasan mereka dalam menemukan solusi yang proaktif, tetapi juga menampilkan dedikasi mereka untuk menggabungkan praktek dengan penelitian dalam satu langkah maju.</p><p>&nbsp;</p><p>Dengan demikian, Kelompok 8 tidak hanya mengejar kelulusan mereka, tetapi juga aktif dalam berkontribusi pada ilmu pengetahuan dan memajukan teknologi dalam konteks yang lebih luas.</p><p>&nbsp;</p><p>Mari dukung langkah inovatif dan progresif mereka dalam mencapai tujuan akademis dan mengejar mimpi mereka dengan melakukan donasi!</p>',
                'statusAktif' => 0,
                'price' => 1200000,
                'collected' => 10000,
                'time' => '2024-03-27 17:42:00',
                'bank' => 'BRI',
                'norek' => '1200000',
                'category_id' => 1,
                'user_id' => 1,
                'created_at' => '2024-03-26 08:05:08',
                'updated_at' => '2024-03-26 08:06:47',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Bantu Dinastiar',
                'img' => 'pamflet1711454191.png',
                'description' => 'bantu dinastiar',
                'statusAktif' => 0,
                'price' => 100000,
                'collected' => 1000,
                'time' => '2024-03-27 17:19:33',
                'bank' => 'BRI',
                'norek' => '1234',
                'category_id' => 2,
                'user_id' => 1,
                'created_at' => '2024-03-26 11:56:31',
                'updated_at' => '2024-03-26 11:56:31',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'anak jaddah haram',
                'img' => 'pamflet1711520013.png',
                'description' => 'kontol buruk',
                'statusAktif' => 0,
                'price' => 11999,
                'collected' => 0,
                'time' => '2024-03-27 17:19:30',
                'bank' => 'BNI',
                'norek' => '0000000000000000',
                'category_id' => 2,
                'user_id' => 2,
                'created_at' => '2024-03-27 06:13:33',
                'updated_at' => '2024-03-27 06:44:58',
            ),
        ));
        
        
    }
}