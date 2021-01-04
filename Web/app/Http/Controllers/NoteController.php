<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index()
    {
        $note = Note::where('user_id', '=', auth()->id())->get();
        $count_note = Note::where('user_id', '=', auth()->id())->count();
        $notes = [
            'note' => $note,
            'count' => $count_note
        ];
        return response()->json($notes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $note = Note::create($request->all());
        return response()->json([
            "code" => 200,
            "message" => "Note added successfully"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($note)
    {
        $result = Note::find($note);
        return $result;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        if ($note->update($request->all())) {
            return response()->json([
                'success' => 'Note updated with success'
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
        $message = Note::find($id);
        $deletion = $message->delete();
        return response()->json([
            "code" => 200,
            "message" => "Note deleted successfully"
        ]);
    }
}
