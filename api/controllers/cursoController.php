<?php
require_once './validations/validationsPost.php';
require_once './validations/validationsPut.php';
require_once './validations/validationsDelete.php';


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
        $validations=validationsPost($titulo, $descricao, $imagem);
        if($validations){
            $result = $this->model->addCurso($titulo, $descricao, $imagem);
            return $result;
        }
        return null;
 
    }

    public function updateCurso($titulo, $descricao, $imagem,$id) {
        $validations=validationsPut($titulo, $descricao, $imagem,$id);
        if($validations){
        return $this->model->updateCurso($titulo, $descricao,$imagem,$id);
        }
        return null;
    }
    
    public function deleteCurso($id) {
        $validations=validationsDelete($id);
        if($validations){
        return $this->model->deleteCurso($id);
        }
        return null;
    }

}
