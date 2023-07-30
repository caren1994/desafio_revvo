<?php
require_once 'validations/CursoValidations.php';

class CursoController {
    private $model;

    public function __construct($model) {
        $this->model = $model;
    }

    public function getCursos() {
        $result = $this->model->getCursos();
        $cursos = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $cursos[] = $row;
            }
        }
        return $cursos;
    }
    public function addCurso($titulo, $descricao, $imagem) {
        if(cursoValidation($titulo,$descricao,$imagem)){
            return $this->model->addCurso($titulo, $descricao, $imagem);
        }
        return null;
    }

    public function updateCurso($id, $titulo, $descricao, $imagem) {
        return $this->model->updateCurso($id, $titulo, $descricao,$imagem);
    }
    
    public function deleteCurso($id) {
        return $this->model->deleteCurso($id);
    }

}
