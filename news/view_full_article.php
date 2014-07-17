<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>News | Home</title>

    <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
	<link href="../css/css-news/main.css" rel="stylesheet">

    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>

</head>
<body>
	<form method='post' action='../backend/check.php'>

				<input type='hidden' name='page' value='<?php echo $_GET['page']; ?>'/>

				<!-- <div class="loginHolder">

					<div class='loginContainer'>

						<table class='table-login'>
							<tr>
								<td>Username:</td>
								<td><input type='text' name='username'/></td>
							
								<td>Password:</td>
								<td><input type='password' name='password'/></td>
							
								<td colspan='2'><input type='submit' name='login' class='btn btn-success' value='Login'/></td>
							</tr>
						</table>

					</div>


				</div> -->

				<div class="socialMediaContainer">

					<div class="socialMediaHolder">

						<div class="facebookHolder">

							<img src="../images/fb-whole.png" class='facebook'>

						</div>

						<div class="twitterHolder">

							<img src="../images/twitter-whole.jpg" class='twitter'>

						</div>

					</div>
					
				</div>

				<div class="newsContainer">

					<div class="newsHolder">

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

								<tr class='row-content'>

									<td class='cell-content'>

										<?php

											echo $getq['content'];
											
										?>

									</td>

								</tr>

						</table>
						<div>

							<input type='submit' name='backView' class='btn btn-danger' value='Back'/>

						</div>

					</div>


				</div>

	</form>

</body>
</html>