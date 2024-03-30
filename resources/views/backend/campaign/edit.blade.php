@section('title')
    {{ 'User' }}
@endsection
@extends('backend.app')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Edit Campaign
        </h2>
        <div>
            <div class="overflow-x-auto">

                <form method="post" action="{{ route('campaign.update', ['id' => $campaign->id]) }}"
                    enctype="multipart/form-data">
                    @csrf
                    @method('PUT') <!-- Gunakan metode PUT untuk proses update -->

                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-900">
                            Judul
                        </label>
                        <input name="title" required type="text" value="{{ $campaign->title }}"
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                    </div>

                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">
                            Upload Image Pamflet
                        </label>
                        <input name="img" type="file" value="{{ $campaign->img }}"
                            class="block file-input file-input-bordered file-input-secondary w-full" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="description" class="block mb-1 text-sm font-medium text-gray-900">
                            Deskripsi
                        </label>
                        <textarea name="description" id="editor" required
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" rows="5">{{ $campaign->description }}</textarea>
                    </div>

                    <div class="mb-5">
                        <label htmlFor="price" class="block mb-1 text-sm font-medium text-gray-900">
                            Harga
                        </label>
                        <input name="price" required type="number" value="{{ $campaign->price }}"
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="time" class="block mb-1 text-sm font-medium text-gray-900">
                            Waktu
                        </label>
                        <input name="time" required type="datetime-local" value="{{ $campaign->time }}"
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="category_id" class="block mb-1 text-sm font-medium text-gray-900">
                            Kategori
                        </label>
                        <select name="category_id" required
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
                            <option disabled>== Pilih Kategori ==</option>
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}"
                                    {{ $campaign->category_id == $category->id ? 'selected' : '' }}>
                                    {{ $category->title }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="mb-5 flex justify-center gap-3">
                        <a href="{{ route('campaign') }}" class="btn btn-warning btn-sm">
                            Kembali
                        </a>
                        <button type="submit" class="btn btn-primary btn-sm">Simpan</button>
                    </div>
                </form>


            </div>
        </div>
    </div>

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
@endsection
