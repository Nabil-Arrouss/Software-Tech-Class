<?php

use App\Http\Controllers\Api\V1\AuthController;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\ImageController;
use Illuminate\Support\Facades\Route;

/* This method organizes routes starting with '/v1' (version 1) for image management.
 * It supports CRUD operations but excludes image updates
 */
Route::group(['prefix' => 'v1'], function() {

    Route::post('login', [AuthController::class, 'login']); // Handles user login requests.
    Route::post('register', [AuthController::class, 'register']); // Handles user registration requests.
    Route::delete('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum'); // Handles user logout requests and Secures the logout route to only authenticated users using Sanctum.



      // This line registers image management routes using 'ImageController', excluding the 'update' route and middleware only to certain operations.

      Route::apiResource('images', ImageController::class)
      ->except('update')
      ->middleware('auth:sanctum', ['only' => ['store', 'destroy']]);

});
