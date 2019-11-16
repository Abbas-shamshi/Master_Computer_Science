<!DOCTYPE html>
<html>
<title>Home Page</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="css/styles.css">

<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>

<body class="body-c">
    <?php
    require_once("connect.php");
    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="select_10_user.php"> 10 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="select_20_random_user.php"> Random 20 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="check_id.php"> Check ID</a>
            <a class="nav-link nav-block nav-color nav-align" href="check_user.php">Check user</a>
            <a class="nav-link nav-block nav-color nav-align" href="delete.php"> Delete</a>
            <a class="nav-link nav-block nav-color nav-align" href="deactivate.php"> Deactivate</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <div class="block1">
                <form name="user_checker" method="post" action="user_checker.php">
                    <input type="text" value="" class="form" name="firstname" placeholder="First Name">
                    <input type="text" value="" class="form" name="lastname" placeholder="Last Name">
                    <input type="text" value="" class="form" name="email" placeholder="email">
                    <input type="text" value="" class="form" name="dob" placeholder="Date of Birth"></textarea>

                    <button type="submit" id="submit" name="submit">Send
                    </button>
                </form>
            </div>


        </div>
    </div>




</body>

</html>