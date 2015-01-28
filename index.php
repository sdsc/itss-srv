<!-- Connect to the database -->
<!--<?php
    /*try
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
    } */
?> -->
<!DOCTYPE html>
<html>
    <head>
        <title>SDSC Services Estimation Tool</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="css/global.css">
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        <script src="js/begin.js"></script>
        <script src="js/functions.js"></script>
        <script>
            $(function() {
                $( document ).tooltip({ track: true });
            });
        </script>
        <style>
            label {
                display: inline-block;
                width: 5em;
            }
        </style>
    </head>
    
    
    <!-- BEGIN THE HTML HERE -->
    <body>
       <div class="content">
          <img src="images/SDSClogo.jpg"/><br/><br/><br/>
           <div id = "product-col">
                    <button class="add-button" title="Add Service" onclick="addProduct('ST_VM');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title="1 vCPU, 2GB memory, 100 GB OS storage">
                            Standard VM
                        </span>
                        <span class="service-price">
                        $69.75
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('HS_VM');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title="">High Security VM
                        </span>
                        <span class="service-price">
                        $93.75</span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('CL_STR');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Cloud Storage</span>
                        <span class="service-price">
                        $32.16
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('PR_STR');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Project Storage
                        </span>
                        <span class="service-price">
                        $45.74
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('PR_CON');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Project Condo
                        </span>
                        <span class="service-price">
                        $782.11
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('SYS_MAN');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        System Management
                        </span>
                        <span class="service-price">
                        $69.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('RAW');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Backups
                        </span>
                        <span class="service-price">
                        $91.67
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('DESK');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Tier I Consulting Services - Desktop
                        </span>
                        <span class="service-price">
                        $80.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('SYSTEMS');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Tier II Consulting Services - Systems
                        </span>
                        <span class="service-price">
                        $96.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('STORAGE');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Tier I Consulting Services - Storage
                        </span>
                        <span class="service-price">
                        $80.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('SITE');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        SharePoint Site
                        </span>
                        <span class="service-price">
                        $333.33
                        </span>
                    </div>
           </div>
            <div id = "quote-content">
                <button type="button" id="pdfbutton" onclick="validateForm();">Generate PDF</button>
                <!--<strong id="table-title">Your SDSC Cost Estimate </strong>-->
                <form name="quote" id="quote" action="./tcpdf/pdf/generatepdf.php" method="post" target="_blank">
                    <br/><br/>
                    <table class="tables" id="vm-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold; ">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="vm-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>VM Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="vm-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="tables" id="str-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="str-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>Storage Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="str-sub-total" class="sub" name="vm-sub-total" size="20" value="$0.00" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="tables" id="pa-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="pa-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>Physical Administration Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="pa-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="tables" id="backup-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="backup-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>Backup Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="backup-sub-total" class="sub" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="tables" id="consult-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="consult-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>Consulting Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="consult-sub-total" name="vm-sub-total" size="20" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="tables" id="sp-table" colspan="5" cellspacing="0" style="font-size: 11px">
                        <tr style="font-size: 11px; background-color: #ccc; font-weight: bold;">
                            <td colspan="1" width="20">&nbsp;</td>
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
                    <table class="total-table" id="sp-table-totals" colspan="5" width="810">
                        <tr>
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <b>Sharepoint Total: </b>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="sp-sub-total" name="vm-sub-total" size="20" value="$0.00" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <table class="total-table" id="totals" width="810">
                        <tr style="font-size: 12px">
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <strong>Monthly Total: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="sub-total" name="sub-total" size="20" readonly>
                            </td>
                        </tr>
                        <tr style="font-size: 12px">
                            <td colspan="4" width="405" height="40" valign="bottom">
                                <strong>One-time Fees: </strong>
                            </td>
                            <td colspan="1" width="135">
                                <input type="text" id="onetime-total" size="20" name = "onetime-totals" value="$0.00" readonly>
                            </td>
                        </tr>
                    </table>
                    
                    <input id="formcode" name="formcode" type="hidden">
                </form>
            </div>
       </div>
    </body>
</html>