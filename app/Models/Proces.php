<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Proces extends Model
{
    use HasFactory;

    protected $table = 'procesy';

    protected $fillable = [
        'nazev',
    ];
}
