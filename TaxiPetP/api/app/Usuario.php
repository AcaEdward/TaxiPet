<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuario";

    protected $fillable = ['id', 'nome', 'email', 'senha', 'cpf', 'rg', 'telefone', 'endereco', 'cnh', 'is_admin'];
}
