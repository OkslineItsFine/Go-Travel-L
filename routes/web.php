<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/paket-wisata', function () {
    return view('paket-wisata');
});
