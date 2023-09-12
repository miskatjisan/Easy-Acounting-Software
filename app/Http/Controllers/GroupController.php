<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;


class GroupController extends Controller
{
    public function index()
    {
        return Group::all();
    }

    public function store(Request $request)
    {
        return Group::create($request->all());
    }

    public function show($id)
    {
        return Group::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $group = Group::findOrFail($id);
        $group->update($request->all());
        return $group;
    }

    public function destroy($id)
    {
        Group::findOrFail($id)->delete();
        return response()->json(['message' => 'Group deleted']);
    }
}
