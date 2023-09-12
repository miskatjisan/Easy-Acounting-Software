<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warehouse;



class WarehouseController extends Controller
{
    public function index()
    {
        return Warehouse::all();
    }

    public function store(Request $request)
    {
        return Warehouse::create($request->all());
    }

    public function show($id)
    {
        return Warehouse::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $warehouse = Warehouse::findOrFail($id);
        $warehouse->update($request->all());
        return $warehouse;
    }

    public function destroy($id)
    {
        Warehouse::findOrFail($id)->delete();
        return response()->json(['message' => 'Warehouse deleted']);
    }
}
