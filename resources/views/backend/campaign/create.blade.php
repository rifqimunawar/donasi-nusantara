@section('title')
    {{ 'User' }}
@endsection
@extends('backend.master')
@section('content')
    <div class="heading flex justify-center items-center">
        <h1>Create Category Campaign</h1>
    </div>
    <div>
        <div class="overflow-x-auto">

            <form method="post" action="{{ route('campaign.store') }}" enctype="multipart/form-data">
                @csrf
                <div class="mb-5">
                    <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-900">
                        Judul
                    </label>
                    <input name="title" required type="text"
                        class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                </div>

                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">
                        Upload Image Pamflet
                    </label>
                    <input required name="img" type="file"
                        class="block file-input file-input-bordered file-input-secondary w-full" />
                </div>

                <div class="mb-5">
                    <label htmlFor="description" class="block mb-1 text-sm font-medium text-gray-900">
                        Deskripsi
                    </label>
                    <textarea name="description" required class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                        rows="5"></textarea>
                </div>

                <div class="mb-5">
                    <label htmlFor="price" class="block mb-1 text-sm font-medium text-gray-900">
                        Harga
                    </label>
                    <input name="price" required type="number"
                        class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                </div>

                <div class="mb-5">
                    <label htmlFor="time" class="block mb-1 text-sm font-medium text-gray-900">
                        Waktu
                    </label>
                    <input name="time" required type="datetime-local"
                        class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                </div>

                <div class="mb-5">
                    <label htmlFor="category_id" class="block mb-1 text-sm font-medium text-gray-900">
                        Kategori
                    </label>
                    <select name="category_id" required
                        class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
                        <option selected disabled >== Pilih Kategori ==</option>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->title }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="mb-5 flex justify-center gap-3">
                    <a href={{ route('campaign') }} class="btn btn-warning btn-sm">
                        Kembali
                    </a>
                    <button type="submit" class="btn btn-primary btn-sm">Simpan</button>
                </div>
            </form>


        </div>
    </div>
@endsection
