<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mockery\Matcher\Not;

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

    public function indexnote(){
        return view('pages.addnote');
    }

    public function store(Request $request){
        $note = new Note();
        $note->title = $request->title;
        $note->content = $request->contenu;
        $note->user_id = Auth::id();
        $note->save();

        return response()->json('created');
    }
}
