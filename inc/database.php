<?php

try
{
    $db = new PDO("mysql:host=localhost;dbname=itss_srv", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $db->exec("SET NAMES 'utf8'");
}
catch(Exception $e)
{
    echo "ERROR: Could not connect to the database.";
    exit;
}

try
{
    $services = $db->prepare("SELECT * FROM services");
    $upgrades = $db->prepare("SELECT * FROM upgrades");
    $sup = $db->query("SELECT * FROM services, upgrades WHERE (upgrades.for_type = services.type)");
}
catch(Exception $e)
{
    echo "Oops!";
    exit;
}

echo "<table>";

while($row = $sup->fetch(PDO::FETCH_ASSOC))
{
    echo "<tr><td>" . $row['type'] . "</td><td>" . $row['name'] . "</td><td>" . $row['add_on_name'] . "</td><td>" . $row['add_on_monthly'] . "</td></tr>"; 
}

?>


