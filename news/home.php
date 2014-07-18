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

		<title>News | Published Articles</title>

	       <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
    <link href="../css/css-news/main.css" rel="stylesheet">

    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>

	</head>
	<body>
		<form method='post' action='../backend/search.php?type=1'>
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
					<?php 
						$tab = 1;

						include("tabs.php");
					?>
				</div>
				<div class='col-md-9'>
						
					<?php
					
					include('connection.php');

					$adjacents = 3;
					 if(isset($_GET['sort'])){

					 	$sort=$_GET['sort'];

						 if($sort==1){

					 		$startDate=$_GET['startdate'];
					 		$endDate=$_GET['enddate'];

					 		$query = "CALL countArticle('1','".$startDate."','".$endDate."','none','".$user_id."','0')";

						 }else if($sort==3){

					 		$catName=$_GET['catName'];

					 		$query = "CALL countArticle('4','none','none','".$catName."','".$user_id."','0')";

					 	 }
					 }else{

					 	$query = "CALL countArticle('0','none','none','none','".$user_id."','3')";

					 }
			

					$total_pages = mysqli_fetch_array(mysqli_query($con,$query));
					$total_pages = $total_pages["num"];
				
				
					$targetpage = "home.php"; 	
					$limit = 6;
					$page=0;

					if(isset($_GET['page'])) 							
						$page = $_GET['page'];

					if($page) 

						$start = ($page - 1) * $limit; 

					else

						$start = 0;							

					include("connection.php");

					if(isset($_GET['sort'])){

					 	$sort=$_GET['sort'];

					 	if($sort==1){

					 		$startDate=$_GET['startdate'];
					 		$endDate=$_GET['enddate'];
					 		$sql = "CALL getArticle('".$user_id."','1','".$start."','".$limit."','1','".$startDate."','".$endDate."','none')";
				 		
				 		}else if($sort==3){

				 			$catName=$_GET['catName'];
					 		$sql = "CALL getArticle('".$user_id."','1','".$start."','".$limit."','2','none','none','".$catName."')";

				 		}

					 }else{

					 	$sql = "CALL getArticle('".$user_id."','1','".$start."','".$limit."','0','none','none','none')";
					 
					 }

					
					$result = mysqli_query($con,$sql);
					
					include("paging.php");

				?>
							<div class='drafts-sortPanel'>
								<div class='allArticles-sort'>Sort by: </div>
								<div class='allArticles-sortDrop'>
									<select name='sortType' class='form-control' id='sortOption'>
										<option value='0' <?php if(isset($_GET['sort']))if($_GET['sort']==0){ echo "selected"; } ?>>---</option>
										<option value='1' <?php if(isset($_GET['sort']))if($_GET['sort']==1){ echo "selected"; } ?>>Date Published/Submitted</option>
										<option value='3' <?php if(isset($_GET['sort']))if($_GET['sort']==3){ echo "selected"; } ?>>Category</option>
									</select>
								</div>
								

								<div class='allArticles-dateForm' id='fdate'>

									<label class='label-form '>Start: </label> <input value='<?php if(isset($_GET["startdate"])) echo $_GET["startdate"]; ?>' type='date' name='startDate' class='dateForm2' />
								
								</div>

								<div class='allArticles-dateForm' id='sdate'>

									<label class='label-form'>End: </label> <input value='<?php if(isset($_GET["enddate"])) echo $_GET["enddate"]; ?>' type='date' name='endDate' class='dateForm2'/>
								
								</div>

								<input type='submit' class='btn btn-success btnSort' name='sort' value='View'/>
								
								<div class='categoryOption2' id='catPanel'>

									<select name='catName' class='form-control' id='catOption'>
										
										<option value='0'>---</option>
										
										<?php 

										include("connection.php");
										
										$q=mysqli_query($con,"CALL getAllCategoryNoLimit()");
										
										while($getq=mysqli_fetch_array($q)){
											
										?>
											<option <?php if(isset($_GET['catName']))if($_GET['catName']==$getq['category_id']){ echo "selected"; } ?> value='<?php echo $getq['category_id']; ?>'><?php echo ucfirst($getq['category_name']); ?></option>
										<?php

										}

										?>
									</select>

								</div>	
									
							</div>

					<?php

						$countPublish=0;

						if(mysqli_num_rows($result)>0){

					?>	

							
							<table class='table table-hover'>
							<tr>
								 
								<th>Title</th>
								<th>Category</th>
								<th>Date Saved</th>
								<th></th>
							</tr>

					<?php		

							while($getq = mysqli_fetch_array($result)){
						
					?>
										
									<td><a href='view_article.php?id=<?php echo $getq["article_id"]; ?>&tab=1&user_type=<?php echo $user_type; ?>&page=<?php echo $page; ?>' class='viewNews' ><?php echo $getq['title']; ?></a></td>
									<td><?php echo ucfirst($getq['category_name']); ?></td>
									<td>

										<?php 

											echo date("F j, Y g:i A",strtotime($getq['date_saved'])); 	

										?>

									</td>
									<td>

									<?php

										if($getq['editFlag']=='1'){

									?>	

											<a href='edit_news.php?id=<?php echo $getq["article_id"]; ?>&editor=0&type=1'>Edit</a>
									
									<?php

										}

									?>

									</td>
									</tr>

						<?php

								}

						?>

							</table>
							
						<?php

							}else{

						?>	

								<div class="alert alert-warning warn">No Results Found</div>
						
						<?php

							}

						?>
			
				<?=$pagination?>		
					
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