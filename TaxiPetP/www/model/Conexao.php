<?php 

class Conexao{
    private $host = "localhost",
    private $user = "admin",
    private $password = "",
    private $port = "3306",
    private $con = NULL,
    private $dbname = "taxi_pet",

    
    public function open() {
        $this->con = new PDO('mysql:host=' . $this->host . ';port=' . $this->port . ';dbname=' . $this->dbname . '', $this->user, $this->password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')); //� uma maneira de for�ar PDO usar O UTF-8 para fazer a conex�o com mysql
        return $this->con;
    }
    public function close() {
        $this->con = NULL;
    }
    
    public function checkStatus(){
        if(!$this->con){
            echo "<h3> O sistema n&atildeo est&aacute conectado a [$this->dbname] em [$this->host]</h3>";
        } else {
            echo "<h3> O sistema est&aacute conectado a [$this->dbname] em [$this->host]</h3>";
        }
    }
}