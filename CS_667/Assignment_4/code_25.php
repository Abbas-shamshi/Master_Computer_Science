<html>

<head>
    <title>
        String Manipulation
    </title>
</head>

<body>

    <?php
    $string1 = "000245123.24";
    echo "Given String is ".$string1;
    $str = ltrim($string1, '0');
    echo "<br><br>".$str;
    ?>
</body>

</html>