<?php
session_start();

// Kullanıcı adı ve şifre doğrulama fonksiyonu
function authenticate($username, $password) {
    $student_id = "G231210031"; // Örnek öğrenci numarası
    $valid_username = $student_id . "@sakarya.edu.tr"; // Geçerli kullanıcı adı
    $valid_password = $student_id; // Geçerli şifre

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

if ($input_username == $username && $input_password == $password) {
    // Başarılı giriş
    $_SESSION['username'] = $username;
    echo "<script>alert('Başarılı giriş! Hoş geldiniz, $username!');</script>";
    echo "<script>window.location.href = 'hosgeldiniz.php';</script>";
    exit;
}
?>

<?php
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: login.html");
    exit();
}
$student_id = explode('@', $_SESSION["username"])[0];
?>


<?php
session_start();
session_destroy();
header("Location: login.html");
exit();
?>








