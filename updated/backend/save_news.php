<?php
session_start();
if(isset($_SESSION['datalog'])){
	$user_id=$_SESSION['datalog'];

	if(isset($_POST['save'])){

		$title=$_POST['title'];
		$content=$_POST['content'];
		$userType = $_POST['userType'];
		$categoryOption = $_POST['categoryOption'];

		include("../news/connection.php");

		$q=mysqli_query($con,"CALL SetArticle('".$title."','".$content."','2','".$categoryOption."')");
		
		include("../news/connection.php");

		$q=mysqli_query($con,"CALL getLatestArticle()");
		$getq=mysqli_fetch_array($q);

		$last=$getq['latest'];
		
		include("../news/connection.php");
		$q=mysqli_query($con,"CALL setOwner('".$user_id."','".$last."','1','0')");

		header("location:../news/submitted.php");

		
	}

	if(isset($_POST['savePublish'])){

		$title=$_POST['title'];
		$content=$_POST['content'];
		$userType = $_POST['userType'];
		$categoryOption = $_POST['categoryOption'];

		include("../news/connection.php");

		$q=mysqli_query($con,"CALL SetArticle('".$title."','".$content."','1','".$categoryOption."')");

		include("../news/connection.php");

		$q=mysqli_query($con,"CALL getLatestArticle()");
		$getq=mysqli_fetch_array($q);

		$last=$getq['latest'];
		
		include("../news/connection.php");
		$q=mysqli_query($con,"CALL setOwner('".$user_id."','".$last."','1','0')");

		header("location:../news/home.php");

	}

	if(isset($_POST['draft'])){

		$title=$_POST['title'];
		$content=$_POST['content'];
		$categoryOption = $_POST['categoryOption'];

		include("../news/connection.php");
		$q=mysqli_query($con,"CALL SetArticle('".$title."','".$content."','3','".$categoryOption."')");

		include("../news/connection.php");
		$q=mysqli_query($con,"CALL getLatestArticle()");

		$getq=mysqli_fetch_array($q);

		$last=$getq['latest'];
		
		include("../news/connection.php");
		$q=mysqli_query($con,"CALL setOwner('".$user_id."','".$last."','1','0')");

		header("location:../news/drafts.php");

	}

}else{
	header("location:../news/index.php");
}
?>