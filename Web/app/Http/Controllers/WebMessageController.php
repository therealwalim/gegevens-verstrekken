<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class WebMessageController extends Controller
{
    public function index(){
        $messages = Message::where('user_id', '=', auth()->id())->get();

        return view('pages.messages',['messages'=>$messages]);
    }
}
