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
        <script src="js/addproduct.js"></script>
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
                        $45.75
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('PR_CON');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Project Condo
                        </span>
                        <span class="service-price">
                        $782.08
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
                        Consulting Services - Desktop
                        </span>
                        <span class="service-price">
                        $80.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('SYSTEMS');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Consulting Services - Systems
                        </span>
                        <span class="service-price">
                        $96.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('STORAGE');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Consulting Services - Storage
                        </span>
                        <span class="service-price">
                        $98.83
                        </span>
                    </div>
                    
                    <button class="add-button" title="Add Service" onclick="addProduct('RECUR_DESK');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Recurring Consulting Services - Desktop
                        </span>
                        <span class="service-price">
                        $80.00
                        </span>
                    </div>

                    <button class="add-button" title="Add Service" onclick="addProduct('RECUR_SYSTEMS');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Recurring Consulting Services - Systems
                        </span>
                        <span class="service-price">
                        $96.00
                        </span>
                    </div>
                    <button class="add-button" title="Add Service" onclick="addProduct('RECUR_STORAGE');">+
    </button>
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Recurring Consulting Services - Storage
                        </span>
                        <span class="service-price">
                        $98.83
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
                    <button class="add-button" title="Add Service" onclick="addProduct('CL_COMPUTE');">+
    </button>
                   
                    <div class="vm-services">
                        <span class="service-name" title=""> 
                        Cloud Compute
                        </span>
                        <span class="service-price">
                        $0.08
                        </span>
                    </div>
           </div>
            <div id = "quote-content">
                <button type="button" id="pdfbutton" onclick="changeForm(id);validateForm();">Generate PDF</button>
                <button type="button" id="estimatebutton" onclick="changeForm(id);validateForm();">Generate Estimate</button>
                <button type="button" id="savebutton" onclick="saveForm()">Save Form</button>
                <button type="button" id="loadbutton" onclick="loadForm()">Load Form</button>
                <button type="button" id="cleardata" onclick="clearData()">Clear Saved Forms</button>
                <!--<strong id="table-title">Your SDSC Cost Estimate </strong>-->
                <form name="quote" id="quote" action="" method="post" target="_blank">
                    <br/><br/>
                    <table class="tables" id="vm-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Virtualization (VM) Services</td>
                        </tr>
                    </table>
                    <table class="tables" id="str-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Storage</td>
                        </tr>
                    </table>
                    <table class="tables" id="pa-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Physical Administration</td>
                        </tr>
                    </table>
                    <table class="tables" id="backup-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">CommVault Backup</td>
                        </tr>
                    </table>
                    <table class="tables" id="consult-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Consulting</td>
                        </tr>
                    </table>
                    <table class="tables" id="sp-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Sharepoint</td>
                        </tr>
                    </table>
                    <table class="tables" id="cl-compute-table" colspan="5" cellspacing="0" style="border-bottom: 1px solid #d3d3d3">
                        <tr>
                            <td colspan="5" style="text-align:center; background-color: #d3d3d3;">Cloud Compute Services</td>
                        </tr>
                    </table>
                    <!-- table of all subtotals and monthly totals -->
                    <table class="total-table tables" id="totals"  colspan="5" cellspacing="0" style="margin-top: 10px;">
                        <!-- <tr><td colspan="5">&nbsp;</td></tr> -->
                    </table>
                    <input id="formcode" name="formcode" type="hidden">
                    <input id="name" name="name" type="hidden">
                </form>
            </div>
       </div>
    </body>
</html>