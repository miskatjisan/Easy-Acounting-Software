<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'name', 'barcode', 'group', 'category', 'unt', 'is_sevice', 'is_serial', 'narration',
        'qty', 'min_sale_rate', 'purchase_rate', 'default_sale_rate', 'wolesaler_rate',
        'retailer_rate', 'corporate_rate', 'distributor_rate', 'discount', 'vat',
    ];

    protected static function booted()
    {
        static::creating(function ($item) {
            // Generate a custom 'item_code' based on your requirements
            $lastItem = Item::latest()->first();
            if ($lastItem) {
                $lastItemCode = $lastItem->item_code;
                $item->item_code = 'Item-' . (intval(substr($lastItemCode, 5)) + 1);
            } else {
                $item->item_code = 'Item-10001'; // Initial value
            }
        });
    }
}
