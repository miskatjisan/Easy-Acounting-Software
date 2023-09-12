<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name', 'address', 'logo', 'invoice_type', 'is_warehouse', 'vat_discount','is_serial', 'voucharwise_recipt','currency',
    ];
}
