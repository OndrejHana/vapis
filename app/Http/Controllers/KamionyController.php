<?php

namespace App\Http\Controllers;

use App\Models\Kamion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KamionyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('kamiony/index', [
            'kamiony' => Kamion::with(['dopravce', 'druhKamionu', 'ridic', 'stav', 'kontaktniOsoba', 'stavby'])->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('kamiony/create', [
            'stavyKamionu' => \App\Models\StavKamionu::all(),
            'stavby' => \App\Models\Stavba::all(),
            'kontakty' => \App\Models\Kontakt::all(),
            'dopravce' => \App\Models\Firma::whereHas('druhFirmy', function ($query) {
                $query->where('nazev', 'dopravce');
            })->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('kamiony/show', []);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
