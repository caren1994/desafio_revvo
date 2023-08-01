<?php

function validationsDelete($id){
    if (empty($id)) {
        http_response_code(400);
        echo json_encode(array("message" => "Os campos 'Titulo', 'Descricao' e 'Imagem' são obrigatórios."));
        exit;
    }
    return true;
}
?>