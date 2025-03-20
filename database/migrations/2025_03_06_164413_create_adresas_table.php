<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('adresy', function (Blueprint $table) {
            $table->id();
            $table->foreignId('okres_id')->constrained('okresy');
            $table->string('ulice', 32);
            $table->integer('popisne_cislo');
            $table->string('mesto', 32);
            $table->string('stat', 32);
            $table->string('psc', 5);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('adresy');
    }
};
