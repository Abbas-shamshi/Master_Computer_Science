<html>

<head>
    <title>
        Arithmaatic Operation on character Variables
    </title>
</head>

<body>

    <?php
    $d = "U00123";
    echo "number is ".$d."<br>";
    $d++;

    $d_array=array();
    for($i=1;$i<=10;$i++){
        $d_array[]=($d.= $i);
        $d = "U00123";
        $d++;
        

    }
    
    echo "<br>";
    $length_a=count($d_array);
    for($i=0;$i<$length_a;$i++){
        echo $d_array[$i]."<br>";
    }
    echo "<br>";


    ?>
</body>

</html>