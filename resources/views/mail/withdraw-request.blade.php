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
        <h1>Withdraw</h1>
        <p>Ada yang melakukan penarikan dana sebesar {{ $dataPenarik['nominal'] }}.</p>
        <p>{{ $dataPenarik['bank'] }}.</p>
        <p>{{ $dataPenarik['norek'] }}.</p>
        <p>Atas Nama: {{ $dataPenarik['name'] }}.</p>
    </div>
</body>

</html>
