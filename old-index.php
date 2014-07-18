<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>YONDU</title>
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.custom.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<script type="text/javascript" src="js/library.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<link rel="stylesheet" media="all" href="css/main.css"/>

	<script type="text/javascript">

		$(document).ready(function(e){ 	
			
			$().navigatePage();

			$().mainMenu();		

		});

	</script>

	<script>
	
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-52539835-1', 'auto');
	  ga('send', 'pageview');

	</script>	

</head>
<body id="roller" class="blurred">

	<div class="preloaderContainer">

		<div class="preloaderHolder">

			<div class="preloader">

				<img src="images/ajax-loader.gif" />

			</div>

		</div>

	</div>

	<input type="hidden" id="currentPage" />

	<?php include 'mainmenu.php'; ?>		

</body>
</html>