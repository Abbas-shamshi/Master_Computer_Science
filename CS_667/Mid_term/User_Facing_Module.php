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



    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>Register for the Event</h3>

            <table>
                <thead>
                    <th>Event Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Cost</th>
                </thead>
                <tbody>

                    <?php

                    $records = fetch_events();
                    foreach ($records as $record) { ?>
                        <tr>
                            <td><a href="register_event.php?e_id=<?php print $record['event_id'] ?>"><?php print $record['event_id'] ?></a></td>
                            <td><?php print $record['title'] ?></td>
                            <td><?php print $record['desc'] ?></td>
                            <td><?php print $record['event_date'] ?></td>
                            <td><?php print $record['event_loc'] ?></td>
                            <td><?php print $record['cost'] ?></td>


                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </div>




</body>

</html>