<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebContactController extends Controller
{
    public function index(){
        return view('pages.contacts');
    }
}
