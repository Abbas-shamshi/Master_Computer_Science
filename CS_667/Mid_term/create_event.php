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
    $title = $_POST['title'];
    $desc = $_POST['description'];
    $date = $_POST['date'];
    $location = $_POST['location'];
    $cost = $_POST['cost'];
    require_once("functions.php");
    create_event($title, $desc, $date, $location, $cost);


    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>Event is Registered</h3>

            <table>
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Cost</th>
                </thead>
                <tbody>


                    <tr>
                        <td><?php print $title ?></td>
                        <td><?php print $desc ?></td>
                        <td><?php print $date ?></td>
                        <td><?php print $location ?></td>
                        <td><?php print $cost ?></td>

                    </tr>
                </tbody>
            </table>


            <div class="buttons">

                <div class="submit">
                    <a class="nav-link nav-block nav-color nav-align" href="index.php">Create another Event
                    </a>
                </div>
            </div>




        </div>
    </div>




</body>

</html>