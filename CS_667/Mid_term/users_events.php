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

    require_once("functions.php");
    $event_id = $_GET['e_id'];


    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>Look for Registerd User for the Event</h3>

            <table>
                <thead>
                    <th>Event Name</th>
                    <th>User Id</th>

                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Email</th>
                </thead>
                <tbody>

                    <?php

                    $records = fetch_users($event_id);
                    foreach ($records as $record) { ?>
                        <tr>
                            <td><?php print $record['event_title'] ?></a></td>
                            <td><?php print $record['user_id'] ?></td>

                            <td><?php print $record['f_name'] ?></td>
                            <td><?php print $record['l_name'] ?></td>
                            <td><?php print $record['u_addr'] ?></td>
                            <td><?php print $record['email'] ?></td>

                        </tr>
                    <?php } ?>
                </tbody>
            </table>


            <div class="buttons">

                <div class="submit">
                    <a class="nav-link nav-block nav-color nav-align" href="Events_users.php">Create another Event
                    </a>
                </div>
            </div>




        </div>
    </div>




</body>

</html>