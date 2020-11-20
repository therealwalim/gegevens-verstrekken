<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class WebPasswordController extends Controller
{
    public function index(){
        $password = Password::where('user_id', '=', auth()->id())->get();

        return view('pages.passwords',['password'=>$password]);
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
