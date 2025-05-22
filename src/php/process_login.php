<?php
require 'db.php';
session_start();

$username = $_POST['usuario']; // pode ser email ou nome de usuário
$password = $_POST['senha'];

// Verifica se é um nome de usuário ou email
$sql = "SELECT * FROM users WHERE usuario = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    if (password_verify($password, $user['senha'])) {
        $_SESSION['username'] = $user['usuario'];
        header("Location: ../../pages/match.html");
    } else {
        echo "<script>alert('Senha incorreta. Tente Novamente.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Usuário ou senha incorretos. Tente Novamente.'); window.history.back();</script>";
}
?>
