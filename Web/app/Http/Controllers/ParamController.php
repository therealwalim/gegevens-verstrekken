<?php

namespace App\Http\Controllers;

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
        $params = Param::all();
        return $params->toJson(JSON_PRETTY_PRINT);
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
