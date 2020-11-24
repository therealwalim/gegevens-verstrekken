<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function userdata()
    {
        $users = User::select('id', 'name', 'created_at', 'email','photo','is_verified','phone')->get();
        $users_coll = collect();

        foreach ($users as $user) {
            $users_coll->push([
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
                'phone' => $user->phone
            ]);
        }

        return response()->json($users);
    }

    public function index()
    {
        return view('pages.users');
    }
}
