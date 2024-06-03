<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     * This method defines the structure to represent an image resource.
     * Each key corresponds to a specific attribute of the image.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /* Define the array structure to represent the image resource. In other words these are the columns
         * we defined in the database 'back-end', which holds information about the images.
         */
        return [
            'id'         => $this->id,  // Get the ID of the image
            'title'      => $this->title,  // Get the title of the image
            'path'       => $this->full_path,  // Get the full path of the image
            'created_at' => $this->created_at,  // Get the creation date of the image
            'updated_at' => $this->updated_at  // Get the last update date of the image
        ];
    }
}
