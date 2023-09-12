<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('item_code');
            $table->string('name');
            $table->string('barcode');
            $table->string('group');
            $table->string('category');
            $table->string('unt');
            $table->string('is_sevice');
            $table->string('is_serial');
            $table->text('narration');
            $table->decimal('qty', 8, 2);
            $table->decimal('min_sale_rate', 8, 2);
            $table->decimal('purchase_rate', 8, 2);
            $table->decimal('default_sale_rate', 8, 2);
            $table->decimal('wolesaler_rate', 8, 2);
            $table->decimal('retailer_rate', 8, 2);
            $table->decimal('corporate_rate', 8, 2);
            $table->decimal('distributor_rate', 8, 2);
            $table->decimal('discount', 8, 2);
            $table->decimal('vat', 8, 2);
            $table->timestamps();
        });
   
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
