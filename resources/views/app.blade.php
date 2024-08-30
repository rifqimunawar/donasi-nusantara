<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="shortcut icon" href="{{ asset('img/logo.jpg') }}" type="image/x-icon">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.8.0/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <html data-theme="light">

    </html>
    {{-- <html data-theme="dark"></html> --}}
    {{-- <html data-theme="cupcake"></html> --}}
    {{-- <html data-theme="bumblebee"></html> --}}
    {{-- <html data-theme="emerald"></html> --}}
    {{-- <html data-theme="corporate"></html> --}}
    {{-- <html data-theme="synthwave"></html> --}}
    {{-- <html data-theme="retro"></html> --}}
    {{-- <html data-theme="cyberpunk"></html> --}}
    {{-- <html data-theme="valentine"></html> --}}
    {{-- <html data-theme="halloween"></html> --}}
    {{-- <html data-theme="garden"></html> --}}
    {{-- <html data-theme="forest"></html> --}}
    {{-- <html data-theme="aqua"></html> --}}
    {{-- <html data-theme="lofi"></html> --}}
    {{-- <html data-theme="pastel"></html> --}}
    {{-- <html data-theme="fantasy"></html> --}}
    {{-- <html data-theme="wireframe"></html> --}}
    {{-- <html data-theme="black"></html> --}}
    {{-- <html data-theme="dracula"></html> --}}
    {{-- <html data-theme="cmyk"></html> --}}
    {{-- <html data-theme="auntumn"></html> --}}
    {{-- <html data-theme="business"></html> --}}
    {{-- <html data-theme="acid"></html> --}}
    {{-- <html data-theme="leomenade"></html> --}}
    {{-- <html data-theme="night"></html> --}}
    {{-- <html data-theme="coffee"></html> --}}
    {{-- <html data-theme="winter"></html> --}}
    {{-- <html data-theme="dim"></html> --}}
    {{-- <html data-theme="nord"></html> --}}
    {{-- <html data-theme="sunset"></html> --}}
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
