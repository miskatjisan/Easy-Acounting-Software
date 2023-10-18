<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
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
    return Category::all();
    return Unit::all();

    }

   
   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
          
        ]);

        // If validation fails, return the validation errors
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

         Item::create($request->all());
            return response()->json(['message' => 'Item Added Successfully.']);
        
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
        return response()->json(['message' => 'Item deleted Successfully.']);
    }
}
