<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stavba extends Model
{
    use HasFactory;

    protected $table = 'stavby';

    protected $fillable = [
        'nazev',
        'cislo_objednavky',
        'planovany_pocet_kamionu',
        'konecne_datum',
        'adresa_id',
        'stavebni_firma_id',
        'kontaktni_osoba_id',
        'vychozi_druh_kamionu_id',
        'stav_id',
        'poznamka',
    ];
}
