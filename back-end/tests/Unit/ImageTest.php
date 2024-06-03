<?php

namespace Tests\Feature;

use App\Models\Image;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
public function authenticated_users_can_view_images()
{
    Storage::fake('public');

    $user = User::factory()->create();
    $image = Image::factory()->create(['path' => 'images/sample.jpg']);

    Storage::disk('public')->put('images/sample.jpg', 'Dummy content');

    // Authenticate the user
    $response = $this->actingAs($user)->getJson("/api/v1/images/{$image->id}");

    // Check that the user can access the image
    $response->assertOk();
    $response->assertJson([
        'id' => $image->id,
        'title' => $image->title,
        'path' => Storage::url($image->path)
    ]);
}
/** @test */
public function guests_cannot_view_images()
{
    $image = Image::factory()->create(['path' => 'images/sample.jpg']);

    // Attempt to access the image without authentication
    $response = $this->getJson("/api/v1/images/{$image->id}");

    // Expect a 401 Unauthorized
    $response->assertStatus(401);
}


}
