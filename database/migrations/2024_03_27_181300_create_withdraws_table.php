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
        Schema::create('withdraws', function (Blueprint $table) {
            $table->id();
            $table->string('name');//belong to 1 campaign
            $table->integer('user_id');//belong to 1 campaign
            $table->integer('campaign_id');//belong to 1 campaign
            $table->string('email');
            $table->bigInteger('nominal');
            $table->string('bank');
            $table->bigInteger('norek');
            $table->integer('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('withdraws');
    }
};
