<?php 

	$test = $_POST['name'];

	$msg = "First line of text\nSecond line of text";

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);

	// send email
	mail("rafon.amista21@gmail.com",$test,$msg);

	echo $test;	

?>