<?php
    $host = "localhost:8012";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "test1";

    // Database connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_POST['save'])) {  
        $first_name = $_POST['firstName'];
        $last_name = $_POST['lastName'];
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $age = $_POST['age'];
        $phone = $_POST['phone'];

        $sql_query = "INSERT INTO entry_details (firstName, lastName, gender, email, age, mobile)
            VALUES ('$firstName', '$lastName', '$gender', '$email','$age', '$phone')";

if (mysqli_query($conn, $sql_query)) 
{
   echo "New Details Entry inserted successfully !";
} 
else
{
   echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
}
?>
