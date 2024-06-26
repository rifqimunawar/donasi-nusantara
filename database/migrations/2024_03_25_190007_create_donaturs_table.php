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
        Schema::create('donaturs', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('hamba allah');
            $table->string('email')->default('rifqimunawar47@gmail.com');
            $table->string('snap_token')->nullable();
            $table->string('message')->nullable();
            $table->string('nominal');
            $table->string('statusPay')->default(false);
            $table->string('like')->default(0);
            $table->string('campaign_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donaturs');
    }
};
