<?php

namespace App\Actions\Fortify;

use App\Http\Controllers\MailController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $user = new User();
        $user->name = $input['name'];
        $user->password = Hash::make($input['password']);
        $user->email = $input['email'];
        $user->verification_code = sha1(time());
        $user->save();

        //Send Email
        MailController::sendSignupEmail($input['name'], $input['email'], $user->password, $user->verification_code);

        //Show Message
        /*$user = User::all();
        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $password,
            'verification_code' => sha1(time()),
        ]);*/

        return $user;
}}
