<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ZpusobManipulace extends Model
{
    use HasFactory;

    protected $table = 'zpusoby_manipulace';

    protected $fillable = [
        'proces',
        'nazev',
    ];
}
