 /* Author: Kimberly Ly and Andie Romero
 * Filename: functions.js
 * Purpose: Contains the calculating functions for creating the invoice.
 *          Please EDIT in the appropriate areas to CHANGE PRICE and
 *          SERVICE NAMES.
 * Last Updated:
 */

/* PRICES FOR EVERYTHING.
    **** EDIT HERE TO CHANGE PRICES **** */

// PRICES FOR STANDARD VM UC
var PRICE_BASE_STANDARD_VM_UC = "69.75"; //per VM
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
var PRICE_ADD_CPU_HIGH_SECURITY_VM_EXT = 22.6345; //per CPU
var PRICE_ADD_RAM_HIGH_SECURITY_VM_EXT = 22.6345; //per GB
var PRICE_ADD_GOLD_HIGH_SECURITY_VM_EXT = 181.25; //per TB
var PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT = 34.80;
var PRICE_HS_VM_EXT = [PRICE_HIGH_SECURITY_VM_EXT, PRICE_ADD_CPU_HIGH_SECURITY_VM_EXT, PRICE_ADD_RAM_HIGH_SECURITY_VM_EXT, 0,PRICE_ADD_GOLD_HIGH_SECURITY_VM_EXT, PRICE_ADD_SNAPSHOT_STANDARD_VM_EXT];

// PRICES FOR CLOUD STORAGE
var PRICE_CLOUD_STORAGE_UC = 32.16; //per TB
var PRICE_DUAL_SITE_CLOUD_STORAGE_UC = 2 * PRICE_CLOUD_STORAGE_UC; //per TB
var PRICE_CLOUD_STORAGE_EXT = 46.632;
var PRICE_DUAL_SITE_CLOUD_STORAGE_EXT = 2 * PRICE_CLOUD_STORAGE_EXT;

// PRICES FOR PROJECT STORAGE
var PRICE_PROJECT_STORAGE_UC = 45.75; //per TB
var PRICE_PROJECT_STORAGE_EXT = 66.3375;

// PRICES FOR PROJECT CONDO
var PRICE_PROJECT_CONDO_UC = 782.08; //per TB
var PRICE_PROJECT_CONDO_EXT = 1134.016;

// PRICES FOR SYSTEM MANAGEMENT UC
var PRICE_SYSTEM_UC = 69.00; //per system
var PRICE_NON_REC_HARDWARE_UC = 45.00; //per month
var PRICE_HARDWARE_WO_OS_SUPPORT_UC = 90.00; //per month
var PRICE_ATTACHED_STORAGE_ARRAY_UC = 56.00; //per month
var PRICE_NON_OS_SOFTWARE_UC = 23.00; //per month
var PRICE_LOCAL_ADMIN_ACCESS_UC = 34.00; //per month
var PRICE_SYSTEM_MONITOR_SUPPORT_UC = 142.00; //per month
var PRICE_SYSTEM_MANAGEMENT_UC =  [PRICE_SYSTEM_UC, PRICE_NON_REC_HARDWARE_UC, PRICE_HARDWARE_WO_OS_SUPPORT_UC, PRICE_ATTACHED_STORAGE_ARRAY_UC, PRICE_NON_OS_SOFTWARE_UC, PRICE_LOCAL_ADMIN_ACCESS_UC, PRICE_SYSTEM_MONITOR_SUPPORT_UC, PRICE_SYSTEM_MANAGEMENT_UC];
// PRICES FOR SYSTEM MANAGEMENT EXT
var PRICE_SYSTEM_EXT = 100.05; //per system
var PRICE_NON_REC_HARDWARE_EXT = 65.25; //per month
var PRICE_HARDWARE_WO_OS_SUPPORT_EXT = 130.50; //per month
var PRICE_ATTACHED_STORAGE_ARRAY_EXT = 81.20; //per month
var PRICE_NON_OS_SOFTWARE_EXT = 33.35; //per month
var PRICE_LOCAL_ADMIN_ACCESS_EXT = 49.30; //per month
var PRICE_SYSTEM_MONITOR_SUPPORT_EXT = 205.90; //per month
var PRICE_SYSTEM_MANAGEMENT_EXT =  [PRICE_SYSTEM_EXT, PRICE_NON_REC_HARDWARE_EXT, PRICE_HARDWARE_WO_OS_SUPPORT_EXT, PRICE_ATTACHED_STORAGE_ARRAY_EXT, PRICE_NON_OS_SOFTWARE_EXT, PRICE_LOCAL_ADMIN_ACCESS_EXT, PRICE_SYSTEM_MONITOR_SUPPORT_EXT, PRICE_SYSTEM_MANAGEMENT_EXT];

// PRICES FOR COMMVAULT BACKUP UC
var PRICE_RAW_BACKUP_DATA_UC = 91.67; //per TB
var PRICE_FULL_BACKUP_UC = 35.17; //per TB
var PRICE_DIFFERENTIAL_INCREMENTAL_UC = 35.17; //per TB

// PRICES FOR COMMVAULT BACKUP EXT
var PRICE_RAW_BACKUP_DATA_EXT = 132.9215; //per TB
var PRICE_FULL_BACKUP_EXT = 50.9965; //per TB
var PRICE_DIFFERENTIAL_INCREMENTAL_EXT = 50.9965; //per TB

// PRICES FOR CONSULTING UC
var PRICE_DESKTOP_SERVICES_UC = 80.00; //per hour
var PRICE_SYSTEMS_SERVICES_UC = 96.00; //per hour
var PRICE_STORAGE_SERVICES_UC = 98.83; //per hour
var PRICE_RECUR_DESKTOP_UC = 80.00; //per hour
var PRICE_RECUR_SYSTEMS_UC = 96.00; //per hour
var PRICE_RECUR_STORAGE_UC = 98.83; //per hour

// PRICES FOR CONSULTING EXT
var PRICE_DESKTOP_SERVICES_EXT = 116.00; //per hour
var PRICE_SYSTEMS_SERVICES_EXT = 139.20; //per hour
var PRICE_STORAGE_SERVICES_EXT = 143.3035; //per hour
var PRICE_RECUR_DESKTOP_EXT = 116.00; //per hour
var PRICE_RECUR_SYSTEMS_EXT = 139.20; //per hour
var PRICE_RECUR_STORAGE_EXT = 143.3035; //per hour

// PRICES FOR SHAREPOINT UC
var PRICE_SHAREPOINT_SITES_UC = 333.33; //per month
var PRICE_ADD_DA_STORAGE_UC = 10.00; //per month
var PRICE_CONSULTATION_SUPPORT_UC = 96.00; //per hour

// PRICES FOR SHAREPOINT EXT
var PRICE_SHAREPOINT_SITES_EXT = 483.3285; //per month
var PRICE_ADD_DA_STORAGE_EXT = 14.50; //per month
var PRICE_CONSULTATION_SUPPORT_EXT = 139.20; //per hour

// PRICES FOR CLOUD COMPUTE
var PRICE_CL_COMPUTE_UC = [0.08, 0.16, 0.32, 0.64, 0.13, 0.26, 0.52, 0.22, 0.44, 0.88, 0.000063, 0.000063];
var PRICE_CL_COMPUTE_EXT = [0.116, 0.232, 0.464, 0.928, 0.1885, 0.377, 0.754, 0.319, 0.638, 1.276, 0.00009135, 0.00009135];

/**** END PRICES. ****/

/* NUMBER OF ROWS PER PRODUCT
    **** EDIT THE NUMBER OF ROWS PER PRODUCT HERE **** */

var ROWS_ST_VM = 13;
var ROWS_HS_VM = 13;
var ROWS_CL_STR = 9;
var ROWS_PR_STR = 7;
var ROWS_PR_CON = 7;
var ROWS_SYS_MAN = 16;
var ROWS_BACKUPS = 15;
var ROWS_DESK = 7;
var ROWS_RECUR_DESK = 7;
var ROWS_SYSTEMS = 7;
var ROWS_RECUR_SYSTEMS = 7;
var ROWS_STORAGE = 7;
var ROWS_RECUR_STORAGE = 7;
var ROWS_RECURRING_CONSULTING_SERVICES = 7;
var ROWS_SHAREPOINT_SITES = 8;
var ROWS_CLOUD_COMPUTE = 30;

/**** END NUMBER OF ROWS CONSTANTS ****/
var vm_num = 0; //number of VM's ordered, st and hs
var numProducts = 0; // number of products on table currently
var item_num = 0; //for item and price id within each service

var row1, cell, rowCount, rowTotals;

/* list of variables for input/output */
var cpu_qty_in, cpu_sub_out, mem_qty_in, mem_sub_out, str_qty_in, str_sub_out, san_qty_in, san_sub_out, cl_str_qty_in, cl_str_sub_out;

/* options variable for dropdown menus */
var option;


/* Function Name: changePrices
 * Description: This function changes the prices of the services when the user changes affiliation (UC or External).
 * Parameters:
        affiliation - either UC or external to change specific pricings
        price - array of prices per flavor/item
 */
function changePrices(affiliation, id, num)
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
                price_cl_str = PRICE_CLOUD_STORAGE_UC;
                original = PRICE_CLOUD_STORAGE_UC;
                dual = PRICE_DUAL_SITE_CLOUD_STORAGE_UC;
                break;
            case 'PR_STR':
                price_pr_str = PRICE_PROJECT_STORAGE_UC;
                break;
            case 'PR_CON':
                price_pr_con = PRICE_PROJECT_CONDO_UC;
                break;
            case 'RECUR_DESK':
            case 'DESK':
                price_consult = PRICE_DESKTOP_SERVICES_UC;
                break;
            case 'RECUR_SYSTEMS':
            case 'SYSTEMS':
                price_consult = PRICE_SYSTEMS_SERVICES_UC;
                break;
            case 'RECUR_STORAGE':
            case 'STORAGE':
                price_consult = PRICE_STORAGE_SERVICES_UC;
                break;
            case 'SITE':
                price_share = [PRICE_SHAREPOINT_SITES_UC, PRICE_ADD_DA_STORAGE_UC, PRICE_CONSULTATION_SUPPORT_UC];
                break;
            case 'SUPPORT':
            case 'SYS_MAN':
                price_sys_man = PRICE_SYSTEM_MANAGEMENT_UC;
                break;
            case 'COMMVAULT':
                price_comm = [PRICE_RAW_BACKUP_DATA_UC, PRICE_FULL_BACKUP_UC, PRICE_DIFFERENTIAL_INCREMENTAL_UC];
                break;
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
                price_cl_str = PRICE_CLOUD_STORAGE_EXT;
                original = PRICE_CLOUD_STORAGE_EXT;
                dual = PRICE_DUAL_SITE_CLOUD_STORAGE_EXT;
                break;
            case 'PR_STR':
                price_pr_str = PRICE_PROJECT_STORAGE_EXT;
                break;
            case 'PR_CON':
                price_pr_con = PRICE_PROJECT_CONDO_EXT;
                break;
            case 'DESK':
            case 'RECUR_DESK':
                price_consult = PRICE_DESKTOP_SERVICES_EXT;
                break;
            case 'SYSTEMS':
            case 'RECUR_SYSTEMS':
                price_consult = PRICE_SYSTEMS_SERVICES_EXT;
                break;
            case 'STORAGE':
            case 'RECUR_STORAGE':
                price_consult = PRICE_STORAGE_SERVICES_EXT;
                break;
            case 'SITE':
                price_share = [PRICE_SHAREPOINT_SITES_EXT, PRICE_ADD_DA_STORAGE_EXT, PRICE_CONSULTATION_SUPPORT_EXT];
                break;
            case 'SUPPORT':
            case 'SYS_MAN':
                price_sys_man = PRICE_SYSTEM_MANAGEMENT_EXT;
                break;
            case 'COMMVAULT':
                price_comm = [PRICE_RAW_BACKUP_DATA_EXT, PRICE_FULL_BACKUP_EXT, PRICE_DIFFERENTIAL_INCREMENTAL_EXT];
                break;
            case 'RAW':
            case 'CL_COMPUTE':
                    price = PRICE_CL_COMPUTE_EXT;
                    break;
            }
    }
    switch (id) {
            case 'ST_VM':
                for (n=0, item_num=1; n < price_vm.length; n++, item_num++) {
                    document.getElementById("st-vm-price" + num + item_num).setAttribute("st-vm-price" + num + item_num, parseFloat(price_vm[n]).toFixed(2));
                    if (item_num!=6)document.getElementById("st-vm-qty" + num + item_num).setAttribute("st-vm-price" + num + item_num, parseFloat(price_vm[n]).toFixed(2));
                    switch (n) {
                        case 0:
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            document.getElementById("st-vm-sub" + num + item_num).value = "$" + parseFloat(price_vm[n]).toFixed(2);
                            getEstimate('cpu', "st-vm-qty" + num + item_num, price_vm[n], "st-vm-sub" + num + item_num, num, 'ST_VM');
                            break;
                        case 1:
                            document.getElementById("st-vm-qty" + num + item_num).setAttribute("price", parseFloat(price_vm[n]).toFixed(2));
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            getEstimate('cpu', "st-vm-qty" + num + item_num, price_vm[n], "st-vm-sub" + num + item_num, num, 'ST_VM');
                            break;
                        case 2:
                            document.getElementById("st-vm-qty" + num + item_num).setAttribute("price", parseFloat(price_vm[n]).toFixed(2));
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/GB";
                            getEstimate('mem', "st-vm-qty" + num + item_num, price_vm[n], "st-vm-sub" + num + item_num, num, 'ST_VM');
                            break;
                        case 3:
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("st-vm-qty" + num + item_num).setAttribute("price",price_vm[n]);
                            getEstimate('silver', "st-vm-qty" + num + item_num, price_vm[n], "st-vm-sub" + num + item_num, num, 'ST_VM');
                            document.getElementById("units" + num + item_num).setAttribute("value", "TB");
                            document.getElementById("GB" + num + item_num).removeAttribute("selected");
                            document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
                            break;
                        case 4:
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("st-vm-qty" + num + item_num).setAttribute("price",price_vm[n]);
                            getEstimate('gold', "st-vm-qty" + num + item_num, price_vm[n], "st-vm-sub" + num + item_num, num, 'ST_VM');
                            document.getElementById("units" + num + item_num).setAttribute("value", "TB");
                            document.getElementById("GB" + num + item_num).removeAttribute("selected");
                            document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
                            break;
                        case 5:
                            document.getElementById("st-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2);
                            if (document.getElementById("st-vm").value == "Yes") extraSnaps(num, item_num, "st-vm");
                            break;
                    }
                }
            sub('vm-sub');
            break;
            case 'HS_VM':
                for (n=0, item_num=1; n < price_vm.length; n++, item_num++) {
                    document.getElementById("hs-vm-price" + num + item_num).setAttribute("hs-vm-price"+item_num, parseFloat(price_vm[n]).toFixed(2));
                    if (item_num!=5)document.getElementById("hs-vm-qty" + num + item_num).setAttribute("hs-vm-price" + num + item_num, parseFloat(price_vm[n]).toFixed(2));
                    switch (n) {
                        case 0:
                            document.getElementById("hs-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            document.getElementById("hs-vm-sub" + num + item_num).value = "$" + parseFloat(price_vm[n]).toFixed(2);
                            getEstimate('cpu', "hs-vm-qty" + num + item_num, price_vm[n], "hs-vm-sub" + num + item_num, num, 'HS_VM');
                            break;
                        case 1:
                            document.getElementById("hs-vm-qty" + num + item_num).setAttribute("cpu-price", parseFloat(price_vm[n]).toFixed(2));
                            document.getElementById("hs-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/CPU";
                            getEstimate('cpu', "hs-vm-qty" + num + item_num, price_vm[n], "hs-vm-sub" + num + item_num, num, 'HS_VM');
                            break;
                        case 2:
                            document.getElementById("hs-vm-qty" + num + item_num).setAttribute("mem-price", parseFloat(price_vm[n]).toFixed(2));
                            document.getElementById("hs-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/GB";
                            getEstimate('mem', "hs-vm-qty" + num + item_num, price_vm[n], "hs-vm-sub" + num + item_num, num, 'HS_VM');
                            break;
                        case 3:
                            item_num--;
                            break;
                        case 4:
                            document.getElementById("hs-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2) + "/TB";
                            document.getElementById("hs-vm-qty" + num + item_num).setAttribute("san-price",price_vm[n]);
                            getEstimate('gold', "hs-vm-qty" + num + item_num, price_vm[n], "hs-vm-sub" + num + item_num, num, 'HS_VM');
                            document.getElementById("units" + num + item_num).setAttribute("value", "TB");
                            document.getElementById("GB" + num + item_num).removeAttribute("selected");
                            document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
                            break;
                        case 5:
                            document.getElementById("hs-vm-price" + num + item_num).innerHTML = "$" + parseFloat(price_vm[n]).toFixed(2);
                            if (document.getElementById("hs-vm").value == "Yes") extraSnaps(num, item_num, "hs-vm");
                            break;
                    }
                }
                break;
            case 'CL_STR':
                item_num = 1;
                document.getElementById("str-price" + num + item_num).value = parseFloat(price_cl_str).toFixed(2);
                document.getElementById("str-qty" + num + item_num).setAttribute("str-price", price_cl_str);
                document.getElementById("str-price" + num + item_num).innerHTML = "$" + parseFloat(price_cl_str).toFixed(2) + "/TB";
                document.getElementById("units" + num + item_num).setAttribute("value", "TB");
                document.getElementById("GB" + num + item_num).removeAttribute("selected");
                document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
                document.getElementById("dualoptions" + num).setAttribute("original", original);
                document.getElementById("dualoptions" + num).setAttribute("double", dual);
                document.getElementById("onchange", "changePrice(num, document.getElementById('dualoptions' + num).getAttribute('original'), document.getElementById('dualoptions' + num).getAttribute('double'))");
                if (document.getElementById("dualoptions" + num).value == "Yes") changePrice(num, document.getElementById('dualoptions' + num).getAttribute('original'), document.getElementById('dualoptions' + num).getAttribute('double'));
                getEstimate("str", "str-qty" + num + item_num, document.getElementById("str-price" + num + item_num).value, "str-sub" + num + item_num, num, "CL_STR");
                break;
            case 'PR_STR':
                item_num = 1;
                document.getElementById("str-price" + num + item_num).value = parseFloat(price_pr_str).toFixed(2);
                document.getElementById("str-qty" + num + item_num).setAttribute("str-price", price_pr_str);
                document.getElementById("str-price" + num + item_num).innerHTML = "$" + parseFloat(price_pr_str).toFixed(2) + "/TB";
                document.getElementById("units" + num + item_num).setAttribute("value", "TB");
                document.getElementById("GB" + num + item_num).removeAttribute("selected");
                document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
                getEstimate('pr-str', 'str-qty' + num + item_num, price_pr_str, 'str-sub' + num + item_num, num, 'CL_STR');
                break;
            case 'PR_CON':
                item_num = 1;
                document.getElementById("str-price" + num + item_num).value = parseFloat(price_pr_con).toFixed(2);
                document.getElementById("str-qty" + num + item_num).setAttribute("str-price", price_pr_con);
                document.getElementById("str-price" + num + item_num).innerHTML = "$" + parseFloat(price_pr_con).toFixed(2) + "/unit";
                getEstimate('pr-str', 'str-qty' + num + item_num, price_pr_con, 'str-sub' + num + item_num, num, 'CL_STR');
                break;
            case 'DESK':
            case 'SYSTEMS':
            case 'STORAGE':
            case 'RECUR_DESK':
            case 'RECUR_SYSTEMS':
            case 'RECUR_STORAGE':
                item_num = 1;
                document.getElementById("consult-price" + num + item_num).value = parseFloat(price_consult).toFixed(2);
                document.getElementById("consult-price" + num + item_num).innerHTML = "$" + parseFloat(price_consult).toFixed(2) + "/hr";
                document.getElementById("consult-qty" + num + item_num).setAttribute("consult-price" + num + item_num, price_consult);
                getEstimate('consult', "consult-qty" + num + item_num, price_consult, "consult-sub" + num + item_num, num, 'DESK');
                break;
            case 'SITE':
                for (item_num = 1, n = 0; item_num < 4; n++, item_num++) {
                    document.getElementById("share-price" + num + item_num).value = parseFloat(price_share[n]).toFixed(2);
                    if (i<2)document.getElementById("share-price" + num + item_num).innerHTML = "$" + parseFloat(price_share[n]).toFixed(2) + "/month";
                    else document.getElementById("share-price" + num + item_num).innerHTML = "$" + parseFloat(price_share[n]).toFixed(2);
                    document.getElementById("share-qty" + num + item_num).setAttribute("share_price", price_share[n]);
                    switch (item_num) {
                        case (1):
                            getEstimate('sp', "share-qty" + num + item_num, price_share[n], "share-sub" + num + item_num, num, 'SITE');
                            break;
                        case (2):
                            getEstimate('additional-sp', "share-qty" + num + item_num, price_share[n], "share-sub" + num + item_num, num, 'SITE');
                            break;
                        case(3):
                            getEstimate('sp-consult', "share-qty" + num + item_num, price_share[n], "share-sub" + num + item_num, num, 'SITE');
                            break;
                    }
                }
                break;
            case 'SUPPORT':
            case 'SYS_MAN':
                item_num = 1;
                // set up loop to go through each line item with new naming convention
                document.getElementById("pa" + num + item_num).value = "$" + parseFloat(price_sys_man[0]).toFixed(2);
                document.getElementById("pa" + num + item_num).innerHTML = "$" + parseFloat(price_sys_man[0]).toFixed(2);
                document.getElementById("pa-qty" + num + item_num).setAttribute("pa-price", price_sys_man[0]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[0], "sys-man-sub" + num + item_num, num, 'SYS_MAN');
                document.getElementById("nonrec-price" + num).value = "$" + parseFloat(price_sys_man[1]).toFixed(2);
                document.getElementById("nonrec-price" + num).innerHTML = "$" + parseFloat(price_sys_man[1]).toFixed(2);
                document.getElementById("nonrec-qty" + num).setAttribute("nonrec-price", price_sys_man[1]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[1], "nonrec-sub" + num, num, 'SYS_MAN');
                document.getElementById("no-os-price" + num).value = "$" + parseFloat(price_sys_man[2]).toFixed(2);
                document.getElementById("no-os-price" + num).innerHTML = "$" + parseFloat(price_sys_man[2]).toFixed(2);
                document.getElementById("no-os-qty" + num).setAttribute("no-os-price", price_sys_man[2]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[2], "no-os-sub" + num, num, 'SYS_MAN');
                document.getElementById("storage-array-price" + num).value = "$" + parseFloat(price_sys_man[3]).toFixed(2);
                document.getElementById("storage-array-price" + num).innerHTML = "$" + parseFloat(price_sys_man[3]).toFixed(2);
                document.getElementById("storage-array-qty" + num).setAttribute("storage-array-price", price_sys_man[3]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[3], "storage-array-sub" + num, num, 'SYS_MAN');
                document.getElementById("non-os-vendor-price" + num).value = "$" + parseFloat(price_sys_man[4]).toFixed(2);
                document.getElementById("non-os-vendor-price" + num).innerHTML = "$" + parseFloat(price_sys_man[4]).toFixed(2);
                document.getElementById("non-os-vendor-qty" + num).setAttribute("non-os-vendor-price", price_sys_man[4]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[4], "non-os-vendor-sub" + num, num, 'SYS_MAN');
                document.getElementById("local-admin-access-price" + num).value = "$" + parseFloat(price_sys_man[5]).toFixed(2);
                document.getElementById("local-admin-access-price" + num).innerHTML = "$" + parseFloat(price_sys_man[5]).toFixed(2);
                document.getElementById("local-admin-access-qty" + num).setAttribute("local-admin-access-price", price_sys_man[5]);
                getEstimate('pa-sub', "pa-qty" + num + item_num, price_sys_man[5], "local-admin-access-sub" + num, num, 'SYS_MAN');
                document.getElementById("sys-monitor-price" + num).value = "$" + parseFloat(price_sys_man[6]).toFixed(2);
                document.getElementById("sys-monitor-price" + num).innerHTML = "$" + parseFloat(price_sys_man[6]).toFixed(2);
                document.getElementById("sys-monitor-qty" + num).setAttribute("sys-monitor-price", price_sys_man[6]);
                getEstimate('pa-sub', "sys-monitor-qty" + num, price_sys_man[6], "sys-monitor-sub" + num, num, 'SYS_MAN');
                break;
            case 'COMMVAULT':
                for (i = 0, item_num = 1; item_num < 4; item_num++, i++){
                    document.getElementById("comm-price" + num + item_num).setAttribute("value", price_comm[i]);
                    document.getElementById("comm-price" + num + item_num).innerHTML = "$" + parseFloat(price_comm[i]).toFixed(2);
                    document.getElementById("comm-qty" + num + item_num).setAttribute("comm-price", price_comm[i]);
                }
                getEstimate('raw', "comm-qty" + num + "1", price_comm[0], "comm-sub" + num + "1", num, 'RAW');
                calculateBackup(num);
                break;
            case 'RAW':
            case 'CL_COMPUTE':
                for (n=0, item_num=1; n < price.length; n++, item_num++) {
                if (n<10){
                            document.getElementById("cl-compute-price" + num + item_num).innerHTML = "$" + price[n] + "/hr/instance";
                }
                else {
                    document.getElementById("cl-compute-price" + num + item_num).innerHTML = "$" + price[n] + "/GB/instance";
                }
                document.getElementById("cl-compute-instances" + num + item_num).setAttribute("cl-compute-price", price[n]);
                document.getElementById("cl-compute-hours" + num + item_num).setAttribute("cl-compute-price",  price[n]);
                getEstimate('cl-compute', 'cl-compute-hours' + num + item_num, price[n], document.getElementById("cl-compute-hours" + num + item_num).getAttribute('dest'), item_num,'CL_COMPUTE');
                }
                break;

    }
    document.getElementsByName("affiliation")[0].setAttribute("value", affiliation);
}
/* Function Name: getEstimate
 * Description: This function calculates the subtotals within one line item and populates the subtotal column at the farthest right.
 * Parameters: type - the type of field (used in the function validate())
 *             id - the id of the field
 *             price - price of the product
 *             dest - the id of the dest to output the result
 *             category - which category this belongs to
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
    /* empty/deleted input will render the subtotal cell blank*/
    if (item.value === null || item.value === "" || isNaN(item.value)) {
        subtotal.setAttribute("value", "");
        sub(theclass);
        if (theclass == "vm-sub") sub(theclass + num);
        sub('sub');
        sub('onetime');
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
                var itemnum = document.getElementById(id).getAttribute("item-num");
                if (itemnum < 10) var indices = id.slice(-2);
                else var indices = id.slice(-3);
                var value = (parseFloat(document.getElementById("cl-compute-hours" + indices).value) * parseFloat(document.getElementById("cl-compute-instances" + indices).value) * price).toFixed(2);
                document.getElementById(dest).setAttribute("value", "$" + value);
                if (document.getElementById(dest).getAttribute("value") == "$NaN") {
                    document.getElementById(dest).setAttribute("value", "Missing input");
                    document.getElementById(dest).style.color = "#ff0000";
                }
                else {
                    document.getElementById("flavor-specifications" + indices).setAttribute("style", "visibility:hidden");
                }
                //sub("vm-sub" + num);
            }
            else {
                document.getElementById(dest).setAttribute("value", "$" + (parseFloat(document.getElementById(id).value) * price).toFixed(2));
            }
        }
        if (type != 'sp-consult') {
            sub('vm-sub' + num);
            if (category == 'ST_VM' || category == 'HS_VM') {
                if (category == 'ST_VM') var snapQty = "st-vm-qty" + num + "5";
                else var snapQty = "hs-vm-qty" + num + "4";
                if (document.getElementById(snapQty).value == 'Yes') {
                    //var tempval = parseFloat(document.getElementById('st-vm-total').value.replace("$", ""));
                    //document.getElementById('vm-sub' + num + '-total').setAttribute("value", "$" + (eval(tempval - parseFloat(PRICE_ADD_SNAPSHOT_STANDARD_VM_UC))));
                    //document.getElementById("extra-sub-out" + num).value = "$" + document.getElementById("st-m")
                }
            }
        }

        if (type == 'sys-man' && document.getElementById('psa' + num).value == 'Custom') {
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", 'Custom');
        }

        //if (type == 'consult' || type == 'sp-consult') {
            sub("onetime");
        //}
        //else {
            sub(theclass);
            sub('sub');
        //}
        // sub(theclass);
        // sub('sub');
        if (category == 'ST_VM' || category == 'HS_VM') {
                if (category == 'ST_VM') var snapQty = "st-vm-qty" + num + "5";
                else var snapQty = "hs-vm-qty" + num + "4";
                if (document.getElementById(snapQty).value == 'Yes') {
                    var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
                    var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
                    document.getElementById('vm-sub-total').setAttribute("value", "$" + (tempval + PRICE_ADD_SNAPSHOT_STANDARD_VM_UC));
                    document.getElementById('sub-total').setAttribute("value", "$" + (temptotalval + PRICE_ADD_SNAPSHOT_STANDARD_VM_UC));
                }
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
            if (document.getElementById('units' + num + "4").getAttribute("value") == 'GB') {
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
            if (document.getElementById('units' + num + "5")) var i = 5;
            else var i = 4;
            if (document.getElementById('units' + num + i).getAttribute("value") == 'GB') {
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
            if (document.getElementById('units' + num + "1") == null) break;
            if (document.getElementById('units' + num + "1").getAttribute("value") == 'GB') {
                if (v < 1000) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            } else {
                if ( v < 1) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
            }
            break;

        case "pr-str":
            if (document.getElementById('units' + num +"1") != null) {
              if (document.getElementById('units' + num + "1").getAttribute("value") == 'GB') {
                if (v < 1000 || v % 500 != 0) {
                    d.setAttribute("value", "Invalid input");
                    d.style.color = "#ff0000";
                    return false;
                }
              }
              else {
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
 * Parameters:
    rowNum - the index of the row to delete
    deleteNum - the number of rows to delete
    category - the category of the service
 * Result: Deletes a product and its associated rows. Recalculates subtotals
 */
function removeProduct(rowNum, deleteNum, category)
{
    switch (category) {
        case 'ST_VM':
        case 'HS_VM':
            var table = document.getElementById('vm-table');
            var totals = "vm-table";
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
        case 'RECUR_DESK':
        case 'RECUR_SYSTEMS':
        case 'RECUR_STORAGE':
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

    /* adjust the subtotals */
    sub(theclass);
    sub('sub');
    sub('onetime');
    /* check if onetime fees are zero */
    var onetime = document.getElementById("onetime-total");
    if(onetime.value == "$0.00") onetime.setAttribute("value", "N/A");

    if(table.rows.length - 1 === 0) {
        table.setAttribute("hidden", "hidden");
        //document.getElementById("totals").setAttribute("hidden", "hidden");
    }

    if (--numProducts === 0) {
        document.getElementById('totals').setAttribute("hidden", "hidden");
        /*delete monthly and one-time totals rows*/
        var monthlyTotal = document.getElementById("monthlytotals");
        var onetimeTotal = document.getElementById("onetimetotals");
        monthlyTotal.parentNode.removeChild(monthlyTotal);
        onetimeTotal.parentNode.removeChild(onetimeTotal);
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

/* Function Name: changePrice
 * Parameters:
    - num
    - originalval
    - doubleval
 * Result: Changes the System Management and Manager boxes
 *          depending on the OS chosen. Also changes the dropdown selected value
 */
function changePrice(num, originalval, doubleval)
{
    var val = document.getElementById('dualoptions' + num).value;
    var currentprice = document.getElementById('cl-str-qty' + num + "1").getAttribute('cl-str-price');
    document.getElementById("No" + num).removeAttribute("selected");
    document.getElementById("Yes" + num).removeAttribute("selected");
    if (val == 'Yes') {
        document.getElementById('cl-str-price' + num + "1").value = doubleval;
        document.getElementById('cl-str-price' + num + "1").setAttribute("value", doubleval);
        document.getElementById('cl-str-price' + num + "1").innerHTML = '$' + doubleval + '/TB';
        document.getElementById('Yes' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num + "1").setAttribute("cl-str-price", currentprice * 2);
        document.getElementById("cl-str-price" + num + "1").setAttribute("value", "$" + (currentprice * 2) + "/TB");
        getEstimate('cl-str', 'cl-str-qty' + num + "1", document.getElementById('cl-str-qty' + num + "1").getAttribute('cl-str-price'), 'cl-str-sub' + num + "1", num, 'CL_STR');
        document.getElementById("siteoptions" + num).setAttribute("value", "N/A");
        document.getElementById("siteoptions" + num).setAttribute("disabled", "disabled");
    } else if (val == 'No') {
        document.getElementById('cl-str-price' + num + "1").value = originalval;
        document.getElementById('cl-str-price' + num + "1").setAttribute("value", originalval);
        document.getElementById('cl-str-price' + num + "1").innerHTML = '$' + originalval + '/TB';
        document.getElementById('No' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num + "1").setAttribute("cl-str-price", currentprice / 2);
        document.getElementById("cl-str-price" + num + "1").setAttribute("value", "$" +  (currentprice / 2) + "/TB");
        getEstimate('cl-str', 'cl-str-qty' + num + "1", document.getElementById('cl-str-qty' + num + "1").getAttribute('cl-str-price'), 'cl-str-sub' + num + "1", num, 'CL_STR');
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
        document.getElementById('system-price'+num).setAttribute("value", "$" + parseFloat(PRICE_SYSTEM_MANAGEMENT_UC[0]).toFixed(2));
        getEstimate('sys-man', 'sys-man-qty' + num, PRICE_SYSTEM_MANAGEMENT_UC[0], 'sys-man-sub' + num, num, 'SYS_MAN');
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

/* Function Name: changeUnits
 * Parameters:
 * Result:
 */
function changeUnits(vm_qty, id, value, num, item_num, category)
{
    var currentprice;
    document.getElementById(id).setAttribute("value", value);

    if (value == 'TB') {
        document.getElementById("GB" + num + item_num).removeAttribute("selected");
        document.getElementById("TB" + num + item_num).setAttribute("selected", "selected");
    } else {
        document.getElementById("TB" + num + item_num).removeAttribute("selected");
        document.getElementById("GB" + num + item_num).setAttribute("selected", "selected");
    }
    switch (category) {
        case 'str':
            if (value == 'TB') {
                currentprice = document.getElementById(vm_qty + num + item_num).getAttribute("price");
                currentprice *= 1000;

                document.getElementById(vm_qty + num + item_num).setAttribute("price", currentprice);

            } else {
                currentprice = document.getElementById(vm_qty + num + item_num).getAttribute("price");

                currentprice /= 1000;

                document.getElementById(vm_qty + num + item_num).setAttribute("price", currentprice);

            }

            var element = document.getElementById(vm_qty + num + item_num);
            getEstimate('silver', element.id, element.getAttribute('price'), element.getAttribute('dest'), element.getAttribute('num'), 'ST_VM');
            break;

        case 'gold':
            if (value == 'TB') {
                currentprice = document.getElementById(vm_qty + num + item_num).getAttribute("price");
                currentprice *= 1000;
                document.getElementById(vm_qty + num + item_num).setAttribute("price", currentprice);
            } else {
                currentprice = document.getElementById(vm_qty + num + item_num).getAttribute("price");
                currentprice /= 1000;
                document.getElementById(vm_qty + num + item_num).setAttribute("price", currentprice);
            }
            var element = document.getElementById(vm_qty + num + item_num);
            if (vm_qty == "hs-vm-qty") var category = "HS_VM";
            else var category = 'ST_VM';
            getEstimate('gold', element.id, element.getAttribute('price'), element.getAttribute('dest'), element.getAttribute('num'), category);
            break;

        case 'cl':
            if (value == 'TB') {
                currentprice = document.getElementById("str-qty" + num + item_num).getAttribute("price");
                currentprice *= 1000;
                document.getElementById("str-qty" + num + item_num).setAttribute("price", currentprice);
            } else {
                currentprice = document.getElementById("str-qty" + num + item_num).getAttribute("price");
                currentprice /= 1000;
                document.getElementById("str-qty" + num + item_num).setAttribute("price", currentprice);
            }
            var element = document.getElementById('str-qty' + num + item_num);
            getEstimate('cl-str', element.id, element.getAttribute('price'), element.getAttribute('dest'), element.getAttribute('num'), 'CL_STR');
            break;

        case 'pr':
            if (value == 'TB') {
                currentprice = document.getElementById("str-qty" + num + item_num).getAttribute("price");
                currentprice *= 1000;
                document.getElementById("str-qty" + num + item_num).setAttribute("price", currentprice);
            } else {
                currentprice = document.getElementById("str-qty" + num + item_num).getAttribute("price");
                currentprice /= 1000;
                document.getElementById("str-qty" + num + item_num).setAttribute("price", currentprice);
            }
            var element = document.getElementById('str-qty' + num + item_num);
            getEstimate('pr-str', element.id, element.getAttribute('str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'CL_STR');
            break;

        case 'raw':
            if (value == 'TB') {
                currentprice = document.getElementById("raw-qty" + num).getAttribute("comm-price");
                currentprice *= 1000;
                document.getElementById("raw-qty" + num).setAttribute("comm-price", currentprice);
            } else {
                currentprice = document.getElementById("raw-qty" + num).getAttribute("comm-price");
                currentprice /= 1000;
                document.getElementById("raw-qty" + num).setAttribute("comm-price", currentprice);
            }
            var element = document.getElementById('raw-qty' + num);
            getEstimate('raw', element.id, element.getAttribute('comm-price'), element.getAttribute('dest'),  element.getAttribute('num'), 'RAW');
            break;
    }
}

function calculateBackup(num)
{
    var input = document.getElementById("comm-qty" + num + "1");
    if (document.getElementById("comm-qty" + num + "1") == null) {
    }
    var fullbackups = document.getElementById("comm-qty" + num + "2");
    var monthlynum = document.getElementById("monthlybackup-qty" + num);
    var durmonthly = document.getElementById("durmonthlybackup-qty" + num);
    var differentials = document.getElementById("comm-qty" + num + "3");
    var diffwk = document.getElementById("diffwk-qty" + num);
    var incwk = document.getElementById("incwk-qty" + num);
    var durdiffinc = document.getElementById("durdiffinc-qty" + num);

    var backupsvalue = parseFloat(input.value * monthlynum.value * durmonthly.value * 0.8).toFixed(2);
    var diffvalue = parseFloat(((diffwk.value * input.value * 0.015) + (incwk.value * input.value * 0.0075)) * (4 * durdiffinc.value * 0.8)).toFixed(2);

    if (document.getElementById("raw-units" + num + "1").getAttribute("value") == "GB") {
        backupsvalue /= 1000;
        backupsvalue = backupsvalue.toFixed(2);
        diffvalue /= 1000;
        diffvalue = diffvalue.toFixed(2);
    }
    fullbackups.setAttribute("value", backupsvalue);
    differentials.setAttribute("value", diffvalue);

    getEstimate('full', fullbackups.id, fullbackups.getAttribute('comm-price'), fullbackups.getAttribute('dest'),  fullbackups.getAttribute('num'), 'RAW');
    getEstimate('diff', differentials.id, differentials.getAttribute('comm-price'), differentials.getAttribute('dest'),  differentials.getAttribute('num'), 'RAW');
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

function extraSnaps(vm_num, item_num, id)
{
    var currentPrice = parseFloat(document.getElementById('vm-sub' + vm_num + '-total').value.replace("$", ""));
    var val = document.getElementById(id).value;
    document.getElementById("No" + vm_num).removeAttribute("selected");
    document.getElementById("Yes" + vm_num).removeAttribute("selected");
    if (document.getElementById("os" + vm_num).value == "UC") var price = PRICE_ST_VM_UC[5];
    else var price = PRICE_ST_VM_EXT[5];
    if (val == 'Yes') {
        //document.getElementById('vm-sub' + vm_num + '-total').setAttribute("value", '$' + (currentPrice + price));
        document.getElementById('Yes' + vm_num).setAttribute("selected", "selected");
        //var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
        //var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
        //document.getElementById('vm-sub-total').setAttribute("value", "$" + parseFloat(tempval + price).toFixed(2));
        //document.getElementById('sub-total').setAttribute("value", "$" + parseFloat(temptotalval + price).toFixed(2));
        document.getElementById(id + "-sub" + vm_num + item_num).setAttribute("value", "$" + parseFloat(price).toFixed(2));
        document.getElementById(id).setAttribute("value", "Yes");
        document.getElementById(id).setAttribute("name", "Yes");
    } else if (val == 'No') {
        //document.getElementById('vm-sub' + vm_num + '-total').setAttribute("value", '$' + (currentPrice - price));
        document.getElementById('No' + vm_num).setAttribute("selected", "selected");
        //var tempval = parseFloat(document.getElementById('vm-sub-total').value.replace("$", ""));
        //var temptotalval = parseFloat(document.getElementById('sub-total').value.replace("$", ""));
        //document.getElementById('vm-sub-total').setAttribute("value", "$" + parseFloat(tempval - price).toFixed(2));
        //document.getElementById('sub-total').setAttribute("value", "$" + parseFloat(temptotalval - price).toFixed(2));
        document.getElementById(id + "-sub" + vm_num + item_num).setAttribute("value", "$" + parseFloat(0).toFixed(2));
        document.getElementById(id).setAttribute("value", "No");
        document.getElementById(id).setAttribute("name", "No");
    }
    sub("vm-sub");
    sub("vm-sub" + vm_num);
    sub("sub");
}
