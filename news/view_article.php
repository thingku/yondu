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

		<title>News | Article</title>

	       <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
    <link href="../css/css-news/main.css" rel="stylesheet">

    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>

	</head>
	<body>
		<form method='post' action='../backend/check.php'>
			
			<input type='hidden' name='page' value='<?php echo $_GET['page']; ?>'/>
			<input type='hidden' name='tab' value='<?php echo $_GET['tab']; ?>'/>
			<div class='main'>
				<?php 

					include("connection.php");
					$q=mysqli_query($con,"CALL GetUser('".$user_id."','2')");
					$getq=mysqli_fetch_array($q);
					$user_type=$getq['user_type'];

				?>
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
						  <li <?php if($_GET['tab']==1) echo 'class="active"'?> ><a href="home.php">Published</a></li>
						  <li <?php if($_GET['tab']==2) echo 'class="active"'?>><a href="submitted.php">Submitted</a></li>
						  <li <?php if($_GET['tab']==3) echo 'class="active"'?> ><a href="drafts.php">Drafts</a></li>
						  <li <?php if($_GET['tab']==4) echo 'class="active"'?> ><a href="allArticles.php">All articles</a></li>
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
						
						<?php

					        include("connection.php");
					        $id=$_GET['id'];
					        $q=mysqli_query($con,"CALL getArticleById('".$id."')");
					        $getq=mysqli_fetch_array($q);

				        ?>

				        <table class='table-news'>

									<tr class='row-title'>

										<td>
											<?php

												echo $getq['title'];

											 ?>
										</td>

									</tr>

									<tr>

										<td colspan='2'><strong>Authors:</strong>
											<i>
												<?php 

													include("connection.php");
													$q2=mysqli_query($con,"CALL getOwnerByArticleId('".$id."','1','0')");
													$countAll=mysqli_num_rows($q2);

													
													while($getq2=mysqli_fetch_array($q2)){

														echo ucfirst($getq2["fname"])." ".ucfirst($getq2["lname"]);
														$countAll--;

														if($countAll!=0)

															echo " | ";

													}

												?>
											</i>
										</td>	
										
									</tr>
									<tr>

										<td colspan='2'><strong>Category:</strong>
											<i>
												<?php 

													include("connection.php");
													$q2=mysqli_query($con,"CALL getCategoryByArticleId('".$id."')");
													$getq2=mysqli_fetch_array($q2);
													
													echo ucwords($getq2['category_name']);
												?>
											</i>
										</td>	
										
									</tr>

									<tr class='row-content'>

										<td class='cell-content'>

											<?php

												echo $getq['content'];
												
											?>

										</td>

									</tr>

								</table>
							<div>

								<input type='submit' name='backViewLogged' class='btn btn-danger' value='Back'/>

							</div>

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