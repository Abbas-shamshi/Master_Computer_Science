<html>

<head>
    <title>
        Days remaning for birthday
    </title>
</head>

<body>

    <?php
    $curr_date= time();
    $bithday= mktime(0,0,0,03,03,2020);
    $count= round(($bithday - $curr_date)/86400);
    echo "Days left for your birthday: ".$count." days<br>";

    ?>
</body>

</html>