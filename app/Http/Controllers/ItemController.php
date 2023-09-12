<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Group;
use App\Models\Category;
use App\Models\Unit;



class ItemController extends Controller
{
    public function index()
    {
        return Item::all();
        return Group::all();
        return Category::all();
        return Unit::all();
    }

    public function store(Request $request)
    {
        return Item::create($request->all());
    }

    public function show($id)
    {
        return Item::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $item = Item::findOrFail($id);
        $item->update($request->all());
        return $item;
    }

    public function destroy($id)
    {
        Item::findOrFail($id)->delete();
        return response()->json(['message' => 'Item deleted']);
    }
}
