<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ucapan Selamat Datang - Nagrak Peduli Disabilitas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: justify;
            text-justify: inter-word;
            line-height: 1.6;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Donasi Masuk</h1>
        <p>Alhamdulillah,</p>
        <p>Kami senang memberitahu Anda bahwa ada donasi baru yang masuk untuk salah satu galang dana anda Anda.
            Kami ingin memberikan detailnya:</p>
        <ul>
            <li>Nama Donatur: <h4>{{ $data_donatur['name'] }}</h4>
            </li>
            <li>Nominal Donasi: <h4>{{ $data_donatur['nominal'] }}</h4>
            </li>
            <li>Pesan dari Donatur: "<h4>{{ $data_donatur['message'] }}</h4>"</li>
        </ul>
        <p>Kami ingin mengucapkan terima kasih atas kepercayaan Anda pada platform kami. Semoga Anda dalam keadaan sehat
            walafiat!</p>
    </div>
</body>

</html>
