@section('title')
    {{ 'User' }}
@endsection
@extends('backend.app')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Category Campaign
        </h2>
        <div>
            <div class="overflow-x-auto">
                <form method="post" action="{{ route('category.update', ['id' => $category->id]) }}"
                    enctype="multipart/form-data">
                    @csrf @method('put')
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-900">
                            Judul
                        </label>
                        <input name="title" required type="text" value={{ $category->title }}
                            class=" rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                    </div>

                    <div>
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-900">
                            Icon saat ini
                        </label>
                        @if ($category->file)
                            <img src="{{ asset('img/' . $category->file) }}" alt="" class="w-20">
                        @endif
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">
                            Upload Icon Category
                        </label>
                        <input name="file" type="file" value={{ $category->file }}
                            class="block file-input file-input-bordered file-input-secondary w-full" />
                    </div>


                    <div class="mb-5 flex justify-center gap-3">
                        <a href={{ route('category') }} class="btn btn-warning btn-sm">
                            Kembali
                        </a>
                        <button type="submit" class="btn btn-primary btn-sm">Simpan</button>
                    </div>
                    <p></p>
                </form>
            </div>
        </div>
    </div>
@endsection
