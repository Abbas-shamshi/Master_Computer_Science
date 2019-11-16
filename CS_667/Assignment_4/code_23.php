<html>

<head>
    <title>
        String Manipulation
    </title>
</head>

<body>

    <?php
    $string1 = "Haikus are easy.
    But sometimes they don't make sense.
    Refrigerator";
    $string2 = "Advice for those in,
    a difficult position.
    First, be flexible";
    $string3 = "I like kittens, YEAH!
    They are really fluffy, YEAH!
    OMG KITTENS";
    $string4 = "hello world";

    echo "Converted String is (All Upper Case)<br>" . strtoupper($string1);

    echo "<br><br><br>Converted String is (All Lower Case)<br>" . strtolower($string3);

    echo "<br><br><br>Converted String is (First character of String is upper Case)<br>" . ucfirst($string4);

    echo "<br><br><br>Converted String is(First character of all words is capital) <br>" . ucwords($string4);




    ?>
</body>

</html>