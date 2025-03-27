<?php

namespace App\Http\Controllers;

use App\Models\Adresa;
use Illuminate\Http\Request;

class AdresyController extends Controller
{
    public function store(Request $request)
    {
        /*dd($request);*/
        $validated = $request->validate([
            /*'cislo_popisne' => ['required'],*/
            /*'mesto' => [],*/
            /*'okres_id' => [],*/
            /*'psc' => [],*/
            /*'stat' => [],*/
            /*'ulice' => [],*/


            'popisne_cislo' => 'required|string|min:1', // Form field name
            'mesto' => 'required|string|max:32',
            'okres_id' => 'required|exists:okresy,id',
            'psc' => 'required|string|size:5',
            'stat' => 'required|string|max:32',
            'ulice' => 'required|string|max:32',
        ]);

        $druhFirmy = Adresa::create($validated);
    }
}
