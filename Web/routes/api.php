<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
// Sanctum try
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/logout', function (Request $request) {

    $request->user()->currentAccessToken()->delete();

    return response()->json([
        "code" => 200,
        "message" => "User logged out successfully"
    ]);
});

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password) || $user->is_verified === 0) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }



    $token = $user->createToken($request->device_name)->plainTextToken;

    $response = [
        'user' => $user,
        'token' => $token
    ];

    return response($response, 201);

});

Route::get('/verify',[App\Http\Controllers\UserController::class,'verifyUser']);
Route::apiResource('users','App\Http\Controllers\UserController');

Route::middleware('auth:sanctum')->group( function () {
    Route::apiResource('contact','App\Http\Controllers\ContactController');
    Route::apiResource('message','App\Http\Controllers\MessageController');
    Route::apiResource('note','App\Http\Controllers\NoteController');
    Route::apiResource('param','App\Http\Controllers\ParamController');
    Route::apiResource('file','App\Http\Controllers\FileController');
    Route::apiResource('password','App\Http\Controllers\PasswordController');
});


