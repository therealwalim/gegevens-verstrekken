<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\File as FileModel;


class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // Store a file onto a folder
    public function store(Request $request)
    {
        //dd($request);
        $folderName = $request->folderName;
        $path = public_path().'/folders/' . $folderName;

        // Check if the folder exist
        if(File::exists($path)) {

            $fileName = time().'.'.$request->fileName->getClientOriginalExtension();
            $request->fileName->move(public_path('/folders/'.$request->folderName.'/'), $fileName);

            $file = new \App\Models\File();;
            $file->path = $request->fileName;
            $file->type = "image";
            $file->folder_id = 10;
            $file->save();

            return response()->json([
                "code" => 500,
                "message" => "Folder already exists but file saved"
            ]);
        }else{
            $folder = new Folder();
            $folder->name = $request->folderName;
            $folder->user_id = 1;
            $folder->save();

            File::makeDirectory($path, $mode = 0777, true, true);

            $fileName = time().'.'.$request->fileName->getClientOriginalExtension();
            $request->fileName->move(public_path('/folders/'.$request->folderName.'/'), $fileName);

            $file = new \App\Models\File();
            $file->path = $request->fileName;
            $file->type = "image";
            $file->folder_id = 10;
            $file->save();

            return response()->json([
                "code" => 200,
                "message" => "Folder created and file saved"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = FileModel::find($id);
        return $result;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
