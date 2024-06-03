<?php

namespace Tests\Models;

use App\Models\User;  
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_be_created()
    {
        $user = User::factory()->create();
        $this->assertModelExists($user);
    }
}
