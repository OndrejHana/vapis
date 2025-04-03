<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::table('zpusoby_manipulace', function (Blueprint $table) {
            $table->string('poznamka', 255)->nullable();
        });

        Schema::table('druhy_kamionu', function (Blueprint $table) {
            $table->string('poznamka', 255)->nullable();
            $table->decimal('delka')->nullable();
            $table->decimal('nosnost')->nullable();
        });

        Schema::table('zastavky', function (Blueprint $table) {
            $table->string('poznamka', 255)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('zpusoby_manipulace', function (Blueprint $table) {
            $table->dropColumn('poznamka');
        });

        Schema::table('druhy_kamionu', function (Blueprint $table) {
            $table->dropColumn('poznamka');
            $table->dropColumn('delka');
            $table->dropColumn('nosnost');
        });

        Schema::table('zastavky', function (Blueprint $table) {
            $table->string('poznamka', 32)->nullable()->change();
        });
    }
};
