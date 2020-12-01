<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index()
    {
        $password = Password::where('user_id', '=', auth()->id())->get();
        $count_password = Password::where('user_id', '=', auth()->id())->count();
        $passwords = [
            'password' => $password,
            'count' => $count_password
        ];
        return response()->json($passwords);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $password = Password::create($request->all());
        return response()->json([
            "code" => 200,
            "message" => "Password added successfully"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = Password::find($id);
        return $result;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Password $password)
    {
        if ($password->update($request->all())) {
            return response()->json([
                'success' => 'Password updated with success'
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $password = Password::find($id);
        $deletion = $password->delete();
        return response()->json([
            "code" => 200,
            "message" => "Password deleted successfully"
        ]);
    }
}
