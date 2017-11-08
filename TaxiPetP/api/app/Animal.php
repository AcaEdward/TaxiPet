<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $table = 'animais';
    
    protected $fillable = ['nome', 'raca', 'especie'];
}
