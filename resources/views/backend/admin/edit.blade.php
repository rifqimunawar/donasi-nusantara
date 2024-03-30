@section('title')
    {{ 'User' }}
@endsection
@extends('backend.app')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Edit Data User
        </h2>
        <div>
            <div class="overflow-x-auto">

                <form method="post" action="{{ route('admin.update', ['id' => $users->id]) }}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT') <!-- Gunakan metode PUT untuk proses update -->

                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Nama
                        </label>
                        <input name="name" required type="text" value="{{ $users->name }}"
                            class="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="base-input" class="w-full block mb-1 text-sm font-medium text-gray-50">
                            Role Status
                        </label>
                        <select class="select select-bordered w-full " id="base-input" name="role">
                            <option value="user" @if ($users->role == 'user') selected @endif>User</option>
                            <option value="admin" @if ($users->role == 'admin') selected @endif>Admin</option>
                        </select>
                    </div>

                    <div class="mb-5 flex justify-center gap-3">
                        <a href="{{ route('admin') }}" class="btn btn-warning btn-sm">
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
