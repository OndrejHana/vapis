<?php

namespace App\Http\Controllers;

use App\Models\Stavba;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StavbyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stavby = Stavba::all();

        return Inertia::render('stavby/index', [
            'stavby' => $stavby
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('stavby/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nazev' => 'required|string|max:255',
            'popis' => 'nullable|string',
            'adresa' => 'required|string|max:255',
            'datum_zacatku' => 'required|date',
            'datum_konce' => 'nullable|date',
            'status' => 'required|string|max:50',
        ]);

        $stavba = Stavba::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('stavby/show', [
            'stavba' => Stavba::find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nazev' => 'required|string|max:255',
            'popis' => 'nullable|string',
            'adresa' => 'required|string|max:255',
            'datum_zacatku' => 'required|date',
            'datum_konce' => 'nullable|date',
            'status' => 'required|string|max:50',
        ]);

        $stavba = Stavba::find($id);
        $stavba->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $stavba = Stavba::find($id);
        $stavba->delete();
    }
}
