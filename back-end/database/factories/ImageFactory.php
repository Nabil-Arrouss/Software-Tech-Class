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
            'title' => $this->faker->sentence,
            'path' => 'images/' . $this->faker->image('public/storage/images', 640, 480, null, false)
        ];
    }
}
