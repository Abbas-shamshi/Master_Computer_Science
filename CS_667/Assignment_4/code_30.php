<html>

<head>
    <title>
        Stars printer
    </title>
</head>

<body>

    <?php
    for($i=0;$i<=5;$i++){
        for ($j = 0 ; $j<$i ; $j++){
        echo "*";
        }
        echo "<br>";
    }

    $x = 0;
    $i= $j;
    for($j=5;$j>=$x;$j--) {
        for($i=0; $i<$j; $i++) {
            echo "*";
        }
        echo "<br>";

    }

    
    ?>
</body>

</html>