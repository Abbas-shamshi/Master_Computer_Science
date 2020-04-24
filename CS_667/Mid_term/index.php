<!DOCTYPE html>
<html>
<title>BackOffice Module</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="css/styles.css">

<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<?php
require_once("connect.php");
?>

<body class="body-c">
    <h3>Event Managemet System</h3>

    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <div class="block1">
                <form name="user_checker" method="post" action="create_event.php">
                    <input type="text" value="" class="form" name="title" placeholder="Event Title">
                    <input type="text" value="" class="form" name="description" placeholder="Event Description">
                    <input type="text" value="" class="form" name="date" placeholder="Event Date">
                    <input type="text" value="" class="form" name="location" placeholder="Event Location">
                    <input type="text" value="" class="form" name="cost" placeholder="Event Cost">


                    <button type="submit" id="submit" name="submit">Add Event
                    </button>
                </form>
            </div>
        </div>
    </div>




</body>

</html>