<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Models\File;
use Illuminate\Support\Facades\DB;

class WebFolderController extends Controller
{
    public function index(){
        $folders = Folder::where('user_id', '=', auth()->id())->get();
        $data = collect();
        $filator = collect();

        // loop around the folders
        foreach ($folders as $f){
            $files = DB::table('files')
                ->where("folder_id",'=',$f->id)->count();
            // loop around the files in all folders
            foreach ($f->file as $filatov){
                $filator->push([
                    'fname' => $filatov->path,
                    'id_file' => $filatov->id,
                    'id_folder' => $f->id
                ]);
            }

            $data->push([
                'id' => $f->id,
                'name' => $f->name,
                'count' => $files,
            ]);
        }

        return view('pages.folders',['data'=>$data,'filatov'=>$filator]);
    }

    public function getDownload(Request $request){
        $f = File::find($request->id);
        $folder = Folder::find($f->folder_id);
        $file = public_path()."/cloud/".$folder->name.'/'.$f->path;

        return Response::download($file,$f->path);
    }

    public function getFiles(Request $request){
        $folder = Folder::find($request->id);
        $filator = collect();

        foreach ($folder->file as $filatov){
            $filator->push([
                'fname' => $filatov->path,
                'id_file' => $filatov->id
            ]);
        }

        return response()->json($filator);
    }
}
