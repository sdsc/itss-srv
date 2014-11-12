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
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/jspdf.min.js" type="text/javascript"></script>
        <!--<script type="text/javascript" src="js/tableExport.js"></script>
        <script type="text/javascript" src="js/jquery.base64.js"></script>
        <script type="text/javascript" src="js/jspdf/libs/sprintf.js"></script>
        <script type="text/javascript" src="js/FileSaver.min.js"></script>
        <script type="text/javascript" src="js/jspdf/jspdf.js"></script>
        <script type="text/javascript" src="js/jspdf/libs/base64.js"></script>-->
        <script type="text/javascript" src="js/html2canvas.min.js"></script>
        <script type="text/javascript" src="js/canvas2image.js"></script>
        <script type="text/javasript" src="js/jspdf.plugin.addimage.js"></script>
        <script type="text/javascript" src="js/downloadify.min.js"></script>
        <script type="text/javascript" src="js/Blob.js"></script>
        <script type="text/javascript" src="js/canvas-toBlob.js"></script>
        <script src="js/functions.js"></script>
    </head>
    
    
    <!-- BEGIN THE HTML HERE -->
    <body>
       <div class="content">
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
            <form name="quote" method="post">
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
            </form>
            <button id="pdfbutton">Save as PDF</button>
       </div>
        
        
    </body>
</html>