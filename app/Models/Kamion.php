<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Kamion extends Model
{
    use HasFactory;


    protected $table = 'kamiony';

    protected $fillable = [
        'stav_id',
        'kontaktni_osoba_id',
        'ridic_id',
        'dopravce_id',
        'druh_kamionu_id',
        'cena_dopravy',
        'spz',
    ];
}
