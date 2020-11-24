<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WebPasswordController extends Controller
{
    public function index(){
        $password = Password::where('user_id', '=', auth()->id())->get();

        return view('pages.passwords',['password'=>$password]);
    }

    public function indexpassword(){
        return view('pages.addpassword');
    }

    public function store(Request $request){
        $password = new Password();
        $password->service = $request->service;
        $password->serviceid = $request->serviceid;
        $password->password = $request->password;
        $password->user_id = Auth::id();
        $password->save();

        return response()->json('created');
    }

    public function destroy(Request $request){
        $password = Password::find($request->id);
        if($password == null)
        {
            return response()->json("no password found");
        }else{
            $password->delete();
        }
        return response()->json("deleted");
    }
}
