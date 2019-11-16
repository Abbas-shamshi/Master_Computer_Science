<?php

// Abbas Shamshi

function fetchusers()
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            id,userid,FirstName,LastName,City,Zip,DateOfBirth,EmailAddress,MemberSince,active
            FROM user
            LIMIT 10
            "
    );
    $stmt->execute();
    $stmt->bind_result(
        $id,
        $userid,
        $FirstName,
        $LastName,
        $City,
        $Zip,
        $DateOfBirth,
        $EmailAddress,
        $MemberSince,
        $acitve
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'id' => $id,
            'userid' => $userid,
            'firstname' => $FirstName,
            'lastname' => $LastName,
            'city' => $City,
            'zip' => $Zip,
            'dateofbirth' => $DateOfBirth,
            'email' => $EmailAddress,
            'membersince' => $MemberSince,
            'active' => $acitve
        );
    }
    $stmt->close();
    return ($row);
}

function fetchRandUser()
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            id,userid,FirstName,LastName,City,Zip,DateOfBirth,EmailAddress,MemberSince,active
            FROM user
            ORDER BY RAND()
            LIMIT 20
            "
    );
    $stmt->execute();
    $stmt->bind_result(
        $id,
        $userid,
        $FirstName,
        $LastName,
        $City,
        $Zip,
        $DateOfBirth,
        $EmailAddress,
        $MemberSince,
        $acitve
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'id' => $id,
            'userid' => $userid,
            'firstname' => $FirstName,
            'lastname' => $LastName,
            'city' => $City,
            'zip' => $Zip,
            'dateofbirth' => $DateOfBirth,
            'email' => $EmailAddress,
            'membersince' => $MemberSince,
            'active' => $acitve
        );
    }
    $stmt->close();
    return ($row);
}

function IdChecker()
{

    $character_array = array_merge(range('A', 'Z'), range(0, 9));
    $rand_string = "";
    for ($i = 0; $i < 8; $i++) {
        $rand_string .= $character_array[rand(
            0,
            (count($character_array) - 1)
        )];
    }
    echo "Generated User Id is : " . "<h4>" . $rand_string . "</h4>";
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            id
            FROM user
            WHERE userid=?
            LIMIT 1"
    );
    $stmt->bind_param("s", $rand_string);
    $stmt->execute();
    $stmt->bind_result(
        $id
    );
    $row = array("id" => '');
    while ($stmt->fetch()) {
        $row = array(
            'id' => $id,

        );
    }
    $stmt->close();
    if ($row['id'] != null) {
        echo "<h3>" . "User ID Alredy Exists" . "</h3>";
    } else {
        echo "<h3>" . "User ID Does not Exists" . "</h3>";
    }
}

function userChecker()
{
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $string_dob = strtotime($dob);

    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
    id,userid,FirstName,LastName,City,Zip,DateOfBirth,EmailAddress,MemberSince,active
    FROM user
    WHERE FirstName=? AND LastName=? AND EmailAddress=?
    LIMIT 1"
    );
    $stmt->bind_param("sss", $fname, $lname, $email);
    $stmt->execute();

    $stmt->bind_result(
        $id,
        $userid,
        $FirstName,
        $LastName,
        $City,
        $Zip,
        $DateOfBirth,
        $EmailAddress,
        $MemberSince,
        $acitve
    );
    $row = array("id" => '', "dateofbirth" => '');
    while ($stmt->fetch()) {
        $row = array(
            'id' => $id,
            'userid' => $userid,
            'firstname' => $FirstName,
            'lastname' => $LastName,
            'city' => $City,
            'zip' => $Zip,
            'dateofbirth' => $DateOfBirth,
            'email' => $EmailAddress,
            'membersince' => $MemberSince,
            'active' => $acitve
        );
    }
    $stmt->close();
    $db_dob = strtotime($row['dateofbirth']);
    if ($db_dob = strtotime($dob)) {
        if ($row['id'] != null) {


            echo "<h3>" . "User ALredy Exists" . "</h3>";
            echo "<pre>";
            print_r($row);
            echo "<pre>";
        } else {
            echo "<h3>" . "User Does not Exists" . "</h3>";
        }
    } else {
        echo "<h3>" . "User Does not Exists" . "</h3>";
    }
}


function fetchUser()
{
    global $mysqli;
    $user_id = $_GET['userid'];
    $stmt = $mysqli->prepare(
        "SELECT
            id,userid,FirstName,LastName,City,Zip,DateOfBirth,EmailAddress,MemberSince,active
            FROM user
            WHERE userid=?
            "
    );
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $stmt->bind_result(
        $id,
        $userid,
        $FirstName,
        $LastName,
        $City,
        $Zip,
        $DateOfBirth,
        $EmailAddress,
        $MemberSince,
        $acitve
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'id' => $id,
            'userid' => $userid,
            'firstname' => $FirstName,
            'lastname' => $LastName,
            'city' => $City,
            'zip' => $Zip,
            'dateofbirth' => $DateOfBirth,
            'email' => $EmailAddress,
            'membersince' => $MemberSince,
            'active' => $acitve
        );
    }
    $stmt->close();
    return ($row);
}

function fetchAllUsers()
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            id,userid,FirstName,LastName,City,Zip,DateOfBirth,EmailAddress,MemberSince,active
            FROM user
            "
    );
    $stmt->execute();
    $stmt->bind_result(
        $id,
        $userid,
        $FirstName,
        $LastName,
        $City,
        $Zip,
        $DateOfBirth,
        $EmailAddress,
        $MemberSince,
        $acitve
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'id' => $id,
            'userid' => $userid,
            'firstname' => $FirstName,
            'lastname' => $LastName,
            'city' => $City,
            'zip' => $Zip,
            'dateofbirth' => $DateOfBirth,
            'email' => $EmailAddress,
            'membersince' => $MemberSince,
            'active' => $acitve
        );
    }
    $stmt->close();
    return ($row);
}

function delete()
{

    global $mysqli;
    $user_id = $_GET['userid'];
    $stmt = $mysqli->prepare(
        "DELETE
    FROM user
    WHERE userid=?
    "
    );
    $stmt->bind_param("s", $user_id);
    $stmt->execute();

    $stmt->close();
}


function deactivate()
{
    global $mysqli;
    $user_id = $_GET['userid'];
    $stmt = $mysqli->prepare(
        "UPDATE user
                SET active=0
            WHERE userid=?
            "
    );
    $stmt->bind_param("s", $user_id);
    $stmt->execute();

    $stmt->close();
}
