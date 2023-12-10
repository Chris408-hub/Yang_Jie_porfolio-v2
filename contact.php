<?php
// 连接到数据库
$servername = "localhost"; // 数据库主机名
$username = "username"; // 数据库用户名
$password = "password"; // 数据库密码
$dbname = "database_name"; // 数据库名

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 处理 POST 请求提交的表单数据
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // 准备 SQL 语句并执行插入操作
    $sql = "INSERT INTO your_table_name (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        // 插入成功，可以执行其他操作，比如显示成功消息或重定向到另一个页面
        header("Location: thank_you.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// 关闭数据库连接
$conn->close();
?>
