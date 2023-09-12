<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;


class BranchController extends Controller
{
    public function index()
    {
        return Branch::all();
    }

    public function store(Request $request)
    {
        return Branch::create($request->all());
    }

    public function show($id)
    {
        return Branch::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $branch = Branch::findOrFail($id);
        $branch->update($request->all());
        return $branch;
    }

    public function destroy($id)
    {
        Branch::findOrFail($id)->delete();
        return response()->json(['message' => 'Branch deleted']);
    }
}
