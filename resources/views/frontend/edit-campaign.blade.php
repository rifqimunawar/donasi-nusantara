<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Galang Dana - Donasi Nusantara</title>

</html>
<link rel="preconnect" href="https://fonts.bunny.net">
<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/daisyui@4.8.0/dist/full.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/41.2.1/classic/ckeditor.js"></script>
<html data-theme="cupcake">
</head>

<body>
    <section class="my-0 mx-auto min-h-full max-w-screen-sm">
        <div class="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
            {{-- <Head title="Galang Dana" />
        <div>
            <NavbarComponent />
        </div> --}}
            <div class="p-4 sm:p-8 shadow lg:rounded-lg m-3">
                <header>
                    <h2 class="text-lg font-medium text-gray-900">
                        Edit Galang Dana
                    </h2>
                    <p class="mt-1 text-sm text-gray-600 mb-3"></p>
                </header>
                <form action="/u/camp/{{ $campaign->id }}/update" method="post" enctype="multipart/form-data">
                    @csrf @method('put')
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-900">
                            Judul
                        </label>
                        <input name="title" required type="text" value="{{ $campaign->title }}"
                            class="rounded-lg block w-full input input-bordered " />
                    </div>
                    <img src="{{ $campaign->img }}" class="rounded-2xl shadow-lg my-5" />

                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">
                            Upload Image Pamflet
                        </label>
                        <input name="img" type="file"
                            class="block file-input file-input-bordered file-input-secondary w-full"/>
                    </div>

                    <div class="mb-5">
                        <label htmlFor="description" class="block mb-1 text-sm font-medium text-gray-900">
                            Deskripsi
                        </label>
                        <textarea name="description" id="editor" required value={formData.description} class="rounded-lg block w-full"
                            rows="5">{{ $campaign->description }}</textarea>
                    </div>

                    <div class="mb-5">
                        <label htmlFor="price" class="block mb-1 text-sm font-medium text-gray-900">
                            Target Dana Terkumpul
                        </label>
                        <input name="price" required type="number" value="{{ $campaign->price }}"
                            class="rounded-lg block w-full input input-bordered" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="time" class="block mb-1 text-sm font-medium text-gray-900">
                            Waktu
                        </label>
                        <input name="time" required type="datetime-local" value="{{ $campaign->time }}"
                            class="rounded-lg block w-full input input-bordered" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="category_id" class="block mb-1 text-sm font-medium text-gray-900">
                            Kategori
                        </label>
                        <select name="category_id" required class=" input input-bordered rounded-lg input block w-full">
                            <option value="" disabled>
                                == Pilih Kategori ==
                            </option>
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}"
                                    {{ $category->id === $campaign->category_id ? 'selected' : '' }}>
                                    {{ $category->title }}
                                </option>
                            @endforeach

                        </select>
                    </div>

                    <div class="mb-5">
                        <label htmlFor="bank" class="block mb-1 text-sm font-medium text-gray-900">
                            Bank Penarikan
                        </label>
                        <select name="bank" required class=" input input-bordered rounded-lg block w-full">
                            <option value="" disabled>
                                == Pilih Bank ==
                            </option>
                            <option value="MANDIRI" {{ $campaign->bank === 'MANDIRI' ? 'selected' : '' }}>MANDIRI
                            </option>
                            <option value="BRI" {{ $campaign->bank === 'BRI' ? 'selected' : '' }}>BRI</option>
                            <option value="BCA" {{ $campaign->bank === 'BCA' ? 'selected' : '' }}>BCA</option>
                            <option value="BNI" {{ $campaign->bank === 'BNI' ? 'selected' : '' }}>BNI</option>
                        </select>

                    </div>

                    <div class="mb-5">
                        <label htmlFor="norek" class="block mb-1 text-sm font-medium text-gray-900">
                            Nomor Rekening Penarikan
                        </label>
                        <input name="norek" required type="number" value={{ $campaign->norek }}
                            class="rounded-lg block w-full input input-bordered" />
                    </div>

                    <div class="mb-5 flex justify-center gap-3">
                        <a href="/u/camp/" class="btn btn-warning btn-sm">
                        Kembali
                        </a>
                        <button type="submit" class="btn btn-primary btn-sm">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
            <div class="btm-center">
                <BottomNavbar />
            </div>
        </div>
    </section>
    <script>
        ClassicEditor
            .create(document.querySelector('#editor'), {
                ckfinder: {
                    uploadUrl: "{{ route('ckeditor.upload', ['_token' => csrf_token()]) }}",
                }
            })
            .catch(error => {
                console.error(error);
            });
    </script>
</body>

</html>
