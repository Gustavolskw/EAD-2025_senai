<?php
/*1-*/
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test-db";
$table = "cadastro_non_injectable";

/*2-*/
$conn = new mysqli($servername, $username, $password, $dbname);

/*3-*/
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

/*4-*/
$nome = trim($_POST['nome']);
$email = trim($_POST['email']);

/*5-*/
$sql = "INSERT INTO $table (nome, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);

/*6-*/
if ($stmt === false) {
    die("Erro na preparação da consulta: " . $conn->error);
}

/*7-*/
$stmt->bind_param("ss", $nome, $email);

/*8-*/
if ($stmt->execute()) {
    /*9-*/
    header("Location: success.php");
    exit();
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

/*10-*/
$stmt->close();
$conn->close();
