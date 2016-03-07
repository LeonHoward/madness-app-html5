<?php 

	session_start();

	// for debug use $_GET["param"]
	// http://localhost/24hours-h5app/db/adduse.php?name=Dayang&email=969196087@qq.com&phone=13564137185&who=1&mevent=1&targetdate=0101
	// $name           = $_GET['name'];
	// $email           = $_GET['email'];
	// $phone          = $_GET['phone'];
	// $who          = $_GET['who'];
	// $mevent       = $_GET['mevent'];
	// $adate          = $_GET['adate'];

	

	include_once 'connect.php';

	// params
	$name            = $_POST['name'];
	$email           = $_POST['email'];
	$phone           = $_POST['phone'];
	$who            = $_POST['who'];
	$mevent         = $_POST['mevent'];
	$adate          = date("Y-m-d H:i:s",time());

	if ($conn)
	{
		$query = "INSERT INTO user (name, email, phone, who, mevent, adate) VALUES('$name', '$email', '$phone', '$who','$mevent', '$adate')";
		mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());

		echo json_encode(array('code'=>0,'mevevt'=>'Send Success'));
	}else
	{
		echo json_encode(array('code'=>1,'mevevt'=>'Send Fail'));
	}

	mysqli_close($conn);
?>