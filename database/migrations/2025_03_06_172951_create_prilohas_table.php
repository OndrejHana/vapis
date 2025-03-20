<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('prilohy', function (Blueprint $table) {
            $table->id();
            $table->string('cesta', 64);
            $table->foreignId('firma_id')->constrained('firmy');
            $table->foreignId('kamion_id')->constrained('kamiony');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('prilohy');
    }
};
