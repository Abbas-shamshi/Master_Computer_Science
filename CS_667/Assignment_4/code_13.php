<html>

<head>
    <title> Sum of all prime numbers upto 100
    </title>
</head>

<body>
    <?php
    $number=array();
    for($i=100; $i<=250; $i++){
        if($i%2==0){
            array_push($number,$i);
        }
    }
    $length=count($number);
    echo "Number  between 100 and 250 that are divisible by 2 are <br><br>";
    for($i=0;$i<$length;$i++){
        echo $number[$i]."&nbsp";
        if($i==37){
            echo "<br>";
        }
    }

    

    ?>
</body>

</html>