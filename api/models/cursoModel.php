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
    public function getCursoId($id) {

        $query = "SELECT * FROM $this->table WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        
       $result = $stmt->get_result()->fetch_assoc();
        return $result;
    }
    public function addCurso($titulo, $descricao, $imagem) {
        $query = "INSERT INTO $this->table (titulo, descricao, imagem) VALUES (?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $titulo, $descricao, $imagem);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function updateCurso( $titulo, $descricao, $imagem,$id) {
        $query = "UPDATE $this->table SET titulo = ?, descricao = ?,
        imagem = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssi", $titulo, $descricao, $imagem,$id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function deleteCurso($id) {
        $query ="DELETE FROM $this->table WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}

?>
