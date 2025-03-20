<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Okres extends Model
{
    use HasFactory;

    protected $table = 'okresy';

    protected $fillable = [
        'nazev',
        'cena',
    ];
}
