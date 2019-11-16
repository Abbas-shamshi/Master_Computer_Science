<html>

<head>
    <title>
        Difference between 2 dates
    </title>
</head>

<body>

    <?php
    $date1= date_create("1994-03-03");
    echo "1st Date is ";
    echo $date1->format("d m Y");

    $date2= date_create("2019-10-16");
    echo "<br>2st Date is ";

    echo $date2->format("d m y");

   $diff= date_diff($date1, $date2);
   echo $diff->format("<br>Difference between dates is %Y years %M months and %D days");
    ?>
</body>

</html>