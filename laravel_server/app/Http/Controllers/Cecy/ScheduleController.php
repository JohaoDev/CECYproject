<?php

namespace App\Http\Controllers\Cecy;

use App\Http\Controllers\Controller;
use App\Models\Cecy\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function index(Request $request)
    {
        $schedules = Schedule::all();

        return response()->json([
                'data' => [
                    'type' => 'schedules',
                    'attributes' => $schedules
                ]]
            , 200);
    }

    public function filter(Request $request)
    {
        $schedules = Schedule::where('name', $request->name)->orderBy('name')->get();
        return response()->json([
                'data' => [
                    'type' => 'schedules',
                    'attributes' => $schedules
                ]]
            , 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        Schedule::create($data);
        return response()->json([
            'data' => [
                'attributes' => $data,
                'type' => 'schedules'
            ]
        ], 201);
    }

    public function update(Request $request, $id, Schedule $Schedule)
    {
        $data = $request->all();

        $Schedule = Schedule::where('id', $id)->update($data);
        return response()->json([
            'data' => [
                'type' => 'schedules',
                'attributes' => $data
            ]
        ], 200);
    }

    public function destroy($id)
    {
        $schedules = Schedule::destroy($id);
        return response()->json([
            'data' => [
                'attributes' => $id,
                'type' => 'schedules'
            ]
        ], 201);
    }
}
