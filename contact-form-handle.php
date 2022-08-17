<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$email_from = 'saahibdeep333@gmail.com';
$email_subject = "Website Form Submission";
$email_body = "Name: . $name . \n" ."Email: . $email . \n" .
"Message: . $message .\n";

$email_to = 'saahibdeep333@gmail.com';
$headers = "From:. $email_from \r\n";
$headers .= "Reply-to:. $email \r\n";
mail($to, $email_subject, $email_body, $headers);
header("Location: contact.html");

?>