<?php
session_start();



	include('../news/connection.php');

	
	$query = mysqli_query($con,"CALL countArticleNoFilter()");

	$getquery=mysqli_fetch_array($query);

	$new_count=$getquery['num'];

	$old_count=$_SESSION['old_count_articles'];

	/*if(isset($_GET['update'])){

			include('../news/connection.php');

			$start = $_GET['start'];

			$limit = $_GET['limit'];

			$q=mysqli_query($con,"CALL getAllArticleNews('".$start."','".$limit."')");

			$getq = mysqli_fetch_array($q);

			echo json_encode($getq);

	}else{*/

		if($new_count>$old_count){

			$_SESSION['old_count_articles'] = $new_count;

			include('../news/connection.php');

			$query2=mysqli_query($con,"CALL getLatestArticleWithContent()");

			$getquery2 = mysqli_fetch_array($query2);

			$getquery2['type'] = 'add';

			echo json_encode($getquery2);

	
		}/*else if ($new_count<$old_count){

			$_SESSION['old_count_articles'] = $new_count;

			include('../news/connection.php');

			$start = $_GET['start'];

			$limit = $_GET['limit'];

			$q=mysqli_query($con,"CALL getAllArticleNews('".$start."','".$limit."')");

			$articleArray = array();

			$x=0; 

			while($getq=mysqli_fetch_array($q)){

				array_push($articleArray, $getq['article_id']);

				$x++;

			}

			$_SESSION['old_count_articles'] = $x;

			$articleArray['type'] = 'subtract';

			echo json_encode($articleArray);

		}

	}*/

?>