<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('stavy_kamionu', function (Blueprint $table) {
            $table->id();
            $table->string('nazev', 32)->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('stavy_kamionu');
    }
};
