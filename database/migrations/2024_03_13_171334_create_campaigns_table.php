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
          $table->integer('price'); // Menggunakan tipe data 'decimal' untuk harga
          $table->timestamp('time'); // Menggunakan tipe data 'timestamp' untuk waktu
          $table->unsignedBigInteger('category_id'); // Menggunakan tipe data 'unsignedBigInteger' untuk kunci asing
          $table->timestamps(); // Tambahkan kolom created_at dan updated_at
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
