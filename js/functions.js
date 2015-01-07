//http://springtricks.blogspot.com/2013/10/how-to-download-charts-to-pdf-formate.html
// keep track of the number of services in the quote

var vm_num = 0; //number of VM's ordered
var str_num = 0; //number of Storage Units (cloud, project, project condo) ordered
var sys_num = 0; //number of System Managements ordered
var backup_num = 0; //number of backups ordered
var consulting_num = 0; //number of consulting servicse ordered
var sp_num = 0; //number of sharepoint sites ordered (including consultation support)
var prod_num = 0; //number of total products

var row1, cell, rowCount;

/* list of variables for input/output */
var cpu_qty_in, cpu_sub_out, mem_qty_in, mem_sub_out, str_qty_in, str_sub_out, san_qty_in, san_sub_out, cl_str_qty_in, cl_str_sub_out;
            
/* options variable for dropdown menus */
var option; 
            
/* other variables and stuff */
var slice_text;
var slice_price;
var cpu_price_val;
var mem_price_val;
var str_price_val = 49.42;
var san_price_val = 125.00;

var sys_man_price_val = 69.00;
var nonrec_price_val = 45.00;
var no_os_price_val = 90.00;
var storage_array_price_val = 56.00;
var non_os_vendor_price_val = 23.00;
var local_admin_access_price_val = 34.00;
var sys_monitor_price_val = 142.00;

var numProducts = 0; // number of products on table currently

function addProduct(id)
{
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
    }
    rowCount = table.rows.length;
    if (rowCount - 1 === 0) {
        table.removeAttribute("hidden");
        totals.removeAttribute("hidden");
    }
    ++vm_num; //increase number of vm's
    
    if (numProducts++ === 0) {
        document.getElementById('totals').removeAttribute("hidden");
    }
    
    /* ALL OF THIS IS FOR VM'S!!! */
    if (id == 'ST_VM' || id == 'HS_VM') {
        
        /* user has chosen standard vm */
        if(id == 'ST_VM') {
            slice_text = "Standard VM";
            slice_price = 69.75;
            cpu_price_val = 12.94;
            mem_price_val = 12.94;
        } else if (id == 'HS_VM') {
            slice_text = "High Security VM";
            slice_price = 93.75;
            cpu_price_val = 15.61;
            mem_price_val = 15.61;
        }
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        var name = document.createTextNode(slice_text);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 8, 'ST_VM')");

        var cell = row1.insertCell(1);
        var os = document.createElement("select"); 
        os.setAttribute("name", "os" + vm_num);
        os.setAttribute("value", "Windows");
        os.setAttribute("title", "Choose an operating system for your VM");
        /* add all operating systems options */
        option = new Option("Windows", "Windows", false, false);
        option.id = "Windows" + vm_num;
        os.appendChild(option);

        option = new Option("Red Hat 6 64-bit", "Red Hat 6 64-bit", false, false);
        option.id = "RedHat" + vm_num;
        os.appendChild(option);

        option = new Option("CentOS", "CentOS", false, false);
        option.id = "CentOS" + vm_num;
        os.appendChild(option);
        option = new Option("Ubuntu", "Ubuntu", false, false);
        option.id = "Ubuntu" + vm_num;
        os.appendChild(option);
        option = new Option("Other", "Other", false, false);
        option.id = "Other" + vm_num;
        os.appendChild(option);
        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + vm_num;
        os.setAttribute("optionval", vm_num);
        os.setAttribute("sys", "sys" + vm_num);
        os.setAttribute("manager", "manager" + vm_num);
        os.setAttribute("vm-type", id);
        os.setAttribute("onchange", "processOS(this.getAttribute('vm-type'), document.getElementById(this.id).value, this.getAttribute('sys'), this.getAttribute('manager'), this.getAttribute('optionval'))");
        os.setAttribute("readonly", "readonly");
        os.defaultSelected = "Other" + vm_num;

        var cell = row1.insertCell(2);
        var price = document.createElement("input");
        price.setAttribute("name", "serviceprice" + vm_num);
        price.setAttribute("type", "text");
        cell.appendChild(price);
        cell.setAttribute("colspan", "1");
        price.id = "service-price" + vm_num;
        price.className = "vm-sub vm-sub" + vm_num;
        price.value = "$" + slice_price;
        price.setAttribute("size", 20);
        price.setAttribute("readonly", "readonly");
        price.setAttribute("value", price.value);
        
        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        var cpu = document.createTextNode("Additional CPUs");                       
        cell.appendChild(cpu);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(1);
        var cpu_price = document.createTextNode("$" + cpu_price_val + "/CPU");
        cell.appendChild(cpu_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(2);
        var cpu_qty = document.createElement("input");
        cpu_qty.setAttribute("type", "text");
        cpu_qty_in = "cpu-qty" + vm_num;
        cpu_sub_out = "cpu-sub" + vm_num;
        cell.appendChild(cpu_qty);
        cell.setAttribute("colspan", "1");
        cpu_qty.id = cpu_qty_in;
        cpu_qty.setAttribute("name", cpu_qty_in);
        cpu_qty.setAttribute("title", "Enter a whole number 0 to 11");
        cpu_qty.className += " cpu_qty userinput";
        cpu_qty.setAttribute("dest", "" + cpu_sub_out);
        cpu_qty.setAttribute("num", vm_num);
        cpu_qty.setAttribute("cpu-price", cpu_price_val);
        cpu_qty.setAttribute("size", 5);
        cpu_qty.setAttribute("onchange", "getEstimate('cpu', this.id, this.getAttribute('cpu-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
        
        var cell = row2.insertCell(3);
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
        var mem = document.createTextNode("Additional RAM");                       
        cell.appendChild(mem);
        cell.setAttribute("colspan", "1");
        var cell = row3.insertCell(1);
        var mem_price = document.createTextNode("$" + mem_price_val + "/GB");
        cell.appendChild(mem_price);
        cell.setAttribute("colspan", "1");

        var cell = row3.insertCell(2);
        var mem_qty = document.createElement("input");
        mem_qty.setAttribute("type", "text");
        mem_qty_in = "mem-qty" + vm_num;
        mem_sub_out = "mem-sub" + vm_num;
        cell.appendChild(mem_qty);
        cell.setAttribute("colspan", "1");
        mem_qty.id = mem_qty_in;
        mem_qty.setAttribute("name", mem_qty_in);
        mem_qty.setAttribute("title", "Enter a whole number 0 to 190");
        mem_qty.className += " userinput";
        mem_qty.setAttribute("dest", mem_sub_out);
        mem_qty.setAttribute("num", vm_num);
        mem_qty.setAttribute("mem-price", mem_price_val);
        mem_qty.setAttribute("size", 5);
        mem_qty.setAttribute("onchange", "getEstimate('mem', this.id, this.getAttribute('mem-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");

        var cell = row3.insertCell(3);
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

        if (id == 'ST_VM') {
            var cell = row4.insertCell(0);
            var str = document.createTextNode("Additional 'Silver' Storage");                        
            cell.appendChild(str);
            cell.setAttribute("colspan", "1");

            var cell = row4.insertCell(1);
            var str_price = document.createTextNode("$49.42/TB");
            cell.appendChild(str_price);
            cell.setAttribute("colspan", "1");

            var cell = row4.insertCell(2);
            var str_qty = document.createElement("input");
            str_qty.setAttribute("type", "text");
            str_qty_in = "str-qty" + vm_num;
            str_sub_out = "str-sub" + vm_num;
            cell.appendChild(str_qty);
            cell.setAttribute("colspan", "1");
            str_qty.id = str_qty_in;
            str_qty.setAttribute("name", str_qty_in);
            str_qty.className += " userinput";
            str_qty.setAttribute("dest", str_sub_out);
            str_qty.setAttribute("num", vm_num);
            str_qty.setAttribute("str-price", str_price_val);
            str_qty.setAttribute("size", 5);
            str_qty.setAttribute("onchange", "getEstimate('silver', this.id, this.getAttribute('str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
            var str_units = document.createElement("select");
            str_units.setAttribute("name", "str-units" + vm_num);
            str_units.setAttribute("value", "TB");
            str_units.setAttribute("title", "Choose the units");
            str_units.setAttribute("num", vm_num);
            str_units.id = "str-units" + vm_num;
            
            /* add all unit options */
            option = new Option("TB", "TB", false, false);
            option.id = "TB" + vm_num;
            str_units.appendChild(option);

            option = new Option("GB", "GB", false, false);
            option.id = "GB" + vm_num;
            str_units.appendChild(option);
            str_units.setAttribute("onchange", "changeUnits(this.id, this.value, this.getAttribute('num'), 'str')");
            cell.appendChild(str_units);
            
            var cell = row4.insertCell(3);
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
            var cell = row4.insertCell(0);
            var alert = document.createTextNode("Silver storage is unavailable for High Security VMs.");
            cell.appendChild(alert);
            cell.setAttribute("colspan", "4");
            cell.className = "alert";
        }

        var row5 = table.insertRow(++rowCount);

        var cell = row5.insertCell(0);
        var san = document.createTextNode("Additional 'Gold' Storage");                        
        cell.appendChild(san);
        cell.setAttribute("colspan", "1");

        var cell = row5.insertCell(1);
        var san_price = document.createTextNode("$125.00/TB");
        cell.appendChild(san_price);
        cell.setAttribute("colspan", "1");

        var cell = row5.insertCell(2);
        var san_qty = document.createElement("input");
        san_qty.setAttribute("type", "text");
        san_qty_in = "san-qty" + vm_num;
        san_sub_out = "san-sub" + vm_num;
        cell.appendChild(san_qty);
        cell.setAttribute("colspan", "1");
        san_qty.id = san_qty_in;
        san_qty.setAttribute("name", san_qty_in);
        san_qty.className += " userinput";
        san_qty.setAttribute("dest", san_sub_out);
        san_qty.setAttribute("num", vm_num);
        san_qty.setAttribute("san-price", san_price_val);
        san_qty.setAttribute("size", 5);
        san_qty.setAttribute("onchange", "getEstimate('gold', this.id, this.getAttribute('san-price'), this.getAttribute('dest'), this.getAttribute('num'), 'ST_VM')");
        
        var san_units = document.createElement("select");
        san_units.setAttribute("name", "san-units" + vm_num);
        san_units.setAttribute("value", "TB");
        san_units.setAttribute("title", "Choose the units");
        san_units.setAttribute("num", vm_num);
        san_units.id = "san-units" + vm_num;
        
        /* add all unit options */
        option = new Option("TB", "TB", false, false);
        option.id = "TB" + vm_num;
        san_units.appendChild(option);

        option = new Option("GB", "GB", false, false);
        option.id = "GB" + vm_num;
        san_units.appendChild(option);
        san_units.setAttribute("onchange", "changeUnits(this.id, this.value, this.getAttribute('num'), 'san')");
        cell.appendChild(san_units);

        var cell = row5.insertCell(3);
        var san_sub = document.createElement("input");
        san_sub.setAttribute("type", "text");
        cell.appendChild(san_sub);
        cell.setAttribute("colspan", "1");
        san_sub.id = san_sub_out;
        san_sub.setAttribute("name", san_sub.id);
        san_sub.setAttribute("size", 20);
        document.getElementById(san_sub_out).setAttribute("readonly", "readonly");
        san_sub.className = "vm-sub vm-sub" + vm_num;

        var row6 = table.insertRow(++rowCount);
        cell = row6.insertCell(0);
        var sysmanagement = document.createTextNode("System Management");
        cell.appendChild(sysmanagement);
        cell.setAttribute("colspan", "1");

        cell = row6.insertCell(1);
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
        if(id == 'ST_VM') {
            document.getElementById(sysmanagement_text.id).setAttribute("value", "Included");  
        } else {
            document.getElementById(sysmanagement_text.id).setAttribute("value", "User-managed OR Added Premium (Contact SDSC for details)");
        }

        var row7 = table.insertRow(++rowCount);

        cell = row7.insertCell(0);
        var manager = document.createTextNode("Manager");
        cell.appendChild(manager);
        cell.setAttribute("colspan", "1");

        cell = row7.insertCell(1);
        var themanager = document.createElement("input");
        themanager.setAttribute("type", "text");
        cell.appendChild(themanager);
        cell.setAttribute("colspan", "3");
        themanager.id = "manager" + vm_num;
        themanager.setAttribute("name", themanager.id);
        themanager.setAttribute("size", 30);
        sysmanagement_text.className = "info";
        document.getElementById(themanager.id).setAttribute("readonly", "readonly");
        document.getElementById(themanager.id).setAttribute("value", "Brian Balderston");

        var row8 = table.insertRow(++rowCount);

        var cell = row8.insertCell(0);
        var subtext = document.createTextNode("Subtotal");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row8.insertCell(1);
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        vmsubtotal.setAttribute("size", 20);
        cell.appendChild(vmsubtotal);
        cell.setAttribute("colspan", "1");
        vmsubtotal.id = "vm-sub" + vm_num + "-total";
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        //vmsubtotal.className = "sub";
        document.getElementById(vmsubtotal.id).setAttribute("readonly", "readonly");
        document.getElementById(vmsubtotal.id).setAttribute("value", "$" + slice_price);
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
        var name = document.createTextNode("Cloud Storage");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 2, 'CL_STR')");
        
        var cell = row1.insertCell(1);
        var cl_str_price = document.createElement("input");
        cl_str_price.id = "cl-str-price" + vm_num;
        cl_str_price.className += " varprice";
        cl_str_price.setAttribute("type", "text");
        cl_str_price.setAttribute("readonly", "readonly");
        cl_str_price.value = "$" + cl_str_price_val + "/TB";
        cell.appendChild(cl_str_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row1.insertCell(2);
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
        cl_str_qty.setAttribute("size", 5);
        cl_str_qty.setAttribute("onchange", "getEstimate('cl-str', this.id, this.getAttribute('cl-str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_STR')");
        
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
        cl_units.setAttribute("onchange", "changeUnits(this.id, this.value, this.getAttribute('num'), 'cl')");
        cell.appendChild(cl_units);

        var cell = row1.insertCell(3);
        var cl_str_sub = document.createElement("input");
        cl_str_sub.setAttribute("type", "text");
        cell.appendChild(cl_str_sub);
        cell.setAttribute("colspan", "1");
        cl_str_sub.id = cl_str_sub_out;
        document.getElementById(cl_str_sub_out).setAttribute("readonly", "readonly");
        cl_str_sub.className = "str-sub vm-sub" + vm_num;
        cl_str_sub.setAttribute("name", cl_str_sub.id);
        cl_str_sub.setAttribute("size", 20);
        
        var row2 = table.insertRow(++rowCount);
        row2.id = "row" + vm_num;
        var cell = row2.insertCell(0);
        var dual_text = document.createTextNode("Dual Redundancy?");
        cell.appendChild(dual_text);
        cell.setAttribute("colspan", "1");
        cell.className += " pad-bottom";
        
        var cell = row2.insertCell(1);
        var dualoptions = document.createElement("select");
        dualoptions.id = "dualoptions" + vm_num;
        dualoptions.setAttribute("num", vm_num);
        dualoptions.setAttribute("original", cl_str_price_val);
        dualoptions.setAttribute("double", cl_str_price_val_double);
        dualoptions.setAttribute("name", dualoptions.id);
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
        
        cell.setAttribute("colspan", "2");
        sub('vm-sub');
    } /* END CLOUD STORAGE CODE */
    
    /* BEGIN PROJECT STORAGE AND PROJECT CONDO CODE */
    else if (id == 'PR_STR' || id == 'PR_CON') {
        
        if(id == 'PR_STR') {
            var cl_str_price_val = 45.74;
            var cl_str_price_string = "$" + cl_str_price_val + "/TB";
            var prod_name = "Project Storage";
        } else {
            var cl_str_price_val = 782.11;
            var cl_str_price_string = "$" + cl_str_price_val + "/pair";
            var prod_name = "Project Condo";
        }
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        var name = document.createTextNode(prod_name);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        cell.className += " pad-bottom";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 1, 'CL_STR')");
        
        var cell = row1.insertCell(1);
        var cl_str_price = document.createTextNode(cl_str_price_string);
        cell.appendChild(cl_str_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row1.insertCell(2);
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
        cl_str_qty.setAttribute("size", 5);
        cl_str_qty.setAttribute("cl-str-price", cl_str_price_val);
        cl_str_qty.setAttribute("onchange", "getEstimate('cl-str', this.id, this.getAttribute('cl-str-price'), this.getAttribute('dest'), this.getAttribute('num'), 'CL_STR')");
        
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
            pr_units.setAttribute("onchange", "changeUnits(this.id, this.value, this.getAttribute('num'), 'pr')");
            cell.appendChild(pr_units);
        }

        var cell = row1.insertCell(3);
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
    else if (id == 'DESK' || id == 'SYSTEMS' || id == 'STORAGE') {
        var consult_price_val;
        var prod_name;
        if (id == 'DESK') {
            consult_price_val = 80.00;
            prod_name = "Tier I Consulting Services - Desktop";
        } else if (id == 'SYSTEMS') {
            consult_price_val = 96.00;
            prod_name = "Tier II Consulting Services - Systems";
        } else if (id == 'STORAGE') {
            consult_price_val = 80.00;
            prod_name = "Tier I Consulting Services - Storage";
        }
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        var name = document.createTextNode(prod_name);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        cell.className += " pad-bottom";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 1, 'DESK')");
        
        var cell = row1.insertCell(1);
        var consult_price = document.createTextNode("$" + consult_price_val + "/hr");
        cell.appendChild(consult_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row1.insertCell(2);
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
        consult_qty.setAttribute("size", 5);
        consult_qty.setAttribute("onchange", "getEstimate('consult', this.id, this.getAttribute('consult-price'), this.getAttribute('dest'), this.getAttribute('num'), 'DESK')");

        var cell = row1.insertCell(3);
        var consult_sub = document.createElement("input");
        consult_sub.setAttribute("type", "text");
        cell.appendChild(consult_sub);
        cell.setAttribute("colspan", "1");
        consult_sub.id = consult_sub_out;
        document.getElementById(consult_sub_out).setAttribute("readonly", "readonly");
        consult_sub.className = "consult-sub vm-sub" + vm_num;
        consult_sub.setAttribute("name", consult_sub.id);
        consult_sub.setAttribute("size", 20);
        sub('consult-sub');
        sub('sub');
    } /* END CONSULTING SERVICES */
    
    /* BEGIN SHAREPOINT SERVICES */
    else if (id == 'SITE' || id == 'SUPPORT') {
        if (id == 'SITE') {
            var sp_price_val = 333.33;
            var prod_name = "SharePoint Site";
            var unit = "/month";
            var numRows = 3; 
        } else if (id == 'SUPPORT') {
            var sp_price_val = 96.00;
            var prod_name = "Consultation Support";
            var unit = "/hr";
            var numRows = 1;
        }
        
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        var name = document.createTextNode(prod_name);                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        
        // support only has one row. Add padding after this row
        if (id == 'SUPPORT') {
            cell.className += " pad-bottom";
        }
        
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("numRows", numRows);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'SUPPORT')");
        
        var cell = row1.insertCell(1);
        var sp_price = document.createTextNode("$" + sp_price_val + unit);
        cell.appendChild(sp_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row1.insertCell(2);
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
        sp_qty.setAttribute("size", 5);
        if (id == 'SUPPORT') {
            sp_qty.setAttribute("onchange", "getEstimate('sp-consult', this.id, this.getAttribute('sp-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");
        } else {
            sp_qty.setAttribute("onchange", "getEstimate('sp', this.id, this.getAttribute('sp-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");
        }

        var cell = row1.insertCell(3);
        var sp_sub = document.createElement("input");
        sp_sub.setAttribute("type", "text");
        cell.appendChild(sp_sub);
        cell.setAttribute("colspan", "1");
        sp_sub.id = sp_sub_out;
        document.getElementById(sp_sub_out).setAttribute("readonly", "readonly");
        sp_sub.className = "sp-sub vm-sub" + vm_num;
        sp_sub.setAttribute("name", sp_sub.id);
        sp_sub.setAttribute("size", 20);
        // Add extra rows for SharePoint Site
        if (id == 'SITE') {
            additional_price_val = 10.00;
            
            var row2 = table.insertRow(++rowCount);
            var cell = row2.insertCell(0);
            var additional_text = document.createTextNode("Additional 25 GB of DA site storage w/backup");
            additional_text.className += " sp-additional";
            cell.appendChild(additional_text);
            cell.setAttribute("colspan", "1");

            var cell = row2.insertCell(1);
            var additional_price = document.createTextNode("$" + additional_price_val + "/month");
            cell.appendChild(additional_price);
            cell.setAttribute("colspan", "1");

            var cell = row2.insertCell(2);
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

            var cell = row2.insertCell(3);
            var additional_sub = document.createElement("input");
            additional_sub.setAttribute("type", "text");
            cell.appendChild(additional_sub);
            cell.setAttribute("colspan", "1");
            additional_sub.id = additional_sub_out;
            document.getElementById(additional_sub_out).setAttribute("readonly", "readonly");
            additional_sub.className = "sp-sub vm-sub" + vm_num;
            additional_sub.setAttribute("name", additional_sub.id);
            additional_sub.setAttribute("size", 20);
            
            var row3 = table.insertRow(++rowCount);

            var cell = row3.insertCell(0);
            var subtext = document.createTextNode("Subtotal:");
            cell.appendChild(subtext);
            cell.setAttribute("colspan", "3");
            cell.className += " pad-bottom";

            var cell = row3.insertCell(1);
            var spsubtotal = document.createElement("input");
            spsubtotal.setAttribute("type", "text");
            cell.appendChild(spsubtotal);
            cell.setAttribute("colspan", "1");
            spsubtotal.id = "vm-sub" + vm_num + "-total";
            //spsubtotal.className = "sub";
            spsubtotal.setAttribute("name", spsubtotal.id);
            spsubtotal.setAttribute("size", 20);
            document.getElementById(spsubtotal.id).setAttribute("readonly", "readonly");
        }
        
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
        var name = document.createTextNode("System Management");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 9, 'SYS_MAN')");
        
        var cell = row1.insertCell(1);
        var psa = document.createElement("select"); 
        
        /* add system management option: standard or variable? */
        option = new Option("Standard - $" + sys_man_price_val + "/month", "Standard - $" + sys_man_price_val + "/month", false, false);
        option.id = "Standard" + vm_num;
        psa.appendChild(option);

        option = new Option("Variable", "Variable", false, false);
        option.id = "Variable" + vm_num;
        psa.appendChild(option);

        cell.appendChild(psa);
        cell.setAttribute("colspan", "1");
        psa.id = "psa" + vm_num;
        psa.setAttribute("optionval", vm_num);
        //psa.setAttribute("sys", "sys" + vm_num);
        //psa.setAttribute("manager", "manager" + vm_num);
        //psa.setAttribute("vm-type", id);
        psa.setAttribute("onchange", "processPrice(document.getElementById(this.id).value, this.getAttribute('optionval'))");
        psa.setAttribute("value", "Standard - $69.00");

        var cell = row1.insertCell(2);
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
        sys_man_qty.setAttribute("sys-man-price", sys_man_price_val);
        sys_man_qty.setAttribute("name", sys_man_qty.id);
        sys_man_qty.setAttribute("size", 5);
        sys_man_qty.setAttribute("onchange", "getEstimate('sys-man', this.id, this.getAttribute('sys-man-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row1.insertCell(3);
        var sys_man_sub = document.createElement("input");
        sys_man_sub.setAttribute("type", "text");
        cell.appendChild(sys_man_sub);
        cell.setAttribute("colspan", "1");
        sys_man_sub.id = sys_man_sub_out;
        sys_man_sub.setAttribute("name", sys_man_sub.id);
        sys_man_sub.setAttribute("size", 20);
        document.getElementById(sys_man_sub_out).setAttribute("readonly", "readonly");
        sys_man_sub.className = "pa-sub vm-sub" + vm_num;
        
        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        var systemname = document.createTextNode("System Name: ");
        cell.appendChild(systemname);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(1);
        var systemnameinput = document.createElement("input");
        systemnameinput.setAttribute("type", "text");
        systemnameinput.setAttribute("name", "systemnameinput");
        systemnameinput.setAttribute("size", 20);
        systemnameinput.id = "systemnameinput" + vm_num;
        systemnameinput.className += " system-name";
        systemnameinput.defaultValue = "Enter System Name";
        systemnameinput.setAttribute("value", "Enter System Name");
        
        systemnameinput.setAttribute("onchange", "changeValue('' + this.id, this.value)");
        cell.appendChild(systemnameinput);
        cell.setAttribute("colspan", "3");
        
        var row3 = table.insertRow(++rowCount);
        var cell = row3.insertCell(0);
        var nonrec = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(nonrec);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(1);
        var nonrec_price = document.createTextNode("$" + nonrec_price_val + "/month");
        cell.appendChild(nonrec_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(2);
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
        nonrec_qty.setAttribute("nonrec-price", nonrec_price_val);
        nonrec_qty.setAttribute("name", nonrec_qty.id);
        nonrec_qty.setAttribute("size", 5);
        nonrec_qty.setAttribute("onchange", "getEstimate('nonrec', this.id, this.getAttribute('nonrec-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row3.insertCell(3);
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
        var no_os = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(no_os);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(1);
        var no_os_price = document.createTextNode("$" + no_os_price_val + "/month");
        cell.appendChild(no_os_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row4.insertCell(2);
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
        no_os_qty.setAttribute("no_os-price", no_os_price_val);
        no_os_qty.setAttribute("name", no_os_qty.id);
        no_os_qty.setAttribute("size", 5);
        no_os_qty.setAttribute("onchange", "getEstimate('no_os', this.id, this.getAttribute('no_os-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row4.insertCell(3);
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
        var storage_array = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(storage_array);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(1);
        var storage_array_price = document.createTextNode("$" + storage_array_price_val + "/month");
        cell.appendChild(storage_array_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row5.insertCell(2);
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
        storage_array_qty.setAttribute("storage_array-price", storage_array_price_val);
        storage_array_qty.setAttribute("name", storage_array_qty.id);
        storage_array_qty.setAttribute("size", 5);
        storage_array_qty.setAttribute("onchange", "getEstimate('storage_array', this.id, this.getAttribute('storage_array-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row5.insertCell(3);
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
        var non_os_vendor = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(non_os_vendor);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(1);
        var non_os_vendor_price = document.createTextNode("$" + non_os_vendor_price_val + "/month");
        cell.appendChild(non_os_vendor_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(2);
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
        non_os_vendor_qty.setAttribute("non_os_vendor-price", non_os_vendor_price_val);
        non_os_vendor_qty.setAttribute("onchange", "getEstimate('non_os_vendor', this.id, this.getAttribute('non_os_vendor-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row6.insertCell(3);
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
        var local_admin_access = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(local_admin_access);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(1);
        var local_admin_access_price = document.createTextNode("$" + local_admin_access_price_val + "/month");
        cell.appendChild(local_admin_access_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row7.insertCell(2);
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
        local_admin_access_qty.setAttribute("local_admin_access-price", local_admin_access_price_val);
        local_admin_access_qty.setAttribute("name", local_admin_access_qty.id);
        local_admin_access_qty.setAttribute("size", 5);
        local_admin_access_qty.setAttribute("onchange", "getEstimate('local_admin_access', this.id, this.getAttribute('local_admin_access-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row7.insertCell(3);
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
        var sys_monitor = document.createTextNode("Surcharge for non-recommended hardware");                       
        cell.appendChild(sys_monitor);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(1);
        var sys_monitor_price = document.createTextNode("$" + sys_monitor_price_val + "/month");
        cell.appendChild(sys_monitor_price);
        cell.setAttribute("colspan", "1");
        
        var cell = row8.insertCell(2);
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
        sys_monitor_qty.setAttribute("sys_monitor-price", sys_monitor_price_val);
        sys_monitor_qty.setAttribute("name", sys_monitor_qty.id);
        sys_monitor_qty.setAttribute("size", 5);
        sys_monitor_qty.setAttribute("onchange", "getEstimate('sys_monitor', this.id, this.getAttribute('sys_monitor-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SYS_MAN')");

        var cell = row8.insertCell(3);
        var sys_monitor_sub = document.createElement("input");
        sys_monitor_sub.setAttribute("type", "text");
        cell.appendChild(sys_monitor_sub);
        cell.setAttribute("colspan", "1");
        sys_monitor_sub.id = sys_monitor_sub_out;
        document.getElementById(sys_monitor_sub_out).setAttribute("readonly", "readonly");
        sys_monitor_sub.className = "pa-sub vm-sub" + vm_num;
        sys_monitor_sub.setAttribute("name", sys_monitor_sub.id);
        sys_monitor_sub.setAttribute("size", 20);
        var row9 = table.insertRow(++rowCount);

        var cell = row9.insertCell(0);
        var subtext = document.createTextNode("Subtotal:");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row9.insertCell(1);
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
        
        raw_price_val = 91.67;
        full_price_val = 35.18;
        diff_price_val = 35.18;
        
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        var name = document.createTextNode("CommVault Backup");                      
        cell.appendChild(name);
        cell.setAttribute("colspan", "1");
        cell.className = "service-title";
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), 10, 'RAW')");

        var cell = row1.insertCell(1);
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
        package.setAttribute("onchange", "processPackage(document.getElementById(this.id).value, this.getAttribute('optionval'))");
        package.setAttribute("value", "Standard 3-mo. Retention");
        
        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        var raw = document.createTextNode("Raw Backup Data");                       
        cell.appendChild(raw);
        cell.setAttribute("colspan", "1");
        
        var cell = row2.insertCell(1);
        var raw_price = document.createTextNode("$" + raw_price_val + "/TB/mo.");
        cell.appendChild(raw_price);
        cell.setAttribute("colspan", "1");
        var cell = row2.insertCell(2);
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

        var cell = row2.insertCell(3);
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
        var full = document.createTextNode("Full Backups Saved");                       
        cell.appendChild(full);
        cell.setAttribute("colspan", "1");
        
        var cell = row3.insertCell(1);
        var full_price = document.createTextNode("$" + full_price_val + "/TB/mo.");
        cell.appendChild(full_price);
        cell.setAttribute("colspan", "1");
        var cell = row3.insertCell(2);
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
        full_qty.setAttribute("onchange", "getEstimate('full', this.id, this.getAttribute('full-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");

        var cell = row3.insertCell(3);
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
        var monthlybackup = document.createTextNode("-How many full backups per month?");
        monthlybackup.className += " smalltext";
        cell.appendChild(monthlybackup);
        cell.setAttribute("colspan", "2");
        
        var cell = row4.insertCell(1);
        var monthlybackup_qty = document.createElement("input");
        monthlybackup_qty.setAttribute("type", "text");
        monthlybackup_qty_in = "monthlybackup-qty" + vm_num;
        monthlybackup_sub_out = "monthlybackup-sub" + vm_num;
        cell.appendChild(monthlybackup_qty);
        cell.setAttribute("colspan", "2");
        monthlybackup_qty.id = monthlybackup_qty_in;
        monthlybackup_qty.className += " monthlybackup_qty userinput";
        monthlybackup_qty.setAttribute("name", monthlybackup_qty.id);
        monthlybackup_qty.setAttribute("size", 5);
        monthlybackup_qty.setAttribute("onchange", "changeValue(this.id, this.value)");
        
        var row5 = table.insertRow(++rowCount);
        var cell = row5.insertCell(0);
        var durmonthlybackup = document.createTextNode("-How long are full backups saved (months)?");
        durmonthlybackup.className += " smalltext";
        cell.appendChild(durmonthlybackup);
        cell.setAttribute("colspan", "2");
        
        var cell = row5.insertCell(1);
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
        durmonthlybackup_qty.setAttribute("onchange", "changeValue(this.id, this.value)");
        
        var row6 = table.insertRow(++rowCount);
        var cell = row6.insertCell(0);
        var diff = document.createTextNode("Differentials/Incremental Backups Saved");                       
        cell.appendChild(diff);
        cell.setAttribute("colspan", "1");
        
        var cell = row6.insertCell(1);
        var diff_price = document.createTextNode("$" + diff_price_val + "/TB/mo.");
        cell.appendChild(diff_price);
        cell.setAttribute("colspan", "1");
        var cell = row6.insertCell(2);
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
        diff_qty.setAttribute("onchange", "getEstimate('diff', this.id, this.getAttribute('diff-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");

        var cell = row6.insertCell(3);
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
        var diffwk = document.createTextNode("-How many differentials are taken per week?");    
        diffwk.className += " smalltext";
        cell.appendChild(diffwk);
        cell.setAttribute("colspan", "2");
        
        var cell = row7.insertCell(1);
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
        diffwk_qty.setAttribute("onchange", "changeValue(this.id, this.value)");
        
        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        var incwk = document.createTextNode("-How many incrementals are taken per week?");    
        incwk.className += " smalltext";
        cell.appendChild(incwk);
        cell.setAttribute("colspan", "2");
        
        var cell = row8.insertCell(1);
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
        incwk_qty.setAttribute("onchange", "changeValue(this.id, this.value)");
        
        var row9 = table.insertRow(++rowCount);
        var cell = row9.insertCell(0);
        var durdiffinc = document.createTextNode("-How long are diff/inc saved (months)?");    
        durdiffinc.className += " smalltext";
        cell.appendChild(durdiffinc);
        cell.setAttribute("colspan", "2");
        
        var cell = row9.insertCell(1);
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
        durdiffinc_qty.setAttribute("onchange", "changeValue(this.id, this.value)");
        
        var row10 = table.insertRow(++rowCount);

        var cell = row10.insertCell(0);
        var subtext = document.createTextNode("Subtotal");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row10.insertCell(1);
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
} /* END ADDPRODUCT FUNCTION */
            
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
    
    if (item.value === null || item.value === "" || isNaN(item.value)) {
        subtotal.setAttribute("value", "");
    } else if (validate(type, id, dest)) {
        if (type == 'sys-man' && document.getElementById('psa' + num).value == 'Variable') {
            document.getElementById(dest).value = 0;
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", "0");
            sub('pa-sub');
            
            document.getElementById(dest).value = 'Variable';
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", "Variable");
        } else {
            document.getElementById(dest).setAttribute("value", "$" + (parseFloat(document.getElementById(id).value) * price).toFixed(2));
        }
        if (type != 'cl-str' && type != 'consult' && type != 'sp-consult') {
            sub('vm-sub' + num);
        }
        
        if (type == 'sys-man' && document.getElementById('psa' + num).value == 'Variable') {
            document.getElementById('vm-sub' + num + '-total').setAttribute("value", 'Variable');
        }
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
        }
        sub(theclass);
        sub('sub');
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
    document.getElementById(theclass + "-total").setAttribute("value", "$" + sum.toFixed(2));
}
            
/* Function Name: validate
 * Parameters: type - type of field to validate
 *             id - id of field to validate
 *             dest - where to output error message or result
 * Result: Will print error message or correct result, depending on true/false
 */
function validate(type, id, dest)
{            
    var v = document.getElementById(id).value;
    var d = document.getElementById(dest);
                
    d.style.color = "#000"; //default color if validation passes
    
    if (type == "cpu") {
        if (v < 0 || v > 11) {
            d.setAttribute("value", "Please enter a number from 0 to 11");
            d.style.color = "#ff0000";
            return false;
        }
    }
                
    if (type == "mem") {
        if (v < 0 || v > 190 ) {
            d.setAttribute("value", "Please enter a number from 0 to 190");
            d.style.color = "#ff0000";
            return false; 
        }
    }
                
    if (type == "silver") {
        if (v < 0 || v > 30000) {
            d.setAttribute("value", "Please enter a number from 0 to 30000");
            d.style.color = "#ff0000";
            return false;
        }
    }
                
    if (type == "gold") {
        if (v < 0 || v > 4900) {
            d.setAttribute("value", "Please enter a number from 0 to 4900");
            d.style.color ="#ff0000";
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
                
    /* determines the type of system management */
    if((o == 'Windows' || o == 'Red Hat 6 64-bit') && id != 'HS_VM') {
        document.getElementById(system).setAttribute("value", "Included");
    } else {
        document.getElementById(system).setAttribute("value", "User-managed OR Added Premium (Contact SDSC for details)");
    }
                
    /* determines the manager */
    if(o != 'Red Hat 6 64-bit' || id == 'HS_VM') {
        document.getElementById(manager).setAttribute("value", "Brian Balderston");
    } else {
        document.getElementById(manager).setAttribute("value", "Andrew Ferbert");
    }

    document.getElementById("os" + num).defaultValue = o;
    document.getElementById("os" + num).defaultSelected = o;
    document.getElementById("os" + num).setAttribute("value", o);
}

function changePrice(num, originalval, doubleval)
{
    var val = document.getElementById('dualoptions' + num).value;
    var currentprice = document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price');
    if (val == 'Yes') {
        document.getElementById('cl-str-price' + num).value = '$' + doubleval + '/TB';
        document.getElementById('Yes' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice * 2);
        getEstimate('cl-str', 'cl-str-qty' + num, document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price'), 'cl-str-sub' + num, num, 'CL_STR');
    } else if (val == 'No') {
        document.getElementById('cl-str-price' + num).value = '$' + originalval + '/TB';
        document.getElementById('No' + num).setAttribute("selected", "selected");
        document.getElementById("cl-str-qty" + num).setAttribute("cl-str-price", currentprice / 2);
        getEstimate('cl-str', 'cl-str-qty' + num, document.getElementById('cl-str-qty' + num).getAttribute('cl-str-price'), 'cl-str-sub' + num, num, 'CL_STR');
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
    document.getElementById('durmonthlybackup-qty' + num).setAttribute("value", duration);
    document.getElementById('diffwk-qty' + num).setAttribute("value", "1");
    document.getElementById('incwk-qty' + num).setAttribute("value", "5");
    document.getElementById('durdiffinc-qty' + num).setAttribute("value", duration);
    
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
    if (o == 'Variable') {
        document.getElementById('sys-man-sub' + num).setAttribute("value", 'Variable');
        document.getElementById('vm-sub' + num + '-total').setAttribute("value", 'Variable');
        document.getElementById('Variable' + num).setAttribute("selected", "selected");
    } else if (o == 'Standard - $' + sys_man_price_val + '/month') {
        getEstimate('sys-man', 'sys-man-qty' + num, sys_man_price_val, 'sys-man-sub' + num, num, 'SYS_MAN');
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
function changeValue(id, value)
{
    document.getElementById(id).setAttribute("value", value);
}

function changeUnits(id, value, num, category)
{
    var currentprice;
    document.getElementById(id).setAttribute("value", value);
    
    switch (category) {
        case 'str': 
            if (value == 'TB') {
                currentprice = document.getElementById("str-qty" + num).getAttribute("str-price");
                console.log("current price: " + currentprice);
                currentprice *= 1000;
                console.log("new price: " + currentprice);
                document.getElementById("str-qty" + num).setAttribute("str-price", currentprice);
                console.log("updated price: " + document.getElementById("str-qty" + num).getAttribute("str-price"));
            } else {
                currentprice = document.getElementById("str-qty" + num).getAttribute("str-price");
                console.log("current price: " + currentprice);
                currentprice /= 1000;
                console.log("new price: " + currentprice);
                document.getElementById("str-qty" + num).setAttribute("str-price", currentprice);
                console.log("updated price: " + document.getElementById("str-qty" + num).getAttribute("str-price"));
            }
            
            var element = document.getElementById("str-qty" + num);
            getEstimate('silver', element.id, element.getAttribute('str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'ST_VM');
            break;
        
        case 'san': 
            if (value == 'TB') {
                currentprice = document.getElementById("san-qty" + num).getAttribute("san-price");
                currentprice *= 1000;
                document.getElementById("san-qty" + num).setAttribute("san-price", currentprice);
            } else {
                currentprice = document.getElementById("san-qty" + num).getAttribute("san-price");
                currentprice /= 1000;
                document.getElementById("san-qty" + num).setAttribute("san-price", currentprice);
            }
            var element = document.getElementById("san-qty" + num);
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
            getEstimate('cl-str', element.id, element.getAttribute('cl-str-price'), element.getAttribute('dest'), element.getAttribute('num'), 'CL_STR');
            break;
    }
}