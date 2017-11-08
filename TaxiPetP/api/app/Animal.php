<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    //Aqui passamos o nome da tabela associada ao modelo
    protected $table = 'animais';
    
    //Aqui nós daremos permissão para os atributos da nossa base de dados
    protected $fillable = ['nome', 'raca', 'especie'];
}
