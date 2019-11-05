<html>

<head>
    <title> Sum of all prime numbers upto 100
    </title>
</head>

<body>
    <?php
    
    $temperature = array(79, 60, 70, 68, 71, 68, 73, 85, 66, 64, 76, 93, 85, 86, 73, 68,
    62, 73, 52, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73);
    echo "Average Temeprature is ".array_sum($temperature)/count($temperature)."<br><br>";
    sort($temperature);
    echo "<br>Top 5 Lowest Temperature are: ";
    for ($i=0;$i<=5;$i++){
       echo $temperature[$i]."&nbsp &nbsp";

    }
    rsort($temperature);
    echo "<br><br><br>Top 5 Highest Temperature are: ";
    for ($i=0;$i<=5;$i++){
       echo $temperature[$i]."&nbsp &nbsp";

    }
    

    ?>
</body>

</html>