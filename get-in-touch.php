<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>YONDU | Get in touch</title>
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<link rel="stylesheet" media="all" href="css/main.css"/>
</head>
<body id="page5" class='page-5-active blurred'>

	<div class="preloaderContainer">

		<div class="preloaderHolder">

			<div class="preloader">

				<img src="images/ajax-loader.gif" />

			</div>

		</div>

	</div>	

	<?php include 'mainmenu.php'; ?>

	<div class="page-5-Contents pageContentHolder">

		<div class="pageContents">	

			<div class="leftNavigationHolder">

				<div class="navigationHolder">

					<div class="navigation previousPage"></div>

				</div>

			</div>	

			<section class="page-5-contentHolder">

				<div class="page-5-contentDetailsHolder">

					<div class="page-5-logoHolder">

						<img src="images/logo-big.png" />

					</div>

					<div class="mottoHolder">

						technology made human

					</div>

					<div class="textDetails">

						If you have a project or an idea that you want us to implement, or if you want a business consultation from our team of experts, or if you just want to say "Hi!", please use the form below to send us a message.

						<br/><br/>

						Point out what your goals are, what's the deadlines, and what budget do you have. We'll get back to you in 24 hours to discuss the details. 

						<br/><br/>

						By the way, you can also find us on Facebook, Twitter, and Google+:

					</div>

					<div class="socialMediaIconsHolder">

						<a href="facebook.com/yonduphilippines" >

							<img src="images/socialmedia/fb.png">

						</a>

						<a href="twitter.com/yonduph">

							<img src="images/socialmedia/twitter.png">

						</a>

						<a href="twitter.com/yonduph">

							<img src="images/socialmedia/linkedin.png">
							
						</a>

						<a href="twitter.com/yonduph">

							<img src="images/socialmedia/youtube.png">
							
						</a>												

					</div>

				</div>		

				<div class="formHolder">

					<div class="formElementsHolder">

						<form method='post' action='emailer.php'>

							<ul class="formElementsList">

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Full Name

									</div>

									<div class="formInputHolder">

										<input type="text" name='fullName'/>

									</div>

								</li>

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Company

									</div>

									<div class="formInputHolder">

										<input type="text" name='company'/>

									</div>

								</li>

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Address

									</div>

									<div class="formInputHolder">

										<input type="text" name='address'/>

									</div>

								</li>

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Email

									</div>

									<div class="formInputHolder">

										<input type="text" name='emailSender'/>

									</div>

								</li>

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Contact Number

									</div>

									<div class="formInputHolder">

										<input type="text" name='contact'/>

									</div>

								</li>

								<li>

									<div class="formValidationLabelHolder">

										Sample Error!

									</div>

									<div class="formLabelHolder">

										Message

									</div>

									<div class="formInputHolder">

										<textarea name='message'></textarea>

									</div>

								</li>

								<li>

									<div class="formButtonsHolder">

										<button type='submit' class="submitBtn" name='send'>

											Send

										</button>

										<button class="resetBtn">

											Reset

										</button>

									</div>

								</li>																																				

							</div>

						</form>

					</div>

				</div>

			</section>

		</div>	

	</div>
	<?php

	if(isset($_GET['send'])){

	?>
		<div class="confirmSend">

			<div class="textLabel">

				Your message has been sent. We will send feedback in your e-mail.Thank you!
			
			</div>

			<div class="okModal">

				Okay

			</div>

		</div>
	<?php

	}

	?>
</body>

	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<script type="text/javascript" src="js/library.js"></script>
	<script type="text/javascript" src='js/main.js'></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>	
	<script type="text/javascript">

		$(document).ready(function(e){ 	

			$().animatePage();
			
			$().mainMenu();	

			$().page5();

			$().detectClientDevice();

		});

	</script>

</html>
