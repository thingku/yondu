<?php

include("connection.php");

/* $q=$_GET['svalue'];
 $my_data=mysql_real_escape_string($q);*/

 $sql="CALL getUser('none','4')";
 $result = mysqli_query($con,$sql) or die(mysqli_error());

	echo '<option value="0">Please select author</option>';

	while($row = mysqli_fetch_array($result)) {

    	echo '<option value="'.$row['user_id'].'">' .ucfirst($row['lname']).", ".ucfirst($row['fname']). "</option>";
   
  	}
 
	mysqli_free_result($result);

	mysqli_close($con);
 
?>
