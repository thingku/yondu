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
	    <link href="../css/css-news/jquery-autocomplete.css" rel="stylesheet">

	    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
		<script type="text/javascript" src='../js/main.js'></script>
		<script type="text/javascript" src='../js/bootstrap.min.js'></script>
		<script type="text/javascript" src='../js/NicEdit.js'></script>
		<script type="text/javascript">
		 	bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });
		</script>
		<script type="text/javascript">
			$(document).ready(function($) {
				 

				});
		</script>
	</head>
	<body>
		<form method='post' action='../backend/save_draft.php'>
			
			<!-- <select name="list-target" class='autoAuthor'> -->

			</select>
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
						  <li><a href="submitted.php">Submitted</a></li>
						  <li class='active' ><a href="drafts.php">Drafts</a></li>
						  <li><a href="allArticles.php">All Articles</a></li>
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
						$article_id=$_GET['id'];

						include("connection.php");

						$type=$_GET['type'];
						if(!isset($_GET['editor'])){
							$q=mysqli_query($con,"CALL getArticle('".$user_id."',3,'0','1','0','none','none','none')");
						}else{

							$q=mysqli_query($con,"CALL getArticleById('".$article_id."')");
						}

						$getq=mysqli_fetch_array($q);
						?>

						<input type='hidden' name='userType' value='<?php echo $user_type; ?>'/>

						<input type='hidden' name='state' value='<?php echo $getq["state"]; ?>'/>

						<input type='hidden' name='type' value='<?php echo $type; ?>'/>

						<input type='hidden' name='editor' value='<?php echo $_GET['editor']; ?>'/>

						<input type='hidden' name='article_id' value='<?php echo $article_id; ?>'/>

						<div class='row'>

								<div class='col-md-1'>Title: </div>

								<div class='col-md-11'><input type='text' name='title' value='<?php echo $getq["title"]; ?>'/></div>
						
						</div>

						<div class='row'>

								<div  class='col-md-1'>Author:</div>

								<div class='col-md-10'>
								<?php
									include("connection.php");

									$q2=mysqli_query($con,"CALL getOwnerByArticleId('".$article_id."','1','0')");
									while($getq2=mysqli_fetch_array($q2)){
								?>
										<?php echo ucwords($getq2['lname']).", ".ucfirst($getq2['fname'])."; "; ?>
								<?php
									}
								?>
								</div>

								<div  class='col-md-1'>
									<?php 

									if($user_type==2){

									?>

										<img src='../images/add-icon.png' class='addimg' title='Add Author' data-toggle="modal" data-target="#myModal" />
								
									<?php 

									}

									?>
								</div>

						</div>

						<div class='row'>
								<div class='col-md-1'>Category: </div>
								<div class='col-md-11'>

									<select name='categoryOption' class='form-control category'>

										<?php 

											include("connection.php");
											$q3=mysqli_query($con,"CALL getAllCategoryNoLimit()");

											while($getq3=mysqli_fetch_array($q3)){

										?>	
												<option value='<?php echo $getq3["category_id"]; ?>' <?php if($getq['category_id']==$getq3['category_id']){ echo "selected"; } ?>><?php echo ucfirst($getq3['category_name']); ?></option>
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

								<div class='col-md-11'>

									<textarea name="content" style="width: 100%;" rows="10"><?php echo $getq['content']; ?></textarea>
								
								</div>	

						</div>

						<div class='row'>

							<?php

							if(!isset($_GET['editor'])){
								
							?>	
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

							<?php 

							}else{

							?>
								<div class='col-md-1'>

									<input type='submit' class='btn btn-success' name='saveOnly' value='Save'/>
								
								</div>

								<div class='col-md-1'>

									<input type='submit' class='btn btn-danger' name='back' value='Back'/>
								
								</div>

							<?php
							}
							?>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			        <h4 class="modal-title" id="myModalLabel">Manage Authors</h4>
			      </div>
			      <div class="modal-body">
			      		<?php
					
							include('connection.php');	// include your code to connect to DB.

							//$tbl_name="";		//your table name
							// How many adjacent pages should be shown on each side?
							$adjacents = 3;
							
							/* 
							   First get total number of rows in data table. 
							   If you have a WHERE clause in your query, make sure you mirror it here.
							*/
							 
							 $query = "CALL countOwnerByArticleId('".$article_id."')";
							
							
							$total_pages = mysqli_fetch_array(mysqli_query($con,$query));
							$total_pages = $total_pages["num"];
							
							/* Setup vars for query. */
							$targetpage = "allArticles.php"; 	//your file name  (the name of this file)
							$limit = 6;
							$page=0;
							if(isset($_GET['page'])) 								//how many items to show per page
							$page = $_GET['page'];
							if($page) 
								$start = ($page - 1) * $limit; 			//first item to display on this page
							else
								$start = 0;								//if no page var is given, set start to 0
							
							/* Get data. */
							include("connection.php");
							
							$sql = "CALL getOwnerByArticleId('".$article_id."','1','0')";
							
							$result = mysqli_query($con,$sql);
							
							/* Setup page vars for display. */
							if ($page == 0) $page = 1;					//if no page var is given, default to 1.
							$prev = $page - 1;							//previous page is page - 1
							$next = $page + 1;							//next page is page + 1
							$lastpage = ceil($total_pages/$limit);		//lastpage is = total pages / items per page, rounded up.
							$lpm1 = $lastpage - 1;						//last page minus 1
							
							/* 
								Now we apply our rules and draw the pagination object. 
								We're actually saving the code to a variable in case we want to draw it more than once.
							*/
							$pagination = "";
							if($lastpage > 1)
							{	
								$pagination .= "<div class=\"pagination\">";
								//previous button
								if ($page > 1) 
									$pagination.= "<a href=\"$targetpage?page=$prev\">< previous</a>";
								else
									$pagination.= "<span class=\"disabled\">< previous</span>";	
								
								//pages	
								if ($lastpage < 7 + ($adjacents * 2))	//not enough pages to bother breaking it up
								{	
									for ($counter = 1; $counter <= $lastpage; $counter++)
									{
										if ($counter == $page)
											$pagination.= "<span class=\"current\">$counter</span>";
										else
											$pagination.= "<a href=\"$targetpage?page=$counter\">$counter</a>";					
									}
								}
								elseif($lastpage > 5 + ($adjacents * 2))	//enough pages to hide some
								{
									//close to beginning; only hide later pages
									if($page < 1 + ($adjacents * 2))		
									{
										for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
										{
											if ($counter == $page)
												$pagination.= "<span class=\"current\">$counter</span>";
											else
												$pagination.= "<a href=\"$targetpage?page=$counter\">$counter</a>";					
										}
										$pagination.= "...";
										$pagination.= "<a href=\"$targetpage?page=$lpm1\">$lpm1</a>";
										$pagination.= "<a href=\"$targetpage?page=$lastpage\">$lastpage</a>";		
									}
									//in middle; hide some front and some back
									elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
									{
										$pagination.= "<a href=\"$targetpage?page=1\">1</a>";
										$pagination.= "<a href=\"$targetpage?page=2\">2</a>";
										$pagination.= "...";
										for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
										{
											if ($counter == $page)
												$pagination.= "<span class=\"current\">$counter</span>";
											else
												$pagination.= "<a href=\"$targetpage?page=$counter\">$counter</a>";					
										}
										$pagination.= "...";
										$pagination.= "<a href=\"$targetpage?page=$lpm1\">$lpm1</a>";
										$pagination.= "<a href=\"$targetpage?page=$lastpage\">$lastpage</a>";		
									}
									//close to end; only hide early pages
									else
									{
										$pagination.= "<a href=\"$targetpage?page=1\">1</a>";
										$pagination.= "<a href=\"$targetpage?page=2\">2</a>";
										$pagination.= "...";
										for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
										{
											if ($counter == $page)
												$pagination.= "<span class=\"current\">$counter</span>";
											else
												$pagination.= "<a href=\"$targetpage?page=$counter\">$counter</a>";					
										}
									}
								}
								
								//next button
								if ($page < $counter - 1) 
									$pagination.= "<a href=\"$targetpage?page=$next\">next ></a>";
								else
									$pagination.= "<span class=\"disabled\">next > </span>";
								$pagination.= "</div>\n";		
							}
						?>
					<?php
			        		if(mysqli_num_rows($result)>0){

			        			$x=0;
					?>		
							

							<table class='table table-hover' id='fields'>
								<tr>
									<th></th>
									<th>Author Name</th>
									<th>Edit</th>	
									<th></th>
								</tr>
					<?php		
							while($getq = mysqli_fetch_array($result))
							{
					?>
								<tr id='<?php echo "row$x"?>'>
										<input type='hidden' name='owner_ids[]' value='<?php echo $getq["owner_id"]; ?>'/>
										<input type='hidden' name='user_ids[]' value='<?php echo $getq["user_id"]; ?>'/>
									<td><input type='checkbox' name='delete[]' value='<?php echo $getq["owner_id"]; ?>'/> </td>
									<td><?php echo ucfirst($getq['fname'])." ".ucfirst($getq['lname']); ?></td>
									<td>

										<input type='checkbox' name='edit[<?php echo $x; ?>]' value='1' <?php if($getq["editFlag"]!='0')  echo "checked";  else echo " " ; ?>/>

									</td>	
									<td></td>
								</tr>
					<?php	
								$x++;
							}
					?>
							</table>

							<input type='hidden' id='existing' value='<?php echo $x-1; ?>'/>
						<?php
							}else{
						?>		
								<div class="alert alert-warning warn">No Results Found</div>
						<?php
							}
						?>
			

				<?=$pagination?>
					
						
			      </div>
			      <div class="modal-footer">


			      	<input type="submit" class="btn btn-primary" name='saveAuthor' value='Save'/>
					<button type="button" class="btn btn-success" id="addAuthor">Add Author</button>
					<input type="submit" class="btn btn-danger" name='deleteAuthor' value='Delete Author'/>
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			       
			      </div>
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
