<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Priloha extends Model
{
    use HasFactory;

    protected $table = 'prilohy';

    protected $fillable = [
        'cesta',
        'firma_id',
        'kamion_id',
    ];
}
