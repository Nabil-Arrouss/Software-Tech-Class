<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\SaveImageRequest;
use App\Http\Resources\V1\ImageResource;
use App\Models\Image;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): ResourceCollection
    {
        $images = Image::latest()->get();

        return ImageResource::collection($images);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SaveImageRequest $request): JsonResponse
    {
        // Create 'images' directory if it does not exist
        if (!Storage::exists('images')) {
            Storage::makeDirectory('images');
        }

        // Save file to 'images' directory
        $file = $request->file('image')->store('images');

        // Save record to the database
        $image = new Image($request->validated());
        $image->path = $file;
        $image->save();

        // Display message for successfull saving
        return response()->json([
            'message' => __('Image saved successfully!'),
            'data'    => new ImageResource($image)
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): ImageResource
    {
        // Set the 'id' number to retrieve its corresponding image
        $image = Image::findOrFail($id);
        return new ImageResource($image);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        // Delete an image using its 'id' number
        $image = Image::findOrFail($id);

        // Delete image from server
        if (Storage::exists($image->path)) {
            Storage::delete($image->path);
        }

        // Delete database record
        $image->delete();

        // Display message for successfull deleting
        return response()->json([
            'message' => __('Image deleted successfully!')
        ], Response::HTTP_OK);
    }
}
