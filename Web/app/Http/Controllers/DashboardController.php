<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
            return view('pages.home');
        }

        public function logout(){
            Auth::logout();
            return redirect('/login');
        }
}
