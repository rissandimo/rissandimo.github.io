<? php

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$message = $_POST['message'];

$to = 'nassiromid@gmail.com';
$subject = 'contact form';
$txt = '';
$headers = '';



mail($to,$subject,$txt,$headers);
?>