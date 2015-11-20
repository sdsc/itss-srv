/* Author: Kimberly Ly
 * Filename: functions.js
 * Purpose: Contains the calculating functions for creating the invoice.
 *          Please EDIT in the appropriate areas to CHANGE PRICE and
 *          SERVICE NAMES. 
 * Last Updated: 4/28/15, version 3.0
 */

/* PRICES FOR EVERYTHING.
    **** EDIT HERE TO CHANGE PRICES **** */

// PRICES FOR STANDARD VM UC
var PRICE_BASE_STANDARD_VM_UC = 69.75; //per VM
var PRICE_ADD_CPU_STANDARD_VM_UC = 12.94; //per CPU
var PRICE_ADD_RAM_STANDARD_VM_UC = 12.94; //per GB
var PRICE_ADD_SILVER_STANDARD_VM_UC = 45.75; //per TB
var PRICE_ADD_GOLD_STANDARD_VM_UC = 125.00; //per TB
var PRICE_ADD_SNAPSHOT_STANDARD_VM_UC = 24.00;
var PRICE_ST_VM_UC = [PRICE_BASE_STANDARD_VM_UC, PRICE_ADD_CPU_STANDARD_VM_UC, PRICE_ADD_RAM_STANDARD_VM_UC, PRICE_ADD_SILVER_STANDARD_VM_UC, PRICE_ADD_GOLD_STANDARD_VM_UC, PRICE_ADD_SNAPSHOT_STANDARD_VM_UC];

//PRICES FOR STANDARD VM EXTERNAL
var PRICE_BASE_STANDARD_VM_EXT = 101.1375; //per VM
var PRICE_ADD_CPU_STANDARD_VM_EXT = 18.763; //per CPU
var PRICE_ADD_RAM_STANDARD_VM_EXT = 18.763; //per GB
var PRICE_ADD_SILVER_STANDARD_VM_EXT = 66.3375; //per TB
var PRICE_ADD_GOLD_STANDARD_VM_EXT = 181.25; //per TB
var PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT = 34.80;
var PRICE_ST_VM_EXT = [PRICE_BASE_STANDARD_VM_EXT, PRICE_ADD_CPU_STANDARD_VM_EXT, PRICE_ADD_RAM_STANDARD_VM_EXT, PRICE_ADD_SILVER_STANDARD_VM_EXT, PRICE_ADD_GOLD_STANDARD_VM_EXT, PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT];

// PRICES FOR HIGH SECURITY VM UC
var PRICE_HIGH_SECURITY_VM_UC = 93.75; //per VM
var PRICE_ADD_CPU_HIGH_SECURITY_VM_UC = 15.61; //per CPU
var PRICE_ADD_RAM_HIGH_SECURITY_VM_UC = 15.61; //per GB
var PRICE_ADD_GOLD_HIGH_SECURITY_VM_UC = 125.00; //per TB
var PRICE_ADD_SNAPSHOT_STANDARD_VM_UC = 24.00;
var PRICE_HS_VM_UC = [PRICE_HIGH_SECURITY_VM_UC, PRICE_ADD_CPU_HIGH_SECURITY_VM_UC, PRICE_ADD_RAM_HIGH_SECURITY_VM_UC, 0,PRICE_ADD_GOLD_HIGH_SECURITY_VM_UC, PRICE_ADD_SNAPSHOT_STANDARD_VM_UC];

//PRICES FOR HIGH SECURITY VM EXT
var PRICE_HIGH_SECURITY_VM_EXT = 135.9375; //per VM
var PRICE_ADD_CPU_HIGH_SECURITY_VM_EXT = 22.6375; //per CPU
var PRICE_ADD_RAM_HIGH_SECURITY_VM_EXT = 22.6345; //per GB
var PRICE_ADD_GOLD_HIGH_SECURITY_VM_EXT = 181.25; //per TB
var PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT = 34.80;
var PRICE_HS_VM_EXT = [PRICE_HIGH_SECURITY_VM_EXT, PRICE_ADD_CPU_HIGH_SECURITY_VM_EXT, PRICE_ADD_RAM_HIGH_SECURITY_VM_EXT, 0,PRICE_ADD_GOLD_HIGH_SECURITY_VM_EXT, PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT];

// PRICES FOR CLOUD STORAGE
var PRICE_CLOUD_STORAGE = 32.16; //per TB
var PRICE_DUAL_SITE_CLOUD_STORAGE = 2 * PRICE_CLOUD_STORAGE; //per TB

// PRICES FOR PROJECT STORAGE
var PRICE_PROJECT_STORAGE = 45.75; //per TB

// PRICES FOR PROJECT CONDO
var PRICE_PROJECT_CONDO = 782.08; //per TB

// PRICES FOR SYSTEM MANAGEMENT
var PRICE_SYSTEM = 69.00; //per system
var PRICE_NON_REC_HARDWARE = 45.00; //per month
var PRICE_HARDWARE_WO_OS_SUPPORT = 90.00; //per month
var PRICE_ATTACHED_STORAGE_ARRAY = 56.00; //per month
var PRICE_NON_OS_SOFTWARE = 23.00; //per month
var PRICE_LOCAL_ADMIN_ACCESS = 34.00; //per month
var PRICE_SYSTEM_MONITOR_SUPPORT = 142.00; //per month

// PRICES FOR COMMVAULT BACKUP
var PRICE_RAW_BACKUP_DATA = 91.67; //per TB
var PRICE_FULL_BACKUP = 35.17; //per TB
var PRICE_DIFFERENTIAL_INCREMENTAL = 35.17; //per TB

// PRICES FOR CONSULTING
var PRICE_DESKTOP_SERVICES = 80.00; //per hour
var PRICE_SYSTEMS_SERVICES = 96.00; //per hour
var PRICE_STORAGE_SERVICES = 80.00; //per hour
var PRICE_RECURRING_CONSULTING_SERVICES = 96.00; //per hour

// PRICES FOR SHAREPOINT
var PRICE_SHAREPOINT_SITES = 333.33; //per month
var PRICE_ADD_DA_STORAGE = 10.00; //per month
var PRICE_CONSULTATION_SUPPORT = 96.00; //per hour

// PRICES FOR CLOUD COMPUTE
var PRICE_CL_COMPUTE_UC = [0.08, 0.16, 0.32, 0.64, 0.13, 0.26, 0.52, 0.22, 0.44, 0.88, 0.000063, 0.000063];
var PRICE_CL_COMPUTE_EXT = [0.116, 0.232, 0.464, 0.928, 0.1885, 0.377, 0.754, 0.319, 0.638, 1.276, 0.00009135, 0.00009135];

/**** END PRICES. ****/

/* NUMBER OF ROWS PER PRODUCT 
    **** EDIT THE NUMBER OF ROWS PER PRODUCT HERE **** */

var ROWS_STANDARD_VM = 13;
var ROWS_HIGH_SECURITY_VM = 14;
var ROWS_CLOUD_STORAGE = 7;
var ROWS_PROJECT_STORAGE = 3;
var ROWS_PROJECT_CONDO = 3;
var ROWS_SYSTEM_MANAGEMENT = 15;
var ROWS_BACKUPS = 14;
var ROWS_DESKTOP_SERVICES = 3;
var ROWS_SYSTEMS_SERVICES = 3;
var ROWS_STORAGE_SERVICES = 3;
var ROWS_RECURRING_CONSULTING_SERVICES = 3;
var ROWS_SHAREPOINT_SITES = 7;
var ROWS_CLOUD_COMPUTE = 29;

/**** END NUMBER OF ROWS CONSTANTS ****/
var service_num = 0; //number of Services added to grid
var vm_num = 0; //number of VM's ordered, st and hs
var numProducts = 0; // number of products on table currently
var item_num = 0; //for item and price id within each service

var row1, cell, rowCount;

/* list of variables for input/output */
var cpu_qty_in, cpu_sub_out, mem_qty_in, mem_sub_out, str_qty_in, str_sub_out, san_qty_in, san_sub_out, cl_str_qty_in, cl_str_sub_out;
            
/* options variable for dropdown menus */
var option; 



/* Function name: addProduct
 * Parameters: id - type of product being added
 * Description: This function adds a product to the table. The rows are different
                depending on the product.
 */
function addProduct(id)
{
    item_num = 0; //reset item_num after adding a new product
    ++service_num;
    // switch statement necessary to determine which table to add the product to
    switch (id) {
        case 'ST_VM':
        case 'HS_VM':
            var table = document.getElementById('vm-table');
            var totals = document.getElementById('vm-table-totals');
            break;
        case 'CL_STR':
        case 'PR_STR':
        case 'PR_CON':
            var table = document.getElementById('str-table');
            var totals = document.getElementById('str-table-totals');
            break;
        case 'DESK':
        case 'SYSTEMS':
        case 'STORAGE':
        case 'RECUR':
            var table = document.getElementById('consult-table');
            var totals = document.getElementById('consult-table-totals');
            break;
        case 'SITE':
        case 'SUPPORT':
            var table = document.getElementById('sp-table');
            var totals = document.getElementById('sp-table-totals');
            break;
        case 'SYS_MAN':
            var table = document.getElementById('pa-table');
            var totals = document.getElementById('pa-table-totals');
            break;
        case 'RAW':
            var table = document.getElementById('backup-table');
            var totals = document.getElementById('backup-table-totals');
            break;
        case 'CL_COMPUTE':
            var table = document.getElementById('cl-compute-table');
            var totals = document.getElementById('cl-compute-table-totals');
            break;
    }
    
    rowCount = table.rows.length; // current number of rows in table

    // If there is only one row in the table (the totals row), then hide the whole table
    if (rowCount - 1 === 0) {
        table.removeAttribute("hidden");
        totals.removeAttribute("hidden");
    }
    

    if (numProducts++ === 0) {
        document.getElementById('totals').removeAttribute("hidden");
    }
    
    /* ALL OF THIS IS FOR VM'S!!! */
    if (id == 'ST_VM' || id == 'HS_VM') {
        ++vm_num;
        /* user has chosen standard vm */
        if(id == 'ST_VM') {
        price_vm = PRICE_ST_VM_UC;
        slice_text = "Standard VM";
        vm_type_sub = "st-vm-sub"; //for sub id
        vm_type_price = "st-vm-price"; //for each price id
        vm_type_qty = "st-vm-qty"; //for each input qty id

        } else if (id == 'HS_VM') {
        price_vm = PRICE_HS_VM_UC;
        slice_text = "High Security VM";
        vm_type_sub = "hs-vm-sub"; //for sub id
        vm_type_price = "hs-vm-price"; //for each price id
        vm_type_qty = "hs-vm-qty"; //for each input qty id
        }
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + service_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        cell.setAttribute("colspan", "1");
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + service_num);
        remove.setAttribute("title", "Remove Service");
        if (id == 'ST_VM') {
            remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), ROWS_STANDARD_VM, 'ST_VM')");
        } else {
            remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), ROWS_HIGH_SECURITY_VM, 'ST_VM')");
        }
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode(slice_text);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
            
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + service_num;
        description_box.setAttribute("num", service_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        document.getElementById("description" + service_num).innerHTML = "Enter a description here";
        cell.setAttribute("colspan", 2);
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var options_text = document.createTextNode("Options");
        cell.appendChild(options_text);
        cell.setAttribute("colspan", "1");
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("colspan", "1");
        var os_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Affiliation:");
        cell.appendChild(os_text);

        var cell = row.insertCell(2);
        var os = document.createElement("select"); 
        os.setAttribute("name", "affiliation");
        os.setAttribute("title", "Choose client location");
        os.setAttribute("value", "UC");
        if (id == 'ST_VM'){
            os.setAttribute("onchange", "changePrices(this.value, 'ST_VM')");
        }
        else os.setAttribute("onchange", "changePrices(this.value, 'HS_VM')");

        option = new Option("UC", "UC", false, false);
        option.id = "UC" + service_num;
        os.appendChild(option);
        option = new Option("External", "External", false, false);
        option.id = "External" + service_num;
        os.appendChild(option);
        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + service_num;
       
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        var os_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Operating System:");
        cell.appendChild(os_text);
        
        var cell = row.insertCell(2);
        var os = document.createElement("select"); 
        os.setAttribute("name", "os" + service_num);
        os.setAttribute("value", "Windows");
        os.setAttribute("title", "Choose an operating system for your VM");

        option = new Option("Windows", "Windows", false, false);
        option.id = "Windows" + service_num;
        os.appendChild(option);
        option = new Option("Red Hat 6 64-bit", "Red Hat 6 64-bit", false, false);
        option.id = "RedHat" + service_num;
        os.appendChild(option);
        option = new Option("CentOS", "CentOS", false, false);
        option.id = "CentOS" + service_num;
        os.appendChild(option);
        option = new Option("Ubuntu", "Ubuntu", false, false);
        option.id = "Ubuntu" + service_num;
        os.appendChild(option);
        option = new Option("Other", "Other", false, false);
        option.id = "Other" + service_num;
        os.appendChild(option);
        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + service_num;
        os.setAttribute("optionval", service_num);
        os.setAttribute("sys", "sys" + service_num);
        os.setAttribute("manager", "manager" + service_num);
        os.setAttribute("vm-type", id);
        os.setAttribute("onchange", "processOS(this.getAttribute('vm-type'), document.getElementById(this.id).value, this.getAttribute('sys'), this.getAttribute('manager'), this.getAttribute('optionval'))");
        os.setAttribute("readonly", "readonly");
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var specifications_text = document.createTextNode("Specifications");
        cell.appendChild(specifications_text);
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Price");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Qty");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Cost");
        cell.appendChild(item_text);
        
        
        /* Base Price */
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("colspan", "1");
        var base_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Base VM");
        cell.appendChild(base_text);
        
        var cell = row.insertCell(2);
        cell.setAttribute("colspan", "1");
        var base_price = document.createTextNode("$" + price_vm[0]);
        cell.id = vm_type_price + (++item_num); //first item
        cell.appendChild(base_price);
        
        var cell = row.insertCell(3);
        cell.setAttribute("colspan", "1");
        cell.appendChild(document.createTextNode("1"));
        cell.setAttribute("value", 1);
        cell.setAttribute(vm_type_qty + item_num, 1);
        cell.id = vm_type_qty + item_num;
        
        var cell = row.insertCell(4);
        var price = document.createElement("input");
        price.setAttribute("name", vm_type_sub + item_num);
        price.setAttribute("type", "text");
        price.id = vm_type_sub + item_num;
        price.className = "vm-sub vm-sub" + vm_num;
        price.className += " price-align";
        price.value = "$" + price_vm[0];
        price.setAttribute("size", 20);
        price.setAttribute("readonly", "readonly");
        price.setAttribute("value", price.value);
        cell.appendChild(price);
        cell.setAttribute("colspan", "1");

        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        cell.setAttribute("colspan", "1");
        var cell = row2.insertCell(1);
        var cpu = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Additional CPUs");                       
        cell.appendChild(cpu);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(2);
        var cpu_price = document.createTextNode("$" + price_vm[1] + "/CPU");
        cell.appendChild(cpu_price);
        cell.id = vm_type_price + (++item_num);
        cell.setAttribute(vm_type_price + item_num, price_vm[1]);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(3);
        var cpu_qty = document.createElement("input");
        cpu_qty.setAttribute("type", "text");
        cpu_qty_in = vm_type_qty + item_num;
        cpu_sub_out = vm_type_sub + item_num;

        cell.appendChild(cpu_qty);
        cell.setAttribute("colspan", "1");
        cpu_qty.id = cpu_qty_in;
        cpu_qty.setAttribute("name", cpu_qty_in);
        cpu_qty.setAttribute("title", "Enter a whole number 0 to 11");
        cpu_qty.className += " cpu_qty userinput";
        cpu_qty.setAttribute("dest", "" + cpu_sub_out);
        cpu_qty.setAttribute("num", service_num);
        cpu_qty.setAttribute(vm_type_price + item_num, price_vm[1]);
        cpu_qty.setAttribute("cpu-price", price_vm[1])
        cpu_qty.setAttribute("size", 5);
        cpu_qty.setAttribute("onchange", "getEstimate('cpu', this.id, this.getAttribute('cpu-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
        cell.appendChild(document.createTextNode("\u00a0\u00a0CPU(s)"));
        
        var cell = row2.insertCell(4);
        var cpu_sub = document.createElement("input");
        cpu_sub.setAttribute("type", "text");
        cell.appendChild(cpu_sub);
        cell.setAttribute("colspan", "1");
        cpu_sub.id = cpu_sub_out;
        cpu_sub.setAttribute("name", cpu_sub.id);
        cpu_sub.setAttribute("size", 20);
        document.getElementById(cpu_sub_out).setAttribute("readonly", "readonly");
        cpu_sub.className = "vm-sub vm-sub" + vm_num;

        var row3 = table.insertRow(++rowCount);
        var cell = row3.insertCell(0);
        cell.setAttribute("colspan", "1");
        var cell = row3.insertCell(1);
        var mem = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Additional RAM");                       
        cell.appendChild(mem);
        cell.setAttribute("colspan", "1");
        var cell = row3.insertCell(2);
        var mem_price = document.createTextNode("$" + price_vm[2] + "/GB");
        cell.appendChild(mem_price);
        cell.setAttribute("colspan", "1");
        cell.id = vm_type_price + (++item_num);

        var cell = row3.insertCell(3);
        var mem_qty = document.createElement("input");
        mem_qty.setAttribute("type", "text");
        mem_qty_in = vm_type_qty + item_num;
        mem_sub_out = vm_type_sub + item_num;
        cell.appendChild(mem_qty);
        cell.setAttribute("colspan", "1");
        mem_qty.id = mem_qty_in;
        mem_qty.setAttribute("name", mem_qty_in);
        mem_qty.setAttribute("title", "Enter a whole number 0 to 190");
        mem_qty.className += " userinput";
        mem_qty.setAttribute("dest", mem_sub_out);
        mem_qty.setAttribute("num", service_num);
        mem_qty.setAttribute("mem-price", price_vm[2]);
        mem_qty.setAttribute("size", 5);
        mem_qty.setAttribute("onchange", "getEstimate('mem', this.id, this.getAttribute('mem-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
        cell.appendChild(document.createTextNode("\u00a0\u00a0GB"));
        
        var cell = row3.insertCell(4);
        var mem_sub = document.createElement("input");
        mem_sub.setAttribute("type", "text");
        cell.appendChild(mem_sub);
        cell.setAttribute("colspan", "1");
        mem_sub.id = mem_sub_out;
        mem_sub.setAttribute("name", mem_sub.id);
        mem_sub.setAttribute("size", 20);
        document.getElementById(mem_sub_out).setAttribute("readonly", "readonly");
        mem_sub.className = "vm-sub vm-sub" + vm_num;

        var row4 = table.insertRow(++rowCount);
        var cell = row4.insertCell(0);
        cell.setAttribute("colspan", "1");
        if (id == 'ST_VM') {
            var cell = row4.insertCell(1);
            var str = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Additional 'Silver' Storage");                        
            cell.appendChild(str);
            cell.setAttribute("colspan", "1");

            var cell = row4.insertCell(2);
            var str_price = document.createTextNode("$" + price_vm[3] + "/TB");
            cell.appendChild(str_price);
            cell.setAttribute("colspan", "1");
        cell.id = vm_type_price + (++item_num);

            var cell = row4.insertCell(3);
            var str_qty = document.createElement("input");
            str_qty.setAttribute("type", "text");
            str_qty_in = vm_type_qty + item_num;
            str_sub_out = vm_type_sub + item_num;
            cell.appendChild(str_qty);
            cell.setAttribute("colspan", "1");
            str_qty.id = str_qty_in;
            str_qty.setAttribute("name", str_qty_in);
            str_qty.setAttribute("title", "Minimum value 0.001TB (1GB). Max value 30TB (30000GB)");
            str_qty.className += " userinput";
            str_qty.setAttribute("dest", str_sub_out);
            str_qty.setAttribute("num", service_num);
            str_qty.setAttribute("str-price", price_vm[3]);
            str_qty.setAttribute("size", 5);
            str_qty.setAttribute("onchange", "getEstimate('silver', this.id, this.getAttribute('str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
            var blanknode = document.createTextNode("\u00a0");
            cell.appendChild(blanknode);
            
            var str_units = document.createElement("select");
            str_units.setAttribute("name", "str-units" + item_num);
            str_units.setAttribute("value", "TB");
            str_units.setAttribute("title", "Choose the units");
            str_units.setAttribute("num", item_num);
            str_units.id = "str-units" + service_num;
            
            /* add all unit options */
            option = new Option("TB", "TB", false, false);
            option.id = "TB2" + item_num;
            str_units.appendChild(option);

            option = new Option("GB", "GB", false, false);
            option.id = "GB2" + item_num;
            str_units.appendChild(option);
            str_units.setAttribute("onchange", "changeUnits(vm_type_qty, this.id, this.value, this.getAttribute('num'), 'str')");
            cell.appendChild(str_units);
            
            var cell = row4.insertCell(4);
            var str_sub = document.createElement("input");
            str_sub.setAttribute("type", "text");
            cell.appendChild(str_sub);
            cell.setAttribute("colspan", "1");
            str_sub.id = str_sub_out;
            str_sub.setAttribute("name", str_sub.id);
            str_sub.setAttribute("size", 20);
            document.getElementById(str_sub_out).setAttribute("readonly", "readonly");
            str_sub.className = "vm-sub vm-sub" + vm_num;
        } 
        
        else if (id == 'HS_VM') {
            var cell = row4.insertCell(1);
            var alert = document.createTextNode("Silver storage is unavailable for High Security VMs.");
            cell.appendChild(alert);
            cell.setAttribute("colspan", "4");
            cell.className = "alert";
        }

        var row5 = table.insertRow(++rowCount);
        var cell = row5.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(1);
        var san = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Additional 'Gold' Storage");                        
        cell.appendChild(san);
        cell.setAttribute("colspan", "1");

        var cell = row5.insertCell(2);
        var san_price = document.createTextNode("$" + parseFloat(price_vm[4]).toFixed(2) + "/TB");
        cell.appendChild(san_price);
        cell.setAttribute("colspan", "1");
        cell.id = vm_type_price + (++item_num);

        var cell = row5.insertCell(3);
        var san_qty = document.createElement("input");
        san_qty.setAttribute("type", "text");
        san_qty_in = vm_type_qty + item_num;;
        san_sub_out = vm_type_sub + item_num;;
        cell.appendChild(san_qty);
        cell.setAttribute("colspan", "1");
        san_qty.id = san_qty_in;
        san_qty.setAttribute("name", san_qty_in);
        san_qty.setAttribute("title", "Min value 0.001TB (1GB). Max value 4.9TB (4900GB)");
        san_qty.className += " userinput";
        san_qty.setAttribute("dest", san_sub_out);
        san_qty.setAttribute("num", service_num);
        san_qty.setAttribute("san-price", price_vm[4]);
        san_qty.setAttribute("size", 5);
        san_qty.setAttribute("onchange", "getEstimate('gold', this.id, price_vm[4], this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
        var blanknode = document.createTextNode("\u00a0");
        cell.appendChild(blanknode);
        
        var san_units = document.createElement("select");
        san_units.setAttribute("name", "san-units" + item_num);
        san_units.setAttribute("value", "TB");
        san_units.setAttribute("title", "Choose the units");
        san_units.setAttribute("num", item_num);
        san_units.id = "san-units" + service_num;
        
        /* add all unit options */
        option = new Option("TB", "TB", false, false);
        option.id = "TB" + item_num;
        san_units.appendChild(option);

        option = new Option("GB", "GB", false, false);
        option.id = "GB" + item_num;
        san_units.appendChild(option);
        san_units.setAttribute("onchange", "changeUnits(vm_type_qty, this.id, this.value, this.getAttribute('num'), 'san')");
        cell.appendChild(san_units);

        var cell = row5.insertCell(4);
        var san_sub = document.createElement("input");
        san_sub.setAttribute("type", "text");
        cell.appendChild(san_sub);
        cell.setAttribute("colspan", "1");
        san_sub.id = san_sub_out;
        san_sub.setAttribute("name", san_sub.id);
        san_sub.setAttribute("size", 20);
        document.getElementById(san_sub_out).setAttribute("readonly", "readonly");
        san_sub.className = "vm-sub vm-sub" + vm_num;
        
        var row = table.insertRow(++rowCount);
        row.id = "row" + service_num;
        var cell = row.insertCell(0);
        
        var cell = row.insertCell(1);
        var dual_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Extra Snapshots");
        cell.appendChild(dual_text);
        
        var cell = row.insertCell(2);
        var extrasnap_price = document.createTextNode("$" + parseFloat(price_vm[5]).toFixed(2));
        cell.appendChild(extrasnap_price);
        cell.setAttribute("colspan", "1");
        cell.id = vm_type_price + (++item_num);        

        var cell = row.insertCell(3);
        var extrasnap = document.createElement("select");
        extrasnap.id = "extrasnap" + vm_num;
        extrasnap.setAttribute("value", "No");
        extrasnap.setAttribute("num", vm_num);
        extrasnap.setAttribute("name", extrasnap.id);
        extrasnap.setAttribute("title", "Marking yes will add $" + price_vm[5] + " to the subtotal");
        extrasnap.setAttribute("onchange", "extraSnaps(this.getAttribute('num'))");
                
        var options = new Option("No", "No", false, false);
        options.id = "No" + vm_num;
        options.setAttribute("num", vm_num);
        extrasnap.appendChild(options);
        extrasnap.setAttribute("value", "No");
        
        options = new Option("Yes", "Yes", false, false);
        options.id = "Yes" + vm_num;
        options.setAttribute("num", vm_num);
        extrasnap.appendChild(options);
        cell.appendChild(extrasnap);
        
        var cell = row.insertCell(4);
        var extra_sub = document.createElement("input");
        extra_sub.setAttribute("type", "text");
        cell.appendChild(extra_sub);
        cell.setAttribute("colspan", "1");
        extra_sub.id = "extra-sub-out" + vm_num;
        extra_sub.setAttribute("name", extrasnap.id);
        extra_sub.setAttribute("size", 20);
        document.getElementById(extra_sub.id).setAttribute("readonly", "readonly");
        extra_sub.className = "vm-sub vm-sub" + vm_num;

        if (id == 'HS_VM') {
            var row6 = table.insertRow(++rowCount);
            var cell = row6.insertCell(0);
            cell.setAttribute("colspan", "1");

            cell = row6.insertCell(1);
            var sysmanagement = document.createTextNode("System Management");
            cell.appendChild(sysmanagement);
            cell.setAttribute("colspan", "1");

            cell = row6.insertCell(2);
            var sysmanagement_text = document.createElement("input");
            sysmanagement_text.setAttribute("type", "text");
            cell.appendChild(sysmanagement_text);
            cell.setAttribute("colspan", "3");

            sysmanagement_text.id = "sys" + vm_num;
            sysmanagement_text.setAttribute("name", sysmanagement_text.id);
            sysmanagement_text.className = "info";
            sysmanagement_text.setAttribute("size", 30);
            document.getElementById(sysmanagement_text.id).setAttribute("readonly", "readonly");

            /* Default values for System Management */
            /*if(id == 'ST_VM') {
                document.getElementById(sysmanagement_text.id).setAttribute("value", "Included");  
            } else { */ 
                document.getElementById(sysmanagement_text.id).setAttribute("value", "User-managed");
            /*}*/
        }

        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        
        var cell = row8.insertCell(1);
        var subtext = document.createTextNode("Subtotal");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";
        cell.setAttribute("style", "border-bottom: 1px solid black; font-weight: bold");

        var cell = row8.insertCell(2);
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        vmsubtotal.setAttribute("size", 20);
        cell.appendChild(vmsubtotal);
        cell.setAttribute("colspan", "1");
        vmsubtotal.id = "vm-sub" + vm_num + "-total"
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        //vmsubtotal.className = "sub";
        document.getElementById(vmsubtotal.id).setAttribute("readonly", "readonly");
        document.getElementById(vmsubtotal.id).setAttribute("value", "$" + price_vm[0]);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        sub('vm-sub');
        sub('sub');
            
    } /* END CODE FOR VM'S!!!! */
                
    /* THIS CODE IS FOR CLOUD STORAGE */
    else if (id == 'CL_STR') {
        
        var cl_str_price_val = 32.16;
        var cl_str_price_val_double = 64.32;
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), ROWS_CLOUD_STORAGE, 'CL_STR')");
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode("Cloud Storage");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        cell.setAttribute("colspan", "3");
        document.getElementById("description" + vm_num).innerHTML = "Enter a description here";
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var options_text = document.createTextNode("Options");
        cell.appendChild(options_text);
        cell.setAttribute("colspan", "1");
        
        var row2 = table.insertRow(++rowCount);
        row2.id = "row" + vm_num;
        var cell = row2.insertCell(0);
        
        var cell = row2.insertCell(1);
        var dual_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Dual Site Redundancy?");
        cell.appendChild(dual_text);
        
        
        var cell = row2.insertCell(2);
        var dualoptions = document.createElement("select");
        dualoptions.id = "dualoptions" + vm_num;
        dualoptions.setAttribute("num", vm_num);
        dualoptions.setAttribute("original", cl_str_price_val);
        dualoptions.setAttribute("double", cl_str_price_val_double);
        dualoptions.setAttribute("name", dualoptions.id);
        dualoptions.setAttribute("title", "Dual site redundancy doubles the cost");
        dualoptions.setAttribute("onchange", "changePrice(this.getAttribute('num'), this.getAttribute('original'), this.getAttribute('double'))");
        var options = new Option("No", "No", false, false);
        options.id = "No" + vm_num;
        options.setAttribute("num", vm_num);
        dualoptions.appendChild(options);
        dualoptions.setAttribute("value", "No");
        
        options = new Option("Yes", "Yes", false, false);
        options.id = "Yes" + vm_num;
        options.setAttribute("num", vm_num);
        dualoptions.appendChild(options);
        cell.appendChild(dualoptions);
        
        if (dualoptions.value == 'No') {
            var row3 = table.insertRow(++rowCount);
            row3.id = "row" + vm_num;
            var cell = row3.insertCell(0);
            
            var cell = row3.insertCell(1);
            var site_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Site");
            cell.appendChild(site_text);

            var cell = row3.insertCell(2);
            var siteoptions = document.createElement("select");
            siteoptions.id = "siteoptions" + vm_num;
            siteoptions.setAttribute("num", vm_num);
            siteoptions.setAttribute("name", siteoptions.id);
            siteoptions.setAttribute("title", "Choose a site");
            var options = new Option("San Diego", "San Diego", false, false);
            options.id = "SD" + vm_num;
            options.setAttribute("num", vm_num);
            siteoptions.appendChild(options);
            siteoptions.setAttribute("value", "San Diego");

            options = new Option("Oakland", "Oakland", false, false);
            options.id = "Oakland" + vm_num;
            siteoptions.setAttribute("num", vm_num);
            siteoptions.appendChild(options);
            siteoptions.setAttribute("onchange", "changeSite(this.getAttribute('num'))");
            cell.appendChild(siteoptions);

        }
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Specifications"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Price"));
        
        cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Qty"));
        
        cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Cost"));
        
        row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: black 1px solid");
        
        cell = row.insertCell(1);
 cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Storage"));
        cell.setAttribute("style", "border-bottom: black 1px solid");        
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "border-bottom: black 1px solid");
        var cl_str_price = document.createElement("input");
        cl_str_price.id = "cl-str-price" + vm_num;
        cl_str_price.className += " varprice";
        cl_str_price.setAttribute("type", "text");
        cl_str_price.setAttribute("readonly", "readonly");
        cl_str_price.value = "$" + cl_str_price_val + "/TB";
        cl_str_price.setAttribute("value", "$" + cl_str_price_val + "/TB");
        cl_str_price.setAttribute("name", cl_str_price.id);
        cell.appendChild(cl_str_price);
        document.getElementById("cl-str-price" + vm_num).setAttribute("value", "$" + cl_str_price_val + "/TB");
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(3);
        cell.setAttribute("style", "border-bottom: black 1px solid");
        var cl_str_qty = document.createElement("input");
        cl_str_qty.setAttribute("type", "text");
        cl_str_qty_in = "cl-str-qty" + vm_num;
        cl_str_sub_out = "cl-str-sub" + vm_num;
        cell.appendChild(cl_str_qty);
        cell.setAttribute("colspan", "1");
        cl_str_qty.id = cl_str_qty_in;
        cl_str_qty.className += " cl_str_qty userinput";
        cl_str_qty.setAttribute("dest", "" + cl_str_sub_out);
        cl_str_qty.setAttribute("num", vm_num);
        cl_str_qty.setAttribute("cl-str-price", cl_str_price_val);
        cl_str_qty.setAttribute("name", cl_str_qty.id);
        cl_str_qty.setAttribute("title", "Min value 0.100TB (100GB)");
        cl_str_qty.setAttribute("size", 5);
        cl_str_qty.setAttribute("onchange", "getEstimate('cl-str', this.id, this.getAttribute('cl-str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_STR')");
        var blanknode = document.createTextNode("\u00a0");
        cell.appendChild(blanknode);
        
        var cl_units = document.createElement("select");
        cl_units.setAttribute("name", "cl-units" + vm_num);
        cl_units.setAttribute("value", "TB");
        cl_units.setAttribute("title", "Choose the units");
        cl_units.setAttribute("num", vm_num);
        cl_units.id = "cl-units" + vm_num;
        
        /* add all unit options */
        option = new Option("TB", "TB", false, false);
        option.id = "TB" + vm_num;
        cl_units.appendChild(option);

        option = new Option("GB", "GB", false, false);
        option.id = "GB" + vm_num;
        cl_units.appendChild(option);
        cl_units.setAttribute("onchange", "changeUnits(vm_type_qty, this.id, this.value, this.getAttribute('num'), 'cl')");
        cell.appendChild(cl_units);

        var cell = row.insertCell(4);
        cell.setAttribute("style", "border-bottom: black 1px solid");
        var cl_str_sub = document.createElement("input");
        cl_str_sub.setAttribute("type", "text");
        cell.appendChild(cl_str_sub);
        cell.setAttribute("colspan", "1");
        cl_str_sub.id = cl_str_sub_out;
        document.getElementById(cl_str_sub_out).setAttribute("readonly", "readonly");
        cl_str_sub.className = "str-sub" + vm_num;
        cl_str_sub.setAttribute("name", cl_str_sub.id);
        cl_str_sub.setAttribute("size", 20);
    
        sub('vm-sub');
    } /* END CLOUD STORAGE CODE */
    
    /* BEGIN PROJECT STORAGE AND PROJECT CONDO CODE */
    else if (id == 'PR_STR' || id == 'PR_CON') {
        
        if(id == 'PR_STR') {
            var cl_str_price_val = PRICE_PROJECT_STORAGE;
            var cl_str_price_string = "$" + cl_str_price_val + "/TB";
            var prod_name = "Project Storage";
            var numRowsRemove = ROWS_PROJECT_STORAGE;
        } else {
            var cl_str_price_val = PRICE_PROJECT_CONDO;
            var cl_str_price_string = "$" + cl_str_price_val + "/unit";
            var prod_name = "Project Condo";
            var numRowsRemove = ROWS_PROJECT_CONDO;
        }
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", numRowsRemove);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'CL_STR')");
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode(prod_name);                      
        cell.appendChild(name);
        cell.className = "service-title";
        
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        cell.className += " pad-bottom";
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        cell.setAttribute("colspan", "3");
        document.getElementById("description" + vm_num).innerHTML = "Enter a brief description here";
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Item"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Price"));
        
        cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Qty"));
        
        cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Cost"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px solid black");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode("Storage"));
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px solid black");
        
        var cell = row.insertCell(2);
        var cl_str_price = document.createTextNode(cl_str_price_string);
        cell.appendChild(cl_str_price);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px solid black");
        
        var cell = row.insertCell(3);
        cell.setAttribute("style", "border-bottom: 1px solid black");
        var cl_str_qty = document.createElement("input");
        cl_str_qty.setAttribute("type", "text");
        cl_str_qty_in = "cl-str-qty" + vm_num;
        cl_str_sub_out = "cl-str-sub" + vm_num;
        cell.appendChild(cl_str_qty);
        cell.setAttribute("colspan", "1");
        cl_str_qty.id = cl_str_qty_in;
        cl_str_qty.className += " cl_str_qty userinput";
        cl_str_qty.setAttribute("dest", "" + cl_str_sub_out);
        cl_str_qty.setAttribute("num", vm_num);
        cl_str_qty.setAttribute("name", cl_str_qty.id);
        if (prod_name == 'Project Storage') {
            cl_str_qty.setAttribute("title", "Minimum 1TB (1000GB). Enter in multiples of 0.5TB (500GB)");
        }
        cl_str_qty.setAttribute("size", 5);
        cl_str_qty.setAttribute("cl-str-price", cl_str_price_val);
        cl_str_qty.setAttribute("onchange", "getEstimate('pr-str', this.id, this.getAttribute('cl-str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_STR')");
        var blanknode = document.createTextNode("\u00a0");
        cell.appendChild(blanknode);
        
        if (id == 'PR_STR') {
            var pr_units = document.createElement("select");
            pr_units.setAttribute("name", "pr-units" + vm_num);
            pr_units.setAttribute("value", "TB");
            pr_units.setAttribute("title", "Choose the units");
            pr_units.setAttribute("num", vm_num);
            pr_units.id = "pr-units" + vm_num;
            
            /* add all unit options */
            option = new Option("TB", "TB", false, false);
            option.id = "TB" + vm_num;
            pr_units.appendChild(option);

            option = new Option("GB", "GB", false, false);
            option.id = "GB" + vm_num;
            pr_units.appendChild(option);
            pr_units.setAttribute("onchange", "changeUnits(vm_type_qty, this.id, this.value, this.getAttribute('num'), 'pr')");
            cell.appendChild(pr_units);
        } else {
            cell.appendChild(document.createTextNode("\u00a0\u00a0unit(s)"));
        }

        var cell = row.insertCell(4);
        cell.setAttribute("style", "border-bottom: 1px solid black");
        var cl_str_sub = document.createElement("input");
        cl_str_sub.setAttribute("type", "text");
        cell.appendChild(cl_str_sub);
        cell.setAttribute("colspan", "1");
        cl_str_sub.id = cl_str_sub_out;
        cl_str_sub.setAttribute("name", cl_str_sub.id);
        cl_str_sub.setAttribute("size", 20);
        document.getElementById(cl_str_sub_out).setAttribute("readonly", "readonly");
        cl_str_sub.className = "str-sub vm-sub" + vm_num;
        sub('str-sub');
        sub('sub');
        
    } /* END PROJECT STORAGE AND PROJECT CONDO CODE */
    
    /* BEGIN CONSULTING SERVICES */
    else if (id == 'DESK' || id == 'SYSTEMS' || id == 'STORAGE' || id == 'RECUR') {
        var consult_price_val;
        var prod_name;
        var numRowsRemove;
        if (id == 'DESK') {
            consult_price_val = PRICE_DESKTOP_SERVICES;
            prod_name = "Tier I Consulting Services - Desktop";
            numRowsRemove = ROWS_DESKTOP_SERVICES;
        } else if (id == 'SYSTEMS') {
            consult_price_val = PRICE_SYSTEMS_SERVICES;
            prod_name = "Tier II Consulting Services - Systems";
            numRowsRemove = ROWS_SYSTEMS_SERVICES;
        } else if (id == 'STORAGE') {
            consult_price_val = PRICE_STORAGE_SERVICES;
            prod_name = "Tier I Consulting Services - Storage";
            numRowsRemove = ROWS_STORAGE_SERVICES;
        } else if (id == 'RECUR') {
            consult_price_val = PRICE_RECURRING_CONSULTING_SERVICES;
            prod_name = "Recurring Consulting Services";
            numRowsRemove = ROWS_RECURRING_CONSULTING_SERVICES;
        }
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", numRowsRemove);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'DESK')");
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode(prod_name);  
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        cell.className += " pad-bottom";
        
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        cell.setAttribute("colspan", "3");
        document.getElementById("description" + vm_num).innerHTML = "Enter a description here";
        
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Item"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Price"));
        
        cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Qty"));
        
        cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Cost"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px black solid");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode(prod_name));
        cell.setAttribute("style", "border-bottom: 1px black solid");
        
        var cell = row.insertCell(2);
        var consult_price = document.createTextNode("$" + consult_price_val + "/hr");
        cell.appendChild(consult_price);
        cell.setAttribute("colspan", "1");
        cell.setAttribute("style", "border-bottom: 1px black solid");
        
        var cell = row.insertCell(3);
        var consult_qty = document.createElement("input");
        consult_qty.setAttribute("type", "text");
        consult_qty_in = "consult-qty" + vm_num;
        consult_sub_out = "consult-sub" + vm_num;
        cell.appendChild(consult_qty);
        cell.setAttribute("colspan", "1");
        consult_qty.id = consult_qty_in;
        consult_qty.className += " consult_qty userinput";
        consult_qty.setAttribute("dest", "" + consult_sub_out);
        consult_qty.setAttribute("num", vm_num);
        consult_qty.setAttribute("consult-price", consult_price_val);
        consult_qty.setAttribute("name", consult_qty.id);
        if (id == 'RECUR') {
            consult_qty.setAttribute("title", "Number of hours in multiples of tenths (monthly consulting fee)");
        } else {
            consult_qty.setAttribute("title", "Number of hours in multiples of tenths (One-time consulting fee)");
        }
        cell.setAttribute("style", "border-bottom: 1px black solid");
        consult_qty.setAttribute("size", 5);
        consult_qty.setAttribute("onchange", "getEstimate('consult', this.id, this.getAttribute('consult-price'), this.getAttribute('dest'), this.getAttribute('num'), 'DESK')");
        cell.appendChild(document.createTextNode("\u00a0\u00a0hr(s)"));
        var cell = row.insertCell(4);
        var consult_sub = document.createElement("input");
        cell.setAttribute("style", "border-bottom: 1px black solid");
        consult_sub.setAttribute("type", "text");
        cell.appendChild(consult_sub);
        cell.setAttribute("colspan", "1");
        consult_sub.id = consult_sub_out;
        document.getElementById(consult_sub_out).setAttribute("readonly", "readonly");
        if (id == 'RECUR') {
            consult_sub.className = "consult-sub sub vm-sub" + vm_num;
        } else {
            consult_sub.className = "consult-sub onetime vm-sub" + vm_num;
        }
        
        consult_sub.setAttribute("name", consult_sub.id);
        consult_sub.setAttribute("size", 20);
        sub('consult-sub');
        sub('sub');
            
    } /* END CONSULTING SERVICES */
    
    /* BEGIN SHAREPOINT SERVICES */
    else if (id == 'SITE') {
        var sp_price_val = PRICE_SHAREPOINT_SITES;
        var prod_name = "SharePoint Site";
        var unit = "/month";
        var numRows = ROWS_SHAREPOINT_SITES; 
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("numRows", numRows);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'SUPPORT')");
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode(prod_name);
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";

        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        document.getElementById("description" + vm_num).innerHTML = "Enter a description here";
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Specifications"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Price"));
        
        cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Qty"));
        
        cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Cost"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Sites"));
        
        var cell = row.insertCell(2);
        var sp_price = document.createTextNode("$" + sp_price_val + unit);
        cell.appendChild(sp_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(3);
        
        var sp_qty = document.createElement("input");
        sp_qty.setAttribute("type", "text");
        sp_qty_in = "sp-qty" + vm_num;
        sp_sub_out = "sp-sub" + vm_num;
        cell.appendChild(sp_qty);
        cell.setAttribute("colspan", "1");
        sp_qty.id = sp_qty_in;
        sp_qty.className += " sp_qty userinput";
        sp_qty.setAttribute("dest", "" + sp_sub_out);
        sp_qty.setAttribute("num", vm_num);
        sp_qty.setAttribute("sp-price", sp_price_val);
        sp_qty.setAttribute("name", sp_qty.id);
        sp_qty.setAttribute("title", "Whole numbers only");
        sp_qty.setAttribute("size", 5);
        sp_qty.setAttribute("onchange", "getEstimate('sp', this.id, this.getAttribute('sp-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");
        
        var cell = row.insertCell(4);
        var sp_sub = document.createElement("input");
        sp_sub.setAttribute("type", "text");
        cell.appendChild(sp_sub);
        cell.setAttribute("colspan", "1");
        sp_sub.id = sp_sub_out;
        document.getElementById(sp_sub_out).setAttribute("readonly", "readonly");
        sp_sub.className = "sp-sub vm-sub" + vm_num;
        sp_sub.className += " sub";
        sp_sub.setAttribute("name", sp_sub.id);
        sp_sub.setAttribute("size", 20);
        
        additional_price_val = PRICE_ADD_DA_STORAGE;
        var row2 = table.insertRow(++rowCount);    
        var cell = row2.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(1);
        var additional_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Add'l 25 GB of DA site storage w/backup");
        additional_text.className += " sp-additional";
        cell.appendChild(additional_text);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(2);
        var additional_price = document.createTextNode("$" + additional_price_val + "/month");
        cell.appendChild(additional_price);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(3);
        var additional_qty = document.createElement("input");
        additional_qty.setAttribute("type", "text");
        additional_qty_in = "additional-qty" + vm_num;
        additional_sub_out = "additional-sub" + vm_num;
        cell.appendChild(additional_qty);
        cell.setAttribute("colspan", "1");
        additional_qty.id = additional_qty_in;
        additional_qty.className += " additional_qty userinput";
        additional_qty.setAttribute("dest", "" + additional_sub_out);
        additional_qty.setAttribute("num", vm_num);
        additional_qty.setAttribute("additional-price", additional_price_val);
        additional_qty.setAttribute("name", additional_qty.id);
        additional_qty.setAttribute("size", 5);
        additional_qty.setAttribute("onchange", "getEstimate('additional-sp', this.id, this.getAttribute('additional-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");
            
        additional_qty.setAttribute("title", "Whole numbers only");
        //cell.appendChild(document.createTextNode("\u00a0\u00a0chunk(s)"));

        var cell = row2.insertCell(4);
        var additional_sub = document.createElement("input");
        additional_sub.setAttribute("type", "text");
        cell.appendChild(additional_sub);
        cell.setAttribute("colspan", "1");
        additional_sub.id = additional_sub_out;
        document.getElementById(additional_sub_out).setAttribute("readonly", "readonly");
        additional_sub.className = "sp-sub sub vm-sub" + vm_num;
        additional_sub.setAttribute("name", additional_sub.id);
        additional_sub.setAttribute("size", 20);
        
        var row3 = table.insertRow(++rowCount);
        
        var cell = row3.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(1);
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Consultation Support");
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(2);
        var consultation_price = document.createTextNode("$" + PRICE_CONSULTATION_SUPPORT);
        cell.appendChild(consultation_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(3);
        
        var consultation_qty = document.createElement("input");
        consultation_qty.setAttribute("type", "text");
        consultation_qty_in = "consultation-qty" + vm_num;
        consultation_sub_out = "consultation-sub" + vm_num;
        cell.appendChild(consultation_qty);
        cell.setAttribute("colspan", "1");
        consultation_qty.id = consultation_qty_in;
        consultation_qty.className += " consultation_qty userinput";
        consultation_qty.setAttribute("dest", "" + consultation_sub_out);
        consultation_qty.setAttribute("num", vm_num);
        consultation_qty.setAttribute("consultation-price", PRICE_CONSULTATION_SUPPORT);
        consultation_qty.setAttribute("name", consultation_qty.id);
        consultation_qty.setAttribute("title", "Number of hours in tenths increments");
        consultation_qty.setAttribute("size", 5);
        consultation_qty.setAttribute("onchange", "getEstimate('sp-consult', this.id, this.getAttribute('consultation-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");
        
        var cell = row3.insertCell(4);
        var consultation_sub = document.createElement("input");
        consultation_sub.setAttribute("type", "text");
        cell.appendChild(consultation_sub);
        cell.setAttribute("colspan", "1");
        consultation_sub.id = consultation_sub_out;
        document.getElementById(consultation_sub_out).setAttribute("readonly", "readonly");
        consultation_sub.className = "sp-sub vm-sub" + vm_num;
        consultation_sub.className += " onetime";
        consultation_sub.setAttribute("name", consultation_sub.id);
        consultation_sub.setAttribute("size", 20);
        
        var row4 = table.insertRow(++rowCount);
        
        var cell = row4.insertCell(0);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(1);
        cell.setAttribute("style", "border-bottom: 1px solid black; font-weight: bold;");
        var subtext = document.createTextNode("Subtotal:");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";
            
        var cell = row4.insertCell(2);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        var spsubtotal = document.createElement("input");
        spsubtotal.setAttribute("type", "text");
        cell.appendChild(spsubtotal);
        cell.setAttribute("colspan", "1");
        spsubtotal.id = "vm-sub" + vm_num + "-total";
        //spsubtotal.className = "sub";
        spsubtotal.setAttribute("name", spsubtotal.id);
        spsubtotal.setAttribute("size", 20);
        document.getElementById(spsubtotal.id).setAttribute("readonly", "readonly");
        
        sub('vm-sub');
        sub('sub');
    } /* END SHAREPOINT SERVICES */
    
    /* BEGIN SYSTEM MANAGEMENT */
    else if (id == 'SYS_MAN') {
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", ROWS_SYSTEM_MANAGEMENT);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'SYS_MAN')");
        
        var cell = row1.insertCell(1);
        var name = document.createTextNode("System Management");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
            
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "2");
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        document.getElementById("description" + vm_num).innerHTML = "Enter a description here";
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Options"));
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Management Type"));
        
        cell = row.insertCell(2);
        var psa = document.createElement("select"); 
        
        option = new Option("Standard", "Standard", false, false);
        option.id = "Standard" + vm_num;
        psa.appendChild(option);

        option = new Option("Custom", "Custom", false, false);
        option.id = "Custom" + vm_num;
        psa.appendChild(option);
        psa.setAttribute("title", "Choose the Standard option, or customize your own settings. Customization results in different prices.");

        cell.appendChild(psa);
        cell.setAttribute("colspan", "1");
        psa.id = "psa" + vm_num;
        psa.setAttribute("optionval", vm_num);
        psa.setAttribute("onchange", "processPrice(document.getElementById(this.id).value, this.getAttribute('optionval'))");
        psa.setAttribute("value", "Standard");
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Specifications"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Price"));
        
        cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Qty"));
        
        cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Cost"));
        
        row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0System"));
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(2);
        //kimberly keep adding here
        var system_price = document.createElement("input");
        system_price.setAttribute("type", "text");
        system_price.setAttribute("readonly", "readonly");
        system_price.setAttribute("value", "$" + PRICE_SYSTEM);
        system_price.id = "system-price" + vm_num;
        system_price.setAttribute("name", system_price.id);
        cell.appendChild(system_price);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(3);
        var sys_man_qty = document.createElement("input");
        sys_man_qty.setAttribute("type", "text");
        sys_man_qty_in = "sys-man-qty" + vm_num;
        sys_man_sub_out = "sys-man-sub" + vm_num;
        cell.appendChild(sys_man_qty);
        cell.setAttribute("colspan", "1");
        sys_man_qty.id = sys_man_qty_in;
        sys_man_qty.className += " sys_man_qty userinput";
        sys_man_qty.setAttribute("dest", "" + sys_man_sub_out);
        sys_man_qty.setAttribute("num", vm_num);
        sys_man_qty.setAttribute("sys-man-price", PRICE_SYSTEM);
        sys_man_qty.setAttribute("name", sys_man_qty.id);
        sys_man_qty.setAttribute("size", 5);
        sys_man_qty.setAttribute("onchange", "getEstimate('sys-man', this.id, this.getAttribute('sys-man-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row.insertCell(4);
        var sys_man_sub = document.createElement("input");
        sys_man_sub.setAttribute("type", "text");
        cell.appendChild(sys_man_sub);
        cell.setAttribute("colspan", "1");
        sys_man_sub.id = sys_man_sub_out;
        sys_man_sub.setAttribute("name", sys_man_sub.id);
        sys_man_sub.setAttribute("size", 20);
        document.getElementById(sys_man_sub_out).setAttribute("readonly", "readonly");
        sys_man_sub.className = "pa-sub vm-sub" + vm_num;
        
        row = table.insertRow(++rowCount);
        cell = row.insertCell(0); 
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1); 
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Surcharge for"));
        
        var row3 = table.insertRow(++rowCount);
        var cell = row3.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(1);
        var nonrec = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Non-recommended hardware");                       
        cell.appendChild(nonrec);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(2);
        var nonrec_price = document.createTextNode("$" + PRICE_NON_REC_HARDWARE + "/month");
        cell.appendChild(nonrec_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(3);
        var nonrec_qty = document.createElement("input");
        nonrec_qty.setAttribute("type", "text");
        nonrec_qty_in = "nonrec-qty" + vm_num;
        nonrec_sub_out = "nonrec-sub" + vm_num;
        cell.appendChild(nonrec_qty);
        cell.setAttribute("colspan", "1");
        nonrec_qty.id = nonrec_qty_in;
        nonrec_qty.className += " nonrec_qty userinput";
        nonrec_qty.setAttribute("dest", "" + nonrec_sub_out);
        nonrec_qty.setAttribute("num", vm_num);
        nonrec_qty.setAttribute("nonrec-price", PRICE_NON_REC_HARDWARE);
        nonrec_qty.setAttribute("name", nonrec_qty.id);
        nonrec_qty.setAttribute("title", "To receive this option, enter 1");
        nonrec_qty.setAttribute("size", 5);
        nonrec_qty.setAttribute("onchange", "getEstimate('nonrec', this.id, this.getAttribute('nonrec-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row3.insertCell(4);
        var nonrec_sub = document.createElement("input");
        nonrec_sub.setAttribute("type", "text");
        cell.appendChild(nonrec_sub);
        cell.setAttribute("colspan", "1");
        nonrec_sub.id = nonrec_sub_out;
        nonrec_sub.setAttribute("name", nonrec_sub.id);
        nonrec_sub.setAttribute("size", 20);
        document.getElementById(nonrec_sub_out).setAttribute("readonly", "readonly");
        nonrec_sub.className = "pa-sub vm-sub" + vm_num;
        
        var row4 = table.insertRow(++rowCount);
        
        var cell = row4.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(1);
        var no_os = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Hardware without build-in OS support");                       
        cell.appendChild(no_os);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(2);
        var no_os_price = document.createTextNode("$" + PRICE_HARDWARE_WO_OS_SUPPORT + "/month");
        cell.appendChild(no_os_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(3);
        var no_os_qty = document.createElement("input");
        no_os_qty.setAttribute("type", "text");
        no_os_qty_in = "no_os-qty" + vm_num;
        no_os_sub_out = "no_os-sub" + vm_num;
        cell.appendChild(no_os_qty);
        cell.setAttribute("colspan", "1");
        no_os_qty.id = no_os_qty_in;
        no_os_qty.className += " no_os_qty userinput";
        no_os_qty.setAttribute("dest", "" + no_os_sub_out);
        no_os_qty.setAttribute("num", vm_num);
        no_os_qty.setAttribute("no_os-price", PRICE_HARDWARE_WO_OS_SUPPORT);
        no_os_qty.setAttribute("name", no_os_qty.id);
        no_os_qty.setAttribute("title", "To receive this option, enter 1");
        no_os_qty.setAttribute("size", 5);
        no_os_qty.setAttribute("onchange", "getEstimate('no_os', this.id, this.getAttribute('no_os-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row4.insertCell(4);
        var no_os_sub = document.createElement("input");
        no_os_sub.setAttribute("type", "text");
        cell.appendChild(no_os_sub);
        cell.setAttribute("colspan", "1");
        no_os_sub.id = no_os_sub_out;
        document.getElementById(no_os_sub_out).setAttribute("readonly", "readonly");
        no_os_sub.className = "pa-sub vm-sub" + vm_num;
        no_os_sub.setAttribute("name", no_os_sub.id);
        no_os_sub.setAttribute("size", 20);
        
        var row5 = table.insertRow(++rowCount);
        var cell = row5.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(1);
        var storage_array = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Each attached storage array");                       
        cell.appendChild(storage_array);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(2);
        var storage_array_price = document.createTextNode("$" + PRICE_ATTACHED_STORAGE_ARRAY + "/month");
        cell.appendChild(storage_array_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(3);
        var storage_array_qty = document.createElement("input");
        storage_array_qty.setAttribute("type", "text");
        storage_array_qty_in = "storage_array-qty" + vm_num;
        storage_array_sub_out = "storage_array-sub" + vm_num;
        cell.appendChild(storage_array_qty);
        cell.setAttribute("colspan", "1");
        storage_array_qty.id = storage_array_qty_in;
        storage_array_qty.className += " storage_array_qty userinput";
        storage_array_qty.setAttribute("dest", "" + storage_array_sub_out);
        storage_array_qty.setAttribute("num", vm_num);
        storage_array_qty.setAttribute("storage_array-price", PRICE_ATTACHED_STORAGE_ARRAY);
        storage_array_qty.setAttribute("name", storage_array_qty.id);
        storage_array_qty.setAttribute("title", "To receive this option, enter 1");
        storage_array_qty.setAttribute("size", 5);
        storage_array_qty.setAttribute("onchange", "getEstimate('storage_array', this.id, this.getAttribute('storage_array-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row5.insertCell(4);
        var storage_array_sub = document.createElement("input");
        storage_array_sub.setAttribute("type", "text");
        cell.appendChild(storage_array_sub);
        cell.setAttribute("colspan", "1");
        storage_array_sub.id = storage_array_sub_out;
        document.getElementById(storage_array_sub_out).setAttribute("readonly", "readonly");
        storage_array_sub.className = "pa-sub vm-sub" + vm_num;
        storage_array_sub.setAttribute("name", storage_array_sub.id);
        storage_array_sub.setAttribute("size", 20);
        
        var row6 = table.insertRow(++rowCount);
        var cell = row6.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(1);
        var non_os_vendor = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Non-OS vendor software");                       
        cell.appendChild(non_os_vendor);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(2);
        var non_os_vendor_price = document.createTextNode("$" + PRICE_NON_OS_SOFTWARE + "/month");
        cell.appendChild(non_os_vendor_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(3);
        var non_os_vendor_qty = document.createElement("input");
        non_os_vendor_qty.setAttribute("type", "text");
        non_os_vendor_qty_in = "non_os_vendor-qty" + vm_num;
        non_os_vendor_sub_out = "non_os_vendor-sub" + vm_num;
        cell.appendChild(non_os_vendor_qty);
        cell.setAttribute("colspan", "1");
        non_os_vendor_qty.id = non_os_vendor_qty_in;
        non_os_vendor_qty.className += " non_os_vendor_qty userinput";
        non_os_vendor_qty.setAttribute("dest", "" + non_os_vendor_sub_out);
        non_os_vendor_qty.setAttribute("num", vm_num);
        non_os_vendor_qty.setAttribute("size", 5);
        non_os_vendor_qty.setAttribute("name", non_os_vendor_qty.id);
        non_os_vendor_qty.setAttribute("title", "To receive this option, enter 1");
        non_os_vendor_qty.setAttribute("non_os_vendor-price", PRICE_NON_OS_SOFTWARE);
        non_os_vendor_qty.setAttribute("onchange", "getEstimate('non_os_vendor', this.id, this.getAttribute('non_os_vendor-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row6.insertCell(4);
        var non_os_vendor_sub = document.createElement("input");
        non_os_vendor_sub.setAttribute("type", "text");
        cell.appendChild(non_os_vendor_sub);
        cell.setAttribute("colspan", "1");
        non_os_vendor_sub.id = non_os_vendor_sub_out;
        document.getElementById(non_os_vendor_sub_out).setAttribute("readonly", "readonly");
        non_os_vendor_sub.className = "pa-sub vm-sub" + vm_num;
        non_os_vendor_sub.setAttribute("name", non_os_vendor_sub.id);
        non_os_vendor_sub.setAttribute("size", 20);
        
        var row7 = table.insertRow(++rowCount);
        var cell = row7.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(1);
        var local_admin_access = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Local administration access");                       
        cell.appendChild(local_admin_access);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(2);
        var local_admin_access_price = document.createTextNode("$" + PRICE_LOCAL_ADMIN_ACCESS + "/month");
        cell.appendChild(local_admin_access_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(3);
        var local_admin_access_qty = document.createElement("input");
        local_admin_access_qty.setAttribute("type", "text");
        local_admin_access_qty_in = "local_admin_access-qty" + vm_num;
        local_admin_access_sub_out = "local_admin_access-sub" + vm_num;
        cell.appendChild(local_admin_access_qty);
        cell.setAttribute("colspan", "1");
        local_admin_access_qty.id = local_admin_access_qty_in;
        local_admin_access_qty.className += " local_admin_access_qty userinput";
        local_admin_access_qty.setAttribute("dest", "" + local_admin_access_sub_out);
        local_admin_access_qty.setAttribute("num", vm_num);
        local_admin_access_qty.setAttribute("local_admin_access-price", PRICE_LOCAL_ADMIN_ACCESS);
        local_admin_access_qty.setAttribute("name", local_admin_access_qty.id);
        local_admin_access_qty.setAttribute("title", "To receive this option, enter 1");
        local_admin_access_qty.setAttribute("size", 5);
        local_admin_access_qty.setAttribute("onchange", "getEstimate('local_admin_access', this.id, this.getAttribute('local_admin_access-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row7.insertCell(4);
        var local_admin_access_sub = document.createElement("input");
        local_admin_access_sub.setAttribute("type", "text");
        cell.appendChild(local_admin_access_sub);
        cell.setAttribute("colspan", "1");
        local_admin_access_sub.id = local_admin_access_sub_out;
        document.getElementById(local_admin_access_sub_out).setAttribute("readonly", "readonly");
        local_admin_access_sub.className = "pa-sub vm-sub" + vm_num;
        local_admin_access_sub.setAttribute("name", local_admin_access_sub.id);
        local_admin_access_sub.setAttribute("size", 20);
        
        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(1);
        var sys_monitor = document.createTextNode("\u00a0\u00a0\u00a0\u00a024/7 system monitoring and support");                       
        cell.appendChild(sys_monitor);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(2);
        var sys_monitor_price = document.createTextNode("$" + PRICE_SYSTEM_MONITOR_SUPPORT + "/month");
        cell.appendChild(sys_monitor_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(3);
        var sys_monitor_qty = document.createElement("input");
        sys_monitor_qty.setAttribute("type", "text");
        sys_monitor_qty_in = "sys_monitor-qty" + vm_num;
        sys_monitor_sub_out = "sys_monitor-sub" + vm_num;
        cell.appendChild(sys_monitor_qty);
        cell.setAttribute("colspan", "1");
        sys_monitor_qty.id = sys_monitor_qty_in;
        sys_monitor_qty.className += " sys_monitor_qty userinput";
        sys_monitor_qty.setAttribute("dest", "" + sys_monitor_sub_out);
        sys_monitor_qty.setAttribute("num", vm_num);
        sys_monitor_qty.setAttribute("sys_monitor-price", PRICE_SYSTEM_MONITOR_SUPPORT);
        sys_monitor_qty.setAttribute("name", sys_monitor_qty.id);
        sys_monitor_qty.setAttribute("title", "To receive this option, enter 1");
        sys_monitor_qty.setAttribute("size", 5);
        sys_monitor_qty.setAttribute("onchange", "getEstimate('sys_monitor', this.id, this.getAttribute('sys_monitor-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row8.insertCell(4);
        var sys_monitor_sub = document.createElement("input");
        sys_monitor_sub.setAttribute("type", "text");
        cell.appendChild(sys_monitor_sub);
        cell.setAttribute("colspan", "1");
        sys_monitor_sub.id = sys_monitor_sub_out;
        document.getElementById(sys_monitor_sub_out).setAttribute("readonly", "readonly");
        sys_monitor_sub.className = "pa-sub vm-sub" + vm_num;
        sys_monitor_sub.setAttribute("name", sys_monitor_sub.id);
        sys_monitor_sub.setAttribute("size", 20);
        
        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(1);
        var colo = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Colocation Services");                       
        cell.appendChild(colo);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(2);
        var colo_price = document.createTextNode("See Colocation Rates");
        cell.appendChild(colo_price);
        cell.setAttribute("colspan", "3");
        
        var row9 = table.insertRow(++rowCount);

        var cell = row9.insertCell(0);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        cell.setAttribute("colspan", "1");
        
        var cell = row9.insertCell(1);
        cell.setAttribute("style", "border-bottom: 1px solid black; font-weight: bold;");
        var subtext = document.createTextNode("Subtotal:");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row9.insertCell(2);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        cell.appendChild(vmsubtotal);
        cell.setAttribute("colspan", "1");
        vmsubtotal.id = "vm-sub" + vm_num + "-total";
        //vmsubtotal.className = "sub";
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        vmsubtotal.setAttribute("size", 20);
        document.getElementById(vmsubtotal.id).setAttribute("readonly", "readonly");
        sub('pa-sub');
        sub('sub');
    } /* END SYSTEM MANAGEMENT */
    
    /* BEGIN COMMVAULT BACKUP */
    else if (id == 'RAW') {
        
        raw_price_val = PRICE_RAW_BACKUP_DATA;
        full_price_val = PRICE_FULL_BACKUP;
        diff_price_val = PRICE_DIFFERENTIAL_INCREMENTAL;
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", ROWS_BACKUPS);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'RAW')");

        var cell = row1.insertCell(1);
        var name = document.createTextNode("CommVault Backup");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + vm_num;
        description_box.setAttribute("num", vm_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "15");
        cell.appendChild(description_box);
        document.getElementById("description" + vm_num).innerHTML = "Enter a brief description here";
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("Options"));
        
        var row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        cell = row.insertCell(1);
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Backup Plan"));
        
        var cell = row.insertCell(2);
        var package = document.createElement("select"); 

        /* add all operating systems options */
        option = new Option("Standard 3-mo. Retention", "Standard 3-mo. Retention", false, false);
        option.id = "threemonth" + vm_num;
        package.appendChild(option);

        option = new Option("Standard 6-mo. Retention", "Standard 6-mo. Retention", false, false);
        option.id = "sixmonth" + vm_num;
        package.appendChild(option);

        option = new Option("Custom", "Custom", false, false);
        option.id = "Custom" + vm_num;
        package.appendChild(option);
        
        cell.appendChild(package);
        cell.setAttribute("colspan", "2");
        package.id = "package" + vm_num;
        package.setAttribute("optionval", vm_num);
        package.setAttribute("sys", "sys" + vm_num);
        package.setAttribute("manager", "manager" + vm_num);
        package.setAttribute("vm-type", id);
        package.setAttribute("name", package.id);
        package.setAttribute("title", "Standard options offer full monthly backups, weekly differentials, and daily incrementals. Choose custom for custom settings");
        package.setAttribute("onchange", "processPackage(document.getElementById(this.id).value, this.getAttribute('optionval'))");
        package.setAttribute("value", "Standard 3-mo. Retention");
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var specifications_text = document.createTextNode("Specifications");
        cell.appendChild(specifications_text);
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Price");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Qty");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Cost");
        cell.appendChild(item_text);
        
        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(1);
        var raw = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Raw Backup Data");                       
        cell.appendChild(raw);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(2);
        var raw_price = document.createTextNode("$" + raw_price_val + "/TB");
        cell.appendChild(raw_price);
        cell.setAttribute("colspan", "1");
        var cell = row2.insertCell(3);
        var raw_qty = document.createElement("input");
        raw_qty.setAttribute("type", "text");
        raw_qty_in = "raw-qty" + vm_num;
        raw_sub_out = "raw-sub" + vm_num;
        cell.appendChild(raw_qty);
        cell.setAttribute("colspan", "1");
        raw_qty.id = raw_qty_in;
        raw_qty.className += " raw_qty userinput";
        raw_qty.setAttribute("dest", "" + raw_sub_out);
        raw_qty.setAttribute("num", vm_num);
        raw_qty.setAttribute("raw-price", raw_price_val);
        raw_qty.setAttribute("name", raw_qty.id);
        raw_qty.setAttribute("size", 5);
        raw_qty.setAttribute("onchange", "getEstimate('raw', this.id, this.getAttribute('raw-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");
        var blanknode = document.createTextNode("\u00a0");
        cell.appendChild(blanknode);
        
        
        var raw_units = document.createElement("select");
        raw_units.setAttribute("name", "raw-units" + vm_num);
        raw_units.setAttribute("value", "TB");
        raw_units.setAttribute("title", "Choose the units");
        raw_units.setAttribute("num", vm_num);
        raw_units.id = "raw-units" + vm_num;
            
        /* add all unit options */
        option = new Option("TB", "TB", false, false);
        option.id = "TB" + vm_num;
        raw_units.appendChild(option);

        option = new Option("GB", "GB", false, false);
        option.id = "GB" + vm_num;
        raw_units.appendChild(option);
        raw_units.setAttribute("onchange", "changeUnits(this.id, this.value, this.getAttribute('num'), 'raw')");
        cell.appendChild(raw_units);
        
        var cell = row2.insertCell(4);
        var raw_sub = document.createElement("input");
        raw_sub.setAttribute("type", "text");
        cell.appendChild(raw_sub);
        cell.setAttribute("colspan", "1");
        raw_sub.id = raw_sub_out;
        document.getElementById(raw_sub_out).setAttribute("readonly", "readonly");
        raw_sub.className = "backup-sub vm-sub" + vm_num;
        raw_sub.setAttribute("name", raw_sub.id);
        raw_sub.setAttribute("size", 20);
        
        var row3 = table.insertRow(++rowCount);
        var cell = row3.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(1);
        var full = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Full Backups");                       
        cell.appendChild(full);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(2);
        var full_price = document.createTextNode("$" + full_price_val + "/TB");
        cell.appendChild(full_price);
        cell.setAttribute("colspan", "1");
        var cell = row3.insertCell(3);
        var full_qty = document.createElement("input");
        full_qty.setAttribute("type", "text");
        full_qty_in = "full-qty" + vm_num;
        full_sub_out = "full-sub" + vm_num;
        cell.appendChild(full_qty);
        cell.setAttribute("colspan", "1");
        full_qty.id = full_qty_in;
        full_qty.className += " full_qty userinput";
        full_qty.setAttribute("dest", "" + full_sub_out);
        full_qty.setAttribute("num", vm_num);
        full_qty.setAttribute("full-price", full_price_val);
        full_qty.setAttribute("name", full_qty.id);
        full_qty.setAttribute("size", 5);
        full_qty.setAttribute("readonly", "readonly");
        //full_qty.setAttribute("onchange", "getEstimate('full', this.id, this.getAttribute('full-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");
        cell.appendChild(document.createTextNode("\u00a0\u00a0TB"));
                         
        var cell = row3.insertCell(4);
        var full_sub = document.createElement("input");
        full_sub.setAttribute("type", "text");
        cell.appendChild(full_sub);
        cell.setAttribute("colspan", "1");
        full_sub.id = full_sub_out;
        document.getElementById(full_sub_out).setAttribute("readonly", "readonly");
        full_sub.className = "backup-sub vm-sub" + vm_num;
        full_sub.setAttribute("name", full_sub.id);
        full_sub.setAttribute("size", 20);
        
        var row4 = table.insertRow(++rowCount);
        var cell = row4.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(1);
        var monthlybackup = document.createTextNode("\u00a0\u00a0\u00a0\u00a0-Full backups/month");
        monthlybackup.className += " smalltext";
        cell.appendChild(monthlybackup);
        cell.setAttribute("colspan", "2");
        
        var cell = row4.insertCell(2);
        var monthlybackup_qty = document.createElement("input");
        monthlybackup_qty.setAttribute("type", "text");
        monthlybackup_qty_in = "monthlybackup-qty" + vm_num;
        monthlybackup_sub_out = "monthlybackup-sub" + vm_num;
        cell.appendChild(monthlybackup_qty);
        cell.setAttribute("colspan", "2");
        monthlybackup_qty.id = monthlybackup_qty_in;
        monthlybackup_qty.className += " monthlybackup_qty userinput";
        monthlybackup_qty.setAttribute("name", monthlybackup_qty.id);
        monthlybackup_qty.setAttribute("num", vm_num);
        monthlybackup_qty.setAttribute("size", 5);
        monthlybackup_qty.setAttribute("onchange", "changeValue(this.id, this.value, this.getAttribute('num'))");
        
        var row5 = table.insertRow(++rowCount);
        var cell = row5.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(1);
        var durmonthlybackup = document.createTextNode("\u00a0\u00a0\u00a0\u00a0-Months backups are saved");
        durmonthlybackup.className += " smalltext";
        cell.appendChild(durmonthlybackup);
        cell.setAttribute("colspan", "2");
        
        var cell = row5.insertCell(2);
        var durmonthlybackup_qty = document.createElement("input");
        durmonthlybackup_qty.setAttribute("type", "text");
        durmonthlybackup_qty_in = "durmonthlybackup-qty" + vm_num;
        durmonthlybackup_sub_out = "durmonthlybackup-sub" + vm_num;
        cell.appendChild(durmonthlybackup_qty);
        cell.setAttribute("colspan", "2");
        durmonthlybackup_qty.id = durmonthlybackup_qty_in;
        durmonthlybackup_qty.className += " durmonthlybackup_qty userinput";
        durmonthlybackup_qty.setAttribute("name", durmonthlybackup_qty.id);
        durmonthlybackup_qty.setAttribute("size", 5);
        durmonthlybackup_qty.setAttribute("num", vm_num);
        durmonthlybackup_qty.setAttribute("onchange", "changeValue(this.id, this.value, this.getAttribute('num'))");
        
        var row6 = table.insertRow(++rowCount);
        var cell = row6.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(1);
        var diff = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Differentials/Incrementals");                       
        cell.appendChild(diff);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(2);
        var diff_price = document.createTextNode("$" + diff_price_val + "/TB");
        cell.appendChild(diff_price);
        cell.setAttribute("colspan", "1");
        var cell = row6.insertCell(3);
        var diff_qty = document.createElement("input");
        diff_qty.setAttribute("type", "text");
        diff_qty_in = "diff-qty" + vm_num;
        diff_sub_out = "diff-sub" + vm_num;
        cell.appendChild(diff_qty);
        cell.setAttribute("colspan", "1");
        diff_qty.id = diff_qty_in;
        diff_qty.className += " diff_qty userinput";
        diff_qty.setAttribute("dest", "" + diff_sub_out);
        diff_qty.setAttribute("num", vm_num);
        diff_qty.setAttribute("diff-price", diff_price_val);
        diff_qty.setAttribute("name", diff_qty.id);
        diff_qty.setAttribute("size", 5);
        diff_qty.setAttribute("readonly", "readonly");
        diff_qty.setAttribute("onchange", "getEstimate('diff', this.id, this.getAttribute('diff-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");
        
        cell.appendChild(document.createTextNode("\u00a0\u00a0TB"));
        
        var cell = row6.insertCell(4);
        var diff_sub = document.createElement("input");
        diff_sub.setAttribute("type", "text");
        cell.appendChild(diff_sub);
        cell.setAttribute("colspan", "1");
        diff_sub.id = diff_sub_out;
        document.getElementById(diff_sub_out).setAttribute("readonly", "readonly");
        diff_sub.className = "backup-sub vm-sub" + vm_num;
        diff_sub.setAttribute("name", diff_sub.id);
        diff_sub.setAttribute("size", 20);
        
        var row7 = table.insertRow(++rowCount);
        var cell = row7.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(1);
        var diffwk = document.createTextNode("\u00a0\u00a0\u00a0\u00a0-Differentials taken/week");    
        diffwk.className += " smalltext";
        cell.appendChild(diffwk);
        cell.setAttribute("colspan", "2");
        
        var cell = row7.insertCell(2);
        var diffwk_qty = document.createElement("input");
        diffwk_qty.setAttribute("type", "text");
        diffwk_qty.setAttribute("name", diffwk_qty.id);
        diffwk_qty_in = "diffwk-qty" + vm_num;
        diffwk_sub_out = "diffwk-sub" + vm_num;
        cell.appendChild(diffwk_qty);
        cell.setAttribute("colspan", "2");
        diffwk_qty.id = diffwk_qty_in;
        diffwk_qty.className += " diffwk_qty userinput";
        diffwk_qty.setAttribute("name", diffwk_qty.id);
        diffwk_qty.setAttribute("size", 5);
        diffwk_qty.setAttribute("num", vm_num);
        diffwk_qty.setAttribute("onchange", "changeValue(this.id, this.value, this.getAttribute('num'))");
        
        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(1);
        var incwk = document.createTextNode("\u00a0\u00a0\u00a0\u00a0-Incrementals taken/week?");    
        incwk.className += " smalltext";
        cell.appendChild(incwk);
        cell.setAttribute("colspan", "2");
        
        var cell = row8.insertCell(2);
        var incwk_qty = document.createElement("input");
        incwk_qty.setAttribute("type", "text");
        incwk_qty_in = "incwk-qty" + vm_num;
        incwk_sub_out = "incwk-sub" + vm_num;
        cell.appendChild(incwk_qty);
        cell.setAttribute("colspan", "2");
        incwk_qty.id = incwk_qty_in;
        incwk_qty.className += " incwk_qty userinput";
        incwk_qty.setAttribute("name", incwk_qty.id);
        incwk_qty.setAttribute("size", 5);
        incwk_qty.setAttribute("num", vm_num);
        incwk_qty.setAttribute("onchange", "changeValue(this.id, this.value, this.getAttribute('num'))");
        
        var row9 = table.insertRow(++rowCount);
        var cell = row9.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row9.insertCell(1);
        var durdiffinc = document.createTextNode("\u00a0\u00a0\u00a0\u00a0-Months diff/inc saved");    
        durdiffinc.className += " smalltext";
        cell.appendChild(durdiffinc);
        cell.setAttribute("colspan", "2");
        
        var cell = row9.insertCell(2);
        var durdiffinc_qty = document.createElement("input");
        durdiffinc_qty.setAttribute("type", "text");
        durdiffinc_qty_in = "durdiffinc-qty" + vm_num;
        durdiffinc_sub_out = "durdiffinc-sub" + vm_num;
        cell.appendChild(durdiffinc_qty);
        cell.setAttribute("colspan", "2");
        durdiffinc_qty.id = durdiffinc_qty_in;
        durdiffinc_qty.className += " durdiffinc_qty userinput";
        durdiffinc_qty.setAttribute("name", durdiffinc_qty.id);
        durdiffinc_qty.setAttribute("size", 5);
        durdiffinc_qty.setAttribute("num", vm_num);
        durdiffinc_qty.setAttribute("onchange", "changeValue(this.id, this.value, this.getAttribute('num'))");
        
        var row10 = table.insertRow(++rowCount);
        var cell = row10.insertCell(0);
        cell.setAttribute("style", "border-bottom: 1px solid black;");
        cell.setAttribute("colspan", "1");
        
        var cell = row10.insertCell(1);
        cell.setAttribute("style", "border-bottom: 1px solid black; font-weight: bold;");
        var subtext = document.createTextNode("Subtotal");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row10.insertCell(2);
        cell.setAttribute("style", "border-bottom: 1px solid black; font-weight: bold");
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        cell.appendChild(vmsubtotal);
        cell.setAttribute("colspan", "1");
        vmsubtotal.id = "vm-sub" + vm_num + "-total";
        //vmsubtotal.className = "sub";
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        vmsubtotal.setAttribute("size", 20);
        
        document.getElementById(vmsubtotal.id).setAttribute("readonly", "readonly");
        sub('backup-sub');
        sub('sub');
        /* DEFAULT VALUES OF STANDARD 3 MONTH RETENTION */
        document.getElementById('monthlybackup-qty' + vm_num).setAttribute("value", "1");
        document.getElementById('monthlybackup-qty' + vm_num).setAttribute("readonly", "readonly");
    
        document.getElementById('durmonthlybackup-qty' + vm_num).setAttribute("value", "3");
        document.getElementById('durmonthlybackup-qty' + vm_num).setAttribute("readonly", "readonly");

        document.getElementById('diffwk-qty' + vm_num).setAttribute("value", "1");
        document.getElementById('diffwk-qty' + vm_num).setAttribute("readonly", "readonly");

        document.getElementById('incwk-qty' + vm_num).setAttribute("value", "5");
        document.getElementById('incwk-qty' + vm_num).setAttribute("readonly", "readonly");

        document.getElementById('durdiffinc-qty' + vm_num).setAttribute("value", "3");
        document.getElementById('durdiffinc-qty' + vm_num).setAttribute("readonly", "readonly");
        
    } /* END COMMVAULT BACKUP */
    
    /* BEGIN CLOUD COMPUTING SERVICES */
    else if (id == 'CL_COMPUTE') {
        prod_name = "Cloud Compute Units";

        row1 = table.insertRow(rowCount);
        row1.id = "row" + service_num;
        var cell = row1.insertCell(0);
    cell.setAttribute("colspan", "1");
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + service_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", ROWS_CLOUD_COMPUTE);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'CL_COMPUTE')");

        var cell = row1.insertCell(1);
        var name = document.createTextNode(prod_name);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        cell.className += " pad-bottom";
        
        cell = row1.insertCell(2);
        var description_box = document.createElement("textarea");
        description_box.setAttribute("colspan", "3");
        description_box.id = "description" + service_num;
        description_box.setAttribute("num", service_num);
        description_box.setAttribute("name", " ");
        description_box.setAttribute("onchange", "changeDescription(this.getAttribute('num'), this.value)");
        description_box.setAttribute("rows", "5");
        description_box.setAttribute("cols", "30");
        cell.appendChild(description_box);
        cell.setAttribute("colspan", "3");
        document.getElementById("description" + service_num).innerHTML = "Enter a description here";
        
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");  

        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var options_text = document.createTextNode("Options");
        cell.appendChild(options_text);
        cell.setAttribute("colspan", "1");

        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("colspan", "1");
        var os_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Affiliation:");
        cell.appendChild(os_text);

        var cell = row.insertCell(2);
        var os = document.createElement("select"); 
        os.setAttribute("name", "affiliation");
        os.setAttribute("title", "Choose client location");
        os.setAttribute("value", "UC");
        os.setAttribute("onchange", "changePrices(this.value, 'CL_COMPUTE')");

        option = new Option("UC", "UC", false, false);
        option.id = "UC" + service_num;
        os.appendChild(option);

        option = new Option("External", "External", false, false);
        option.id = "External" + service_num;
        os.appendChild(option);

        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + service_num;

        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");  

        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        var specifications_text = document.createTextNode("Specifications");
        cell.appendChild(specifications_text);
        cell.setAttribute("colspan", "1");

        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");
        
        var cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Item");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(2);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Price");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(3);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Qty");
        cell.appendChild(item_text);
        
        var cell = row.insertCell(4);
        cell.setAttribute("style", "font-weight: bold;");
        cell.setAttribute("colspan", "1");
        var item_text = document.createTextNode("Cost");
        cell.appendChild(item_text);
        
    var flavor = ["m1.medium", "m1.large", "m1.xlarge", "m1.2xlarge", "c1.large", "c1.xlarge", "c1.2xlarge", "r1.large", "r1.xlarge", "r1.2xlarge", "Additional Volume", "Additional Image"];
    var vcpu = ["1","2","4","8","2","4","8", "2", "4", "8", "0", "0"];
    var memcount = ["4GB","8GB","16GB","32GB","4GB","8GB","16GB", "16GB", "32GB", "64GB","0", "0"];
    price = PRICE_CL_COMPUTE_UC;

    var flavors = [];
    var len = flavor.length;
    for (var i = 0; i < len; i++) {
            flavors.push({
                flavor: flavor[i],
                price: price[i],
                vcpu: vcpu[i],
                memcount: memcount[i]
        });
    }

    for (i=0, item_num=1; i<flavors.length; i++, item_num++){
                var row = table.insertRow(++rowCount);
                cell = row.insertCell(0);
                cell.setAttribute("colspan", "1");
        
                cell = row.insertCell(1);
        cell.setAttribute("colspan", "1");
                cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0" + flavors[i].flavor));
        if (i<10) {
            cell.setAttribute("title", "vCPU:" + vcpu[i] + "\u00a0\u00a0\u00a0\u00a0Memory Count:" + memcount[i] + "\u00a0\u00a0\u00a0\u00a0System Disk:20GB");
                }
        else {
            cell.setAttribute("title", "Enter additional storage excluding the free 20GB amount.");
        }
        cell.setAttribute("colspan", "1");
        var cell = row.insertCell(2);
        if (i<10){
                    var cl_compute_price = document.createTextNode("$" + price[i] + "/hr/instance");
        }
        else {
            var cl_compute_price = document.createTextNode("$" + price[i] + "/hr/GB");
        }
                cell.appendChild(cl_compute_price);
                cell.setAttribute("colspan", "1");
        cell.id = "cl-compute-price" + item_num;    
        
                var cell = row.insertCell(3);
                var cl_compute_instances = document.createElement("input");
                cl_compute_instances.setAttribute("type", "text");
                cl_compute_instances_in = "cl-compute-instances" + item_num;
                cl_compute_sub_out = "cl-compute-sub" + item_num;
                cell.appendChild(cl_compute_instances);
                cell.setAttribute("colspan", "1");
                cl_compute_instances.id = cl_compute_instances_in;
                cl_compute_instances.className += " cl_compute_instances userinput";
                cl_compute_instances.setAttribute("dest", "" + cl_compute_sub_out);
                cl_compute_instances.setAttribute("num", item_num);
                cl_compute_instances.setAttribute("name", cl_compute_instances.id);
                cl_compute_instances.setAttribute("size", 5);
                cl_compute_instances.setAttribute("cl-compute-price", price[i]);
                cl_compute_instances.setAttribute("onchange", "getEstimate('cl-compute', this.id, this.getAttribute('cl-compute-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_COMPUTE')");
                var blanknode = document.createTextNode("\u00a0");
                cell.appendChild(blanknode);
        if (i<10){
                    cell.appendChild(document.createTextNode("inst."));
            cl_compute_instances.setAttribute("title", "Enter number of instances");
        }
        else {
            cell.appendChild(document.createTextNode("GB"));
            cl_compute_instances.setAttribute("title", "Enter a whole number 0 to 190.");
        }

                var cell = row.insertCell(4);
                var cl_compute_sub = document.createElement("input");
                cl_compute_sub.setAttribute("type", "text");
                cell.appendChild(cl_compute_sub);
                cell.setAttribute("colspan", "1");
                cl_compute_sub.id = cl_compute_sub_out;
                cl_compute_sub.setAttribute("name", cl_compute_sub.id);
                cl_compute_sub.setAttribute("size", 20);
                document.getElementById(cl_compute_sub_out).setAttribute("readonly", "readonly");
                cl_compute_sub.className = "sub cl-compute-sub vm-sub" + item_num;
                sub('cl-compute-sub');
                sub('sub');

                var row = table.insertRow(++rowCount);
        var cell1 = row.insertCell(0);
                cell1.setAttribute("colspan", "1"); 
        var cell2 = row.insertCell(1);
        cell2.id = "flavor-specifications" + item_num;
        if (i<10) {
            var cpu = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0" + vcpu[i] + "vCPU, " + memcount[i] + "Memory");
            cell2.appendChild(cpu);
            cell2.setAttribute("style", "color:#fff");  
        }   
        var cell3 = row.insertCell(2);
                cell3.setAttribute("colspan", "1");
        var cell4 = row.insertCell(3);
                cell4.setAttribute("colspan", "1");
        if (i==flavors.length-1) {
            cell1.setAttribute("style", "border-bottom: 1px black solid");
            cell2.setAttribute("style", "border-bottom: 1px black solid");
            cell3.setAttribute("style", "border-bottom: 1px black solid");
            cell4.setAttribute("style", "border-bottom: 1px black solid");
        }
                var cl_compute_hours = document.createElement("input");
                cl_compute_hours.setAttribute("type", "text");
                cl_compute_hours_in = "cl-compute-hours" + item_num;
                cell4.appendChild(cl_compute_hours);
                cell4.setAttribute("colspan", "1");
                cl_compute_hours.id = cl_compute_hours_in;
                cl_compute_hours.className += " cl_compute_hours userinput";
                cl_compute_hours.setAttribute("dest", "" + cl_compute_sub_out);
                cl_compute_hours.setAttribute("num", item_num);
                cl_compute_hours.setAttribute("name", cl_compute_hours.id);
                cl_compute_hours.setAttribute("size", 5);
                cl_compute_hours.setAttribute("cl-compute-price", price[i]);
        cl_compute_hours.setAttribute("title", "Enter amount of hours per month.");
                cl_compute_hours.setAttribute("onchange", "getEstimate('cl-compute', this.id, this.getAttribute('cl-compute-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_COMPUTE')");
                var blanknode = document.createTextNode("\u00a0");
                cell4.appendChild(blanknode);
                cell4.appendChild(document.createTextNode("hr(s)"));
        cell4 = row.insertCell(4);
                cell4.setAttribute("colspan", "1");
        if (i==flavor.length-1) cell4.setAttribute("style", "border-bottom: 1px black solid");  
    }
    }
    
} /* END ADDPRODUCT FUNCTION */
   
/* Function Name: changePrices
 * Parameters:  affiliation - either UC or external to change specific pricings
        price - array of prices per flavor/item
 */
function changePrices(affiliation, id)
{

    if (affiliation == "UC") {
            switch (id) {
            case 'ST_VM':
                price_vm = PRICE_ST_VM_UC;
                break;
            case 'HS_VM':
                price_vm = PRICE_HS_VM_UC;
                break;
            case 'CL_STR':
            case 'PR_STR':
            case 'PR_CON':
            case 'DESK':
            case 'SYSTEMS':
            case 'STORAGE':
            case 'SITE':
            case 'SUPPORT':
            case 'SYS_MAN':
            case 'RAW':
            case 'CL_COMPUTE':
                price = PRICE_CL_COMPUTE_UC; 
                break;
            }
    }
    else {
            switch (id) {
            case 'ST_VM':
                price_vm = PRICE_ST_VM_EXT;
                break;
            case 'HS_VM':
                price_vm = PRICE_HS_VM_EXT;
                break;
            case 'CL_STR':
            case 'PR_STR':
            case 'PR_CON':
            case 'DESK':
            case 'SYSTEMS':
            case 'STORAGE':
            case 'SITE':
            case 'SUPPORT':
            case 'SYS_MAN':
            case 'RAW':
            case 'CL_COMPUTE':
                    price = PRICE_CL_COMPUTE_EXT; 
                    break;
            }
    }
    switch (id) {
            case 'ST_VM': 
                for (n=0, item_num=1; n < price_vm.length; n++, item_num++) {
                    document.getElementById("st-vm-price" + item_num).setAttribute("st-vm-price"+item_num, parseFloat(price_vm[n]).toFixed(2));
                    if (item_num!=6)document.getElementById("st-vm-qty" + item_num).setAttribute("st-vm-price" + item_num, parseFloat(price_vm[n]).toFixed(2));
                    switch (n) {
                        case 0:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            document.getElementById("st-vm-sub1").value = "$" + parseFloat(price_vm[n]).toFixed(2);
                            getEstimate('cpu', "st-vm-qty" + item_num, price_vm[n], "st-vm-sub" + item_num, vm_num, 'ST_VM');
                            break;
                        case 1:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            getEstimate('cpu', "st-vm-qty" + item_num, price_vm[n], "st-vm-sub" + item_num, vm_num, 'ST_VM');
                            break;
                        case 2:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/GB";
                            getEstimate('mem', "st-vm-qty" + item_num, price_vm[n], "st-vm-sub" + item_num, vm_num, 'ST_VM');
                            break;
                        case 3:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("st-vm-qty" + item_num).setAttribute("str-price",price_vm[n]);
                            getEstimate('silver', "st-vm-qty" + item_num, price_vm[n], "st-vm-sub" + item_num, vm_num, 'ST_VM');
                            break;
                        case 4:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("st-vm-qty" + item_num).setAttribute("san-price",price_vm[n]);
                            getEstimate('gold', "st-vm-qty" + item_num, price_vm[n], "st-vm-sub" + item_num, vm_num, 'ST_VM');
                            break;
                        case 5:
                            document.getElementById("st-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2);
                    }
                }
            break;
            case 'HS_VM':
                for (n=0, item_num=1; n < price_vm.length; n++, item_num++) {
                    document.getElementById("hs-vm-price" + item_num).setAttribute("hs-vm-price"+item_num, parseFloat(price_vm[n]).toFixed(2));
                    switch (n) {
                        case 0:
                            document.getElementById("hs-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            document.getElementById("hs-vm-sub1").value = "$" + parseFloat(price_vm[n]).toFixed(2);
                            break;
                        case 1:
                            document.getElementById("hs-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            getEstimate('cpu', "hs-vm-qty" + item_num, price_vm[n], "hs-vm-sub" + item_num, vm_num, 'HS_VM');
                            break;
                        case 2:
                            document.getElementById("hs-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/GB";
                            getEstimate('mem', "hs-vm-qty" + item_num, price_vm[n], "hs-vm-sub" + item_num, vm_num, 'HS_VM');
                            break;
                        case 3:
                            item_num--;
                            break;
                        case 4:
                            document.getElementById("hs-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("hs-vm-qty" + item_num).setAttribute("san-price",price_vm[n]);
                            getEstimate('gold', "hs-vm-qty" + item_num, price_vm[n], "hs-vm-sub" + item_num, vm_num, 'HS_VM');
                            break;
                        case 5:
                            document.getElementById("hs-vm-price" + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2);
                            break;
                    }
                }
                break;
            case 'CL_STR':
            case 'PR_STR':
            case 'PR_CON':
            case 'DESK':
            case 'SYSTEMS':
            case 'STORAGE':
            case 'SITE':
            case 'SUPPORT':
            case 'SYS_MAN':
            case 'RAW':
            case 'CL_COMPUTE':
            for (n=0, item_num=1; n < price.length; n++, item_num++) {
            if (n<10){
                        document.getElementById("cl-compute-price" + item_num).innerHTML = "$" + price[n] + "/hr/instance";
            }
            else {
                document.getElementById("cl-compute-price" + item_num).innerHTML = "$" + price[n] + "/GB/instance";
            }
            document.getElementById("cl-compute-instances" + item_num).setAttribute("cl-compute-price", price[n]);
            document.getElementById("cl-compute-hours" + item_num).setAttribute("cl-compute-price",  price[n]);
            getEstimate('cl-compute', 'cl-compute-hours' + item_num, price[n], document.getElementById("cl-compute-hours" + item_num).getAttribute('dest'), item_num,'CL_COMPUTE'); 
            }
            break;
    }
    document.getElementsByName("affiliation")[0].setAttribute("value", affiliation);
}            
/* Function Name: getEstimate
 * Parameters: type - the type of field (used in the function validate())
 *             id - the id of the field
 *             price - price of the product
 *             dest - the id of the dest to output the result
 *             category - which category this belongs to... 
 */
function getEstimate(type, id, price, dest, num, category)
{
    var item = document.getElementById(id);
    var subtotal = document.getElementById(dest);
        switch (category) {
        case 'ST_VM':
        case 'HS_VM':
            var theclass = 'vm-sub';
            break;
        case 'CL_STR':
        case 'PR_STR':
        case 'PR_CON':
            var theclass = 'str-sub';
            break;
        case 'DESK':
        case 'SYSTEMS':
        case 'STORAGE':
            var theclass = 'consult-sub';
            break;
        case 'SITE':
        case 'SUPPORT':
            var theclass = 'sp-sub';
            break;
        case 'SYS_MAN':
            var theclass = 'pa-sub';
            break;
        case 'RAW':
            var theclass = 'backup-sub';
            break;
        case 'CL_COMPUTE':
            var theclass = 'cl-compute-sub';
            break;
        }

    if (item.value === null || item.value === "" || isNaN(item.value)) {
        subtotal.setAttribute("value", "");
        sub(theclass);
        if (theclass == "vm-sub") sub(theclass + num);
        sub('sub');
    } 
    else if (validate(type, id, dest, num)) {
        if (type == 'sys-man' && document.getElementById('psa' + num).value == 'Custom') {
            document.getElementById(dest).value = 0;
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", "0");
            sub('pa-sub');
            
            document.getElementById(dest).value = 'Custom';
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", "Custom");
        } else {
            if (type == 'raw') {
                calculateBackup(num);
            }
            if (category == 'CL_COMPUTE') {
                document.getElementById(dest).setAttribute("value", "$" + (parseFloat(document.getElementById("cl-compute-hours" + num).value) * parseFloat(document.getElementById("cl-compute-instances" + num).value) * price).toFixed(2));
                if (document.getElementById(dest).getAttribute("value") == "$NaN") {
                document.getElementById(dest).setAttribute("value", "Missing input");
                document.getElementById(dest).style.color = "#ff0000";
            }
            else {
                document.getElementById("flavor-specifications"+num).setAttribute("style", "visibility:hidden");
            }
        }
        else {
                document.getElementById(dest).setAttribute("value", "$" + (parseFloat(document.getElementById(id).value) * price).toFixed(2));
            }
    }
        if (type != 'cl-str' && type != 'consult' && type != 'sp-consult' && type != 'pr-str' && type != 'cl-compute') {
            sub('vm-sub' + num);
            if (category == 'ST_VM' || category == 'HS_VM') {
                if (document.getElementById("extrasnap" + num).value == 'Yes') {
                    //var tempval = parseFloat(document.getElementById('st-vm-total').value.replace("$", ""));
                    //document.getElementById('vm-sub' + num + '-total').setAttribute("value", "$" + (eval(tempval - parseFloat(PRICE_ADD_SNAPSHOT_STANDARD_VM_UC))));
                    //document.getElementById("extra-sub-out" + num).value = "$" + document.getElementById("st-m")
                }
            }
        }
        
        if (type == 'sys-man' && document.getElementById('psa' + num).value == 'Custom') {
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", 'Custom');
        }

        sub(theclass);
        sub('sub');
        if (category == 'ST_VM' || category == 'HS_VM') {
                if (document.getElementById("extrasnap" + num).value == 'Yes') {
                    var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
                    var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
                    document.getElementById('vm-sub-total').setAttribute("value", "$" + (tempval + PRICE_ADD_SNAPSHOT_STANDARD_VM_UC));
                    document.getElementById('sub-total').setAttribute("value", "$" + (temptotalval + PRICE_ADD_SNAPSHOT_STANDARD_VM_UC));
                }
        }
                    
        if (type == 'consult' || type == 'sp-consult') {
            sub("onetime");
        }
        //sub('vm-sub');
    }
    document.getElementById(dest).setAttribute("value", document.getElementById(dest).value);
    document.getElementById(id).setAttribute("value", document.getElementById(id).value);
}

/* Function Name: sub
 * Parameters: theclass - the name of the class with all values to be subtotaled
 * Result: Takes all elements with specified theclass name and then outputs it
 *          to a destination with the formula theclass + '-total'
 */
function sub(theclass)
{
    var subarray = document.getElementsByClassName(theclass);
    var valtext;
    var val;
    var sum = 0;
    for(i = 0; i < subarray.length; i++) {
        if(subarray[i].value != null || subarray[i].value != "") {
            valtext = subarray[i].value.replace("$", "");
            val = parseFloat(valtext);
            
            if(!isNaN(val) && val != null) {
                sum += val;
            }
        }  
    }
    if (theclass == 'sub') {
        document.getElementById(theclass + '-total').setAttribute("value", "$" + sum.toFixed(2) + "/month");
    } else {
        document.getElementById(theclass + "-total").setAttribute("value", "$" + sum.toFixed(2));
    }
    
}
            
/* Function Name: validate
 * Parameters: type - type of field to validate
 *             id - id of field to validate
 *             dest - where to output error message or result
 * Result: Will print error message or correct result, depending on true/false
 */
function validate(type, id, dest, num)
{            
    var v = document.getElementById(id).value;
    var d = document.getElementById(dest);
                
    d.style.color = "#000"; //default color if validation passes
    
    switch (type) {
        case "cpu":
            if (v < 0 || v > 11 || v % 1 != 0) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false;
            }
            break;
        
        case "mem":
            if (v < 0 || v > 190 || v % 1 != 0) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false; 
            }
            break;
        
        case "silver":
            if (document.getElementById('str-units1').getAttribute("value") == 'GB') {
                if (v < 1 || v > 30000) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            } else {
                if ( v < 0.001 || v > 30) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            }
            break;
        
        case "gold":
            if (document.getElementById('san-units' + num).getAttribute("value") == 'GB') {
                if (v < 1 || v > 4900) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            } else {
                if ( v < 0.001 || v > 4.9) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            }
            break;
        
        case "cl-str":
            if (document.getElementById('cl-units' + num).getAttribute("value") == 'GB') {
                if (v < 100) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            } else {
                if ( v < 0.1) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            }
            break; 
        
        case 'pr-str':
            if (document.getElementById('pr-units' + num) != null) {
            
                if (document.getElementById('pr-units' + num).getAttribute("value") == 'GB') {
                if (v < 1000 || v % 500 != 0) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            } else {
                if (v < 1 || (v * 10) % 5 != 0) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            }
            }
            
            
            break;
        case 'nonrec':
        case 'no_os':
        case 'storage_array':
        case 'non_os_vendor':
        case 'local_admin_access':
        case 'sys_monitor':
            if (v != 0 && v != 1) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false;
            }
            break;
        case 'sp':
        case 'additional-sp':
            if (v % 1 != 0) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false;
            }
        case 'consult':
        case 'sp-consult':
            v = v * 10;
            v = v % 1; 
            if (v != 0) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false;
            }
            break;
        case 'cl-compute':
            if ( v < 0 || v % 1 != 0) {
                d.setAttribute("value", "Invalid input");
                d.style.color = "#ff0000";
                return false;
            }
    }

    return true;
}
            
/* Function Name: removeProduct
 * Parameters: rowNum - the index of the row to delete
 * Result: Deletes a product and its associated rows. Recalculates subtotals
 */
function removeProduct(rowNum, deleteNum, category)
{
    switch (category) {
        case 'ST_VM':
        case 'HS_VM':
            var table = document.getElementById('vm-table');
            var totals = "vm-table-totals";
            var theclass = "vm-sub";
            break;
        case 'CL_STR':
        case 'PR_STR':
        case 'PR_CON':
            var table = document.getElementById('str-table');
            var totals = "str-table-totals";
            var theclass = "str-sub";
            break;
        case 'DESK':
        case 'SYSTEMS':
        case 'STORAGE':
            var table = document.getElementById('consult-table');
            var totals = "consult-table-totals";
            var theclass = "consult-sub";
            break;
        case 'SITE':
        case 'SUPPORT':
            var table = document.getElementById('sp-table');
            var totals = "sp-table-totals";
            var theclass = "sp-sub";
            break;
        case 'SYS_MAN':
            var table = document.getElementById('pa-table');
            var totals = "pa-table-totals";
            var theclass = "pa-sub";
            break;
        case 'RAW':
            var table = document.getElementById('backup-table');
            var totals = "backup-table-totals";
            var theclass = "backup-sub";
            break;
        case 'CL_COMPUTE':
            var table = document.getElementById('cl-compute-table');
            var totals = "cl-compute-table-totals";
            var theclass = "cl-compute-sub";
            break;
    }
    var row = document.getElementById(rowNum);
    var index = row.rowIndex;
    for(i = 0, j = index; i < deleteNum; i++) {
        table.deleteRow(j);
    }
    
    sub(theclass);
    sub('sub');
    
    if(table.rows.length - 1 === 0) {
        table.setAttribute("hidden", "hidden");
        document.getElementById(totals).setAttribute("hidden", "hidden");
    }
    
    if (--numProducts === 0) {
        document.getElementById('totals').setAttribute("hidden", "hidden");
    }
    
    /*loop through all tooltips on doc to hide before removing product*/
    var tooltipList = document.getElementsByClassName("ui-tooltip");
    for (i = 0; i < tooltipList.length; i++) {
        tooltipList[i].style.display = 'none';  
    }
    
    
}
            
/* Function Name: processOS
 * Parameters: id - id of the dropdown menu calling this function
 *              o - value of the OS system
 *              system -  the id of the system management box
 *              manager- the id of the manager box
 *              num - the number of the vm
 * Result: Changes the System Management and Manager boxes
 *          depending on the OS chosen. Also changes the dropdown selected value
 */
function processOS(id, o, system, manager, num) {
    var name; 
    if(o == 'Red Hat 6 64-bit') {
        name = 'RedHat';
    } else {
        name = "" + o;
    }
                
    /*// determines the type of system management 
    if((o == 'Windows' || o == 'Red Hat 6 64-bit') && id != 'HS_VM') {
        document.getElementById(system).setAttribute("value", "Included");
    } else {
        document.getElementById(system).setAttribute("value", "User-managed OR Added Premium (Contact SDSC for details)");
    }
                
    // determines the manager 
    if(o != 'Red Hat 6 64-bit' || id == 'HS_VM') {
        document.getElementById(manager).setAttribute("value", "Brian Balderston");
    } else {
        document.getElementById(manager).setAttribute("value", "Andrew Ferbert");
    } */

    /*document.getElementById("os" + num).defaultValue = o;
    document.getElementById("os" + num).defaultSelected = o; */
    document.getElementById("os" + num).setAttribute("value", o);
    document.getElementById("RedHat" + num).removeAttribute("selected");
    document.getElementById("Windows" + num).removeAttribute("selected");
    document.getElementById("CentOS" + num).removeAttribute("selected");
    document.getElementById("Ubuntu" + num).removeAttribute("selected");
    document.getElementById("Other" + num).removeAttribute("selected");
    document.getElementById(name + num).setAttribute("selected", "selected");
}

function changePrice(num, originalval, doubleval)
{
    var val = document.getElementById('dualoptions' + num).value;
    var currentprice = document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price');
    document.getElementById("No" + num).removeAttribute("selected");
    document.getElementById("Yes" + num).removeAttribute("selected");
    if (val == 'Yes') {
        document.getElementById('cl-str-price' + num).value = '$' + doubleval + '/TB';
        document.getElementById('cl-str-price' + num).setAttribute("value", '$' + doubleval + '/TB');
        
        document.getElementById('Yes' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice * 2);
        document.getElementById("cl-str-price" + num).setAttribute("value", "$" + (currentprice * 2) + "/TB");
        getEstimate('cl-str', 'cl-str-qty' + num, document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price'), 'cl-str-sub' + num, num, 'CL_STR');
        document.getElementById("siteoptions" + num).setAttribute("value", "N/A");
        document.getElementById("siteoptions" + num).setAttribute("disabled", "disabled");
    } else if (val == 'No') {
        document.getElementById('cl-str-price' + num).value = '$' + originalval + '/TB';
        document.getElementById('cl-str-price' + num).setAttribute("value", '$' + originalval + '/TB');
        document.getElementById('No' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice / 2);
        document.getElementById("cl-str-price" + num).setAttribute("value", "$" +  (currentprice / 2) + "/TB");
        getEstimate('cl-str', 'cl-str-qty' + num, document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price'), 'cl-str-sub' + num, num, 'CL_STR');
        document.getElementById("siteoptions" + num).removeAttribute("readonly");
        document.getElementById("SD" + num).removeAttribute("selected");
        document.getElementById("Oakland" + num).removeAttribute("selected");
        document.getElementById("siteoptions" + num).setAttribute("value", "San Diego");
        document.getElementById("SD" + num).setAttribute("selected", "selected");
        document.getElementById("siteoptions" + num).removeAttribute("disabled");
    }
    
    document.getElementById('dualoptions' + num).setAttribute("value", val);
    
}

/* Function Name: processPackage()
 * Parameters: o - option value
 *             num - number of the product
 * Description: Used by the CommVault Backup option. Automatically places the values for
 *              3-month and 6-month retention. Makes these fields readonly. 
 */
function processPackage(o, num)
{
    var duration = 3;
    var isReadOnly = false;
    var optionid = "Custom" + num;
    
    // user has selected 3 mo retention
    if (o == 'Standard 3-mo. Retention') {
        duration = 3;
        isReadOnly = true;
        optionid = "threemonth" + num;
    } else if (o == 'Standard 6-mo. Retention') {
        duration = 6;
        isReadOnly = true;
        optionid = "sixmonth" + num;
    }
    
    document.getElementById('monthlybackup-qty' + num).setAttribute("value", "1");
    document.getElementById('monthlybackup-qty' + num).value = 1;
    
    document.getElementById('durmonthlybackup-qty' + num).setAttribute("value", duration);
    document.getElementById('durmonthlybackup-qty' + num).value = duration;
    
    document.getElementById('diffwk-qty' + num).setAttribute("value", "1");
    document.getElementById('diffwk-qty' + num).value = 1;
    
    document.getElementById('incwk-qty' + num).setAttribute("value", "5");
    document.getElementById('incwk-qty' + num).value = 5;
    
    document.getElementById('durdiffinc-qty' + num).setAttribute("value", duration);
    document.getElementById('durdiffinc-qty' + num).value = duration;
    
    document.getElementById("Custom" + num).removeAttribute("selected");
    document.getElementById("threemonth" + num).removeAttribute("selected");
    document.getElementById("sixmonth" + num).removeAttribute("selected");
    document.getElementById(optionid).setAttribute("selected", "selected");
    
    if (isReadOnly) {
        document.getElementById('monthlybackup-qty' + num).setAttribute("readonly", "readonly");
        document.getElementById('durmonthlybackup-qty' + num).setAttribute("readonly", "readonly");
        document.getElementById('diffwk-qty' + num).setAttribute("readonly", "readonly");
        document.getElementById('incwk-qty' + num).setAttribute("readonly", "readonly");
        document.getElementById('durdiffinc-qty' + num).setAttribute("readonly", "readonly");
    } else {
        document.getElementById('monthlybackup-qty' + num).removeAttribute("readonly");
        document.getElementById('durmonthlybackup-qty' + num).removeAttribute("readonly");
        document.getElementById('diffwk-qty' + num).removeAttribute("readonly");
        document.getElementById('incwk-qty' + num).removeAttribute("readonly");
        document.getElementById('durdiffinc-qty' + num).removeAttribute("readonly");
    }
    document.getElementById("package" + num).setAttribute("value", o);
}

/* Function Name: processPrice()
 * Parameters: o - option value
 *             num - number of the product
 * Description: Used by the System Management option. User can choose either Standard
 *              price or variable pricing. This will set the subtotal value to an an
 *              actual value or variable
 */
function processPrice(o, num)
{
    // user has chosen standard option
    document.getElementById('Custom' + num).removeAttribute("selected");
    document.getElementById('Standard' + num).removeAttribute("selected");
    if (o == 'Custom') {
        document.getElementById('sys-man-sub' + num).setAttribute("value", 'Custom');
        document.getElementById('vm-sub' + num + '-total').setAttribute("value", 'Custom');
        document.getElementById('Custom' + num).setAttribute("selected", "selected");
        document.getElementById('system-price'+num).setAttribute("value", "Custom");
    } else if (o == 'Standard') {
        document.getElementById('Standard' + num).setAttribute("selected", "selected");
        document.getElementById('system-price'+num).setAttribute("value", "$" + PRICE_SYSTEM);
        getEstimate('sys-man', 'sys-man-qty' + num, PRICE_SYSTEM, 'sys-man-sub' + num, num, 'SYS_MAN');
    }
    document.getElementById("psa" + num).setAttribute("value", o);
}

/* Function Name: changeName()
 * Parameters: num - number of the product
 * Description: Changes the value of the System Name in the Subtotal label for
 *              System Management option
 */
function changeName(num)
{
}

/* Function Name: changeValue()
 * Parameters: id - the id of element
 * Description: Changes the value so the PDF can print it
 */
function changeValue(id, value, num)
{
    document.getElementById(id).setAttribute("value", value);
    calculateBackup(num);
}

function changeUnits(vm_type_qty, id, value, num, category)
{
    var currentprice;
    document.getElementById(id).setAttribute("value", value);
    
    if (value == 'TB') {
        
        if (category == 'str') {
            document.getElementById("GB2" + num).removeAttribute("selected");
            document.getElementById("TB2" + num).setAttribute("selected", "selected");
            
        } else {
            document.getElementById("GB" + num).removeAttribute("selected");
            document.getElementById("TB" + num).setAttribute("selected", "selected");
        }
        
    } else {
        if (category == 'str') {
            document.getElementById("TB2" + num).removeAttribute("selected");
            document.getElementById("GB2" + num).setAttribute("selected", "selected");
        } else {
            document.getElementById("TB" + num).removeAttribute("selected");
            document.getElementById("GB" + num).setAttribute("selected", "selected");
        }
    }
    switch (category) {
        case 'str': 
            if (value == 'TB') {
                currentprice = document.getElementById(vm_type_qty + num).getAttribute("str-price");
                currentprice *= 1000;

                document.getElementById(vm_type_qty + num).setAttribute("str-price", currentprice);
                
            } else {
                currentprice = document.getElementById(vm_type_qty + num).getAttribute("str-price");
                
                currentprice /= 1000;
                
                document.getElementById(vm_type_qty + num).setAttribute("str-price", currentprice);
                
            }
            
            var element = document.getElementById(vm_type_qty + num);
            getEstimate('silver', element.id, element.getAttribute('str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'ST_VM');
            break;
        
        case 'san': 
            if (value == 'TB') {
                currentprice = document.getElementById(vm_type_qty + num).getAttribute("san-price");
                currentprice *= 1000;
                document.getElementById(vm_type_qty + num).setAttribute("san-price", currentprice);
            } else {
                currentprice = document.getElementById(vm_type_qty + num).getAttribute("san-price");
                currentprice /= 1000;
                document.getElementById(vm_type_qty + num).setAttribute("san-price", currentprice);
            }
            var element = document.getElementById(vm_type_qty + num);
            getEstimate('gold', element.id, element.getAttribute('san-price'), element.getAttribute('dest'), element.getAttribute('num'), 'ST_VM');
            break;
        
        case 'cl': 
            if (value == 'TB') {
                currentprice = document.getElementById("cl-str-qty" + num).getAttribute("cl-str-price");
                currentprice *= 1000;
                document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice);
            } else {
                currentprice = document.getElementById("cl-str-qty" + num).getAttribute("cl-str-price");
                currentprice /= 1000;
                document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice);
            }
            var element = document.getElementById('cl-str-qty' + num);
            getEstimate('cl-str', element.id, element.getAttribute('cl-str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'CL_STR');
            break;
        
        case 'pr': 
            if (value == 'TB') {
                currentprice = document.getElementById("cl-str-qty" + num).getAttribute("cl-str-price");
                currentprice *= 1000;
                document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice);
            } else {
                currentprice = document.getElementById("cl-str-qty" + num).getAttribute("cl-str-price");
                currentprice /= 1000;
                document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice);
            }
            var element = document.getElementById('cl-str-qty' + num);
            getEstimate('pr-str', element.id, element.getAttribute('cl-str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'CL_STR');
            break;
        
        case 'raw':
            if (value == 'TB') {
                currentprice = document.getElementById("raw-qty" + num).getAttribute("raw-price");
                currentprice *= 1000;
                document.getElementById("raw-qty" + num).setAttribute("raw-price", currentprice);
            } else {
                currentprice = document.getElementById("raw-qty" + num).getAttribute("raw-price");
                currentprice /= 1000;
                document.getElementById("raw-qty" + num).setAttribute("raw-price", currentprice);
            }
            var element = document.getElementById('raw-qty' + num);
            getEstimate('raw', element.id, element.getAttribute('raw-price'), element.getAttribute('dest'),  element.getAttribute('num'), 'RAW');
            break;
    }
}

function calculateBackup(num)
{
    var input = document.getElementById("raw-qty" + num);
    
    if (document.getElementById("raw-qty" + num) == null) {
    }
    var fullbackups = document.getElementById("full-qty" + num);
    var monthlynum = document.getElementById("monthlybackup-qty" + num);
    var durmonthly = document.getElementById("durmonthlybackup-qty" + num);
    var differentials = document.getElementById("diff-qty" + num);
    var diffwk = document.getElementById("diffwk-qty" + num);
    var incwk = document.getElementById("incwk-qty" + num);
    var durdiffinc = document.getElementById("durdiffinc-qty" + num);
    
    var backupsvalue = parseFloat(input.value * monthlynum.value * durmonthly.value * 0.8).toFixed(2);
    var diffvalue = parseFloat(((diffwk.value * input.value * 0.015) + (incwk.value * input.value * 0.0075)) * (4 * durdiffinc.value * 0.8)).toFixed(2);
    
    if (document.getElementById("raw-units" + num).getAttribute("value") == "GB") {
        backupsvalue /= 1000;
        backupsvalue = backupsvalue.toFixed(2);
        diffvalue /= 1000;
        diffvalue = diffvalue.toFixed(2);
    }
    fullbackups.setAttribute("value", backupsvalue);
    differentials.setAttribute("value", diffvalue);
    
    getEstimate('full', fullbackups.id, fullbackups.getAttribute('full-price'), fullbackups.getAttribute('dest'),  fullbackups.getAttribute('num'), 'RAW');
    getEstimate('diff', differentials.id, differentials.getAttribute('diff-price'), differentials.getAttribute('dest'),  differentials.getAttribute('num'), 'RAW');
}

function changeSite(num)
{
    var currentValue = document.getElementById("siteoptions" + num).value;
    document.getElementById("SD" + num).removeAttribute("selected");
    document.getElementById("Oakland" + num).removeAttribute("selected");
    if (currentValue == 'San Diego')
    {
        document.getElementById("SD" + num).setAttribute("selected", "selected");
    } else {
        document.getElementById("Oakland" + num).setAttribute("selected", "selected");
    }
}

function changeDescription(num, value)
{
    document.getElementById("description" + num).setAttribute("name", value);
    document.getElementById("description" + num).innerHTML = value;
}

function extraSnaps(num)
{
    var currentPrice = parseFloat(document.getElementById('vm-sub' + num + '-total').value.replace("$", ""));
    var val = document.getElementById('extrasnap' + num).value;
    document.getElementById("No" + num).removeAttribute("selected");
    document.getElementById("Yes" + num).removeAttribute("selected");
    if (document.getElementById("os" + num).value == "UC") var price = PRICE_ST_VM_UC[5];
    else var price = PRICE_ST_VM_EXT[5];
    if (val == 'Yes') {
        document.getElementById('vm-sub' + num + '-total').setAttribute("value", '$' + (currentPrice + price));
        document.getElementById('Yes' + num).setAttribute("selected", "selected");
        var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
        var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
        document.getElementById('vm-sub-total').setAttribute("value", "$" + parseFloat(tempval + price).toFixed(2));
        document.getElementById('sub-total').setAttribute("value", "$" + parseFloat(temptotalval + price).toFixed(2));
        document.getElementById('extra-sub-out' + num).setAttribute("value", "$" + parseFloat(price).toFixed(2));
        document.getElementById("extrasnap" + num).setAttribute("value", "Yes");
        document.getElementById("extrasnap" + num).setAttribute("name", "Yes");
    } else if (val == 'No') {
        document.getElementById('vm-sub' + num + '-total').setAttribute("value", '$' + (currentPrice - price));
        document.getElementById('No' + num).setAttribute("selected", "selected");
        var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
        var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
        document.getElementById('vm-sub-total').setAttribute("value", "$" + parseFloat(tempval - price).toFixed(2));
        document.getElementById('sub-total').setAttribute("value", "$" + parseFloat(temptotalval - price).toFixed(2));
        document.getElementById('extra-sub-out' + num).setAttribute("value", "$" + parseFloat(0).toFixed(2));
        document.getElementById("extrasnap" + num).setAttribute("value", "No");
        document.getElementById("extrasnap" + num).setAttribute("name", "No");
    }
}