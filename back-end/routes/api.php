<?php

use App\Http\Controllers\Api\V1\AuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\ImageController;
use Illuminate\Support\Facades\Route;

/* This method organizes routes starting with '/v1' (version 1) for image management.
 * It supports CRUD operations but excludes image updates
 */
Route::group(['prefix' => 'v1', 'middleware' => ['auth:sanctum']], function() {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
      // This line registers image management routes using 'ImageController', excluding the 'update' route.
    Route::apiResource('images', ImageController::class)->except('update');


});
