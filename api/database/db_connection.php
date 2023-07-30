<?php
class Database {
    private $host = '127.0.0.1';
    private $dbname = 'crud_revvo';
    private $user = 'root';
    private $password = 'root';
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->dbname);
        if ($this->conn->connect_error) {
            die('Erro na conexão com o banco de dados: ' . $this->conn->connect_error);
        }
    }

    public function getConnection() {
        return $this->conn;
    }
}
?>