<?php
$insert=false;
if(isset($_POST['name'])){
$server="localhost";
$username="root";
$password="";

$con=mysqli_connect($server,
$username,$password);
if(!$con){
    die("Connection failed due to".mysqli_connect_error());
}

$name=$_POST['name'];
$age=$_POST['age'];
$height=$_POST['height'];
$weight=$_POST['weight'];
$bp=$_POST['bp'];
$gender=$_POST['gender'];
$bloodgrp=$_POST['blood'];
$lastdate=$_POST['date'];
$illness=$_POST['illness'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$address=$_POST['address'];
$city=$_POST['city'];
$state=$_POST['state'];
//echo $sql
$sql="INSERT INTO `donor`.`donor` (`Name`, `Age`, `Height`, `Weight`, `Blood Pressure`, `Gender`, `Blood Group`, `Last Donation Date`, `Illness`, `Email`, `Phone`, `HouseNo`, `City`, `State`, `Date`) VALUES ('$name', '$age', '$height', '$weight', '$bp', '$gender', '$bloodgrp', '$lastdate', '$illness', '$email', $phone, '$address', '$city', '$state', current_timestamp());";

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
     <title>Blood Donation | Donor Form</title>
     <link rel="stylesheet" href="donor.css"/>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Gravitas+One&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300..700&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</head>
<body>
     <header>
          <div class="form">Blood Flow</div>
          <nav style= "margin-right: 40px;">
               <a href = "#">Home</a>
               <a href = "#">About</a>
               <a href = "#" class="active">Donate Blood</a>
               <a href = "#">Find Blood</a>
               <a href = "#">Contact</a>
               <a href = "#">Login/Sign up</a>
          </nav>
     </header>
<div class="back">
     <section class="blood">
          <h1>Your Donation, Someone's Life</h1>
          <p>Join the movement. Help save lives with every drop you give. Discover donation camps, track your impact, and become a hero.</p>
     </section>

     <section class="form-box">
          <div class="box">
               <h2 style="text-align: center; margin-bottom: 12px; color: rgb(163, 25, 25); font-size: 30px;">Blood Donation Form (Donor)</h2>
               <form method="post" action="">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name"  >

                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" min="18" max="50"  >
               <div class="hwb1">
                    <label for="height">Height(cm)</label>
                    <label for="weight">Weight(kg)</label>
                    <label for="bp">Blood Pressure</label>
               </div>
               <div class="hwb">
                    
                    <input type="number" id="height" name="height" step="any" >

                    
                    <input type="number" id="weight" name="weight" step="any" >

                    
                    <input type="text" id="bp" name="bp"  >
               </div>
                    <!-- <label for="gender">Gender</label>
               <input type = "text" name = "gender" id = "gender"> -->

               <div class="form-group">
                    <label for="gender">Gender (Required) :</label>
                    <select id="gender" name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                    <label for="blood">Blood Group</label>
               <select id="blood" name="blood"  >
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
                    <label>Last Donation Date</label>
                    <input type="date" name="date" >
                    <label>Any chronic illness?</label>
                    <input type="text" name="illness">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"  >
           
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" pattern="{10}"  >
           
                    <button type="button" id="getLocationBtn">Get My Location</button>

                    <div id="map"></div>
                    
                    <label for="address">Flat, Houseno., Building, Company, Apartment</label>
                    <textarea id="address" name="address" rows="3"  ></textarea>

                    <label for="city">City</label>
                    <input type="text" id="city" name="city"  required>

                    <label for="state">State</label>
                    <input type="text" id="state" name="state"  required>


                    <label for="document">Upload Reports (PDF/Image)</label>
                    <input type="file" id="document" name="document" accept=".pdf,.jpg,.jpeg,.png"  >
           
                    <input type="submit" value="Submit" id = "submit">
               </form>
          </div>
     </section>
</div>
     <footer>
          &copy;2025 Blood Donation. Empowering Life through donation.
     </footer>
     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
     <script src = "donor.js"></script>
</body>
</html>