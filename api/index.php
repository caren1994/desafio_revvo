<?php 
function resposta($codigo, $msg){
    header('Access-Control-Allow-Origin: *');
    
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Content-Type: application/json');


    http_response_code($codigo);
    echo json_encode( $msg);

}


require_once('models/CursoModel.php');
require_once('controllers/CursoController.php');
require_once('models/UserModel.php'); 
require_once('controllers/UserController.php'); 
require_once('database/db_connection.php');

try {

    $database = new Database();
    $db = $database->getConnection();

    $cursoModel = new CursoModel($db);
    $cursoController = new CursoController($cursoModel);

    $userModel = new UserModel($db);
    $userController = new UserController($userModel);

    $method = $_SERVER['REQUEST_METHOD'];


    if (isset($_GET['url']) && $_GET['url'] === 'cursos') {
    
        switch ($method) {
            case 'GET':
                $cursos = $cursoController->getCursos();
                resposta(200, $cursos);
                break;
        }
        
    }
    if (isset($_GET['url']) && $_GET['url'] === 'users') {

        switch ($method) {
            case 'GET':
                $users = $userController->getUsers();
                resposta(200, $users);

                break;
        
            default:
                http_response_code(405);
                echo json_decode(array('message' => 'erro'));
                break;
        }
    }

}catch (Exception $e) {
    http_response_code(200);
    echo json_encode(array('message' => $e->getTrace()));
}



?>