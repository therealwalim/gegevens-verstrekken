<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Image;

class ProfileController extends Controller
{
    public function index()
    {
        return view('pages.profile');
    }

    public function edit_photo(Request $request){
        if ($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = sha1(time()+ rand(10000,99999)) . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save(public_path("upload/avatars/" . $filename));

            $user = Auth::user();
            $user->photo = $filename;
            $user->save();
        }
        return redirect()->route('pages.profile');
    }

    public function edit_password(Request $request){

        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required'
        ]);

        $user=Auth::user();

        if ($request->has('password')){
            $user->password = Hash::make($request->password);
            $user->save();
        }

        return view('pages.profile', array('user'=> Auth::user()) );
    }


    public function edit_profile(Request $request){
        $user = Auth::user();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->save();

        return view('pages.profile');
    }
}
