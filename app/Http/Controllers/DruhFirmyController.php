<?php

namespace App\Http\Controllers;

use App\Models\DruhFirmy;
use Illuminate\Http\Request;

class DruhFirmyController extends Controller
{


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nazev' => 'required|string|max:255',
        ]);

        $druhFirmy = DruhFirmy::create($validated);
    }
}
