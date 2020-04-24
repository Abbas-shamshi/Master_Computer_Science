<?php

// Abbas Shamshi
function create_event($title, $desc, $date, $location, $cost)
{
    global $mysqli;
    //Generate A random id
    $character_array = array_merge(range('A', 'Z'), range(0, 9));
    $rand_string = "";
    for ($i = 0; $i < 8; $i++) {
        $rand_string .= $character_array[rand(
            0,
            (count($character_array) - 1)
        )];
    }
    $stmt = $mysqli->prepare(
        "INSERT INTO event_des (
		event_id,
		title,
		descri,
		event_date,
		event_location,
		cost
		)
		VALUES (
		'" . $rand_string . "',
		?,
		?,
		?,
		?,
        ?
		
		)"
    );
    $stmt->bind_param("sssss", $title, $desc, $date, $location, $cost);
    $result = $stmt->execute();
    $stmt->close();
    return $result;
    echo $result;
}


function fetch_events()
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            event_id,title,descri,event_date,event_location,cost
            FROM event_des
            "
    );
    $stmt->execute();
    $stmt->bind_result(
        $event_id,
        $title,
        $desc,
        $event_date,
        $event_loc,
        $cost
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'event_id' => $event_id,
            'title' => $title,
            'desc' => $desc,
            'event_date' => $event_date,
            'event_loc' => $event_loc,
            'cost' => $cost,
        );
    }
    $stmt->close();
    return ($row);
}


function fetch_This_events($event_id)
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT
            event_id,title,descri,event_date,event_location,cost
            FROM event_des
            WHERE
            event_id=?
            LIMIT 1
            "
    );
    $stmt->bind_param("s", $event_id);

    $stmt->execute();
    $stmt->bind_result(
        $event_id,
        $title,
        $desc,
        $event_date,
        $event_loc,
        $cost
    );
    $stmt->execute();

    while ($stmt->fetch()) {
        $row[] = array(
            'event_id' => $event_id,
            'title' => $title,
            'desc' => $desc,
            'event_date' => $event_date,
            'event_loc' => $event_loc,
            'cost' => $cost,
        );
    }
    $stmt->close();
    return ($row);
}


function register_user($e_id, $f_name, $l_name, $address, $email)
{
    global $mysqli;
    echo $e_id;
    echo $f_name;
    echo $l_name;
    echo $address;
    echo $email;
    //Generate A random id
    $character_array = array_merge(range('A', 'Z'), range(0, 9));
    $rand_string = "";
    for ($i = 0; $i < 6; $i++) {
        $rand_string .= $character_array[rand(
            0,
            (count($character_array) - 1)
        )];
    }
    $stmt = $mysqli->prepare(
        "INSERT INTO users (
		usr_id,
        event_id,
		f_name,
		l_name,
		user_address,
		email
		)
		VALUES (
		'" . $rand_string . "',
		?,
		?,
		?,
		?,
        ?	
		)"
    );
    $stmt->bind_param("sssss", $e_id, $f_name, $l_name, $address, $email);
    $result = $stmt->execute();
    $stmt->close();
    return $result;
    echo $result;
}


function fetch_users($event_id)
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT DISTINCT 
            event_des.title,
            users.usr_id,
		    users.f_name,
		    users.l_name,
		    users.user_address,
		    users.email
            FROM users INNER JOIN event_des
            ON users.event_id=?
            
            "
    );
    $stmt->bind_param("s", $event_id);

    $stmt->execute();
    $stmt->bind_result(
        $event_title,
        $usr_id,
        $f_name,
        $l_name,
        $user_address,
        $email
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'event_title' => $event_title,
            'user_id' => $usr_id,
            'f_name' => $f_name,
            'l_name' => $l_name,
            'u_addr' => $user_address,
            'email' => $email,
        );
    }
    $stmt->close();
    return ($row);
}

function fetch_all_users()
{
    global $mysqli;
    $stmt = $mysqli->prepare(
        "SELECT 
            usr_id,
            event_id,
		    f_name,
		    l_name,
		    user_address,
		    email
            FROM users
            "
    );
    $stmt->execute();
    $stmt->bind_result(
        $usr_id,
        $event_id,
        $f_name,
        $l_name,
        $user_address,
        $email
    );

    while ($stmt->fetch()) {
        $row[] = array(
            'user_id' => $usr_id,
            'event_id' => $event_id,
            'f_name' => $f_name,
            'l_name' => $l_name,
            'u_addr' => $user_address,
            'email' => $email,
        );
    }
    $stmt->close();
    return ($row);
}

















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
