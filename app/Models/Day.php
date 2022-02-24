<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $with = ['matches'];

    use HasFactory;

    public function matches()
    {
        return $this->hasMany(Match::class);
    }

    protected $fillable = [
        'id',
        'date',
        'week',
        'number_of_matches',
        'created_at',
        'updated_at'
    ];
}
