<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>News | Home</title>

    <link href="../css/css-news/bootstrap.min.css" rel="stylesheet">
	
	
	<link href="../css/css-news/main.css" rel="stylesheet">
	<link href="../css/main.css" rel="stylesheet">
    <script type="text/javascript" src='../js/jquery-1.11.1.js'></script>
	<script type="text/javascript" src='../js/main.js'></script>
	<script type="text/javascript" src='../js/bootstrap.min.js'></script>

</head>
<body class='loginPage '>
	
	<form method='post' action='../backend/check.php'>

				<div class="preloaderContainer">

					<div class="preloaderHolder">

						<div class="preloader">

							<img src="../images/ajax-loader.gif" />

						</div>

					</div>

				</div>

				<div class="loginHolder blurred">

					<div class='loginContainer'>

						<table class='table-login'>
							<tr>
								<td>Username:</td>
								<td><input type='text' name='username'/></td>
							</tr>
							<tr>
								<td>Password:</td>
								<td><input type='password' name='password'/></td>
							</tr>
							<tr class='loginRow'>

								<td><input type='submit' name='login' class='btn btn-success' value='Login'/></td>
								<td><input type='button' class='btn btn-danger backBtn' value='Back'/></td>
							</tr>
						</table>

					</div>


				</div>

				<?php

					if(isset($_GET['error'])){

				?>
				<div class="alert alert-danger alert-dismissable error">
				  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				  Username/Password is invalid.
				</div>
					
						
				<?php

					}

				?>
					
	</form>

</body>
</html>