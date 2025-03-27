<?php

namespace App\Http\Controllers;

use App\Models\Firma;
use App\Models\Adresa;
use App\Models\DruhFirmy;
use App\Models\Okres;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FirmyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $firmy = Firma::with(['adresa', 'druhFirmy'])->get();

        return Inertia::render('firmy/index', [
            'firmy' => $firmy
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        $druhyFirem = DruhFirmy::all();
        $adresy = Adresa::with('okres')->get();
        $okresy = Okres::all();

        return Inertia::render('firmy/create', [
            'druhyFirem' => $druhyFirem,
            'adresy' => $adresy,
            'okresy' => $okresy
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nazev' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'poznamka' => 'nullable|string',
            'druh_firmy_id' => 'required|exists:druhy_firem,id',
            'adresa_id' => 'nullable|exists:adresy,id',
        ]);

        $firma = Firma::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('firmy/show', [
            'firma' => Firma::with(['adresa', 'druhFirmy'])->find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('firmy/edit', [
            'firma' => Firma::with(['adresa', 'druhFirmy'])->find($id),
            'druhy_firem' => DruhFirmy::all(),
            'adresy' => Adresa::with(['okres'])->get(),
            'okresy' => Okres::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nazev' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'poznamka' => 'nullable|string',
            'druh_firmy_id' => 'required|exists:druhy_firem,id',
            'adresa_id' => 'nullable|exists:adresy,id',
        ]);

        $firma = Firma::find($id);
        $firma->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
