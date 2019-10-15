<html>
    <head>
        <title>
            To check if webpage is https or http
        </title>
    </head>
    <body>
        <?php
        print_r($_SERVER['REQUEST_SCHEME']);
        $url=$_SERVER['REQUEST_SCHEME'];
        echo "<h3>"."The Webpage you are using is: ".$url."</h3>";

        if($url=="http"){
            echo "Your webpage is using http";
        }
        else{
            echo"Your webpage is not using http";
        }
        


        ?>