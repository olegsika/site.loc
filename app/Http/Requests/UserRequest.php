<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
                {
                    return [];
                }
            case 'POST':
                {
                    return [
                        'name'      => 'required|string|max:191',
                        'email'     => 'required|string|email|max:191|unique:users',
                        'password'  => 'required|string|min:8',
                        'type'      => 'required|string'
                    ];
                }
            case 'PUT':
            case 'PATCH':
                {
                    return [
                        'name'      => 'required|string|max:191',
                        'email'     => 'required|string|email|max:191|unique:users,id,?????',
                        'password'  => 'sometimes|string|min:8',
                        'type'      => 'required|string'
                    ];
                }
            default:break;
        }
    }
}
