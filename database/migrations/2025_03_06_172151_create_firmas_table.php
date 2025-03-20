<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('firmy', function (Blueprint $table) {
            $table->id();
            $table->foreignId('adresa_id')->nullable()->constrained('adresy');
            $table->foreignId('druh_firmy_id')->constrained('druhy_firem');
            $table->string('nazev', 64);
            $table->string('email', 32)->nullable();
            $table->string('poznamka', 255)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('firmy');
    }
};
