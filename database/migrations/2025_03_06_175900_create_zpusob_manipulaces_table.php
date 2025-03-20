<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('zpusoby_manipulace', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proces')->nullable()->constrained('procesy');
            $table->string('nazev', 32)->unique();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zpusoby_manipulace');
    }
};
