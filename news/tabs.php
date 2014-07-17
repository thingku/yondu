
	<ul class="nav nav-pills nav-stacked">
	  <li <?php if($tab==1){ echo "class='active'"; } ?> ><a href="home.php">Published</a></li>
	  <li <?php if($tab==2){ echo "class='active'"; } ?> ><a href="submitted.php">Submitted</a></li>
	  <li <?php if($tab==3){ echo "class='active'"; } ?> ><a href="drafts.php">Drafts</a></li>
	  <li <?php if($tab==4){ echo "class='active'"; } ?> ><a href="allArticles.php">All articles</a></li>
	  <?php 

	  	if($user_type=='2'){

	  ?>

	 		 <li <?php if($tab==5){ echo "class='active'"; } ?> ><a href="manage_category.php">Manage Category</a></li>
	 		 <li <?php if($tab==6){ echo "class='active'"; } ?> ><a href="manage_user.php">Manage User</a></li>
	 <?php

		 }

	 ?>

	   <li><a href="logout.php">Logout</a></li>
	</ul>