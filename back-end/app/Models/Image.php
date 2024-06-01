<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;

    // Attributes that can be mass-assigned. (set the attributes in 1 go, otherwise not allowed)

    protected $fillable = [
        'title',
        'path'
    ];

    /* Accessor method to retrieve the full URL of the image.
     * This method concatenates the base URL provided by the storage driver
     * with the path stored in the database.
     */
    public function getFullPathAttribute(): string 
    {
        return Storage::url($this->path);
    }
}
