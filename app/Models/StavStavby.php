<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StavStavby extends Model
{
    use HasFactory;

    protected $table = 'stavy_staveb';

    protected $fillable = [
        'nazev',
    ];
}
