<html>

<head>
    <title>
        Print Date
    </title>
</head>

<body>

    <?php
    $date = date_create("2019-10-16");
    echo " Date is ";
    echo $date->format("Y m d");
    echo "<br> Valid formated Date is <br><br>" . $date->format(" D ") . "the" . $date->format(" d") . "th";

    ?>
</body>

</html>