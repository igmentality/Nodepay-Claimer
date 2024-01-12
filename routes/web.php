<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\WalletController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [HomeController::class, 'dashboard'])->middleware(['auth'])->name('dashboard');

Route::get('/allusers/view', [UserController::class, 'allusersview'])->name('admin.allusers.view');
Route::get('/suspend-user/{user}', [UserController::class, 'suspendUser'])->name('user.suspend');
Route::get('/unban-user/{user}', [UserController::class, 'unbanUser'])->name('user.unban');
Route::get('/ban-user/{user}', [UserController::class, 'banUser'])->name('user.ban');

Route::get('/create-wallet/{user}', [WalletController::class, 'createwallet'])->name('admin.createwallet');
Route::get('/update-balance/view/{user}', [WalletController::class, 'updatebalanceview'])->name('admin.updatebalance.view');
Route::get('/update-balance/{user}', [WalletController::class, 'updatebalance'])->name('admin.updatebalance');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
