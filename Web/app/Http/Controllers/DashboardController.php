<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Contact;
use App\Models\Message;
use App\Models\Note;
use App\Models\Password;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
        public function index(){
        $user = User::all();
        $message = Message::where('user_id', '=', auth()->id())->get();
        $contact = Contact::where('users_id', '=', auth()->id())->get();
        $note = Note::where('user_id', '=', auth()->id())->get();
        $password = Password::where('user_id', '=', auth()->id())->get();

        $ucount = $user->count();
        $mcount = $message->count();
        $ccount = $contact->count();
        $ncount = $note->count();
        $pcount = $password->count();

        return view('pages.home',['ucount'=>$ucount,'mcount'=>$mcount,'ccount'=>$ccount, 'ncount'=>$ncount, 'pcount'=>$pcount]);
        }

        public function logout(){
            Auth::logout();
            return redirect('/login');
        }
}
