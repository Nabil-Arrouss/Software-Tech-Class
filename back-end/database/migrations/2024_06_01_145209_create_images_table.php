<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * This method creates a new table named 'images' in the database and sets up the initial schema
     * for managing images in the database, providing columns for titles, paths, and timestamps.
     */
    public function up(): void
    {
        // Added 2 columns to the 'images' table: title and path  
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('title', 80);
            $table->text('path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     * This method drops the 'images' table when the migration is rolled back.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
