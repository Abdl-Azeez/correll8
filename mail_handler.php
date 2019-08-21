<?php
	if (isset ($_POST['SendMail'])){
		$Fname=$_POST['Fname'];
		$Lname=$_POST['Lname'];
		$company=$_POST['Company'];
		$position=$_POST['Position'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['msg'];

		$to='hazeezadediran@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name : ".$Fname." " .$Lname."\n"."Phone : ".$phone."\n"."Company Name : ".$company."\n"."Position : ".$position."\n"."Wrote the following : "."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "success";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>