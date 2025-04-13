<?php
$insert=false;
if(isset($_POST['name'])){
$server="localhost";
$username="root";
$password="";

$con=mysqli_connect($server,$username,$password);

if(!$con){
    die("Connection failed due to".mysqli_connect_error());
}
// echo("Connection to database successful.")

$name=$_POST['name'];
$age=$_POST['age'];
$gender=$_POST['gender'];
$bloodgrp=$_POST['blood'];
$hospital=$_POST['hospital'];
$location=$_POST['location'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$emergency=$_POST['$emergency'];
$sql="INSERT INTO `recipient`.`recipient` (`Name`, `Age`, `Gender`, `Blood Group`, `Hospital Name`, `Hospital Location`, `Email`, `Phone`, `Emergency`, `Date`) VALUES ('$name', '$age', '$gender', '$bloodgrp', '$hospital', '$location', '$email', '$phone', '$emergency', current_timestamp());";
//echo $sql

if($con->query($sql)==true){
    $insert=true;
}else{
    echo "ERROR: $sql <br> $con->error";
}

$con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Blood Donation | Recipient Form</title>
     <link rel="stylesheet" href="recipient.css"/>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Gravitas+One&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300..700&display=swap" rel="stylesheet">
</head>
<body>
     <header>
          <div class="form">Blood Flow</div>
          <nav style= "margin-right: 40px;">
               <a href = "#">Home</a>
               <a href = "#">About</a>
               <a href = "#">Donate Blood</a>
               <a href = "#">Find Blood</a>
               <a href = "#">Contact</a>
               <a href = "#">Login/Sign up</a>
          </nav>
     </header>

     <section class="blood">
          <h1>Need Blood Urgently ?</h1>
          <p style="font-style: italic;">We're here to help. Submit you request and get connected to donors quickly.</p>
     </section>

     <section class="form-box">
          <div class="box">
               <h2 style="text-align: center; margin-bottom: 12px; color: rgb(178, 6, 6); font-size: 30px;">Blood Recipient Request Form</h2>
               <form action="thank.htm" method="post" action="">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required>
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" min="1" required>
           
                    <label for="gender">Gender</label>
               <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
               </select>
                 
                    <label for="blood">Blood Group Required</label>
               <select id="blood" name="blood" required>
                    <option value="" disabled selected>Select</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
               </select>
                    <label for="hospital">Hospital Name</label>
                    <input type="text" id="hospital" name="hospital" required>
   
                    <label for="location">Hospital Location</label>
                    <input type="text" id="location" name="location" required>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
           
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" pattern="{10}" required>
                    
                    <label for="emergency">Emergency ?</label>
                    <select id="emergency" name="emergency" required>
                         <option value="" disabled selected>Select</option>
                         <option>Yes</option>
                         <option>No</option>
                    </select>
                    

                    <label for="document">Upload Doctor Prescription (PDF/Image)</label>
                    <input type="file" id="document" name="document" accept=".pdf,.jpg,.jpeg,.png" required>
           
                    <input type="submit" value="Request Blood">
               </form>
          </div>
     </section>    
     <footer>
          &copy;2025 Blood Donation. Empowering Life through donation.
     </footer>
</body>
</html>