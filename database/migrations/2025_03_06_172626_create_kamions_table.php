<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('kamiony', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stav_id')->constrained('stavy_kamionu');
            $table->foreignId('kontaktni_osoba_id')->nullable()->constrained('kontakty');
            $table->foreignId('ridic_id')->nullable()->constrained('kontakty');
            $table->foreignId('dopravce_id')->nullable()->constrained('firmy');
            $table->foreignId('druh_kamionu_id')->constrained('druhy_kamionu');
            $table->foreignId('stavby_id')->constrained('stavby');
            $table->integer('cena_dopravy')->nullable();
            $table->string('spz', 7)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('kamiony');
    }
};
