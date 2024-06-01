<?php


use App\Http\Controllers\Api\V1\ImageController;
use Illuminate\Support\Facades\Route;

/* This method organizes routes starting with '/v1' (version 1) for image management. 
 * It supports CRUD operations but excludes image updates
 */
Route::group(['prefix' => 'v1'], function() {

    // This line registers image management routes using 'ImageController', excluding the 'update' route.
    Route::apiResource('images', ImageController::class)->except('update');
});