<html>

<head>
    <title>
        Duplicates Remover
    </title>
</head>

<body>

    <?php
    $colors = array(
        0 => 'Red',
        1 => 'Green',
        2 => 'White',
        3 => 'Black',
        4 => 'Red',
    );
    $numbers = array(
        0 => 100,
        1 => 200,
        2 => 100,
        3 => -10,
        4 => -10,
        5 => 0,
    );
    print_r (array_unique($colors));
    echo "<br>";
    print_r (array_unique($numbers));

    ?>
</body>

</html>