<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Unit;



class UnitController extends Controller
{
    public function index()
    {
        return Unit::all();
    }

    public function store(Request $request)
    {
        return Unit::create($request->all());
    }

    public function show($id)
    {
        return Unit::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $unit = Unit::findOrFail($id);
        $unit->update($request->all());
        return $unit;
    }

    public function destroy($id)
    {
        Unit::findOrFail($id)->delete();
        return response()->json(['message' => 'Unit deleted']);
    }
}
