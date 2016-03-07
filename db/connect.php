<?php 
    $mysql_server_name='localhost'; 
    $mysql_username='madness'; 
    $mysql_password='madness';
    $mysql_database='madness';
  
    $conn = mysqli_connect($mysql_server_name, $mysql_username, $mysql_password,$mysql_database);
    if($conn)
    	mysqli_query($conn,"SET NAMES 'utf8'");


    date_default_timezone_set("Asia/Shanghai");
?>