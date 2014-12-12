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
<!DOCTYPE html>
<html>
    <head>
        <title>SDSC Services Estimation Tool</title>
        <link rel="stylesheet" type="text/css" href="css/global.css">
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/begin.js"></script>
        <!--<script src="js/jspdf.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/tableExport.js"></script>
        <script type="text/javascript" src="js/jquery.base64.js"></script>
        <script type="text/javascript" src="js/jspdf/libs/sprintf.js"></script>
        <script type="text/javascript" src="js/FileSaver.min.js"></script>
        <script type="text/javascript" src="js/jspdf/jspdf.js"></script>
        <script type="text/javascript" src="js/jspdf/libs/base64.js"></script>
        <script type="text/javascript" src="js/html2canvas.js"></script>
        <script type="text/javascript" src="js/canvas2image.js"></script>
        <script type="text/javasript" src="js/jspdf.plugin.addimage.js"></script>
        <script type="text/javascript" src="js/downloadify.min.js"></script>
        <script type="text/javascript" src="js/Blob.js"></script>
        <script type="text/javascript" src="js/canvas-toBlob.js"></script>-->
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
                </div>
            <?php
            }
            ?>
            <div id = "quote-content">
                <!--<strong id="table-title">Your SDSC Cost Estimate </strong>-->
                <form name="quote" action="./tcpdf/examples/generatepdf.php" method="post">
                    <table id="vm-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                Virtualization (VM) Services
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="vm-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>VM Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="vm-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="str-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                Storage Services
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="str-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Storage Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="str-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="pa-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px" hidden>
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                Physical Administration
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="pa-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Physical Administration Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="pa-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="backup-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                CommVault Backup
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="backup-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Backup Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="backup-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="consult-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                Consulting
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="consult-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Consulting Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="consult-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="sp-table" colspan="4" cellspacing="0" border="1" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="170">
                                SharePoint
                            </td>
                            <td colspan="1" width="152">
                                Price/Unit
                            </td>
                            <td colspan="1" width="63">
                                Quantity
                            </td>
                            <td colspan="1" width="135">
                                Subtotal
                            </td>
                        </tr>
                    </table>
                    <table id="sp-table-totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Sharepoint Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="sp-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table id="totals" colspan="4" width="790">
                        <tr>
                            <td colspan="3" width="383">
                                <strong>Grand Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="sub-total" name="sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <input id="formcode" name="formcode" type="hidden">
                    <input type="submit" value="Generate PDF" id="pdfbutton">
                </form>
            </div>
       </div>
        
        
    </body>
</html>