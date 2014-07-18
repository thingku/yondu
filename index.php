<?php if (substr_count($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip')) ob_start("ob_gzhandler"); else ob_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>YONDU | Home</title>
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" media="all" href="css/main.css"/>
	<link rel="stylesheet" media="all" href="css/common.css"/>
	<link rel="stylesheet" media="all" href="css/mainmenu.css"/>
	<link rel="stylesheet" media="all" href="css/page-1.css"/>

</head>
<body id="page1">
 
		<div class="preloaderContainer">

			<div class="preloaderHolder">

				<div class="preloader">

					<img src="images/ajax-loader.gif" />

				</div>

			</div>

		</div>

		<div class="page-1-Contents pageContentHolder">	

			<div class="pageContents active">		

				<div class="rightNavigationHolder">

							<div class="navigationHolder">

								<div class="navigation nextPage">

								</div>

							</div>

				</div>						

				<section class="page-1-contentHolder">

					<section class="firstBackGround"></section>	

					<section class="secondBackGround"></section>

					<section class="doodlesHolder">

						<div class="doodlesContentHolder">

							<div class="doodlesListHolder">

								<ul class="doodlesList">

									<li class="bubble1"></li>

									<li class="bubble2"></li>

									<li class="bubble3"></li>

									<li class="bubble4"></li>

									<li class="bubble5">

										<div class="bubble5DetailsHolder">

											<ul class="bubbleList">

												<li class="dot1"></li>
												<li class="dot2"></li>
												<li class="dot3"></li>

											</ul>

											<div class="ideaHolder"></div>

										</div>

									</li>

								</ul>

							</div>	

						</div>

					</section>

					<header class="logoHolder">

						<div class="logoDetailsHolder">

							<a href="index.php">

								<img src="images/logo.png" />

							</a>

						</div>

					</header>

					<div class="page-1-textDetails">

						<div class="textDetailsContent">

							<div class="textTitle">

								everthing begins with an idea...

							</div>

							<div class="textDetails">

								An idea to create something new, do things easier, faster, be more efficient. All driven by the desire to make things better.					

							</div>

							<div class="smallNavigationHolder2 givingLifeToIdeas">

										<div class="navigationLabel">

											We bring your ideas to life

										</div>

										<div class="navigationDownArrow">

											<img src="images/arrow-right.png">

										</div>

							</div>							

						</div>

					</div>			

				</section>

			</div>

		</div>

		<?php include 'mainmenu.php'; ?>


</body>

	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.custom.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
	<script type="text/javascript" src="js/library.js"></script>	
	<script type="text/javascript">

		$(document).ready(function(e){ 	

			$().animatePage();
			
			$().detectClientDevice();

			$().page1();

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

</html>