<!DOCTYPE html>
<html>
<title>20 random Users</title>
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
            <a class="nav-link nav-block nav-color nav-align" href="select_10_user.php"> 10 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="select_20_random_user.php"> Random 20 Users</a>
            <a class="nav-link nav-block nav-color nav-align" href="check_id.php"> Check ID</a>
            <a class="nav-link nav-block nav-color nav-align" href="check_user.php">Check user</a>
            <a class="nav-link nav-block nav-color nav-align" href="delete.php"> Delete</a>
            <a class="nav-link nav-block nav-color nav-align" href="deactivate.php"> Deactivate</a>
        </div>
        <div class="card-mid bck-color-white"><br>
            <h3>Random 20 Users</h3>
            <table>
                <thead>
                    <th>ID</th>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th>Date of Birth</th>
                    <th>Email </th>
                    <th>Member Since</th>
                    <th>Active</th>
                </thead>
                <tbody>

                    <?php
                    $records = fetchRandUser();
                    foreach ($records as $record) { ?>
                        <tr>
                            <td><?php print $record['id'] ?></td>
                            <td><?php print $record['userid'] ?></td>
                            <td><?php print $record['firstname'] ?></td>
                            <td><?php print $record['lastname'] ?></td>
                            <td><?php print $record['city'] ?></td>
                            <td><?php print $record['zip'] ?></td>
                            <td><?php print date("Y-m-d", strtotime($record['dateofbirth'])) ?></td>
                            <td><?php print $record['email'] ?></td>
                            <td><?php print $record['membersince'] ?></td>
                            <td><?php print $record['active'] ?></td>

                        </tr>
                    <?php } ?>
                </tbody>
            </table>






        </div>
    </div>




</body>

</html>