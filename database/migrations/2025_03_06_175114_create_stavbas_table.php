<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('stavby', function (Blueprint $table) {
            $table->id();
            $table->string('nazev', 32);
            $table->string('cislo_objednavky', 32);
            $table->integer('planovany_pocet_kamionu')->nullable();
            $table->date('konecne_datum');
            $table->foreignId('adresa_id')->constrained('adresy');
            $table->foreignId('stavebni_firma_id')->nullable()->constrained('firmy');
            $table->foreignId('kontaktni_osoba_id')->nullable()->constrained('kontakty');
            $table->foreignId('vychozi_druh_kamionu_id')->constrained('druhy_kamionu');
            $table->foreignId('stav_id')->constrained('stavy_staveb');
            $table->string('poznamka', 255)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('stavby');
    }
};
