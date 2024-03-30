<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.7.3/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <html data-theme="cupcake"></html>

    <title>Document</title>
</head>

<body>
    <section class="my-0 mx-auto min-h-full max-w-screen-sm">
        <div class="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px]">
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
                        <span class="label-text">Email</span>
                    </div>
                    <input type="text" name="email" required value="Hamba@gmail.com"
                        class="input input-bordered" />
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
                    <input type="number" name="nominal" id="nominal" class="input input-bordered"
                        oninput="periksa()" />
                    <div class="label">
                        <span class="label-text-alt">Mininal Rp: 1.000</span>
                    </div>
                </label>
                <div class="flex justify-center">
                    <a href="/home" class="btn btn-warning mr-4">Kembali</a>
                    <button type="submit" class="btn btn primary" id="saveButton" disabled
                        onclick="periksa()">Lanjutkan</button>
                </div>
            </form>
        </div>
    </section>

    <script>
        function submit() {
            let button = document.getElementById("saveButton");
            if (button.innerText === "Lanjutkan") {
                button.innerText = "Melanjutkan..."; // Mengubah teks tombol menjadi "Menyimpan..."
                button.disabled = true; // Menonaktifkan tombol saat sedang menyimpan
            }
        }

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
    </script>

</body>

</html>
