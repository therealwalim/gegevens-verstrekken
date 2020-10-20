<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('contact','App\Http\Controllers\ContactController');
Route::apiResource('message','App\Http\Controllers\MessageController');
Route::apiResource('note','App\Http\Controllers\NoteController');
Route::apiResource('param','App\Http\Controllers\ParamController');
Route::apiResource('user','App\Http\Controllers\UserController');
Route::apiResource('file','App\Http\Controllers\FileController');
Route::apiResource('password','App\Http\Controllers\PasswordController');
