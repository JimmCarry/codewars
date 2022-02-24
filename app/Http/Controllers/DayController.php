<?php

namespace App\Http\Controllers;

use App\Models\Day;
use App\Models\Match;
use Illuminate\Http\Request;

class DayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return Day::with('matches')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $day = Day::create(
            $request->all()
        );

        return response()->json([
            'message' => 'this is the stuff you sent me',
            'day' => $day,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Day  $day
     * @return \Illuminate\Http\Response
     */
    // public function show($id)
    public function show(Day $day)
    {
        return $day;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
