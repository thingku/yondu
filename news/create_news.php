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

		<title>Blog</title>

		<link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
	    <link href="../css/css-news/main.css" rel="stylesheet">

	    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
		<script type="text/javascript" src='../js/main.js'></script>
		<script type="text/javascript" src='../js/bootstrap.min.js'></script>
		<script type="text/javascript" src='../js/NicEdit.js'></script>
		
		<script type="text/javascript">
		 	bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });
		</script>

	</head>
	<body>
		<form method='post' action='../backend/save_news.php' onsubmit="<?php if (isset($_POST['save'])){ ?>return confirm('Are you sure you want to submit your article? You cant edit your article afterwards')<?php } ?>">
		<?php
			include("connection.php");
			$q=mysqli_query($con,"CALL GetUser('".$user_id."','2')");
			$getq=mysqli_fetch_array($q);
			$user_type=$getq['user_type'];
		?>
			<input type='hidden' name='userType' value='<?php echo $user_type; ?>'/>
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
						  <li><a href="submitted.php">Submitted</a></li>
						 
						  <li><a href="drafts.php">Drafts</a></li>
						  <li><a href="allArticles.php">All articles</a></li>
						  <?php 

						  	if($user_type=='2'){

						  ?>

						 		 <li><a href="manage_category.php">Manage Category</a></li>
						 		 <li><a href="manage_user.php">Manage User</a></li>
						 <?php

							 }

						 ?>

						   <li><a href="logout.php">Logout</a></li>

						</ul>
					</div>
					<div class='col-md-9'>

						<div class='row'>
								<div class='col-md-1'>Title: </div>
								<div class='col-md-11'><input type='text' name='title'/></div>
						</div>

						<div class='row'>
								<div class='col-md-1'>Category: </div>
								<div class='col-md-11'>

									<select name='categoryOption' class='form-control category'>

										<?php 

											include("connection.php");
											$q=mysqli_query($con,"CALL getAllCategoryNoLimit()");

											while($getq=mysqli_fetch_array($q)){

										?>	
												<option value='<?php echo $getq["category_id"]; ?>'><?php echo ucfirst($getq['category_name']); ?></option>
										<?php
											}

										?>

									</select>

								</div>
						</div>

						<div class='row'>
								<div  class='col-md-12'>Content:</div>
						</div>

						<div class='row'>
								<div class='col-md-12'>
									<textarea name="content" style="width: 100%;" rows="10" ></textarea>
								</div>	
						</div>
						<div class='row'>
							<div class='col-md-1 createNews-submitPublish'>
								<input type='submit' class='btn btn-primary' name='savePublish' value='Submit and Publish'/>
							</div>
							<div class='col-md-1 createNews-submit'>
								<input type='submit' class='btn btn-success' name='save' value='Submit Only'/>
							</div>
							<div class='col-md-1 createNews-submit'>
								<input type='submit' class='btn btn-danger' name='draft' value='Save as Draft'/>
							</div>
							<div class='col-md-9'></div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</body>
	<script type="text/javascript" src='js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='js/main.js'></script>
	<script type="text/javascript" src='js/bootstrap.min.js'></script>
	<script type="text/javascript" src='js/NicEdit.js'></script>
	<script type="text/javascript">
	 	bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });
	</script>
	</html>
<?php
}else{
	header("location:index.php");
}
