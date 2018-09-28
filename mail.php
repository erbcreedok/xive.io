<?php 

$subject  = "Xive.io";

$fname = $_POST['fullName'] ?:'';
$email = $_POST['email'] ?:'';
$phone = $_POST['phoneNum'] ?:'';
$formText = $_POST['formText'] ?:'';


$message = '
        <p><b>Full name:</b> '.$fname.'</p>
		<p><b>E-mail:</b> '.$email.'</p>
		<p><b>Telephone number:</b> '.$phone.'</p>
        <p><b>Message:</b> '.$formText.'</p>';

 

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Xive.io <info@xive.io>\r\n";

//mail('mr.mashurov@gmail.com', $subject, $message, $headers );
mail('info@xive.io', $subject, $message, $headers );
	
?>