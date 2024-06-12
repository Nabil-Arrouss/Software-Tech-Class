<?php

namespace Tests\Models;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase; // This trait is used to reset the database to its original state after each test.

    /** @test */
    public function a_user_can_be_created()
    {
        $user = User::factory()->create(); // Test to ensure that a user can be created using the factory.
        $this->assertModelExists($user); // Asserts that the created user model exists in the database.
    }
}
