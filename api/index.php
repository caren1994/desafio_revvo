<?php 
function resposta($codigo, $msg){
    header('Access-Control-Allow-Origin: *');
    
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Content-Type: application/json');


    http_response_code($codigo);
    echo json_encode( $msg);

}
try {

require_once('models/cursoModel.php');
require_once('controllers/cursoController.php');
require_once('models/userModel.php'); 
require_once('controllers/userController.php'); 
require_once('database/db_connection.php');

    $database = new Database();
    $db = $database->getConnection();

    $cursoModel = new CursoModel($db);
    $cursoController = new CursoController($cursoModel);

    $userModel = new UserModel($db);
    $userController = new UserController($userModel);

    $method = $_SERVER['REQUEST_METHOD'];

    if (isset($_GET['url']) && preg_match('/^cursos\/(\d+)$/', $_GET['url'], $matches)) {
        $id = $matches[1];
    
        switch ($method) {
            case 'GET':
                $curso = $cursoController->getCursoId($id);
                if ($curso) {
                    resposta(200, $curso);
                } else {
                    resposta(404, ['mensagem' => 'Curso não encontrado']);
                }
                break;

            default:
                resposta(405, ['mensagem' => 'Método não permitido']);
                break;
        }

    } elseif (isset($_GET['url']) && $_GET['url'] === 'cursos') {
    
        switch ($method) {

            case 'GET':
                
                $cursos = $cursoController->getCursos();
                resposta(200, $cursos);
            break;
        
            case 'POST':
                $data = json_decode(file_get_contents("php://input"), true);
                $titulo = $data["titulo"];
                $descricao = $data["descricao"];
                $imagem = $data["imagem"];
                $result = $cursoController->addCurso($titulo, $descricao,
                $imagem);
                if ($result) {
                http_response_code(201);
                echo json_encode(array("message" => "Curso criado com
                sucesso"));
                } else {
                http_response_code(500);
                echo json_encode(array("message" => "Erro ao criar
                curso"));
                }
            break;
            
            case "PUT":
                parse_str(file_get_contents("php://input"), $putVars);
                $id = $putVars["id"];
                $titulo = $putVars["titulo"];
                $descricao = $putVars["descricao"];
                $imagem = $putVars["imagem"];
                $result = $cursoController->updateCurso($id, $titulo,
                $descricao, $imagem);
                if ($result) {
                http_response_code(200);
                echo json_encode(array("message" => "Curso atualizado com
                sucesso"));
                } else {
                http_response_code(500);
                echo json_encode(array("message" => "Erro ao atualizar
                curso"));
                }
            break;
            
            default:
                 http_response_code(405);
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
    http_response_code(500);
    echo json_encode(array('message' => $e->getTrace()));
}



?>
