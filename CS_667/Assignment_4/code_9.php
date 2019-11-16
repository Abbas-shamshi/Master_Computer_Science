<html>

<body>
    <table>
        <?php
        for ($i = 1; $i <= 3; $i++) {
            echo "<tr>";
            for ($j = 1; $j <= 6; $j++) {
                echo "<td>" . $i * $j . " &nbsp &nbsp &nbsp </td>";
            }
            echo "</tr>";
        }
        for ($i = 5; $i <= 6; $i++) {
            echo "<tr>";
            for ($j = 1; $j <= 6; $j++) {
                echo "<td>" . $i * $j . "&nbsp &nbsp &nbsp </td>";
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>

</html>