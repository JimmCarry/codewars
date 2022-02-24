<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{

    protected $with = ['player', 'team'];

    public function player()
    {
        return $this->belongsTo(Player::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    use HasFactory;

    protected $fillable = [
        'id', 'match_id', 'team_id', 'player_id', 'status' ,'min', 'fg', 'fga', 'threep', 'threepa', 'ft', 'fta', 'or', 'dr', 'tot', 'a', 'pf', 'st', 'to', 'bs', 'plusminus', 'pts', 'created_at', 'updated_at'
    ];
}
