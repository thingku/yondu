<?php
session_start();
if(isset($_SESSION['datalog'])){
	$user_id=$_SESSION['datalog'];


	if(isset($_POST['addUser'])){

		header("location:../news/add_user.php");

	}

	if(isset($_POST['saveUser'])){

		$username=$_POST['username'];
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$userType=$_POST['userType'];
		include("../news/connection.php");

		$insert=mysqli_query($con,"CALL SetUser('".$fname."','".$lname."','".$userType."','".$username."','".$username."')");

		header("location:../news/manage_user.php?save=1");

	}

	if(isset($_POST['updateUser'])){

		$userId=$_POST['userId'];
		$username=$_POST['username'];
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$userType=$_POST['userType'];
		include("../news/connection.php");

		$update=mysqli_query($con,"CALL updateUser('".$userId."','".$username."','".$fname."','".$lname."','".$userType."')");

		header("location:../news/manage_user.php?save=1");

	}


	if(isset($_POST['deleteUser'])){

		$userId=$_POST['userId'];
		$x=0;

		include("../news/connection.php");

		while($x!=count($userId)){

			$delete=mysqli_query($con,"CALL deleteUserById('".$userId[$x]."')");
			$x++;

		}

		header("location:../news/manage_user.php");

	}

	if(isset($_POST['backUser'])){

		header("location:../news/manage_user.php");

	}

}else{

	header("location:../news/index.php");

}
?>