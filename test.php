<?php

	$msg = "First line of text\nSecond line of text";

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);

	// send email
	$x = mail("dummyyondu@gmail.com","Testing",$msg);

	if ( $x == true ) {

		echo "message sent";

	} else {

		echo "message not sent";

	}

?>