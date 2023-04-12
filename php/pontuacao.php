<?php
    // Conectar ao banco de dados
    $pdo = new PDO('sqlite:score.db');

    // Obter os dados do formulário
    $nome = $_POST['nome'];
    $pontuacao = $_POST['pontuacao'];

    // Inserir os dados na tabela de pontuação
    $sql = "INSERT INTO scores (name, score) VALUES (:name, :score)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['name' => $nome, 'score' => $pontuacao]);

    echo "Pontuação enviada com sucesso!";
?>
