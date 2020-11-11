<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebMessageController extends Controller
{
    public function index(){
        return view('pages.messages');
    }
}
