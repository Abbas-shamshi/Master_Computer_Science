<html>

<head>
    <title> Sum of all prime numbers upto 100
    </title>
</head>

<body>
    <?php
    $colors = array('black', 'green', 'white' , 'yellow','indigo', 'blue' ,'purple' , 'red');
    sort($colors);
    $length=count($colors);
    echo "<ul>";
    for($i=0;$i<$length; $i++)
    echo "<li>".$colors[$i]."<br>";
    ?>
</body>

</html>