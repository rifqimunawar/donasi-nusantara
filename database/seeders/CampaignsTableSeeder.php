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
                'id' => 7,
                'title' => 'Donasi Copernicus',
                'img' => 'pamflet1711838480.png',
                'description' => '<p>Sesuai dengan Surat Keputusan Rektor Nomor 2/UNINUS.R/2024 tentang Syarat Kelulusan Mahasiswa S1, publikasi jurnal ilmiah menjadi salah satu syarat penting bagi mahasiswa untuk menyelesaikan studi pada Program Studi Sarjana Teknik. Kelompok ke-8 dari mahasiswa yang sedang dalam tahap bimbingan bersama Pak Dr. Tedjo, tidak terkecuali juga berkeinginan untuk menyelesaikan studi dengan cepat.</p><p>&nbsp;</p><p>Namun, tantangan muncul ketika mereka menyadari bahwa publikasi jurnal ilmiah dalam jurnal internasional ternama seperti Copernicus memerlukan biaya publikasi yang tidak murah. Kelompok 8 merasa kewalahan dengan kewajiban untuk membayar biaya publikasi ini.</p><p>&nbsp;</p><p>Untuk menangani tantangan ini, Kelompok 8 mulai merumuskan strategi kreatif agar dapat melewati hambatan dengan lebih lancar. Salah satu ide cemerlang yang muncul adalah dengan menggalang dana melalui platform Donasi Nusantara. Yang menarik, mereka sendirilah yang telah menciptakan dan mengembangkan website donasi tersebut.</p><p>&nbsp;</p><p>Namun, tidak hanya sampai di situ, inovasi mereka melangkah lebih jauh. Website donasi yang mereka buat ternyata juga menjadi objek penelitian untuk pembuatan jurnal ilmiah. Langkah ini bukan hanya menunjukkan kecerdasan mereka dalam menemukan solusi yang proaktif, tetapi juga menampilkan dedikasi mereka untuk menggabungkan praktek dengan penelitian dalam satu langkah maju.</p><p>&nbsp;</p><p>Dengan demikian, Kelompok 8 tidak hanya mengejar kelulusan mereka, tetapi juga aktif dalam berkontribusi pada ilmu pengetahuan dan memajukan teknologi dalam konteks yang lebih luas.</p><p>&nbsp;</p><p>Mari dukung langkah inovatif dan progresif mereka dalam mencapai tujuan akademis dan mengejar mimpi mereka dengan melakukan donasi!</p>',
                'statusAktif' => 0,
                'price' => 300000,
                'collected' => 0,
                'time' => '2024-04-24 05:41:00',
                'bank' => 'BRI',
                'norek' => '12121212',
                'statusDana' => '0',
                'category_id' => 4,
                'user_id' => 6,
                'created_at' => NULL,
                'updated_at' => '2024-03-31 00:31:17',
            ),
            1 => 
            array (
                'id' => 8,
                'title' => 'Banjir Cipongkor',
                'img' => 'pamflet1711840617.jpg',
                'description' => '<p>Assalamualaikum Wr. Wb.</p><p>Bismillahirrahmanirrahim</p><p>Dengan penuh rasa kepedulian dan kemanusiaan, kam mengajak seluruh sahabat-sahabat untuk bersama-sama memberikan bantuan kepada para korban bencana alam di Kecamatan Cipongkor dan Rongga yang terdampak banjir bandang dan longsor pada hari Minggu, 24 Maret 2024 pukul 23.59 WIB.</p><p>&nbsp;</p><p>Bencana ini telah menyebabkan kerugian yang besar bagi masyarakat setempat, banyak rumah yang hancur, dan kehilangan harta benda yang tidak tergantikan. Oleh karena itu, mari bersama-sama bergandengan tangan untuk membantu saudara-saudara kita yang sedang membutuhkan.</p><p>&nbsp;</p><p>Dana yang terkumpul akan digunakan untuk memberikan bantuan kebutuhan pokok, pengobatan, dan pemulihan bagi para korban bencana. Kita berdoa semoga Allah SWT memberikan kesabaran dan kekuatan kepada para korban, serta membuka jalan dan menerima sedekah kita. Aamiin.</p>',
                'statusAktif' => 1,
                'price' => 500000,
                'collected' => 0,
                'time' => '2024-05-01 05:57:00',
                'bank' => 'BRI',
                'norek' => '407301012966508',
                'statusDana' => '0',
                'category_id' => 1,
                'user_id' => 6,
                'created_at' => NULL,
                'updated_at' => '2024-03-31 00:29:02',
            ),
            2 => 
            array (
                'id' => 9,
                'title' => 'Santunan Anak Yatim',
                'img' => 'pamflet1711841117.jpeg',
                'description' => '<p>Santunan bagi anak yatim adalah salah satu bentuk kebaikan yang sangat ditekankan dalam agama Islam. Prof Quraish Shihab, seorang ulama dan pakar tafsir terkemuka, memberikan penjelasan yang mendalam tentang pentingnya memberi santunan kepada anak yatim dalam Islam.</p><p>Menurut Prof Quraish, memberi santunan kepada anak yatim adalah salah satu amal yang sangat ditekankan dalam Al-Quran dan Sunnah. Dalam banyak ayat Al Qur’an, Allah Swt menekankan pentingnya berbuat baik kepada anak yatim dan memberikan mereka perlindungan serta dukungan. Rasulullah Saw juga memberikan contoh yang sangat baik dalam memperlakukan anak yatim dan mendorong umatnya untuk mengikuti jejak-Nya dalam memberikan santunan kepada mereka.</p><p>Sementara itu, Menteri Sosial RI Tri Rismaharini menyampaikan bahwa jumlah yatim dan piatu di Indonesia sebanyak&nbsp;<strong>4.043.622 anak,&nbsp;</strong>sedangkan jumlah duafa di Indonesia mencapai&nbsp;<strong>25,90 juta jiwa</strong>.</p><p>Di momentum bulan suci Ramadhan tahun ini, berbagi kebahagiaan menjadi ibadah yang bernilai ibadah tinggi. Untuk itu, mari semarakkan program<strong>&nbsp;Mahabbah Ramadhan</strong>&nbsp;dengan menyantuni yatim dan duafa</p>',
                'statusAktif' => 0,
                'price' => 700000,
                'collected' => 0,
                'time' => '2024-04-09 06:26:21',
                'bank' => 'BRI',
                'norek' => '407301012966508',
                'statusDana' => '0',
                'category_id' => 2,
                'user_id' => 6,
                'created_at' => '2024-03-30 23:25:17',
                'updated_at' => '2024-03-31 00:30:58',
            ),
            3 => 
            array (
                'id' => 10,
                'title' => 'Bangun Sekolah Anak Pesisir Maluku',
                'img' => 'pamflet1711841981.jpeg',
                'description' => '<p>Jauh dari hingar bingar ibukota, Madrasah Tsanawiyah Nahdlatul Ulama berdiri di atas tanah hibah masyarakat untuk menyambut sekitar 60 murid sekolah menengah pertama menimba ilmu setiap harinya.</p><p>Tak cukup kokoh, hanya bertopang kayu yang kian lapuk termakan usia, namun tetap bertahan menyangga pendidikan anak-anak di Dusun Taman Sejarah, Desa Nuniali, Kec. Huamual Belakang, Kab. Seram Bagian Barat, Maluku.</p><p>&nbsp;</p><p>Ya, sekolah ini berdiri sejak tahun 1970 dari uang swadaya masyarakat untuk mempertahankan hak anak-anak di pelosok Indonesia bisa mendapatkan pendidikan setara. Tak ada yang istimewa seperti fasilitas pendidikan yang luar biasa, hanya ada 3 ruang kelas dan 1 ruang kantor.</p><p><strong>Lalu perpustakaan? ah jangan ditanya sampai sana, bisa belajar dengan buku-buku yang ada saja sudah sangat hebat.</strong></p><p><br>Tinggal di sebuah pulau yang dulu makmur sebagai penghasil rempah terbaik Nusantara sekaligus jadi rute perdagangan rempa-rempah dunia tak jadi jaminan pulau ini akan makmur selamanya dan bisa memberikan fasilitas dan akses pendidikan yang baik untuk warganya.</p><p><strong>Zaman berganti, peradaban dunia berubah, kejayaan masa lalu hanya tinggal sejarah, kini ribuan warga di Pulau Seram khususnya di Dusun Taman Sejarah bertopang ekomoni menjadi nelayan dan petani.</strong></p><p>Lalu tentang pendidikan anak-anaknya, tak ada cukup modal untuk menyekolahkan mereka ke sekolah yang lebih bagus. Madrasah Tsanawiyah Nahdlatul Ulama Taman Sejarah jadi pilihan untuk menyambung hak anak-anak mereka agar tak sepenuhnya putus.<br><br><br>Di sekolah beratapkan asbes juga bertembok kayu, anak-anak di Dusun Taman Sejarah menyambung asa masa depan lebih baik lewat pendidikan yang terus mereka upayakan agar bisa setara dan layak. Di sekolah dengan jendela bolong, lantai hancur, juga bangku reot, anak-anak di Dusun Taman Sejarah bermimpi punya sekolah lebih kokoh.</p><p><strong>Karena setiap anak berhak atas pendidikan yang baik. Karena setiap anak berhak atas masa depan lebih baik dengan fasilitas pendidikan yang layak.</strong></p><p>Mari bersama bantu anak-anak Dusun Taman Sejarah dapatkan hak pendidikan yang lebih baik dan nyalakan semangat masa depan mereka dengan pendidikan!</p>',
                'statusAktif' => 1,
                'price' => 500000,
                'collected' => 0,
                'time' => '2024-05-30 06:39:00',
                'bank' => 'BRI',
                'norek' => '407301012966508',
                'statusDana' => '0',
                'category_id' => 5,
                'user_id' => 6,
                'created_at' => '2024-03-30 23:39:41',
                'updated_at' => '2024-03-31 00:29:51',
            ),
            4 => 
            array (
                'id' => 11,
                'title' => 'Kirimkan Air untuk Wilayah Kekeringan',
                'img' => 'pamflet1711843295.jpg',
            'description' => '<p><strong>El- Nino datang, 73% wilayah di Indonesia kekeringan Ekstrim.</strong>&nbsp;Fenomena iklim yang membuat penurunan curah hujan dan kekeringan, El Nino. Diperkirakan berlanjut sampai Februari 2024.<br>&nbsp;</p><p>Fenomena ini memiliki dampak yang signifikan terhadap Indonesia, menciptakan tantangan serius bagi berbagai aspek kehidupan dan lingkungan.</p><p>Selama musim kemarau dan El-Nino, curah hujan menurun secara dramatis mengakibatkan kekeringan yang mengancam pasokan air untuk pertanian,&nbsp;<strong>pemenuhan kebutuhan air minum&nbsp;</strong>serta sektor industri.</p><p><strong>Sumber-sumber air seperti sungai, danau dan bendungan mengering.&nbsp;</strong>Hal tersebut menghambat produktivitas pertanian dan<strong>kelangkaan air bersih bagi masyarakat.</strong></p><p><strong>Warga harus menyewa angkot atau membeli air bersih adalah hal yang menguras sumber daya finansial yang sudah tipis.</strong></p><p>Sementara Bagi warga seperti Pak Narman (72 tahun) Warga Desa Weninggalih, Jonggol, Bogor. Mencari sumber air bersih adalah tantangan besar, terutama karena usianya yang sudah lansia. Berjalan ratusan meter atau bahkan kilometer untuk mencari air bersih adalah hal yang menyiksa baginya.</p><p>Air adalah salah satu kebutuhan dasar manusia untuk kehidupan. Bagi banyak orang di seluruh dunia, akses terhadap air bersih sangat penting untuk memenuhi kebutuhan sehari-hari, seperti minum, memasak, membersihkan diri, dan menjaga kebersihan. Namun,<strong>&nbsp;di beberapa daerah, akses terhadap air bersih mungkin sulit diperoleh, terutama oleh kelompok-kelompok yang kurang mampu secara ekonomi.</strong></p><p>&nbsp;</p><p><strong>Kami butuh Sahabat untuk melengkapi kebaikan ini. Bergabunglah dalam upaya penyedian air bersih sekarang. Setiap donasi Sahabat akan menelamatkan nyawa dan memberikan harapan bagi mereka yang terdampak</strong></p>',
                'statusAktif' => 1,
                'price' => 7000000,
                'collected' => 0,
                'time' => NULL,
                'bank' => 'BRI',
                'norek' => '407301012966507',
                'statusDana' => '0',
                'category_id' => 3,
                'user_id' => 6,
                'created_at' => '2024-03-31 00:01:35',
                'updated_at' => '2024-03-31 00:29:56',
            ),
        ));
        
        
    }
}