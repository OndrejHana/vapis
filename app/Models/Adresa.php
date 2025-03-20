<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Adresa extends Model
{
    use HasFactory;

    protected $table = 'adresy';

    protected $fillable = [
        'okres_id',
        'ulice',
        'popisne_cislo',
        'mesto',
        'stat',
        'psc',
    ];

    public function okres(): BelongsTo
    {
        return $this->belongsTo(Okres::class);
    }
}
