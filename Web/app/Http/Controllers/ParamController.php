<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Message;
use App\Models\Param;
use Illuminate\Http\Request;

class ParamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index()
    {
        $count_con = Contact::where('users_id', '=', auth()->id())->count();
        $count_msg = Message::where('user_id', '=', auth()->id())->count();
        $data = [
            'contact' => $count_con,
            'message' => $count_msg
        ];
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Param $param)
    {
        if ($param->update($request->all())) {
            return response()->json([
                'success' => 'Settings updated with success'
            ], 200);
        }
    }

}
