<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\WebContactController;
use App\Http\Controllers\WebMessageController;
use App\Http\Controllers\WebFolderController;
use App\Http\Controllers\WebNoteController;
use App\Http\Controllers\WebPasswordController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {
    // Dashboard
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/logout', [DashboardController::class, 'logout'])->name('logout');

    // Admin
    Route::get('/users', ['middleware' => ['role:administrator'], 'uses' => 'App\Http\Controllers\AdminController@index']);
    // Contacts
    Route::get('/contacts', [WebContactController::class, 'index']);
    // Messages
    Route::get('/messages', [WebMessageController::class, 'index']);
    // Tasks
    Route::get('/tasks', [WebNoteController::class, 'index']);
    // Passwords
    Route::get('/passwords', [WebPasswordController::class, 'index']);
    // Folders
    Route::get('/folders', [WebFolderController::class, 'index']);
    // Profile
    Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'index'])->name('pages.profile');
    Route::post('/updatepicture', [\App\Http\Controllers\ProfileController::class,'edit_photo'])->name('profile.photo');
    Route::put('/editpassword', [\App\Http\Controllers\ProfileController::class,'edit_password'])->name('edit.password');
    Route::put('/editprofile', [\App\Http\Controllers\ProfileController::class,'edit_profile'])->name('edit.profile');

});
