<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StavKamionu extends Model
{
    use HasFactory;

    protected $table = 'stavy_kamionu';

    protected $fillable = [
        'nazev',
    ];
}
