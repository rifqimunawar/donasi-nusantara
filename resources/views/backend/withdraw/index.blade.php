@section('title')
    {{ 'User' }}
@endsection
@extends('backend.app')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Request Withdraw
        </h2>

        <div>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Nominal</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($withdraw as $item)
                            <tr class="m-5">
                                <th>{{ $loop->iteration }}</th>
                                <td>{{ $item->name }}</td>
                                <td>{{ number_format($item->nominal, 0, ',', '.') }}</td>
                                <td>
                                    @if ($item->status == 0)
                                        <span class="btn btn-warning btn-sm">Pending</span>
                                    @else
                                        <span class="btn btn-success btn-sm">Success</span>
                                    @endif
                                </td>
                                <td>
                                    <a href="/d/withdraw/{{ $item->id }}/edit"class="btn btn-primary btn-sm">Update</a>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
