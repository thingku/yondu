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

		<title>News | Manage User</title>

	       <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
    <link href="../css/css-news/main.css" rel="stylesheet">

    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>
	</head>
	<body>
		<form method='post' action='../backend/save_user.php'>

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
						$tab = 6;

						include("tabs.php");
					?>
				</div>
				<div class='col-md-9'>
					
					<?php
					
					include('connection.php');	

					$adjacents = 3;
				
					 $query = "CALL countUserNoFilter()";

					$total_pages = mysqli_fetch_array(mysqli_query($con,$query));
					$total_pages = $total_pages["num"];
				
					$targetpage = "manage_user.php"; 	
					$limit = 6;
					$page=0;
					if(isset($_GET['page'])) 								
					$page = $_GET['page'];
					if($page) 
						$start = ($page - 1) * $limit; 			
					else
						$start = 0;								
					
					
					include("connection.php");

					 $sql = "CALL getAllUser('".$start."','".$limit."')";
					
					
					$result = mysqli_query($con,$sql);
					
					include("paging.php");


						if(mysqli_num_rows($result)>0){

					?>		
							
							<table class='table table-hover'>
							<tr>
								<th></th> 
								<th>First Name</th>
								<th>Last Name</th>
								<th>Type</th>
								<th></th>
							</tr>
					<?php	

							while($getq = mysqli_fetch_array($result)){
									
									if($user_id==$getq['user_id'])
										continue;
					?>
									<td><input type='checkbox' name='userId[]' value='<?php echo $getq["user_id"]; ?>'/></td>
										
									<td>
										
										<?php

											echo ucfirst($getq['fname']);

										?>

									</td>
									<td>

										<?php 

											echo ucfirst($getq['lname']);

										?>

									</td>
									<td>
										<?php 

											if($getq['user_type']==1)
												echo "Author";
											else if($getq['user_type']==2)
												echo "Editor";

										?>
									</td>
									<td><a href='edit_user.php?id=<?php echo $getq["user_id"]; ?>'>Edit</a></td>

									</tr>
						<?php

								}

						?>
							</table>
								<input type="submit" class="btn btn-success" name='addUser' value='Add User'/>
								<input type="submit" class="btn btn-danger" name='deleteUser' value='Delete'/>
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

	<script type="text/javascript" src='js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='js/main.js'></script>
	<script type="text/javascript" src='js/bootstrap.min.js'></script>

	</html>
<?php
}else{

	header("location:index.php");
	
}
?>