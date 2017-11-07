<?php
require_once "../model/Usuario.php";

class UsuarioController{
    private $Usuario;

function __construct(){

}

public function Acesso (){
    $resultado = $this->usuario->Acesso($email, $senha);
    if ($resultado != NULL) {
        foreach ($resultado as $row) {
            $this->usuario->setIdUsuario($row['id_usuario']);
            $this->usuario->setNomeUsuario($row['nome_usuario']);
        }
        return true;
    } else {
        return false;
    }
}
}