<!DOCTYPE html>
<html>
<title>Event Creator</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="css/styles.css">

<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>

<body class="body-c">
    <?php
    $event_id = $_GET['e_id'];
    require_once("connect.php");
    require_once("functions.php");
    $records = fetch_This_events($event_id);



    ?>
    <div class="flex">
        <div class="card-left">
            <a class="nav-link nav-block nav-color nav-align" href="index.php"> Register Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="User_Facing_Module.php"> View / Register Events</a>
            <a class="nav-link nav-block nav-color nav-align" href="Events_users.php"> Users Registerd for Event</a>
            <a class="nav-link nav-block nav-color nav-align" href="fetch_all_users.php">Registerd Users</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>Event</h3>

            <table>
                <thead>
                    <th>Event Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Cost</th>
                    <th>Time Remaning</th>

                </thead>
                <tbody>


                    <?php

                    foreach ($records as $record) { ?>
                        <tr>
                            <td><?php print $record['event_id'] ?></td>
                            <td><?php print $record['title'] ?></td>
                            <td><?php print $record['desc'] ?></td>
                            <td><?php print $record['event_date'] ?></td>
                            <td><?php print $record['event_loc'] ?></td>
                            <td><?php print $record['cost'] ?></td>
                            <td><?php print $record['cost'] ?></td>


                        </tr>
                    <?php } ?>
                </tbody>
            </table>
            <hr>
            <h3>Register for this Event</h3>

            <div class="block1">
                <form name="user_checker" method="post" action="register_user.php">
                    <input type="hidden" value="<?php print $event_id ?>" class="form" name="event">
                    <input type="text" value="" class="form" name="f_name" placeholder="First Name">
                    <input type="text" value="" class="form" name="l_name" placeholder="Last Name">
                    <input type="text" value="" class="form" name="address" placeholder="Address">
                    <input type="text" value="" class="form" name="email" placeholder="Email">



                    <button type="submit" id="submit" name="submit">register
                    </button>
                </form>
            </div>






        </div>
    </div>




</body>

</html>