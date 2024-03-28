@section('title')
    {{ 'User' }}
@endsection
@extends('backend.master')
@section('content')
    <div class="heading flex justify-center items-center">
        <h1>Cateogry Campaign</h1>
    </div>
    <a href={{ route('category.create') }} class="btn btn-primary btn-sm m-5">Tambah Cateogry Campaign</a>
    <div>
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Icon</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($category as $item)
                        <tr class="bg-base-200">
                            <th>{{ $loop->iteration }}</th>
                            <td><img src="{{ asset('img/' . $item->file) }}" alt="" class="w-10 h-10 object-cover">
                            </td>
                            <td>{{ $item->title }}</td>
                            <td>
                                <form action="{{ route('category.destroy', ['id' => $item->id]) }}" method="POST">
                                    <a href="/category/{{ $item->id }}/edit"
                                        class="btn btn-warning btn-sm">Edit</a>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-primary btn-sm">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach

                </tbody>
            </table>
        </div>
    </div>
@endsection
