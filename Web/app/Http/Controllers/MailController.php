<?php

namespace App\Http\Controllers;

use App\Mail\SignupMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public static function sendSignupEmail($name, $email, $password, $verification_code){

        $data = [
            'name' => $name,
            'verification_code' => $verification_code,
            'password' => $password,
        ];

        Mail::to($email)->send(new SignupMail($data));
    }
}
