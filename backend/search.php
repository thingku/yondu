<?php
session_start();

if(isset($_SESSION['datalog'])){

	$user_id=$_SESSION['datalog'];

	

	if(isset($_POST['sort'])){

		$sortType=$_POST['sortType'];
		$type=$_GET['type'];

		$backPage="";

		if($type==1){
			$backPage="home.php";
		}else if ($type==2){
			$backPage="submitted.php";
		}else if ($type==3){
			$backPage="drafts.php";
		}

		if($sortType==1){
			$startDate=$_POST['startDate'];
			$endDate=$_POST['endDate'];

			header("location:../news/$backPage?startdate=$startDate&enddate=$endDate&sort=$sortType");
		}else if($sortType==3) {

			$catName=$_POST['catName'];

			header("location:../news/$backPage?catName=$catName&sort=$sortType");

		}else{

			header("location:../news/$backPage");

		}
	}


}else{

	header("location:../news/index.php");

}
?>