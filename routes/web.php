<?php

use App\Http\Controllers\AdresyController;
use App\Http\Controllers\DruhFirmyController;
use App\Http\Controllers\FirmyController;
use App\Http\Controllers\KamionyController;
use App\Http\Controllers\StavbyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('test', function () {
        return Inertia::render('test');
    })->name('test');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('firmy', [FirmyController::class, 'index'])->name('firmy.index');
    Route::get('/firmy/pridat', [FirmyController::class, 'create'])->name('firmy.create');
    Route::post('/firmy', [FirmyController::class, 'store'])->name('firmy.store');
    Route::get('/firmy/{firma}', [FirmyController::class, 'show'])->name('firmy.show');
    Route::put('/firmy/{firma}', [FirmyController::class, 'update'])->name('firmy.update');
    Route::delete('/firmy/{firma}', [FirmyController::class, 'destroy'])->name('firmy.destroy');

    Route::post('/druhy_firem', [DruhFirmyController::class, 'store'])->name('druhy_firem.store');

    Route::post('/adresy', [AdresyController::class, 'store'])->name('adresy.store');

    Route::get('/kamiony', [KamionyController::class, 'index'])->name('kamiony.index');
    Route::get('/kamiony/pridat', [KamionyController::class, 'create'])->name('kamiony.create');
    Route::post('/kamiony/pridat', [KamionyController::class, 'store'])->name('kamiony.store');
    Route::get('/kamiony/{kamion}', [KamionyController::class, 'show'])->name('kamiony.show');
    Route::put('/kamiony/{kamion}', [KamionyController::class, 'update'])->name('kamiony.update');
    Route::delete('/kamiony/{kamion}', [KamionyController::class, 'destroy'])->name('kamiony.destroy');

    Route::get('/stavby', [StavbyController::class, 'index'])->name('stavby.index');
    Route::get('/stavby/pridat', [StavbyController::class, 'create'])->name('stavby.create');
    Route::post('/stavby', [StavbyController::class, 'store'])->name('stavby.store');
    Route::get('/stavby/{stavba}', [StavbyController::class, 'show'])->name('stavby.show');
    Route::put('/stavby/{stavba}', [StavbyController::class, 'update'])->name('stavby.update');
    Route::delete('/stavby/{stavba}', [StavbyController::class, 'destroy'])->name('stavby.destroy');
});
