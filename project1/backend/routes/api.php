<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\controllers\HomeController;

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

Route::post('/create',[HomeController::class,'create']);
Route::get('/view/{id?}',[HomeController::class,'index']);
Route::delete('/delete/{id}',[HomeController::class,'delete']);
Route::get('/showbyid/{id}',[HomeController::class,'showByID']);
Route::put('update/{id}',[HomeController::class,'update']);