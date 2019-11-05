<html>

<head>
    <title> Sum of all prime numbers upto 100
    </title>
</head>

<body>
    <?php
    $numbers = array();
    echo "Addition of ";
    for ($i = 1; $i <= 10; $i++) {
        array_push($numbers, $i);
        echo "&nbsp ".$i;
    }
    echo "<br><br>"."Addition is ";
    print_r(array_sum($numbers));

    ?>
</body>

</html>