<html>

<head>
    <title>
        Sum of all prime numbers upto 100
    </title>
</head>

<body>
    <?php
    $primes = array();
    $prime_no = false;
    for ($i = 2; $i < 100; $i++) {
        $prime_no = true;
        for ($j = 2; $j <= ($i / 2); $j++) {
            if ($i % $j == 0) {
                $prime_no = false;
                break;
            }
        }
        if ($prime_no==true) {
            array_push($primes, $i);
        }
        if (count($primes) == 100) {
            break;
        }
    }
    $length=count($primes);
    echo "Total Prime numbers are ".$length."<br>";
    echo "<br>"."Prime numbers ";
    for($x=0; $x<$length; $x++){
        echo "&nbsp".$primes[$x];
    }
    echo "<br><br>"."Addition of Prime numbers is ".array_sum($primes) . "\n";
    ?>
</body>

</html>