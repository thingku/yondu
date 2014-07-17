<?php
session_start();
if(isset($_SESSION['datalog'])){
	$user_id=$_SESSION['datalog'];

	if(isset($_POST['publish'])){
		$articles=$_POST['sub'];
		$page=$_POST['pageNum'];
		$counter=0;

		while($counter!=count($articles)){
			include("../news/connection.php");
			
			$update=mysqli_query($con,"CALL updateArticle('".$articles[$counter]."','none','none','1','2','0')");
			$counter++;
		}
		header("location:../news/allArticles.php?page=$page");
	}

	if(isset($_POST['unpublish'])){
		$articles=$_POST['sub'];
		$page=$_POST['pageNum'];
		$counter=0;

		while($counter!=count($articles)){
			include("../news/connection.php");
			
			$update=mysqli_query($con,"CALL updateArticle('".$articles[$counter]."','none','none','2','3','0')");
			$counter++;
		}
		header("location:../news/allArticles.php?page=$page");
	}

	if(isset($_POST['delete'])){

		$articles=$_POST['sub'];
		$page=$_POST['pageNum'];
		$counter=0;

		while($counter!=count($articles)){
			include("../news/connection.php");
			
			$delete=mysqli_query($con,"CALL deleteArticle('".$articles[$counter]."')");
			$counter++;
		}
		header("location:../news/allArticles.php?page=$page");
	}

	if(isset($_POST['sort'])){
		$sortType=$_POST['sortType'];

		if($sortType==0)
			header("location:../news/allArticles.php?sort=$sortType");
		else if($sortType==1){
			$startDate=$_POST['startDate'];
			$endDate=$_POST['endDate'];

			header("location:../news/allArticles.php?startdate=$startDate&enddate=$endDate&sort=$sortType");
		}else if($sortType==2){
			$authorName=$_POST['authorName'];

			header("location:../news/allArticles.php?auth=$authorName&sort=$sortType");

		}else{

			$catName=$_POST['catName'];

			header("location:../news/allArticles.php?catName=$catName&sort=$sortType");
		}

	}
}else{
	header("location:../news/index.php");
}
?>