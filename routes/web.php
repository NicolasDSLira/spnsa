<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GetAPIController;


Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/home', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/about', function(){
    return Inertia::render('About');
})->name('about');

Route::get('/history', function(){
    return Inertia::render('History');
})->name('History');

Route::get('/donations', function(){
    return Inertia::render('Donations');
})->name('donations');

Route::get('/invoices', function(){
    return Inertia::render('Invoices');
})->name('invoices');

Route::get('partner', function(){
    return Inertia::render('Partner');
})->name('partner');

Route::get('partners', function(){
    return Inertia::render('Partners');
})->name('partners');

Route::get('transparency', function(){
    return Inertia::render('Transparency');
})->name('transparency');

Route::get('agenda', function(){
    return Inertia::render('Agenda');
})->name('agenda');

Route::get('contact', function(){
    return Inertia::render('Contact');
})->name('contact');


// Route::get('/parceiros', function () {
//     $path = public_path('assets/imagem/parceiros');
//     $files = File::files($path);

//     $fileNames = array_map(function ($file) {
//         return asset('assets/imagem/parceiros/' . $file->getFilename());
//     }, $files);

//     return response()->json($fileNames);
// });

Route::post('contato/send', [GetAPIController::class,'send'])->name('api.contato');

Route::get('api/galeria', [GetAPIController::class, 'galeria'])->name('api.galeria');
Route::get('api/parceiros', [GetAPIController::class, 'parceiros'])->name('api.parceiros');
Route::get('/api/transparecy', [GetAPIController::class, 'transparecy'])->name('api.transparecy');