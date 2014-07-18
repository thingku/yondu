<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>Welcome to YONDU</title>
	
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
	<script type="text/javascript" src="js/library.js"></script>
	<script type="text/javascript" src='js/main.js'></script>

	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" media="all" href="css/main.css"/>
	<!-- <link href="css/css-news/main.css" rel="stylesheet"> -->
	
	<script type="text/javascript">

		$(document).ready(function(e){ 	

			$().navigatePage();

			$().detectClientDevice();
			
		});

	</script>

</head>
<body id="page4" class='page-4-active'>

	<div class="page-4-Contents pageContentHolder">

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

			<section class="page-4-contentHolder">

				<header class="logoHolder">

					<div class="logoDetailsHolder">

						<a href="index.php">

							<img src="images/logo.png" />

						</a>

					</div>

				</header>	

				<div class="page-4-contentDetailsHolder">

					<div class="page-4-ContentDetails">

						<div class="page-4-UpperDetails">

							<div class="textTitle">

								we turn the 0101s into a :-)

							</div>

							<div class="textDetails">

								We are YONDU, a full service I.T. solutions group. Our dedicated, agile and knowledgeable team of problem solvers find the right answers to meet the diverse needs of our clients. From I.T. solutions to staff augmentation - experience a customized, innovative and personal approach to help you build your ideas. 					

							</div>					

						</div>

						<div class="page-4-UpperDetails">

							<div class="textTitle">

								above and beyond experiences

							</div>

							<div class="textDetails">

								Our love for innovation never overshadows the fact that technology is merely a tool. We put people first, and understand that human benfits matters most. 

								<br/><br/>

								We embrace challenges, go out of our way and get our hands dirty. Our nimble and diverse team of dynamic professionals are the only partners you'll need to take your tech to the next level. 					

							</div>					

						</div>				

					</div>

				</div>		

			</section>
				<?php
					
					include('news/connection.php');	

					session_start();

					$adjacents = 3;
					
					 $query = "CALL countArticleNoFilter()";
					 
					
					$total_pages = mysqli_fetch_array(mysqli_query($con,$query));
					$total_pages = $total_pages["num"];
					
					$_SESSION['old_count_articles']=$total_pages;

					/* Setup vars for query. */
					$targetpage = "page-4.php"; 
					//$targetpage = 'index.php';	

					$limit = 3;

					$page=0;

					if(isset($_GET['page'])) 

						$page = $_GET['page'];

					if($page) 

						$start = ($page - 1) * $limit; 	

					else

						$start = 0;								
					
					/* Get data. */
					include("news/connection.php");

					$sql = "CALL getAllArticleNews('".$start."','".$limit."')";
					 
					$result = mysqli_query($con,$sql);
					
					include("news/paging2.php");

				?>

				<input type='hidden' class='index-start' value='<?php echo $start; ?>'/>
				<input type='hidden' class='index-limit' value='<?php echo $limit; ?>'/>

				<section class="page-4-bottomContentHolder">
					
					<div class="page-4-contentsDetails1">

						<div class="newsAndUpdatesThumbNailHolder">

							<div class="textTitle">

								news and updates

							</div>

							<div class="newUpdatesThumbNail">

								<img src="images/doodles/news-trumpet.png">

							</div>

						</div>

						<div class="newsAndUpdatesDetailsHolder">

							<!-- <div class="loginBtn">Login</div> -->

							<?php
						
								if(mysqli_num_rows($result)>0){

							?>	
									<ul class="newAndUpdatesList">
										<?php		
										$arrayId=array();

										while($getq = mysqli_fetch_array($result)){

											if (in_array($getq['article_id'], $arrayId)) {

													  continue;

											}else{

												array_push($arrayId, $getq['article_id']);

											}
										?>
											<li class='class-<?php echo $getq["article_id"]; ?>'>

												<div class="newUpdatesTitle">

													<a href="#">

														<?php

															echo strip_tags($getq['title']);

														 ?>

													</a>

												</div>

												<div class="newUpdatesText">

													<?php

														$string=$getq['content'];
														
														if (strlen($string) > 500){

															echo strip_tags(substr($string,0,500)).'...';

													?>
														
															<a href='news/view_full_article.php?id=<?php echo $getq["article_id"]; ?>&page=<?php echo $page; ?>' class='seeMore'>See more </a>
													
													<?php

														} else{

															echo strip_tags($string);

														}	

													?>

												</div>

											</li>

										<?php

										}

										?>
									</ul>
									
							<?php

								}

							?>
							<?=$pagination?>
								<!-- <ul class="newAndUpdatesList">
									
									<li>

										<div class="newUpdatesTitle">

											<a href="#">

												Lorem Ipsum

											</a>

										</div>

										<div class="newUpdatesText">

											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Ut lacinia facilisis neque ut commodo. In fermentum facilisis imperdiet. 
											Cras egestas libero in neque consectetur, pharetra malesuada tortor posuere. 
											Pellentesque a tempus velit. Phasellus nec sem sed urna varius pretium. 
											Vivamus in dui suscipit, ullamcorper sapien vel, congue mi.

										</div>

									</li>

									<li>

										<div class="newUpdatesTitle">

											<a href="#">

												Lorem Ipsum

											</a>

										</div>

										<div class="newUpdatesText">

											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Ut lacinia facilisis neque ut commodo. In fermentum facilisis imperdiet. 
											Cras egestas libero in neque consectetur, pharetra malesuada tortor posuere. 
											Pellentesque a tempus velit. Phasellus nec sem sed urna varius pretium. 
											Vivamus in dui suscipit, ullamcorper sapien vel, congue mi.
											
										</div>

									</li>

									<li>

										<div class="newUpdatesTitle">

											<a href="#">

												Lorem Ipsum

											</a>

										</div>

										<div class="newUpdatesText">

											Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
											Ut lacinia facilisis neque ut commodo. In fermentum facilisis imperdiet. 
											Cras egestas libero in neque consectetur, pharetra malesuada tortor posuere. 
											Pellentesque a tempus velit. Phasellus nec sem sed urna varius pretium. 
											Vivamus in dui suscipit, ullamcorper sapien vel, congue mi.
											
										</div>

									</li>

								</ul> -->
									
						</div>

					</div>

				</section>
			

		</div>

	</div>

</body>
</html>
