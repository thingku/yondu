<?php
		//require "news/connection.php";
		//error_reporting(E_ERROR | E_PARSE);
		ini_set('max_execution_time', 300); 

	if(isset($_POST['send'])){

		$fullName = $_POST['fullName'];
		$company = $_POST['company'];
		$address = $_POST['address'];
		$emailSender = $_POST['emailSender'];
		$contact = $_POST['contact'];
		$message = $_POST['message'];

		$ini_array = parse_ini_file("config.ini");

		require_once( "EmailPHP/Mail.php");

		require_once("EmailPHP/Mail/Mail_Mime-1.8.5/Mail/mime.php");
		
		$from = $fullName."<".$emailSender.">";
		$to = "Dummy Yondu"."<dummyYondu@gmail.com>";

		$subject = $ini_array['Subject'];
		$body = "Company: $company <br/> Address: $address <br/> Contact: $contact <br/> Email: $emailSender <br/><br/> $message"; // MESSAGE
		$esc = "\n";
		$mime = new Mail_mime($esc);
		$mime->setHTMLBody($body);
		$host     = "ssl://smtp.gmail.com";
		$port     = "465";
		$username =  $ini_array['Email'];  //<> give errors
		$password =  $ini_array['Password'];

		$headers = array ('From' => $from,
		'To' => $to,
		'Subject' => $subject);

		$message = $mime->get();
		$headers = $mime->headers($headers);
		$smtp = Mail::factory('smtp',
		array ('host' => $host,
		'port' => $port,
		'auth' => true,
		'username' => $username,
		'password' => $password));

		$mail = $smtp->send($to, $headers, $body);

		 if (PEAR::isError($mail)) {
		   echo("<p>" . $mail->getMessage() . "</p>");
		  } else {

		   header("location:page-5.php?send=1");
		  }

	}
								
?>

