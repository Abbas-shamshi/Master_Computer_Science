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
    require_once("functions.php");

    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="#"> 10 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="select_20_random_user.php"> Random 20 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="contactme.html"> Check ID</a>
            <a class="nav-link nav-block nav-color nav-align" href="#">Check user</a>
            <a class="nav-link nav-block nav-color nav-align" href="delete.php"> Delete</a>
            <a class="nav-link nav-block nav-color nav-align" href="contactme.html"> Deactivate</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>User Deleted<br><br></h3>


            <?php
            delete();
            ?>
        </div>
    </div>
    <div class="buttons">

        <div class="submit">
            <a class="nav-link nav-block nav-color nav-align" href="delete.php">Back
            </a>
        </div>
    </div>


</body>

</html>