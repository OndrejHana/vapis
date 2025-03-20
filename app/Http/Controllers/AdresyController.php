<?php

namespace App\Http\Controllers;

use App\Models\Adresa;
use Illuminate\Http\Request;

class AdresyController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'cislo_popisne' => 'required|integer|min:1', // Form field name
            'mesto' => 'required|string|max:32',
            'okres_id' => 'required|exists:okresy,id',
            'psc' => 'required|string|size:5',
            'stat' => 'required|string|max:32',
            'ulice' => 'required|string|max:32',
        ]);

        $druhFirmy = Adresa::create($validated);
    }
}
