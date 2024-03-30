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
                <form method="post" action="/d/withdraw/{{ $withdraw->id }}/update" enctype="multipart/form-data">
                    @csrf @method('put')
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Nama
                        </label>
                        <input name="name" readonly required type="text" value={{ $withdraw->name }}
                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input p-3 rounded-lg" />
                    </div>
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Nominal
                        </label>
                        <input name="nominal" readonly required type="text"
                            value={{ number_format($withdraw->nominal, 0, ',', '.') }}
                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input p-3 rounded-lg" />
                    </div>
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Bank
                        </label>
                        <input name="bank" readonly required type="text" value={{ $withdraw->bank }}
                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input p-3 rounded-lg" />
                    </div>
                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Nomor Rekening
                        </label>
                        <input name="norek" readonly required type="text" value={{ $withdraw->norek }}
                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input p-3 rounded-lg" />
                    </div>

                    <div class="mb-5">
                        <label htmlFor="base-input" class="block mb-1 text-sm font-medium text-gray-50">
                            Status Update
                        </label>
                        <select name="status"
                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input p-3 rounded-lg">
                            <option value="0" @if ($withdraw->status == 0) selected @endif>Pending</option>
                            <option value="1" @if ($withdraw->status == 1) selected @endif>Success</option>
                        </select>

                    </div>

                    <div class="mb-5 flex justify-center gap-3">
                        <a href={{ route('d.withdraw') }} class="btn btn-warning btn-sm">
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
