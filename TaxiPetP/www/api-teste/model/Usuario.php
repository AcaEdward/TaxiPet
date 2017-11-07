<?php
require_once 'Consulta.php'; 
require_once '../model/Consulta.php'; 

class Usuario {
    private $idUsuario; 
    private $nomeUsuario; 
    private $emailUsuario; 
    private $senhaUsuario; 
    private $cpfUsuario; 
    private $rgUsuario; 
    private $telefoneUsuario; 
    private $enderecoUsuario; 

    function __construct() {

    }

    public function setIdUsuario($id){
        $this->idUsuario = $id;
    }

    public function getIdUsuario(){
        return $this->idUsuario;
    }

    private function setNomeUsuario($nome){
        $this->nomeUsuario = $nome;
    }

    private function getNomeUsuario(){
        return $this->nomeUsuario;
    }

    private function setEmailUsuario($email){
        $this->emailUsuario - $email;
    }

    private function getEmailUsuario(){
        return $this->emailUsuario;
    }

    private function setSenhaUsuario($senha){
        $this->senhaUsuario = $senha;
    }

    private function getSenhaUsuario(){
        return $this->senhaUsuario;
    }

    private function setCpfUsuario($cpg){
        $this->cpfUsuario = $cpf;
    }

    private function getCpfUsuario(){
        return $this->cpfUsuario;
    }

    private function setRgUsuario($rg){
        $this->rgUsuario = $rg;
    }

    private function getRgUsuario(){
        return $this->rgUsuario;
    }

    private function setTelefoneUsuario($telefone){
        $this->telefoneUsuario = $telefone;
    }

    private function getTelefoneUsuario(){
        return $this->telefoneUsuario;
    }

    private function setEnderecoUsuario($endereco){
        $this->enderecoUsuario = $endereco;
    }

    private function getEnderecoUsuario(){
        return $this->enderecoUsuario;
    }

public function Acesso($email, $senha) {
    $sql = "SELECT * FROM usuario WHERE email_usuario = ? AND senha_usuario = ? "; 
    $c = new Consulta($sql); 

    $dados = array($email, md5($senha)); 
    $retorno = $c -> executaConsulta($dados); 
    if ($retorno -> rowCount() > 0) {
    return $retorno; 
    }else {
    return NULL; 
    }
}

public function Cadastrar(){
    $sql = "INSERT INTO usuario (nome_usuario, email_usuario, senha_usuario, cpf_usuario, rg_usuario, telefone_usuario,endereco_usuario, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $c = new Consulta($sql);

    $dados = array($this->nomeUsuario, $this->emailUsuario, $this->senhaUsuario, $this->cpfUsuario, $this->rgUsuario, $this->TelefoneUsuario, $this->enderecoUsuario, $this->isAdmin);

    if($c->executaConsulta($dados)){
        return true;
    } else {
        return false;
    }
}

public function Visualizar($id){
    $sql = "SELECT * FROM usuario WHERE id_usuario = ?";

    $c = new Consulta($sql);

    $dados = array($id);

    $retorno = $c->executaConsulta($dados);
    if($retorno -> rowCount() > 0){
        return $retorno;
    } else {
        return NULL;
    }
}

}