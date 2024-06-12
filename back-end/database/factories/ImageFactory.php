<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    protected $model = Image::class;

    public function definition()
    {
        return [
                        // Generates a random sentence for the image title.
            'title' => $this->faker->sentence,
            // Generates a random image and stores it in the 'public/storage/images' directory.
            // The image file will be placed directly in the directory without creating subdirectories.
            'path' => 'images/' . $this->faker->image('public/storage/images', 640, 480, null, false)
        ];
    }
}
