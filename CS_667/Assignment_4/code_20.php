<html>

<head>
    <title>
        date format converter
    </title>
</head>

<body>

    <?php
    $date= date_create("2019-10-16");
    echo " Date is ";
    echo $date->format("Y m d");
    echo "<br> Valid formated Date is ".$date->format("d m Y");

    ?>
</body>

</html>