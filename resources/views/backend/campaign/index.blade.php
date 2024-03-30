@section('title')
    {{ 'User' }}
@endsection
@extends('backend.app')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Campaign Donasi
        </h2>
        <a href={{ route('campaign.create') }} class="btn btn-primary btn-sm m-5">Tambah Campaign</a>
        <div>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Pamflet</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($campaign as $item)
                            <tr class="m-5">
                                <th>{{ $loop->iteration }}</th>
                                <td><img src="{{ asset('img/' . $item->img) }}" alt="" class="w-10 h-10 object-cover">
                                </td>
                                <td>{{ $item->title }}</td>
                                <td>
                                    <form action="{{ route('campaign.destroy', ['id' => $item->id]) }}" method="POST">
                                        <a href="/campaign/{{ $item->id }}/edit" class="btn btn-warning btn-sm">Edit</a>
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
    </div>
@endsection
