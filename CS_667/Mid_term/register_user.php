<!DOCTYPE html>
<html>
<title>Event Creator</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="css/styles.css">

<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>

<body class="body-c">
    <?php
    require_once("connect.php");
    $e_id = $_POST['event'];
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    require_once("functions.php");
    register_user($e_id, $f_name, $l_name, $address, $email);


    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>User is Registered</h3>




            <div class="buttons">

                <div class="submit">
                    <a class="nav-link nav-block nav-color nav-align" href="index.php">Back
                    </a>
                </div>
            </div>




        </div>
    </div>




</body>

</html>