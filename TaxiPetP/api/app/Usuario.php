<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuarios";

    protected $fillable = ['nome', 'email', 'senha', 'cpf', 'rg', 'telefone', 'endereco', 'cnh', 'is_admin'];
}
