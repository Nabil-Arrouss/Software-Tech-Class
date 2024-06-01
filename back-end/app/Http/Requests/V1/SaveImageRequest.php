<?php

namespace App\Http\Requests\V1;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class SaveImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // The 'title' field is required, must be a string, and have a maximum length of 80 characters
            'title' => 'required|string|max:80',
            // The 'image' field is required and must be a file with one of the specified MIME types: jpeg, png, jpg
            'image' => 'required|file|mimes:jpeg,png,jpg'
        ];
    }

    // Throw an HTTP response exception with JSON containing validation errors 
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'message' => 'The given data was invalid.',
            'errors' => $validator->errors()->toArray(),
        ], 422));
    }
}