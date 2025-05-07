<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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



    public function dopravce(): BelongsTo
    {
        return $this->belongsTo(Firma::class);
    }

    public function druhKamionu(): BelongsTo
    {
        return $this->belongsTo(DruhKamionu::class);
    }

    public function ridic(): BelongsTo
    {
        return $this->belongsTo(Kontakt::class);
    }

    public function stav(): BelongsTo
    {
        return $this->belongsTo(StavKamionu::class);
    }

    public function kontaktniOsoba(): BelongsTo
    {
        return $this->belongsTo(Kontakt::class);
    }

    public function stavby(): BelongsTo
    {
        return $this->belongsTo(Stavba::class);
    }
}
