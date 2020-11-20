<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class WebContactController extends Controller
{
    public function index(){
        $contact = Contact::where('users_id', '=', auth()->id())->get();

        return view('pages.contacts', ['contact'=>$contact]);
    }
}
