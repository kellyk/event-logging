<?php
  $userid = 1;
  if (isset($_COOKIE["userid"])) {
    $userid = $_COOKIE["userid"];
  } else {
    $userid = rand(1, 1000000);
    setcookie("userid", $userid,time()+60*60*24*365);
  }

  // Users with even ids are in the experiment
  $is_experiment_user = $userid % 2 === 0;
  $placeholder = ($is_experiment_user) ? "'sup?" : "What's happening?";
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1">
	<title>Logging Test</title>
	<link rel="stylesheet" href="css/style.css" />

</head>
<body>
	<div class="container">
		<h1>Logging Test</h1>
		<div class="tweet-box">
      <img src="images/avatar.jpeg" alt="avatar" />
			<input data-log="compose" type="text" placeholder="<?php echo $placeholder; ?>" />
			<button data-log="tweet">Tweet</button>
		</div>
	</div>
	<script src="js/jquery.min.js"></script>
	<script src="js/log.js"></script>
	<script src="js/script.js"></script>
</body>
</html>
