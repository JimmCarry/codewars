<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Match extends Model
{

    protected $with = ['stats'];

    public function stats()
    {
        return $this->hasMany(Stat::class);
    }

    public function day()
    {
        return $this->belongsTo(Day::class);
    }
    // public function teams()
    // {
    //     return $this->hasMany(Team::class);
    // }

    use HasFactory;

    protected $fillable = [
        'id',
        'date',
        'week',
        'home_team_id',
        'visitor_team_id',
        'location_arena',
        'location_state',
        'location_city',
        'updated_at',
        'created_at'
    ];
}
