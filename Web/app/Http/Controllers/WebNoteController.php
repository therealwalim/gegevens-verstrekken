<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class WebNoteController extends Controller
{
    public function index(){
        $notes = Note::where('user_id', '=', auth()->id())->get();

        return view('pages.tasks',['notes'=>$notes]);
    }

    public function destroy(Request $request){
        $note = Note::find($request->id);
        if($note == null)
        {
            return response()->json("no note found");
        }else{
            $note->delete();
        }
        return response()->json("deleted");
    }
}
