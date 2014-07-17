<?php
session_start();
if(isset($_SESSION['datalog'])){

	include("../news/connection.php");

	$user_id=$_SESSION['datalog'];

	$q=mysqli_query($con,"CALL GetUser('".$user_id."','2')");

	$getq=mysqli_fetch_array($q);

	$user_type=$getq['user_type'];
	
	if(isset($_POST['save'])){

		$article_id=$_POST['article_id'];
		$title=$_POST['title'];
		$content=$_POST['content'];
		$categoryOption = $_POST['categoryOption'];
		$userType = $_POST['userType'];

		include("../news/connection.php");

		$q=mysqli_query($con,"CALL updateArticle('".$article_id."','".$title."','".$content."','2','1','".$categoryOption."')");
		
		header("location:../news/submitted.php");

	}

	if(isset($_POST['savePublish'])){

		$article_id=$_POST['article_id'];
		$title=$_POST['title'];
		$content=$_POST['content'];
		$categoryOption = $_POST['categoryOption'];
		$userType = $_POST['userType'];

		include("../news/connection.php");

		$q=mysqli_query($con,"CALL updateArticle('".$article_id."','".$title."','".$content."','1','1','".$categoryOption."')");

		header("location:../news/home.php");

	}

	if(isset($_POST['draft'])){

		$article_id=$_POST['article_id'];
		$title=$_POST['title'];
		$content=$_POST['content'];
		$categoryOption = $_POST['categoryOption'];

		include("../news/connection.php");
		
		$q=mysqli_query($con,"CALL updateArticle('".$article_id."','".$title."','".$content."','3','1','".$categoryOption."')");

		header("location:../news/drafts.php");

	}

	if(isset($_POST['saveOnly'])){

		$article_id=$_POST['article_id'];
		$title=$_POST['title'];
		$content=$_POST['content'];
		$state=$_POST['state'];
		$type=$_POST['type'];

		include("../news/connection.php");
		$q=mysqli_query($con,"CALL updateArticle('".$article_id."','".$title."','".$content."','".$state."','1','".$categoryOption."')");
		
		if($type=="none"){

			header("location:../news/allArticles.php");

		}else if($type=="2"){

			header("location:../news/submitted.php");

		}else if($type=="1"){

			header("location:../news/home.php");

		}else if($state=="draft"){

			header("location:../news/drafts.php");

		}
			
	}

	if(isset($_POST['back'])){

		header("location:../news/allArticles.php");

	}

	if(isset($_POST['sort'])){
		
		$sortType=$_POST['sortType'];
		//$type=$_GET['type'];

		if($sortType==1){
			$startDate=$_POST['startDate'];
			$endDate=$_POST['endDate'];

			header("location:../news/drafts.php?startdate=$startDate&enddate=$endDate&sort=$sortType");
		}else if($sortType==3) {

			$catName=$_POST['catName'];

			header("location:../news/drafts.php?catName=$catName&sort=$sortType");

		}else{

			header("location:../news/drafts.php");

		}
			/*$startDate=$_POST['startDate'];
			$endDate=$_POST['endDate'];

			header("location:../drafts.php?sort=1&startdate=$startDate&enddate=$endDate");*/
		
	}

	if(isset($_POST['saveAuthor'])){

		$editor=$_POST['editor'];
		$article_id=$_POST['article_id'];

		$user_ids=$_POST['user_ids'];
		$owner_ids=$_POST['owner_ids'];
		$edit2=$_POST['edit'];
		//if(isset($_POST['add_author'])){
			$authors=$_POST['add_author'];
			$edit=$_POST['edit_flag'];
			$x=0;

			include("../news/connection.php");

			while($x!=count($owner_ids)){

				$del=mysqli_query($con,"CALL deleteOwner('".$article_id."','".$user_ids[$x]."','1','0')");

				$x++;
			}

			$x=0;

			include("../news/connection.php");

			while($x!=count($owner_ids)){

				$insert=mysqli_query($con,"CALL setOwner('".$user_ids[$x]."','".$article_id."','2','".$edit2[$x]."')");

				$x++;
			}

			include("../news/connection.php");

			$x=0;

			while($x!=count($authors)){

				if($authors[$x]!='0'){

					$check=mysqli_query($con,"CALL getOwnerByArticleId('".$article_id."','2','".$authors[$x]."')");

					include("../news/connection.php");

					if(mysqli_num_rows($check)== 0){

						$insert=mysqli_query($con,"CALL setOwner('".$authors[$x]."','".$article_id."','2','".$edit[$x]."')");

					}
				}

				$x++;
			}
		//}
		header("location:../news/edit_news.php?id=$article_id&editor=$editor&type=none");

	}

	if(isset($_POST['deleteAuthor'])){

		$article_id=$_POST['article_id'];
		$editor=$_POST['editor'];
		$delete=$_POST['delete'];
		$x=0;

		include("../news/connection.php");

		while($x!=$delete){

			$delete=mysqli_query($con,"CALL deleteOwner('0','0','2','".$delete[$x]."')");

			$x++;
		}

		header("location:../news/edit_news.php?id=$article_id&editor=$editor&type=none");

	}

	if(isset($_POST['deleteDraft'])){

		$draft=$_POST['sub'];
		$x=0;

		include("../news/connection.php");

		while($x!=count($draft)){

			$delete=mysqli_query($con,"CALL deleteArticle('".$draft[$x]."')");

			$x++;

		}

		header("location:../news/drafts.php");
		
	}

}else{

	header("location:../news/index.php");

}
?>