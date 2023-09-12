<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        return Company::all();
    }

    // public function store(Request $request)
    // {
    //     return Company::create([
    //         'name' => $request['name'],
    //         'branch' => $request['branch'],
    //         'role' => $request['role'],
    //         'username' => $request['username'],
    //         'email' => $request['email'],
    //         'password' => Hash::make($request['password']),
    //     ]);
    // }

    // public function show($id)
    // {
    //     return User::findOrFail($id);
    // }

    public function update(Request $request, $id)
    {
        $company = Company::findOrFail($id);
        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoName = time() . '.' . $logo->getClientOriginalExtension();
            $logo->move(public_path('images'), $logoName);
            $company->image_path = 'images/' . $logoName;
        }

        $company->update([
            'name' => $request['name'],
            'address' => $request['address'],
            'invoice_type' => $request['invoice_type'],
            'is_warehouse' => $request['is_warehouse'],
            'vat_discount' => $request['vat_discount'],
            'is_serial' => $request['is_serial'],
            'voucharwise_recipt' => $request['voucharwise_recipt'],
            'currency' => $request['currency'],
        ]);
        return $company;
    }

    // public function destroy($id)
    // {
    //     Company::findOrFail($id)->delete();
    //     return response()->json(['message' => 'Company deleted']);
    // }
}
