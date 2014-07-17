<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>Welcome to YONDU</title>
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<script type="text/javascript" src="js/library.js"></script>
	<link rel="stylesheet" media="all" href="css/main.css"/>
	
	<script type="text/javascript">

		$(document).ready(function(e){ 	

			$().navigatePage();

			$().detectClientDevice();

			$().page3();
			
		});

	</script>

</head>
<body id="page3">

	<div class="page-3-Contents pageContentHolder">

		<div class="pageContents">	

			<div class="rightNavigationHolder">

				<div class="navigationHolder">

					<div class="navigation nextPage"></div>

				</div>

			</div>

			<div class="leftNavigationHolder">

				<div class="navigationHolder">

					<div class="navigation previousPage"></div>

				</div>

			</div>	

			<section class="page-3-contentHolder">

				<header class="logoHolder">

					<div class="logoDetailsHolder">

						<a href="index.php">

							<img src="images/logo.png" />

						</a>

					</div>

				</header>	

				<div class="page-3-contentDetailsHolder">

					<div class="page-3-ContentDetails">

						<div class="thumbNailHolder">

							<div class="thumbNail1"></div>

							<div class="thumbNail2"></div>

						</div>

						<div class="topTextDetailsHolder">

							<div class="textTitle">

								a choice of direction

							</div>

							<div class="textDetails">

								At YONDU, we understand that different ideas have different requirements. Not everything can be treated the same way. Our end-to-end solutions, covering custom software development up to support & maintenance, is well fitted to address almost any business requirement.					

							</div>

						</div>

					</div>

					<div class="page-3-ContentDetails">

						<div class="columnHolder thumb1">

							<div class="columnThumbNail">

								<img src="images/doodles/icon-swdev.png">

							</div>

							<div class="thumbNailTitle">

								<a href="#">

									Software Development

								</a>

							</div>

						</div>

						<div class="columnHolder thumb2">

							<div class="columnThumbNail">

								<img src="images/doodles/icon-itstaffing.png">

							</div>

							<div class="thumbNailTitle">

								<a href="#">

									I.T. Staffing

								</a>

							</div>

						</div>

						<div class="columnHolder thumb3">

							<div class="columnThumbNail">

								<img src="images/doodles/icon-entsol.png">

							</div>

							<div class="thumbNailTitle">

								<a href="#">

									Enterprise Solutions

								</a>

							</div>

						</div>

						<div class="columnHolder thumb4">

							<div class="columnThumbNail">

								<img src="images/doodles/icon-suppmaint.png">

							</div>

							<div class="thumbNailTitle">

								<a href="#">

									Support and Maintenance

								</a>

							</div>

						</div>												

					</div>

					<div class="page-3-ContentDetails">

						<div class="horizontalStripHolder">

							<img src="images/doodles/products-horizontal.png">

						</div>

					</div>

					<div class="page-3-ContentDetails">

						<div class="softWareProductsHolder">

							<div class="textTitle">

								our software products

							</div>

							<div class="textDetails">

								<strong>PeopleCentral</strong> - a full suite of Human Resource management tools that cover your employees from hire to retire. We call it intelligent HR management. 	
								<br/><br/>
								<strong>HelpDesk Manager</strong> - a robust ticketing and customer service tool that brings together powerful tracking reports and ease-of-use in one package.										

							</div>					

						</div>

						<div class="softWareLogosHolder">

							<img src="images/doodles/logo-peoplecentral.png">

							<img src="images/doodles/logo-helpdesk.png">

						</div>

					</div>

					<div class="page-3-ContentDetails">

						<div class="bottomImgHolder">

							<img src="images/bg4.jpg">					

						</div>

					</div>

				</div>		

			</section>

		</div>

	</div>

	<?php include 'overlay.php'; ?>

</body>
</html>