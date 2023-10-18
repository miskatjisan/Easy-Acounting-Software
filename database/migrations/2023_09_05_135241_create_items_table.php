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
            $table->string('group')->nullable();
            $table->string('category')->nullable();
            $table->string('unit');
            $table->string('is_sevice')->nullable();
            $table->string('is_serial')->nullable();
            $table->text('narration')->nullable();
            $table->decimal('qty', 8, 2);
            $table->decimal('min_sale_rate', 8, 2);
            $table->decimal('purchase_rate', 8, 2);
            $table->decimal('default_sale_rate', 8, 2)->nullable();
            $table->decimal('wolesaler_rate', 8, 2)->nullable();
            $table->decimal('retailer_rate', 8, 2)->nullable();
            $table->decimal('corporate_rate', 8, 2)->nullable();
            $table->decimal('distributor_rate', 8, 2)->nullable();
            $table->decimal('discount', 8, 2)->nullable();
            $table->decimal('vat', 8, 2)->nullable();
            $table->string('image')->nullable();
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
