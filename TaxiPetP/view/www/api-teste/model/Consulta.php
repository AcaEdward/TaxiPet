<?php
require_once 'Conexao.php';
class Consulta {
    private $query;
    function __construct($query) {
        $this->query = $query;
    }
    function getQuery() {
        return $this->query;
    }
    function setQuery($query) {
        $this->query = $query;
    }
    public function executaConsulta($dados) {
        try {
            $c = new Conexao();
            $pdo = $c->open();
            $stmt = $pdo->prepare($this->query);
            for ($i = 0; $i < count($dados); $i++) {
                $stmt->bindValue($i+1, $dados[$i], PDO::PARAM_INT);
            }
            $stmt->execute();
            return $stmt;
        } catch (PDOException $e) {
            echo "<h3>ERRO! " . $e->getMessage() . "</h3>";
        }
    }
}