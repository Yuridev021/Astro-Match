<?php
require 'db.php';

$username = $_POST['usuario'];
$email = $_POST['email'];
$password = password_hash($_POST['senha'], PASSWORD_DEFAULT);

// Corrigido: agora verifica username OU email
$sql = "SELECT * FROM users WHERE usuario=? OR email=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Usuário ou email já cadastrado.";
} else {
    $sql = "INSERT INTO users (usuario, email, senha) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);
    
    if ($stmt->execute()) {
        header("Location: ../../pages/login.html");
        exit;
    } else {
        echo "Erro ao registrar.";
    }
}
?>
