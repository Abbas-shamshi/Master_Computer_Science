<html>

<head>
    <title>
        Maximum and Minimum marks
    </title>
</head>

<body>

    <?php
    $marks1 = array(360,310,310,330,313,375,456,111,256);
    $marks2 = array(350,340,356,330,321);
    $marks3 = array(630,340,570,635,434,255,298);
    $length1=count($marks1);
    for($i=0;$i<$length1;$i++){
        echo $marks1[$i]."&nbsp&nbsp&nbsp";

    }
    $highest=max($marks1);
    echo "<br><br>Highest Marks in the array is  ".$highest;
    ?>
</body>

</html>