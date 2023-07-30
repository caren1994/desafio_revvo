<?php
require_once 'validations/CursoValidation.php';

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
}
