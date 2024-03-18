<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donatur extends Model
{
    use HasFactory;
    protected $guarded=[];

    // Model Donatur
    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }
}
