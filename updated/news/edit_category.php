<?php
session_start();
if(isset($_SESSION['datalog'])){
	$user_id=$_SESSION['datalog'];
?>
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
   		<meta http-equiv="X-UA-Compatible" content="IE=edge">
   		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>News | Edit Category</title>

	       <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
    <link href="../css/css-news/main.css" rel="stylesheet">

    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>
	</head>
	<body>
		<form method='post' action='../backend/save_category.php'>

		<?php 

			include("connection.php");
			$q=mysqli_query($con,"CALL GetUser('".$user_id."','2')");
			$getq=mysqli_fetch_array($q);
			$user_type=$getq['user_type'];

		?>

		<div class='main'>
			<div class='row'>
				<div class='col-md-12 welcome'>
					Welcome 
					<strong>

					<?php

						echo ucfirst($getq['fname'])." ".ucfirst($getq['lname']);

					?>

					</strong>
				</div>
			</div>
			<div class='row'>
					<div>
						<div class='col-md-1 btn btn-success createNewsArticle' id='createNews'>
							<span class="glyphicon glyphicon-pencil"></span>Create Article
						</div>
					</div>
					<div class='col-md-11'></div>
			</div>
			<div class='row'>
				<div class='col-md-2 mainMenu'>
					<ul class="nav nav-pills nav-stacked">
					  <li><a href="home.php">Published</a></li>

					  <?php 

					  if($user_type!='2'){

					  ?>

					 	 <li><a href="submitted.php">Submitted</a></li>

					 <?php

						 }

					 ?>
					  <li><a href="drafts.php">Drafts</a></li>
					  <li><a href="allArticles.php">All articles</a></li>

					   <?php 

					  	if($user_type=='2'){

					  ?>

					 		 <li class="active"><a href="manage_category.php">Manage Category</a></li>
					 		 <li><a href="manage_user.php">Manage User</a></li>
					 <?php

						 }

					 ?>

					  <li><a href="logout.php">Logout</a></li>
					</ul>
				</div>
				<div class='col-md-9'>
					<?php 

					$id=$_GET['id'];

					include("connection.php");

					$q=mysqli_query($con,"CALL getCategoryById('".$id."')");
					$getq=mysqli_fetch_array($q);

					?>
					<input type='hidden' value='<?php echo $getq['category_id']; ?>' name='catId'/>
					<table class="table">

						<tr>

							<td>Category Name: </td>
							<td class='centerText'><input type='text' value='<?php echo ucfirst($getq['category_name']); ?>' name='categoryName' class='catTextbox'/></td>

						</tr>
						<tr>

							<td colspan='2' class='centerText'>

								<input type='submit' name='updateCat' value='Save' class='btn btn-success'/>
								<input type='submit' name='backCat' value='Back' class='btn btn-danger'/>

							</td>

						</tr>

					</table>
					
				</div>
			</div>
			
		</div>
	</form>
	</body>

	<script type="text/javascript" src='js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='js/main.js'></script>
	<script type="text/javascript" src='js/bootstrap.min.js'></script>

	</html>
<?php
}else{

	header("location:index.php");
	
}
?>