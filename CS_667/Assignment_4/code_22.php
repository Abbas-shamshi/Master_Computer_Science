<html>

<head>
    <title>
        Date with timezone
    </title>
</head>

<body>

    <?php
    date_default_timezone_set('CET');
    echo "Current Date and Time in Italy is "; 
    $date = date('m/d/Y h:i:s a', time());
    echo $date;

    date_default_timezone_set('EST');
    echo "<br>Current Date and Time in America is "; 
    $date = date('m/d/Y h:i:s a', time());
    echo $date;
    ?>
</body>

</html>