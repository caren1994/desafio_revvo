<?php
class UserController {
    private $model;

    public function __construct($model) {
        $this->model = $model;
    }

    public function getUsers() {
        $result = $this->model->getUsers();
        $users = array();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $users[] = $row;
            }
        }
        return $users;
    }
}