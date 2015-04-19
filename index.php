<?php

  if (!isset($_COOKIE["userid"])) {
    setcookie("userid", rand(1, 1000000));
  }

  if (!isset($_COOKIE["placeholder_bucket"])) {
    // if this is a new visitor, generate a random number
    // so we can decide whether to put them in the experiment
    $random = rand(1, 10);

    switch ($random) {
      case 1:
        $cookieValue = "in_experiment";
        break;
      case 2:
        $cookieValue = "in_control";
        break;
      default:
        $cookieValue = "none";
        break;
    }

    setcookie("placeholder_bucket", $cookieValue);
  }

  // multiple code paths
  $in_experiment = $_COOKIE["placeholder_bucket"] == "in_experiment";
  $placeholder = ($is_experiment_user) ? "'sup?" : "What's happening?";
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1">
	<title>Logging Example</title>
	<link rel="stylesheet" href="css/style.css" />
</head>
<body>
	<div class="container">
		<h1>Logging Example</h1>
	<div class="tweet-box">
    <img src="images/avatar.jpeg" alt="avatar" />
		<input id="tweet-compose" type="text" placeholder="<?php echo $placeholder; ?>" />
		<button id="tweet-submit">Tweet</button>
	</div>
	</div>
	<script src="js/jquery.min.js"></script>
	<script src="js/log.js"></script>
	<script src="js/script.js"></script>
</body>
</html>
