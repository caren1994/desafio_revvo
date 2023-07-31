<?php
require_once 'validations/CursoValidations.php';

class CursoController {
    private $model;

    public function __construct($model) {
        $this->model = $model;
    }

    public function getCursos() {
        $result = $this->model->getCursos();
        if ($result) {
            return $result;
            
        }
        return null;
    }
    public function getCursoId($id) {
        $curso = $this->model->getCursoId($id);

        if ($curso) {
            return $curso;
        } else {
            return null;
        }
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
