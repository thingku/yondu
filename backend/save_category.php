<?php
session_start();
if(isset($_SESSION['datalog'])){
	$user_id=$_SESSION['datalog'];


	if(isset($_POST['createCat'])){

		header("location:../news/create_category.php");

	}

	if(isset($_POST['updateCat'])){

		$catId=$_POST['catId'];
		$categoryName=$_POST['categoryName'];

		include("../news/connection.php");

		$update = mysqli_query($con,"CALL updateCategory('".$catId."','".$categoryName."')");

		header("location:../news/manage_category.php?update=1");
	}

	if(isset($_POST['saveCat'])){

		$categoryName=$_POST['categoryName'];
		include("../news/connection.php");

		$insert=mysqli_query($con,"CALL SetCategory('".$categoryName."')");

		header("location:../news/manage_category.php?save=1");

	}

	if(isset($_POST['deleteCat'])){

		$cat=$_POST['cat'];
		$x=0;

		include("../news/connection.php");

		while($x!=count($cat)){

			$delete=mysqli_query($con,"CALL deleteCategoryById('".$cat[$x]."')");
			$x++;

		}

		header("location:../news/manage_category.php?delete=1");

	}

	if(isset($_POST['backCat'])){

		header("location:../news/manage_category.php");

	}
	
}else{

	header("location:../news/index.php");

}
?>