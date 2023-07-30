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


        if (!$result) {
            throw new Exception("Erro na consulta: " . $this->conn->error);
        }

        $cursos = array();
        while ($row = $result->fetch_assoc()) {
            $cursos[] = $row;
        }
        return $cursos;
    }
    public function getCursoId() {
        $query = "SELECT * FROM $this-&gt;table WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        
       $result = $stmt->get_result();
        return $result;
    }
    public function addCurso($titulo, $descricao, $imagem) {
        $query = "INSERT INTO $this-&gt;table (titulo, descrição, imagem) VALUES (?,?,$imagem)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ss", $titulo, $descricao, $imagem);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function updateCurso($id, $titulo, $descricao, $imagem) {
        $query = "UPDATE $this->table SET titulo = ?, descricao = ?,
        imagem = $imagem WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssi", $titulo, $descricao, $id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteCurso($id) {
        $query ="DELETE FROM $this-&gt;table WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}

?>
