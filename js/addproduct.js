/* Function name: addTitleOptions
 * Parameters:
 * Description: This is a helper function for addProduct which will generate the title, description box,
            option rows (affiliation and/or OS), and the two specifications rows (one with just "Specifications"
            and the other with Item/Price/Qty/Cost as cells)
 */

function addTitleOptions(table, title, rowsString, category) {
    row1 = table.insertRow(rowCount);
    row1.id = "row" + vm_num;
    var cell = row1.insertCell(0);
    var remove = document.createElement("button");
    var remove_text = document.createTextNode("-");
    remove.appendChild(remove_text);
    cell.appendChild(remove);
    cell.setAttribute("colspan", "1");
    cell.setAttribute("width", "20");
    remove.className = "remove-button";
    remove.setAttribute("value", "-");
    remove.setAttribute("rownumber", "row" + vm_num);
    remove.setAttribute("title", "Remove Service");
    var removeProduct = "removeProduct(this.getAttribute('rownumber'), " + rowsString + ",'" + category + "')";
    remove.setAttribute("onclick", removeProduct);
    // if (id == 'ST_VM') {
    //     remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), ROWS_STANDARD_VM, 'ST_VM')");
    // } else {
    //     remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), ROWS_HIGH_SECURITY_VM, 'ST_VM')");
    // }

    var cell = row1.insertCell(1);
    var name = document.createTextNode(title);
    cell.appendChild(name);
    cell.setAttribute("colspan", "1");
    cell.setAttribute("width", "220");
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
    os.setAttribute("num", vm_num);
    os.setAttribute("title", "Choose client location");
    os.setAttribute("value", "UC");
    var changePrices = "changePrices(this.value, " + "'" + category + "', this.getAttribute('num'))";
    os.setAttribute("onchange", changePrices);
    // if (id == 'ST_VM'){
    //     os.setAttribute("onchange", "changePrices(this.value, 'ST_VM', this.getAttribute('num'))");
    // }
    // else os.setAttribute("onchange", "changePrices(this.value, 'HS_VM', this.getAttribute('num'))");

    option = new Option("UC", "UC", false, false);
    option.id = "UC" + vm_num;
    os.appendChild(option);
    option = new Option("External", "External", false, false);
    option.id = "External" + vm_num;
    os.appendChild(option);
    cell.appendChild(os);
    cell.setAttribute("colspan", "2");
    os.id = "affiliation" + vm_num;

    if (category == "ST_VM" || category == "HS_VM") {
        var row = table.insertRow(++rowCount);
        var cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");

        var cell = row.insertCell(1);
        var os_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Operating System:");
        cell.appendChild(os_text);
        cell.setAttribute("colspan", "1");

        var cell = row.insertCell(2);
        var os = document.createElement("select");
        os.setAttribute("name", "os" + vm_num);
        os.setAttribute("value", "Windows");
        os.setAttribute("title", "Choose an operating system for your VM");

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
        os.setAttribute("vm-type", category);
        os.setAttribute("onchange", "processOS(this.getAttribute('vm-type'), document.getElementById(this.id).value, this.getAttribute('sys'), this.getAttribute('manager'), this.getAttribute('optionval'))");
        os.setAttribute("readonly", "readonly");
    }

    if (category == "CL_STR") {
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
        dualoptions.setAttribute("original", PRICE_CLOUD_STORAGE_UC);
        dualoptions.setAttribute("double", PRICE_DUAL_SITE_CLOUD_STORAGE_UC);
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
    }
    if (category == "SYS_MAN") {
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
    }

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

}

/* Function name: addItemLine
 * Parameters for function addItemLine(table, item_name, price, id, vm_num, item_num, tooltip, typeEstimate, category, unit_per_price, default_unit, TB_GB)
                1 - the table
                2 - Item name as a string
                3 - Price as a decimal, without prefixes and suffixes
                4 - The prefix used for all id's
                5 - vm_num which is the number assigned to the entire service
                6 - item_num which is the number assigned to the item within the service
                7 - Tooltip for the input field for qty as a String
                8 - Type which is used for populating getEstimate parameters
                9 - Units suffix for price as a string, including the "/"
                10 - Unit (static) displayed next to price
                11 - Unit (static) displayed next to input field in qty
                12 - boolean for displaying the dropdown menu next to qty to change units (TB and GB)
 * Description: This is a helper function for addProduct which will generate one single line
 *          for the item nam, price, qty fields, and subtotal/cost.
 */

function addItemLine(table, item_name, price, id, vm_num, item_num, tooltip, typeEstimate, category, unit_per_price, default_unit, TB_GB) {
    var row = table.insertRow(++rowCount);
    // Item
    var cell = row.insertCell(0);
    cell.setAttribute("colspan", "1");
    var cell = row.insertCell(1);
    cell.setAttribute("colspan", "1");
    var item_string = "\u00a0\u00a0\u00a0\u00a0" + item_name;
    var item_name = document.createTextNode(item_string);
    cell.appendChild(item_name);

    /******* Price *********/
    var cell = row.insertCell(2);
    cell.setAttribute("colspan", "1");
    // i.e. $12.94/CPU
    if (unit_per_price) {
        var itemprice = document.createTextNode("$" + parseFloat(price).toFixed(2) + unit_per_price);
    }
    // for system management item in hs-vm
    else if (id == "hs-vm" && item_num == 5) {
        var itemprice = document.createTextNode("User-managed");
    }
    // i.e. $69.75
    else {
        var itemprice = document.createTextNode("$" + parseFloat(price).toFixed(2));
    }
    if (id=="onetime")
        cell.id = "consult-price" + vm_num + (++item_num); //first item
    else cell.id = id + "-price" + vm_num + (++item_num); //first item
    cell.appendChild(itemprice);

    /********* Qty ***********/
    var cell = row.insertCell(3);
    // for st-vm or hs-vm
    if ((id == "st-vm" || id == "hs-vm") && item_num == 1 ) {
        // base-vm qty has a static qty
            cell.id = id + "-qty" + vm_num + item_num;
            cell.appendChild(document.createTextNode("1"));
            cell.setAttribute("value", 1);
            cell.setAttribute(id + "-qty" + vm_num + item_num, 1);

    }
    else if ((id == "st-vm" || id == "hs-vm") && price == 24) {
            // extra snapshots don't have an input field
            var cell = row.insertCell(3);
            var extrasnap = document.createElement("select");
            extrasnap.id = id;
            extrasnap.setAttribute("value", "No");
            extrasnap.setAttribute("vm_num", vm_num);
            extrasnap.setAttribute("item_num", item_num)
            extrasnap.setAttribute("name", extrasnap.id);
            extrasnap.setAttribute("title", "Marking yes will add $" + price + " to the subtotal");
            extrasnap.setAttribute("onchange", "extraSnaps(this.getAttribute('vm_num'),this.getAttribute('item_num'), this.getAttribute('id'))");

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
    }
    // system management in hs-vm doesn't have a qty
    else if (id == "hs-vm" && item_num == 6) {}

    else {
        var qty = document.createElement("input");
        qty.setAttribute("type", "text");
        cell.appendChild(qty);
        cell.setAttribute("colspan", "1");

        qty.title = tooltip;
        qty.className += " userinput";
        if (id=="onetime") {
            qty.setAttribute("dest", "consult-sub" + vm_num + item_num);
            qty.id = "consult-qty" + vm_num + item_num;
            qty.setAttribute("name", qty.id);

        }
        else {
            qty.setAttribute("dest", id + "-sub" + vm_num + item_num);
            qty.id = id + "-qty" + vm_num + item_num;
            qty.setAttribute("name", qty.id);

        }
        qty.setAttribute("num", vm_num);
        // qty.price = price;
        qty.setAttribute("price", price);
        qty.setAttribute("size", 5);
        //qty.setAttribute("typeEstimate", typeEstimate);
        qty.typeEstimate = typeEstimate;
        var getEstimate = "getEstimate('" + qty.typeEstimate + "','" + qty.id + "', this.getAttribute('price') , this.getAttribute('dest'), this.getAttribute('num'),'" + category + "')";
        qty.setAttribute("onchange", getEstimate);

        // if its system management, don't display any units besides the quantity
        if (id == "pa") {}
        // if there's a default unit, display it beside the quantity
        else if (default_unit !=0) {
            cell.appendChild(document.createTextNode("\u00a0\u00a0" + default_unit));
        }
        // dropdown menu with different units
        else {
            var str_units = document.createElement("select");
            str_units.name = "units" + vm_num + item_num;
            str_units.value = "TB";
            str_units.price = price;
            str_units.title = "Choose the units";
            str_units.setAttribute("num", vm_num);
            str_units.setAttribute("item_num", item_num);
            if (typeEstimate == "silver") typeUnits = "str";
            else if (typeEstimate == "gold") typeUnits = "gold";
            else if (typeEstimate == "pr-str") typeUnits = "pr";
            else typeUnits = "cl";
            str_units.setAttribute("typeUnits", typeUnits );
            str_units.id = "units" + vm_num + item_num;
            /* add all unit options */
            option = new Option("TB", "TB");
            option.id = "TB" + vm_num + item_num;
            str_units.appendChild(option);
            option = new Option("GB", "GB", false, false);
            option.id = "GB" + vm_num + item_num;
            str_units.appendChild(option);
            str_units.setAttribute("value","TB");
            str_units.setAttribute("vm_type_qty", id + "-qty");
            var onchange = "changeUnits('" + str_units.getAttribute("vm_type_qty") + "', '" + str_units.id + "',this.value," + str_units.getAttribute("num") + "," + str_units.getAttribute("item_num") + ",'" + str_units.getAttribute("typeUnits") + "')";
            str_units.setAttribute("onchange", onchange);
            cell.appendChild(str_units);
        }
    }


    /******** Cost ********/
    var cell = row.insertCell(4);
    var cost = document.createElement("input");
    cost.setAttribute("type", "text");
    cost.setAttribute("name", id + "-sub" + vm_num + item_num);
    if (id == "st-vm" || id == "hs-vm"){
        cost.className = "vm-sub vm-sub" + vm_num;
        cost.id = id + "-sub" + vm_num + item_num;
    }
    else if (id == "pr-str"){
        cost.className = "cl-str vm-sub" + vm_num;
        cost.id = id + "-sub" + vm_num + item_num;
        cost.id = id + "-sub vm-sub" + vm_num;
    }
    else if (id == "onetime") {
        cost.className = "onetime vm-sub" +vm_num;
        cost.setAttribute("name", "consult-sub" + vm_num + item_num);
        cost.id = "consult-sub" + vm_num + item_num;
    }
    else {
        cost.className = id + "-sub vm-sub" + vm_num;
        cost.id = id + "-sub" + vm_num + item_num;
    }
    cost.className += " price-align";
    // base vm has static cost
    if ((id == "st-vm" || id == "hs-vm") && item_num == 1) {
        cost.value = "$" + price;
    }
    cost.setAttribute("size", 20);
    cost.setAttribute("readonly", "readonly");
    cell.appendChild(cost);
    cell.setAttribute("colspan", "1");

}

/* Function name: addSubtotalRow
 * Parameters:
 * Description: This is a helper function for addProduct which will generate the subtotal row
 */

function addSubtotalRow(table, vm_num) {
    var row = table.insertRow(++rowCount);
    var cell = row.insertCell(0);
    cell.setAttribute("colspan", "1");
    // cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
    var cell = row.insertCell(1);
    var subtext = document.createTextNode("Subtotal:\u00a0\u00a0");
    cell.appendChild(subtext);
    cell.setAttribute("colspan", "3");
    cell.className += " ";
    cell.setAttribute("style", "text-align: left;");


    var cell = row.insertCell(2);
    var vmsubtotal = document.createElement("input");
    vmsubtotal.setAttribute("type", "text");
    vmsubtotal.setAttribute("size", 20);
    vmsubtotal.setAttribute("readonly", "readonly");
    cell.appendChild(vmsubtotal);
    // cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;")
    cell.setAttribute("colspan", "1");
    vmsubtotal.setAttribute("style", "");
    vmsubtotal.id = "vm-sub" + vm_num + "-total";
    vmsubtotal.setAttribute("name", vmsubtotal.id);
}

/* Function name: addProduct
 * Parameters: id - type of product being added
 * Description: This function adds a product to the table. The rows are different
                depending on the product.
 */
function addProduct(id)
{
    item_num = 0; //reset item_num, specific index referring to "Items" under "Specifications"
    // switch statement necessary to determine which table to add the product to
    switch (id) {
        case 'ST_VM':
        case 'HS_VM':
            var table = document.getElementById('vm-table');
            // var order = 1; //keep track of ordering in the totals table
            break;
        case 'CL_STR':
        case 'PR_STR':
        case 'PR_CON':
            var table = document.getElementById('str-table');
            // var totals = document.getElementById('str-table-totals');
            break;
        case 'DESK':
        case 'SYSTEMS':
        case 'STORAGE':
        case 'RECUR_DESK':
        case 'RECUR_SYSTEMS':
        case 'RECUR_STORAGE':
            var table = document.getElementById('consult-table');
            break;
        case 'SITE':
        case 'SUPPORT':
            var table = document.getElementById('sp-table');
            break;
        case 'SYS_MAN':
            var table = document.getElementById('pa-table');
            break;
        case 'RAW':
            var table = document.getElementById('backup-table');
            break;
        case 'CL_COMPUTE':
            var table = document.getElementById('cl-compute-table');
            break;
    }

    if (numProducts++ === 0) {
        document.getElementById('totals').removeAttribute("hidden");
    }
    totals = document.getElementById("totals");
    rowTotals = totals.rows.length;

    // insert totals table only one time when the first vm is added
    // this is the subtotals at the very bottom
    if (numProducts === 1) {
        row1 = totals.insertRow(rowTotals);
        row1.id = "monthlytotals";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        // cell.setAttribute("width", "654");
        cell.setAttribute("style", "text-align: right; font-weight: bold; padding-left: 340px");
        var monthly = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Monthly Total:")
        cell.appendChild(monthly);
        cell = row1.insertCell(1);
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        cell.appendChild(subtotal);
        cell.setAttribute("style", "font-weight: bold");
        cell.setAttribute("colspan", "1");
        subtotal.id = "sub-total";
        subtotal.setAttribute("name", subtotal.id);
        subtotal.setAttribute("size", 20);
        document.getElementById(subtotal.id).setAttribute("readonly", "readonly");

        row = totals.insertRow(++rowTotals);
        cell = row.insertCell(0);
        row.id = "onetimetotals";
        cell.setAttribute("colspan", "1");
        // cell.setAttribute("width", "654");
        cell.setAttribute("style", "text-align: right; font-weight: bold");
        var onetime = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0One-time Fees:")
        cell.appendChild(onetime);
        cell = row.insertCell(1);
        var fees = document.createElement("input");
        fees.setAttribute("type", "text");
        cell.appendChild(fees);
        cell.setAttribute("style", "font-weight: bold");
        cell.setAttribute("colspan", "1");
        fees.id = "onetime-total";
        fees.setAttribute("name", fees.id);
        fees.setAttribute("size", 20);
        fees.setAttribute("value", "N/A");
        document.getElementById(fees.id).setAttribute("readonly", "readonly");
    }


    rowCount = table.rows.length; // current number of rows in table

    // If there is only one row in the table (the totals row), then hide the whole table
    if (rowCount - 1 === 0) {
        table.removeAttribute("hidden");
        // totals.removeAttribute("hidden");
    }

    /* ALL OF THIS IS FOR VM'S!!! */
    if (id == 'ST_VM' || id == 'HS_VM') {
        ++vm_num;

        if(id == 'ST_VM') {
            /* set price array to ST_VM_UC */
            price_vm = PRICE_ST_VM_UC;
            /* prefix used for all id's */
            id_prefix = "st-vm";
            slice_text = "Standard VM";

        } else if (id == 'HS_VM') {
            price_vm = PRICE_HS_VM_UC;
            id_prefix = "hs-vm";
            slice_text = "High Security VM";
        }
        addTitleOptions(table, slice_text, "ROWS_" + id, id) ;


        /* Adding Items Lines*/

        addItemLine(table, "Base-VM", price_vm[0], id_prefix, vm_num, item_num++, 0, 0, 0, 0, 0, 0);
        addItemLine(table, "Additional CPUs", price_vm[1], id_prefix, vm_num, item_num++, "Enter a whole number 0 to 11", "cpu", id, "/CPU", "CPU(s)", 0);
        addItemLine(table, "Additional RAM", price_vm[2], id_prefix, vm_num, item_num++, "Enter a whole number 0 to 190", "mem", id, "/GB", "GB", 0 );
        if (id == "ST_VM")
            addItemLine(table, "Additional 'Silver' Storage", price_vm[3], id_prefix, vm_num, item_num++, "Minimum value 0.001TB (1GB). Max value 30TB (30000GB)", "silver", id, "/TB", 0, 1);
        addItemLine(table, "Additional 'Gold' Storage", price_vm[4], id_prefix, vm_num, item_num++, "Min value 0.001TB (1GB). Max value 4.9TB (4900GB)", "gold", id, "/TB", 0,  1);
        addItemLine(table, "Extra Snapshots", price_vm[5], id_prefix, vm_num, item_num++, 0, 0, id, 0, 0, 0);
        if (id == "HS_VM") {
            addItemLine(table, "System Management", 0, id_prefix, vm_num, item_num++,  0, 0, 0, 0, 0);
        }

        addSubtotalRow(table, vm_num);


        //remove duplicate of sub total row when there are two VM's
        if (document.getElementById("vm-sub-total-row") != null) {
            var elem  = document.getElementById("vm-sub-total-row");
            elem.parentNode.removeChild(elem);
            --rowTotals;
        }

        //create VM Services Total at the top of totals table

        row1 = totals.insertRow(0);
        row1.id = "vm-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0VM Services Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "vm-sub-total";
        subtotal.className = "sub";
        subtotal.name = "vm-sub-total";
        subtotal.setAttribute("readonly", "readonly");
        cell.appendChild(subtotal);
        document.getElementById("vm-sub" + vm_num + "-total").setAttribute("readonly", "readonly");
        document.getElementById("vm-sub" + vm_num + "-total").setAttribute("value", "$" + price_vm[0]);
        sub('vm-sub');
        sub('sub');

    }

    /*  CLOUD STORAGES */
    else if (id == 'CL_STR' || id == 'PR_STR' || id == 'PR_CON') {
        ++vm_num;
        var id_prefix = "str";

        if (id == "CL_STR") {
            addTitleOptions(table, "Cloud Storage", "ROWS_" + id, id);
            addItemLine(table, "Storage", PRICE_CLOUD_STORAGE_UC, id_prefix, vm_num, item_num++, "Min value 1TB", "cl-str", id, "/TB", 0, 1);
        }
        else if (id== 'PR_STR') {
            addTitleOptions(table, "Project Storage", "ROWS_" + id, id);
            addItemLine(table, "Storage", PRICE_PROJECT_STORAGE_UC, id_prefix, vm_num, item_num++, "Minimum 1TB (1000GB). Enter in multiples of 0.5TB (500GB)", "pr-str", id, "/TB", 0, 1);
        }
        else {
            addTitleOptions(table, "Project Condo", "ROWS_" + id, id);
            addItemLine(table, "Storage", PRICE_PROJECT_CONDO_UC, id_prefix, vm_num, item_num++, "", "str", id, "/unit", "unit(s)", 0);
        }

        addSubtotalRow(table, vm_num);

        //remove duplicate of sub total row when there are multiple storage items
        if (document.getElementById("str-sub-total-row") != null) {
            var elem  = document.getElementById("str-sub-total-row");
            elem.parentNode.removeChild(elem);
            --rowTotals;
        }

        //create Storage Total at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "str-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Storage Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "str-sub-total";
        subtotal.className = "sub";
        subtotal.name = "str-sub-total";
        subtotal.setAttribute("readonly", "readonly");

        cell.appendChild(subtotal);

        sub('str-sub');
        sub('sub');
    } /* END CLOUD STORAGE CODE */

    /* BEGIN SYSTEM MANAGEMENT */
    else if (id == 'SYS_MAN') {
        ++vm_num;
        id_prefix = "pa";
        addTitleOptions(table, "System Management", "ROWS_" + id, id);

        addItemLine(table, "System", PRICE_SYSTEM_MANAGEMENT_UC[0], id_prefix, vm_num, item_num++, "", "pa-sub", id, 0, 0, 0);

        row = table.insertRow(++rowCount);
        cell = row.insertCell(0);
        cell.setAttribute("colspan", "1");

        cell = row.insertCell(1);
        cell.setAttribute("style", "font-weight: bold");
        cell.appendChild(document.createTextNode("\u00a0\u00a0\u00a0\u00a0Surcharge for"));

        addItemLine(table, "Non-recommended hardware", PRICE_SYSTEM_MANAGEMENT_UC[1], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, " ", " ", 0);

        addItemLine(table, "Hardware without build-in OS support", PRICE_SYSTEM_MANAGEMENT_UC[2], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, 0, 0, 0);

        addItemLine(table, "Each attached storage array", PRICE_SYSTEM_MANAGEMENT_UC[3], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, 0, 0, 0);

        addItemLine(table, "Non-OS vendor software", PRICE_SYSTEM_MANAGEMENT_UC[4], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, 0, 0, 0);

        addItemLine(table, "Local administration access", PRICE_SYSTEM_MANAGEMENT_UC[5], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, 0, 0, 0);

        addItemLine(table, "24/7 system monitoring and support", PRICE_SYSTEM_MANAGEMENT_UC[5], id_prefix, vm_num, item_num++, "To receive this option, enter 1", "pa-sub", id, 0, 0, 0);

        // add line manually
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


        //remove duplicate of sub total row when there are multiple storage items
        if (document.getElementById("pa-sub-total-row") != null) {
            var elem  = document.getElementById("pa-sub-total-row");
            elem.parentNode.removeChild(elem);
            --rowTotals;
        }

        addSubtotalRow(table, vm_num);

        //create sys man  at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "pa-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Physical Administration Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "pa-sub-total";
        subtotal.className = "sub";
        subtotal.name = "pa-sub-total";
        subtotal.setAttribute("readonly", "readonly");
        cell.appendChild(subtotal);

        sub('pa-sub');
        sub('sub');
    } /* END SYSTEM MANAGEMENT */

    /* BEGIN CONSULTING SERVICES */
    else if (id == 'DESK' || id == 'SYSTEMS' || id == 'STORAGE' || id == 'RECUR_DESK' || id == 'RECUR_SYSTEMS' || id == 'RECUR_STORAGE') {
        id_prefix = "consult";
        ++vm_num;

        vm_type_sub = "consult-sub"; //for sub id
        vm_type_price = "consult-price"; //for each price id
        vm_type_qty = "consult-qty"; //for each input qty id
        var consult_price_val;
        var prod_name;
        var numRowsRemove;

        // add appropriate title, options and specifications
        if (id == 'DESK') {
            numRowsRemove = ROWS_DESK;
            addTitleOptions(table, "Consulting Services - Desktop", "ROWS_" + id, id);
            addItemLine(table, "Consulting Services - Desktop", PRICE_DESKTOP_SERVICES_UC, "onetime", vm_num, item_num++, "Number of hours in multiples of tenths (One-time consulting fee)", id_prefix, id, "/hr", "hr(s)", 0);
        } else if (id == 'SYSTEMS') {
            consult_price_val = PRICE_SYSTEMS_SERVICES_UC;
            numRowsRemove = ROWS_SYSTEMS;
            addTitleOptions(table, "Consulting Services - Systems", "ROWS_" + id, id);
            addItemLine(table, "Consulting Services - System", PRICE_SYSTEMS_SERVICES_UC, "onetime", vm_num, item_num++, "Number of hours in multiples of tenths (One-time consulting fee)", id_prefix, id, "/hr", "hr(s)", 0);
        } else if (id == 'STORAGE') {
            numRowsRemove = ROWS_STORAGE;
            addTitleOptions(table, "Consulting Services - Storage", "ROWS_" + id, id);
            addItemLine(table, "Consulting Services - Storage", PRICE_STORAGE_SERVICES_UC, "onetime", vm_num, item_num++, "Number of hours in multiples of tenths (One-time consulting fee)", id_prefix, id, "/hr", "hr(s)", 0);
        } else if (id == 'RECUR_DESK') {
            numRowsRemove = ROWS_RECUR_DESK;
            addTitleOptions(table, "Recurring Consulting Services - Desktop", "ROWS_" + id, id);
            addItemLine(table, "Recurring Consulting Services - Desktop", PRICE_RECUR_DESKTOP_UC, "consult", vm_num, item_num++, "Number of hours in multiples of tenths (monthly consulting fee)", "recur", "DESK", "/hr", "hr(s)", 0);
        } else if (id == 'RECUR_SYSTEMS') {
            numRowsRemove = ROWS_RECUR_SYSTEMS;
            addTitleOptions(table, "Recurring Consulting Services - Systems", "ROWS_" + id, id);
            addItemLine(table, "Recurring Consulting Services - Systems", PRICE_RECUR_SYSTEMS_UC, "consult", vm_num, item_num++, "Number of hours in multiples of tenths (monthly consulting fee)", "recur", "SYSTEMS", "/hr", "hr(s)", 0);
        } else if (id == 'RECUR_STORAGE') {
            numRowsRemove = ROWS_RECUR_STORAGE;
            addTitleOptions(table, "Recurring Consulting Services - Storage", "ROWS_" + id, id);
            addItemLine(table, "Recurring Consulting Services - Storage", PRICE_RECUR_STORAGE_UC, "consult", vm_num, item_num++, "Number of hours in multiples of tenths (monthly consulting fee)", "recur", "STORAGE", "/hr", "hr(s)", 0);

        }
        addSubtotalRow(table, vm_num);


        //remove duplicate of sub total row when there are multiple storage items
        if (document.getElementById("consult-sub-total-row") != null) {
            var elem  = document.getElementById("consult-sub-total-row");
            elem.parentNode.removeChild(elem);
            --rowTotals;
        }

        //create Storage Total at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "consult-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Consulting Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "consult-sub-total";
        if (id == 'RECUR_DESK' || id == 'RECUR_SYSTEMS' || id == "RECUR_STORAGE") {
            subtotal.className = "sub";
        }
        else subtotal.className = "onetime";
        subtotal.name = "consult-sub-total";
        subtotal.setAttribute("readonly", "readonly");

        cell.appendChild(subtotal);

        if (id == 'RECUR_DESK' || id == 'RECUR_SYSTEMS' || id == "RECUR_STORAGE") {
            sub('sub');
        }
        sub('consult-sub');


    } /* END CONSULTING SERVICES */

    /* BEGIN SHAREPOINT SERVICES */
    else if (id == 'SITE') {
        ++vm_num;
        vm_type_sub = "share-sub"; //for sub id
        vm_type_price = "share-price"; //for each price id
        vm_type_qty = "share-qty"; //for each input qty id
        var share_price = [PRICE_SHAREPOINT_SITES_UC, PRICE_ADD_DA_STORAGE_UC, PRICE_CONSULTATION_SUPPORT_UC];
        var prod_name = "SharePoint Site";
        var unit = "/month";
        var numRows = ROWS_SHAREPOINT_SITES;

        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        cell.setAttribute("width", "20");
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
        cell.setAttribute("width", "220");
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
        os.setAttribute("num", vm_num);
        os.setAttribute("title", "Choose client location");
        os.setAttribute("value", "UC");
        os.setAttribute("service", id);
        os.setAttribute("onchange", "changePrices(this.value, this.getAttribute('service'), this.getAttribute('num'))");

        option = new Option("UC", "UC", false, false);
        option.id = "UC" + vm_num;
        os.appendChild(option);
        option = new Option("External", "External", false, false);
        option.id = "External" + vm_num;
        os.appendChild(option);
        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + vm_num;

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
        var sp_price = document.createTextNode("$" + share_price[0] + unit);
        cell.id = vm_type_price + vm_num + (++item_num);
        cell.setAttribute("share_price", share_price);
        cell.appendChild(sp_price);
        cell.setAttribute("colspan", "1");

        var cell = row.insertCell(3);

        var sp_qty = document.createElement("input");
        sp_qty.setAttribute("type", "text");
        sp_qty_in = vm_type_qty + vm_num + item_num;
        sp_sub_out = vm_type_sub + vm_num + item_num;
        cell.appendChild(sp_qty);
        cell.setAttribute("colspan", "1");
        sp_qty.id = sp_qty_in;
        sp_qty.className += " sp_qty userinput";
        sp_qty.setAttribute("dest", "" + sp_sub_out);
        sp_qty.setAttribute("num", vm_num);
        sp_qty.setAttribute("share_price", share_price[0]);
        sp_qty.setAttribute("name", sp_qty.id);
        sp_qty.setAttribute("title", "Whole numbers only");
        sp_qty.setAttribute("size", 5);
        sp_qty.setAttribute("onchange", "getEstimate('sp', this.id, this.getAttribute('share_price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");

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

        var row2 = table.insertRow(++rowCount);
        var cell = row2.insertCell(0);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(1);
        var additional_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Add'l 25 GB of DA site storage w/backup");
        additional_text.className += " sp-additional";
        cell.appendChild(additional_text);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(2);
        var additional_price = document.createTextNode("$" + share_price[1] + "/month");
        cell.id = vm_type_price + vm_num + (++item_num);
        cell.setAttribute("share_price", share_price[1]);
        cell.appendChild(additional_price);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(3);
        var additional_qty = document.createElement("input");
        additional_qty.setAttribute("type", "text");
        additional_qty_in = vm_type_qty + vm_num + item_num;
        additional_sub_out = vm_type_sub + vm_num + item_num;
        cell.appendChild(additional_qty);
        cell.setAttribute("colspan", "1");
        additional_qty.id = additional_qty_in;
        additional_qty.className += " additional_qty userinput";
        additional_qty.setAttribute("dest", "" + additional_sub_out);
        additional_qty.setAttribute("num", vm_num);
        additional_qty.setAttribute("share_price", share_price[1]);
        additional_qty.setAttribute("name", additional_qty.id);
        additional_qty.setAttribute("size", 5);
        additional_qty.setAttribute("onchange", "getEstimate('additional-sp', this.id, this.getAttribute('share_price'), this.getAttribute('dest'),  this.getAttribute('num'), 'SITE')");

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



        var row4 = table.insertRow(++rowCount);

        var cell = row4.insertCell(0);
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
        cell.setAttribute("colspan", "1");

        var cell = row4.insertCell(1);
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
        var subtext = document.createTextNode("Subtotal:");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row4.insertCell(2);
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
        var spsubtotal = document.createElement("input");
        spsubtotal.setAttribute("type", "text");
        cell.appendChild(spsubtotal);
        cell.setAttribute("colspan", "1");
        spsubtotal.id = "vm-sub" + vm_num + "-total";
        //spsubtotal.className = "sub";
        spsubtotal.setAttribute("name", spsubtotal.id);
        spsubtotal.setAttribute("size", 20);
        document.getElementById(spsubtotal.id).setAttribute("readonly", "readonly");

        //create sharepoint total at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "sp-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0SharePoint Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "sp-sub-total";
        // subtotal.className = "sub";
        subtotal.name = "sp-sub-total";
        subtotal.setAttribute("readonly", "readonly");
        cell.appendChild(subtotal);

        sub('sp-sub');
        sub('sub');
    } /* END SHAREPOINT SERVICES */



    /* BEGIN COMMVAULT BACKUP */
    else if (id == 'RAW') {
        ++vm_num;
        vm_type_sub = "comm-sub"; //for sub id
        vm_type_price = "comm-price"; //for each price id
        vm_type_qty = "comm-qty";
        raw_price_val = PRICE_RAW_BACKUP_DATA_UC;
        full_price_val = PRICE_FULL_BACKUP_UC;
        diff_price_val = PRICE_DIFFERENTIAL_INCREMENTAL_UC;

        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        cell.setAttribute("width", "20");
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
        cell.setAttribute("width", "220");
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
        cell.setAttribute("colspan", "1");
        var os_text = document.createTextNode("\u00a0\u00a0\u00a0\u00a0Affiliation:");
        cell.appendChild(os_text);

        var cell = row.insertCell(2);
        var os = document.createElement("select");
        os.setAttribute("name", "affiliation");
        os.setAttribute("title", "Choose client location");
        os.setAttribute("value", "UC");
        os.setAttribute("num", vm_num);
        os.setAttribute("onchange", "changePrices(this.value, 'COMMVAULT', this.getAttribute('num'))");

        option = new Option("UC", "UC", false, false);
        option.id = "UC" + vm_num;
        os.appendChild(option);

        option = new Option("External", "External", false, false);
        option.id = "External" + vm_num;
        os.appendChild(option);

        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + vm_num;

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
        cell.id = vm_type_price + vm_num + (++item_num);
        cell.setAttribute("value", raw_price_val);
        cell.appendChild(raw_price);
        cell.setAttribute("colspan", "1");

        var cell = row2.insertCell(3);
        var raw_qty = document.createElement("input");
        raw_qty.setAttribute("type", "text");
        raw_qty_in = vm_type_qty + vm_num + item_num;
        raw_sub_out = vm_type_sub + vm_num + item_num;
        cell.appendChild(raw_qty);
        cell.setAttribute("colspan", "1");
        raw_qty.id = raw_qty_in;
        raw_qty.className += " raw_qty userinput";
        raw_qty.setAttribute("dest", "" + raw_sub_out);
        raw_qty.setAttribute("num", vm_num);
        raw_qty.setAttribute("comm-price", raw_price_val);
        raw_qty.setAttribute("name", raw_qty.id);
        raw_qty.setAttribute("size", 5);
        raw_qty.setAttribute("onchange", "getEstimate('raw', this.id, this.getAttribute('comm-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");
        var blanknode = document.createTextNode("\u00a0");
        cell.appendChild(blanknode);


        var raw_units = document.createElement("select");
        raw_units.setAttribute("name", "raw-units" + vm_num + item_num);
        raw_units.setAttribute("value", "TB");
        raw_units.setAttribute("title", "Choose the units");
        raw_units.setAttribute("num", vm_num);
        raw_units.id = "raw-units" + vm_num + item_num;

        /* add all unit options */
        option = new Option("TB", "TB", false, false);
        option.id = "TB" + vm_num + item_num;
        raw_units.appendChild(option);

        option = new Option("GB", "GB", false, false);
        option.id = "GB" + vm_num + item_num;
        raw_units.appendChild(option);
        raw_units.setAttribute("item_num", item_num);
        raw_units.setAttribute("onchange", "changeUnits('raw_units', this.id, this.value ,this.getAttribute('num'), this.getAttribute('item_num'), 'raw')");
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
        cell.setAttribute("value", full_price_val);
        cell.id = vm_type_price + vm_num + (++item_num);
        cell.appendChild(full_price);
        cell.setAttribute("colspan", "1");

        var cell = row3.insertCell(3);
        var full_qty = document.createElement("input");
        full_qty.setAttribute("type", "text");
        full_qty_in = vm_type_qty + vm_num + item_num;
        full_sub_out = vm_type_sub + vm_num + item_num;
        cell.appendChild(full_qty);
        cell.setAttribute("colspan", "1");
        full_qty.id = full_qty_in;
        full_qty.className += " full_qty userinput";
        full_qty.setAttribute("dest", "" + full_sub_out);
        full_qty.setAttribute("num", vm_num);
        full_qty.setAttribute("comm-price", full_price_val);
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
        cell.setAttribute("value", diff_price_val);
        cell.id = vm_type_price + vm_num + (++item_num);
        cell.appendChild(diff_price);
        cell.setAttribute("colspan", "1");

        var cell = row6.insertCell(3);
        var diff_qty = document.createElement("input");
        diff_qty.setAttribute("type", "text");
        diff_qty_in = vm_type_qty + vm_num + item_num;
        diff_sub_out = vm_type_sub + vm_num + item_num;
        cell.appendChild(diff_qty);
        cell.setAttribute("colspan", "1");
        diff_qty.id = diff_qty_in;
        diff_qty.className += " diff_qty userinput";
        diff_qty.setAttribute("dest", "" + diff_sub_out);
        diff_qty.setAttribute("num", vm_num);
        diff_qty.setAttribute("comm-price", diff_price_val);
        diff_qty.setAttribute("name", diff_qty.id);
        diff_qty.setAttribute("size", 5);
        diff_qty.setAttribute("readonly", "readonly");
        diff_qty.setAttribute("onchange", "getEstimate('diff', this.id, this.getAttribute('comm-price'), this.getAttribute('dest'),  this.getAttribute('num'), 'RAW')");

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
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
        cell.setAttribute("colspan", "1");

        var cell = row10.insertCell(1);
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3; ");
        var subtext = document.createTextNode("Subtotal");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " pad-bottom";

        var cell = row10.insertCell(2);
        cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3; font-weight: bold");
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        cell.appendChild(vmsubtotal);
        cell.setAttribute("colspan", "1");
        vmsubtotal.id = "vm-sub" + vm_num + "-total";
        //vmsubtotal.className = "sub";
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        vmsubtotal.setAttribute("size", 20);

        document.getElementById(vmsubtotal.id).setAttribute("readonly", "readonly");

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

        //create comm vault at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "backup-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Backup Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "backup-sub-total";
        subtotal.className = "sub";
        subtotal.name = "backup-sub-total";
        subtotal.setAttribute("readonly", "readonly");
        cell.appendChild(subtotal);
        sub('backup-sub');
        sub('sub');

    } /* END COMMVAULT BACKUP */

    /* BEGIN CLOUD COMPUTING SERVICES */
    else if (id == 'CL_COMPUTE') {
        ++vm_num;
        prod_name = "Cloud Compute Units";
        row1 = table.insertRow(rowCount);
        row1.id = "row" + vm_num;
        var cell = row1.insertCell(0);
        cell.setAttribute("width", "20");
        cell.setAttribute("colspan", "1");
        var remove = document.createElement("button");
        var remove_text = document.createTextNode("-");
        remove.appendChild(remove_text);
        cell.appendChild(remove);
        remove.className = "remove-button";
        remove.setAttribute("value", "-");
        remove.setAttribute("rownumber", "row" + vm_num);
        remove.setAttribute("title", "Remove Service");
        remove.setAttribute("numRows", ROWS_CLOUD_COMPUTE);
        remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'), this.getAttribute('numRows'), 'CL_COMPUTE')");

        var cell = row1.insertCell(1);
        cell.setAttribute("width", "220");
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
        os.setAttribute("vm_num", vm_num);
        os.setAttribute("onchange", "changePrices(this.value, 'CL_COMPUTE', this.getAttribute('vm_num'))");

        option = new Option("UC", "UC", false, false);
        option.id = "UC" + vm_num;
        os.appendChild(option);

        option = new Option("External", "External", false, false);
        option.id = "External" + vm_num;
        os.appendChild(option);

        cell.appendChild(os);
        cell.setAttribute("colspan", "2");
        os.id = "os" + vm_num;

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
            cell.id = "cl-compute-price" + vm_num + item_num;
            var cell = row.insertCell(3);
            var cl_compute_instances = document.createElement("input");
            cl_compute_instances.setAttribute("type", "text");
            cl_compute_instances_in = "cl-compute-instances" + vm_num + item_num;
            cl_compute_sub_out = "cl-compute-sub" + vm_num + item_num;
            cell.appendChild(cl_compute_instances);
            cell.setAttribute("colspan", "1");
            cl_compute_instances.id = cl_compute_instances_in;
            cl_compute_instances.className += " cl_compute_instances userinput";
            cl_compute_instances.setAttribute("dest", "" + cl_compute_sub_out);
            cl_compute_instances.setAttribute("num", vm_num);
            cl_compute_instances.setAttribute("item-num", item_num);
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
            cl_compute_sub.className = "sub cl-compute-sub vm-sub" + vm_num;
            // sub('cl-compute-sub');
            // sub('sub');

            var row = table.insertRow(++rowCount);
            var cell1 = row.insertCell(0);
            cell1.setAttribute("colspan", "1");
            var cell2 = row.insertCell(1);
            cell2.id = "flavor-specifications" + vm_num + item_num;
            if (i<10) {
                var cpu = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0" + vcpu[i] + "vCPU, " + memcount[i] + "Memory");
                cell2.appendChild(cpu);
                cell2.setAttribute("style", "color:#fff");
            }
            var cell3 = row.insertCell(2);
            cell3.setAttribute("colspan", "1");
            var cell4 = row.insertCell(3);
            cell4.setAttribute("colspan", "1");
            var cl_compute_hours = document.createElement("input");
            cl_compute_hours.setAttribute("type", "text");
            cl_compute_hours_in = "cl-compute-hours" + vm_num + item_num;
            cell4.appendChild(cl_compute_hours);
            cell4.setAttribute("colspan", "1");
            cl_compute_hours.id = cl_compute_hours_in;
            cl_compute_hours.className += " cl_compute_hours userinput";
            cl_compute_hours.setAttribute("dest", "" + cl_compute_sub_out);
            cl_compute_hours.setAttribute("num", vm_num);
            cl_compute_hours.setAttribute("item-num", item_num);
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
        } //end for loop to add all items

        var row8 = table.insertRow(++rowCount);
        var cell = row8.insertCell(0);
        cell.setAttribute("colspan", "1");
        // cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;");
        var cell = row8.insertCell(1);
        var subtext = document.createTextNode("Subtotal:\u00a0\u00a0");
        cell.appendChild(subtext);
        cell.setAttribute("colspan", "3");
        cell.className += " ";
        cell.setAttribute("style", "text-align: left;");


        var cell = row8.insertCell(2);
        var vmsubtotal = document.createElement("input");
        vmsubtotal.setAttribute("type", "text");
        vmsubtotal.setAttribute("size", 20);
        cell.appendChild(vmsubtotal);
        // cell.setAttribute("style", "border-bottom: 1px solid #d3d3d3;")
        cell.setAttribute("colspan", "1");
        vmsubtotal.setAttribute("style", "");
        vmsubtotal.id = "vm-sub" + vm_num + "-total";
        vmsubtotal.setAttribute("name", vmsubtotal.id);
        vmsubtotal.setAttribute("readonly", "readonly");


        //create cl compute at the top of totals table
        row1 = totals.insertRow(0);
        row1.id = "cl-compute-sub-total-row";
        var cell = row1.insertCell(0);
        cell.setAttribute("colspan", "1");
        var name = document.createTextNode("\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Cloud Compute Total:");
        cell.setAttribute("style", "text-align: right;")
        cell.appendChild(name);
        var cell = row1.insertCell(1);
        cell.setAttribute("colspan", "1");
        var subtotal = document.createElement("input");
        subtotal.setAttribute("type", "text");
        subtotal.setAttribute("size", 20);
        subtotal.id = "cl-compute-sub-total";
        // subtotal.className = "sub";
        subtotal.name = "cl-compute-sub-total";
        subtotal.setAttribute("readonly", "readonly");
        cell.appendChild(subtotal);
        sub('cl-compute-sub');
        sub('sub');
    }
    // console.log(numProducts);
    // if (numProducts == 1) {
    //     row1 = totals.insertRow(0);
    //     var cell = row1.insertCell(0);
    //     cell.setAttribute("colspan", "5");
    // }

} /* END ADDPRODUCT FUNCTION */
