<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DruhFirmy extends Model
{
    use HasFactory;

    protected $table = 'druhy_firem';

    protected $fillable = [
        'nazev',
    ];

    public function firmy(): HasMany
    {
        return $this->hasMany(Firma::class, 'druh_firmy_id');
    }
}
