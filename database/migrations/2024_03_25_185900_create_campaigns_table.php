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
        Schema::create('campaigns', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('img');
            $table->text('description'); // Menggunakan tipe data 'text' untuk deskripsi yang panjang
            $table->boolean('statusAktif')->default(true);
            $table->integer('price'); // Menggunakan tipe data 'decimal' untuk harga
            $table->integer('collected')->default(0); // Menggunakan tipe data 'decimal' untuk harga
            $table->timestamp('time')->nullable();
            $table->string('bank')->default('BRI');
            $table->string('norek')->default('407301012966508');
            $table->string('statusDana')->default(0); //digunakan untuk mengetahui status pendarikan dana
            $table->unsignedBigInteger('category_id'); // Menggunakan tipe data 'unsignedBigInteger' untuk kunci asing
            $table->unsignedBigInteger('user_id'); // Menggunakan tipe data 'unsignedBigInteger' untuk kunci asing  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaigns');
    }
};
