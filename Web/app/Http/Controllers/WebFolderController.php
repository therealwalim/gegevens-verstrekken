<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;
use App\Models\File;
use Illuminate\Support\Facades\DB;

class WebFolderController extends Controller
{
    public function index(){
        $folders = Folder::where('user_id', '=', auth()->id())->get();
        $data = collect();

        foreach ($folders as $f){
            $files = DB::table('files')
                ->where("folder_id",'=',$f->id)->count();

            $data->push([
                'id' => $f->id,
                'name' => $f->name,
                'count' => $files,
            ]);
        }

        return view('pages.folders',['data'=>$data]);
    }
}
