<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    public function players()
    {
        return $this->hasMany(Player::class);
    }
    public function days()
    {
        return $this->hasMany(Day::class);
    }
    public function stats()
    {
        return $this->hasMany(Stat::class);
    }
    public function matches()
    {
        return $this->hasMany(Match::class);
    }
    
    use HasFactory;
}
