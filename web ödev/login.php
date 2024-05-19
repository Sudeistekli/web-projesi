<?php
session_start();

// Kullanıcı adı ve şifre doğrulama fonksiyonu
function authenticate($username, $password) {
    // Örnek olarak, burada bir veritabanı sorgusu yapılabilir
    // Ancak, bu örnekte sadece örnek bir doğrulama gerçekleştireceğiz
    $valid_username = "b1812100001"; // Örnek kullanıcı adı
    $valid_password = "b1812100001"; // Örnek şifre

    // Kullanıcı adı ve şifre doğrulaması
    if ($username === $valid_username && $password === $valid_password) {
        return true; // Doğrulama başarılı
    } else {
        return false; // Doğrulama başarısız
    }
}

// Post isteği kontrolü
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen kullanıcı adı ve şifre
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifre boş mu kontrolü
    if (empty($username) || empty($password)) {
        echo "Kullanıcı adı ve şifre boş bırakılamaz.";
    } else {
        // Kullanıcı adının e-posta formatında olup olmadığının kontrolü
        if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
            echo "Geçersiz e-posta adresi formatı.";
        } else {
            // Kullanıcı doğrulama işlemi
            if (authenticate($username, $password)) {
                $_SESSION["username"] = $username; // Kullanıcı oturumunu başlat
                header("Location: welcome.php"); // Başarılı giriş durumunda yönlendir
                exit();
            } else {
                echo "Kullanıcı adı veya şifre yanlış.";
            }
        }
    }
}
?>