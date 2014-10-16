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
    $results = $db->query("SELECT name FROM services WHERE type = 'ST_VM'");
}
catch(Exception $e)
{
    echo "Oops!";
    exit;
}

echo "<pre>";
var_dump($results->fetchAll());

?>


