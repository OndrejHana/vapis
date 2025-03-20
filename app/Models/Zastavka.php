<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Zastavka extends Model
{
    use HasFactory;

    protected $table = 'zastavky';

    protected $fillable = [
        'kamion_id',
        'firma_id',
        'stavba_id',
        'zpusob_manipulace_id',
        'material',
        'poznamka',
        'datum_od',
        'datum_do',
    ];
}
