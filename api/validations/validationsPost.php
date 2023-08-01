
<?php
function validationsPost($titulo, $descricao, $imagem){
    if (empty($titulo) || empty($descricao) || empty($imagem)) {
        http_response_code(400);
        echo json_encode(array("message" => "Os campos 'Titulo', 'Descricao' e 'Imagem' são obrigatórios."));
        exit;
    }
    return true;
}
?>