<html>

<head>
    <title>
        Password Generator
    </title>
</head>

<body>

    <?php
    $upper_case = 2;
    $lower_case = 4;
    $number = 3;
    $special_char = 2;
    $pass_array = array();
    $password = '';

    for ($i = 0; $i < $upper_case; $i++) {
        $pass_array[] = chr(rand(65, 90));
    }
    for ($i = 0; $i < $lower_case; $i++) {
        $pass_array[] = chr(rand(97, 122));
    }
    for ($i = 0; $i < $number; $i++) {
        $pass_array[] = chr(rand(48, 57));
    }
    for ($i = 0; $i < $special_char; $i++) {
        $pass_array[] = chr(rand(33, 47));
    }
    $len = count($pass_array);
    echo "Randamly Generated Characters: ";
    for ($a = 0; $a < $len; $a++) {
        echo $pass_array[$a];
    }
    shuffle($pass_array);
    
    foreach ($pass_array as $key) {
        $password .= $key;
    }

    echo "\n" . "<br>Generated Password : " . $password . "\n";
    ?>
</body>

</html>