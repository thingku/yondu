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

		<title>News | All Articles</title>

	    <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
    	<link href="../css/css-news/main.css" rel="stylesheet">

	    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
		<script type="text/javascript" src='../js/main.js'></script>
		<script type="text/javascript" src='../js/bootstrap.min.js'></script>
		
	</head>
	<body>
		<form method='post' action='../backend/publish.php'>

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
						$tab = 4;

						include("tabs.php");
					?>
				</div>
				<div class='col-md-9'>
					<?php
					
					include('connection.php');	

					$adjacents = 3;
					
					 if(isset($_GET['sort'])){

					 	$sort=$_GET['sort'];

					 	if($sort==0){

					 		$query = "CALL countArticle('0','none','none','none','none','0')";

					 	}else if($sort==1){

					 		$startDate=$_GET['startdate'];
					 		$endDate=$_GET['enddate'];

					 		$query = "CALL countArticle('1','".$startDate."','".$endDate."','none','none','0')";
					 	
					 	}else if ($sort==2){

					 		$auth=$_GET['auth'];

					 		$query = "CALL countArticle('2','none','none','".$auth."','none','0')";
					 
					 	}else if ($sort==3){

					 		$catName=$_GET['catName'];

					 		$query = "CALL countArticle('3','none','none','".$catName."','none','0')";
					 
					 	}

					 }else{

					 	$query = "CALL countArticle('0','none','none','none','none','0')";

					 }
					
					$total_pages = mysqli_fetch_array(mysqli_query($con,$query));
					$total_pages = $total_pages["num"];
					
					/* Setup vars for query. */
					$targetpage = "allArticles.php"; 	
					$limit = 6;
					$page=0;

					if(isset($_GET['page'])) 	

						$page = $_GET['page'];

					if($page) 

						$start = ($page - 1) * $limit; 		

					else

						$start = 0;								
					
					/* Get data. */
					include("connection.php");

					if(isset($_GET['sort'])){

					 	$sort=$_GET['sort'];

					 	if($sort==0){

					 		$sql = "CALL getArticle('".$user_id."','0','".$start."','".$limit."','0','none','none','none')";
					 	
					 	}else if($sort==1){

					 		$startDate=$_GET['startdate'];
					 		$endDate=$_GET['enddate'];
					 		$sql = "CALL getArticle('".$user_id."','0','".$start."','".$limit."','1','".$startDate."','".$endDate."','none')";
					 		
					 	}else if ($sort==2){

					 		$auth=$_GET['auth'];
					 		$sql = "CALL getArticle('".$user_id."','0','".$start."','".$limit."','2','none','none','".$auth."')";
					 	
					 	}else if ($sort==3){

					 		$catName=$_GET['catName'];
					 		$sql = "CALL getArticle('".$user_id."','0','".$start."','".$limit."','3','none','none','".$catName."')";
					 	
					 	}

					 }else{

					 	$sql = "CALL getArticle('".$user_id."','0','".$start."','".$limit."','0','none','none','none')";
					
					 }

					
					$result = mysqli_query($con,$sql);
					
					include("paging.php");

				?>
							<div class='sortPanel'>

										<div class='allArticles-sort'>Sort by: </div>
										<div class='allArticles-sortDrop'>
											<select name='sortType' class='form-control' id='sortOption'>
												<option value='0' <?php if(isset($_GET['sort']))if($_GET['sort']==0){ echo "selected"; } ?>>---</option>
												<option value='1' <?php if(isset($_GET['sort']))if($_GET['sort']==1){ echo "selected"; } ?>>Date Published/Submitted</option>
												<option value='2' <?php if(isset($_GET['sort']))if($_GET['sort']==2){ echo "selected"; } ?>>Author</option>
												<option value='3' <?php if(isset($_GET['sort']))if($_GET['sort']==3){ echo "selected"; } ?>>Category</option>
											</select>
										</div>
										<div class='allArticles-dateForm' id='fdate'>
											<label class='label-form '>Start: </label> <input value='<?php if(isset($_GET["startdate"])) echo $_GET["startdate"]; ?>' type='date' name='startDate' class='dateForm2' />
										</div>
										<div class='allArticles-dateForm' id='sdate'>
											<label class='label-form'>End: </label> <input value='<?php if(isset($_GET["enddate"])) echo $_GET["enddate"]; ?>' type='date' name='endDate' class='dateForm2'/>
										</div>
										<div><input type='submit' class='btn btn-success btnSort' name='sort' value='View'/></div>
										
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

										<div class='author' id='authPanel'>
											<input type='text' value='<?php if(isset($_GET["auth"])) echo $_GET["auth"]; ?>' name='authorName' id='authtext' placeholder='Last Name or First Name'/>
										</div>


									
							</div>
					<?php

						$countPublish=0;
						$countPublish2=0;

						if(mysqli_num_rows($result)>0){

					?>		
							

							<table class='table table-hover'>
							<tr>

								<?php 

									if($user_type=='2'){

								?>

									 <th><input type="checkbox" name="check_all"></th> 

								<?php

									}

								?>
								<th>Title</th>
								<th>Category</th>
								<th>Date Published/Submitted</th>
								<th>Status</th>
								<th>Author</th>

								<?php 

									if($user_type=='2'){

								?>
									 <th></th> 

								<?php

									}

								?>
							</tr>
					<?php		
							$arrayId=array();
							$coAuthor="false";

							while($getq = mysqli_fetch_array($result)){
									if (in_array($getq['article_id'], $arrayId)) {

										  continue;

									}else{

										array_push($arrayId, $getq['article_id']);
										$articleId=$getq['article_id'];
										include("connection.php");
										$check=mysqli_query($con,"SELECT o.owner_id as 'owner_id' FROM tbl_user u INNER JOIN tbl_owner o
																	ON u.user_id = o.user_id
																	INNER JOIN tbl_article a
																	ON a.article_id = o.article_id
																	WHERE o.article_id='$articleId' 
																	AND o.user_id='$user_id'");

										if(mysqli_num_rows($check)!=0){

											$coAuthor='true';

										}

									}

									if($user_id==$getq['user_id']||$coAuthor=="true"){

										echo "<tr class='active'>";

										if($coAuthor=="true")

											$coAuthor='false';

									}else

										echo "<tr>";


									if($user_type=='2'){
						?>	
									<td><input type='checkbox' name='sub[]' class='allOption' value='<?php echo $getq["article_id"]; ?>'/></td>
						<?php	
									}
								
						?>
										
										<td><a href='view_article.php?id=<?php echo $getq["article_id"]; ?>&tab=4&user_type=<?php echo $user_type; ?>&page=<?php echo $page; ?>' class='viewNews' ><?php echo $getq['title']; ?></a></td>
										<td><?php echo ucfirst($getq['category_name']); ?></td>
										<td>
											<?php 

												if($getq['state']=="2")
													
													echo date("F j, Y g:i A",strtotime($getq['date_saved'])); 
												
												else if($getq['state']=="1")
													
													echo date("F j, Y g:i A",strtotime($getq['date_published']));

											?>
										</td>
										<td>
											<?php


												if($getq['state']=="1"){

													$countPublish2++;
													echo "Published";
												
												}else if ($getq['state']=="2"){

													$countPublish++;
													echo "For approval";
												
												}

											?>
										</td>
										<td>	
											<?php

												echo ucfirst($getq['lname']).", ".ucfirst($getq['fname']);

											?>
										</td>
										
										<?php 

											if($user_type=='2'){

										?>

													<td><a href='edit_news.php?id=<?php echo $getq["article_id"]; ?>&editor=1&type=none'>Edit</a></td>
										
										<?php

											}
										?>
										

									</tr>
						<?php

								}

						?>
							</table>
							<?php 

								if($user_type=='2'){

									if(isset($_GET['page']))
									
										$page=$_GET['page'];
							?>
								<input type='hidden' name='pageNum' value='<?php echo $page; ?>'/>
								<input type="submit" class="btn btn-success" <?php echo $countPublish>0?"":"disabled"; ?> name='publish' value='Publish'/>
								<input type="submit" class="btn btn-success" <?php echo $countPublish2>0?"":"disabled"; ?> name='unpublish' value='Unpublish'/>
								<input type="submit" class="btn btn-danger" name='delete' value='Delete'/>
							<?php

								}

							?>
							<!-- <input type="submit" class="btn btn-danger" name='delete' value='Delete'/> -->
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

	</html>
<?php
}else{

	header("location:index.php");

}
?>