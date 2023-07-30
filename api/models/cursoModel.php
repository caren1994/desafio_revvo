<?php
class CursoModel {
    private $conn;
    private $table = 'cursos';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getCursos() {
        $query = "SELECT * FROM $this->table";
        $result = $this->conn->query($query);

        // Verifica se houve algum erro na execução da consulta
        if (!$result) {
            throw new Exception("Erro na consulta: " . $this->conn->error);
        }

        $cursos = array();
        while ($row = $result->fetch_assoc()) {
            $cursos[] = $row;
        }
        return $cursos;
    }
}
?>
