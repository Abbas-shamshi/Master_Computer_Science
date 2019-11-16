<html>

<head>
    <title>
        To check if webpage is https or http
    </title>
</head>

<body>
    <?php

    $numbers = array(2, 3, 3, 5, 4, 1, 2, 2, 1, 1, 2, 2, 3, 4, 5, 5);
    print_r($numbers);
    $count=count($numbers);
    echo"count".$count;
    $result = array_unique($numbers);
    
    print_r($result);
    echo "<br>"."Sorting Unique Numbers"."<br>";
    sort($result);
    // print_r($sorted);
    // echo"a";

    $length=count($result);
    echo "<br>"."Length of Sorted numbers is ".$length."<br>";
    echo"<br>"."Sorted numbers are "."<br>";
    for($x=0; $x<$length; $x++){

    echo $result[$x]."<br>";
    }
    ?>
  



</body>

</html>