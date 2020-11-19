<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Contact;
use App\Models\Message;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
        public function index(){
        $user = User::all();
        $message = Message::where('user_id', '!=', auth()->id())->get();
        $contact = Contact::where('user_id', '!=', auth()->id())->get();

        $ucount = $user->count();
        $mcount = $message->count();
        $ccount = $contact->count();

        return view('pages.home',['ucount'=>$ucount,'mcount'=>$mcount,'ccount'=>$ccount]);
        }

        public function logout(){
            Auth::logout();
            return redirect('/login');
        }
}
