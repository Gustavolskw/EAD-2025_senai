<?php
/*1-*/
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test-db";
$table = "cadastro_injectable";

/*2-*/
$conn = new mysqli($servername, $username, $password, $dbname);

/*3-*/
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

/*4-*/
$nome = $_POST['nome'];
$email = $_POST['email'];

/*5-*/
$sql = "INSERT INTO $table (nome, email) VALUES ('$nome', '$email')";

/*6-*/
if ($conn->query($sql) === TRUE) {
    /* 7-*/
    header("Location: success.php");
    exit();
} else {
    echo "Erro ao cadastrar: " . $conn->error;
}

/*8-*/
$conn->close();
