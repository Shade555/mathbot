<?php
session_start();

// Database connection
$host = "localhost";
$user = "root";
$password = "";
$database = "mathbot_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prevent SQL injection
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    // Check database for user
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Successful login
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");  // Redirect to dashboard or another page
        exit();
    } else {
        // Login failed
        echo "<script>alert('Invalid username or password');</script>";
    }
}

$conn->close();
?>
