<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Firma extends Model
{
    use HasFactory;

    protected $table = 'firmy';

    protected $fillable = [
        'adresa_id',
        'druh_firmy_id',
        'nazev',
        'email',
        'poznamka',
    ];

    /**
     * Get the adresa that belongs to the firma.
     */
    public function adresa(): BelongsTo
    {
        return $this->belongsTo(Adresa::class);
    }

    /**
     * Get the druh firmy that belongs to the firma.
     */
    public function druhFirmy(): BelongsTo
    {
        return $this->belongsTo(DruhFirmy::class, 'druh_firmy_id');
    }
}
