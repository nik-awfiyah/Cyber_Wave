<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "";
    $database = "bookings";

    $conn = new mysqlin($servername,$username,$password,$database);

    if ($conn->connect_error) {
        die("Connection failed:". $conn->connect_error);
    }

    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $class_level = $_POST['class_level'];


    //Insert data into database
    $sql = "INSERT INTO bookings (id,name,email,phone,class_level)
    VALUES ('$id', '$name', '$email', '$phone', '$class_level')";

    if ($conn->query($sql) === TRUE) {

        echo "<script>alert('Checkout complete');</script";

        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "Error: " .$sql. "<br>" . $conn->error;
    }
?>