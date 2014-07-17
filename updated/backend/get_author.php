<?php
session_start();


	$article_id = $_GET['articleId'];

	include('../news/connection.php');

	$q=mysqli_query($con,"CALL getOwnerByArticleId('".$article_id."','1','0')");

	$nameArray = array();

	$countResults=mysqli_num_rows($q);

	$x=0;

	$name="";


	while($getq=mysqli_fetch_array($q)){
			
		if($countResults==($x+1))

			$name .= ucwords($getq['fname']).' '.ucwords($getq['lname']);

		else

			$name .= ucwords($getq['fname']).' '.ucwords($getq['lname']).' | ';
		
		$x++;

	}
	$nameArray['name'] = $name;

	echo json_encode($nameArray);
?>