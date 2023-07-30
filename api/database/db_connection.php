<?php

class Database {

    private $dbname = 'crud_revvo';
    private $user = 'root';
    private $password = '123456';
    private $conn;

    public function __construct() {
        $this->conn = new mysqli('db', $this->user, $this->password, $this->dbname,3306);

        if ($this->conn->connect_error) {
            die('Erro na conexão com o banco de dados: ' . $this->conn->connect_error);
        }
    }

    public function getConnection() {
        return $this->conn;
    }
}
?>