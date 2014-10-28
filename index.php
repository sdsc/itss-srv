<!-- Connect to the database -->
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
        $services = $db->query("SELECT * FROM services");
    }
    catch(Exception $e)
    {
        echo "ERROR: This action cannot be performed.";
        exit;
    }
?>
<html>
    <head>
        <title>SDSC Services Estimation Tool</title>
        <link rel="stylesheet" type="text/css" href="css/global.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="js/functions.js"></script>
    </head>
    
    
    <!-- BEGIN THE HTML HERE -->
    <body>
        <?php
            while($row = $services->fetch(PDO::FETCH_ASSOC))
            {
        ?>
                <button class="add-button" onclick="addProduct('<?php echo $row['type']; ?>');">+
</button>
                <div class="vm-services">
                    <span class="service-name"> 
                       <?php echo $row['name']; ?>
                    </span>
                    <span class="service-price">
                        $<?php echo $row['monthly']; ?>
                    </span>
                </div><br/>
        <?php
            }
        ?>
        <strong>Your Quote: </strong>
        <table id="quote-table" colspan="4">
            
        </table>
        <table id="totals" colspan="4">
            <tr>
                <td colspan="3" width="430">
                    <strong>Total: </strong>
                </td>
                <td colspan="1">
                    <input type="text" id="vm-sub-total" class="sub" readonly>
                </td>
            </tr>
        </table>
    </body>
</html>