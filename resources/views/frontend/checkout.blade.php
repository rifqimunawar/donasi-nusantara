<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.3/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>

<body>
    <form action="/store/donasi" method="post" enctype="multipart/form-data">
      @csrf
        <label class="form-control m-5">
            <div class="label">
                <span class="label-text">Nama Lengkap</span>
            </div>
            <input type="text" name="name" required value="Hamba Allah" class="input input-bordered" />
            <div class="label">
            </div>
        </label>
        <label class="form-control m-5">
            <div class="label">
                <span class="label-text">Pesan/Do'a (Opstional)</span>
            </div>
            <input type="text" hidden name="campaign_id" value="{{ $campaignID }}">
            <textarea class="textarea textarea-bordered h-24" placeholder="Do'a dan pesan"></textarea>
            <div class="label">
            </div>
        </label>
        <label class="form-control m-5">
            <div class="label">
                <span class="label-text">Nominal</span>
            </div>
            <input type="number" name="nominal" id="nominal" class="input input-bordered" oninput="periksa()" />
            <div class="label">
                <span class="label-text-alt">Mininal Rp: 1.000</span>
            </div>
        </label>
        <div class="flex justify-center">
            <button type="submit" class="btn btn-secondary" id="saveButton" disabled onclick="submit()">Simpan</button>
        </div>
    </form>

    <script>
        function periksa() {
            let nominal = document.getElementById("nominal").value; // Mengambil nilai dari input nominal
            if (nominal >= 1000) {
                document.getElementById("saveButton").disabled =
                false; // Mengaktifkan tombol jika nilai nominal lebih dari atau sama dengan 1000
            } else {
                document.getElementById("saveButton").disabled =
                true; // Menonaktifkan tombol jika nilai nominal kurang dari 1000
            }
        }

        function submit() {
            let button = document.getElementById("saveButton");
            if (button.innerText === "Simpan") {
                button.innerText = "Menyimpan...";
            }
        }
    </script>


</body>

</html>
