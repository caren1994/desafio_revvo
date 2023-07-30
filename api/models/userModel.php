<?php
class UserModel {
    private $conn;
    private $table = 'user';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getUsers() {
        $query = "SELECT * FROM $this->table";
        $result = $this->conn->query($query);
        return $result;
    }
}
