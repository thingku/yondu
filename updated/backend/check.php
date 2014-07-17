<?php

	if(isset($_POST['login'])){

		$username=$_POST['username'];
		$password=$_POST['password'];

		include("../news/connection.php");
		$q=mysqli_query($con,"CALL GetUser('".$username."','1')");
		mysql_close($con);
		
		if(mysqli_num_rows($q)>0){
			
			$getq=mysqli_fetch_array($q);
			
			if($password==$getq['password']){

				session_start();
				$_SESSION['datalog']=$getq['user_id'];
				$_SESSION['userType']=$getq['user_type'];
				header("location:../news/home.php");

			}else{

				header("location:../news/index.php?error=2");

			}

		}else{
			
			header("location:../news/index.php?error=1");
		
		}

	}

	if(isset($_POST['backView'])){

		
		$page=$_POST['page'];

		header("location:../page-4.php?page=$page");

	}

	if(isset($_POST['backViewLogged'])){

		$tab=$_POST['tab'];
		$page=$_POST['page'];

		if($tab==1){

			header("location:../news/home.php?page=$page");

		}else if($tab==2){

			header("location:../news/submitted.php?page=$page");

		}else if($tab==3){

			header("location:../news/drafts.php?page=$page");

		}else if($tab==4){

			header("location:../news/allArticles.php?page=$page");

		}
		

	}

	if(isset($_POST['back'])){

		header("location:../index.php#4");

	}
?>