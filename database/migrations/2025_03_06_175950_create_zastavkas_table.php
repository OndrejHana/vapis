<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('zastavky', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kamion_id')->constrained('kamiony');
            $table->foreignId('firma_id')->nullable()->constrained('firmy');
            $table->foreignId('stavba_id')->nullable()->constrained('stavby');
            $table->foreignId('zpusob_manipulace_id')->constrained('zpusoby_manipulace');
            $table->string('material', 32);
            $table->string('poznamka', 32)->nullable();
            $table->dateTime('datum_od');
            $table->dateTime('datum_do');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zastavky');
    }
};
