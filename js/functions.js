//http://springtricks.blogspot.com/2013/10/how-to-download-charts-to-pdf-formate.html
$(document).ready(function() {
    sub('vm-sub');
    
    // THIS IS PERFECTLY FINE!!! 
    /*$('#pdfbutton').click(function() {
        var filename = prompt("Name the file: ");
        html2canvas($('#quote-table'), {logging: true}).then(function(canvas) 
        {
            var imgData = canvas.toDataURL();
            var doc = new jsPDF('p', 'pt', 'letter');
            doc.setFontStyle('bold');
            doc.text(20, 15, "Your Quote");
            doc.addImage(imgData, 'JPEG', 20, 25);
            //doc.output('dataurl');
            doc.save(filename + '.pdf');
            //document.body.appendChild(canvas);
                            
        });
    }); */
    
    //EXPERIMENTAL
    $("#pdfbutton").click(function () {
        var filename = prompt("Name the file: ");
        html2canvas($('#quote-table'), { background: '#ff0000' }).then(function(canvas)
        {
            var imageData = canvas.toDataURL("image/jpeg");
            var image = new Image('p', 'pt', 'letter');
            image = Canvas2Image.convertToJPEG(canvas);
            var doc = new jsPDF();
            doc.addImage(imageData, 'JPEG', 12, 10);
            var croppingYPosition = 1095;
            count = (image.height) / 1095;

            for (var i =1; i < count; i++) {
                doc.addPage();
                var sourceX = 0;
                var sourceY = croppingYPosition;
                var sourceWidth = image.width;
                var sourceHeight = 1095;
                var destWidth = sourceWidth;
                var destHeight = sourceHeight;
                var destX = 0;
                var destY = 0;
                var canvas1 = document.createElement('canvas');
                canvas1.setAttribute('height', destHeight);
                canvas1.setAttribute('width', destWidth);                         
                var ctx = canvas1.getContext("2d");
                ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
                var image2 = new Image();
                image2 = Canvas2Image.convertToJPEG(canvas1);
                image2Data = image2.src;
                doc.addImage(image2Data, 'JPEG', 12, 10);
                croppingYPosition += destHeight;     
                console.log("hellO");
            } 
            
            doc.save(filename);
        });
    });
});

// keep track of the number of services in the quote
            var vm_num = 0; //number of VM's ordered
            var hs_num = 0; //number of HS VM's ordered
            var row1, cell, rowCount;
            /* list of variables for input/output */
            var cpu_qty_in, cpu_sub_out, mem_qty_in, mem_sub_out, str_qty_in, str_sub_out, san_qty_in, san_sub_out;
            
            /* options variable for dropdown menus */
            var option; 
            
            /* other variables and stuff */
            var slice_text;
            var slice_price;
            var cpu_price_val;
            var mem_price_val;
            var str_price_val = 49.42;
            var san_price_val = 125.00;

            function addProduct(id)
            {
                /* user has chosen standard vm */
                if(id == 'ST_VM')
                {
                    slice_text = "Standard VM";
                    slice_price = 69.75;
                    cpu_price_val = 12.94;
                    mem_price_val = 12.94;
                }
                
                else if(id == 'HS_VM')
                {
                    slice_text = "High Security VM";
                    slice_price = 93.75;
                    cpu_price_val = 15.61;
                    mem_price_val = 15.61;
                }
                
                var table = document.getElementById('quote-table');
                rowCount = table.rows.length;
                ++vm_num; //increase number of vm's
                row1 = table.insertRow(rowCount);
                row1.id = "row" + vm_num;
                console.log("Just created " + row1.rowIndex + " row");
                var cell1 = row1.insertCell(0);
                var remove = document.createElement("button");
                var remove_text = document.createTextNode("-");
                remove.appendChild(remove_text);
                cell1.appendChild(remove);
                var name = document.createTextNode(slice_text);                      
                cell1.appendChild(name);
                cell1.setAttribute("colspan", "1");
                cell1.className = "service-title";
                remove.className = "remove-button";
                remove.setAttribute("value", "-");
                remove.setAttribute("rownumber", "row" + vm_num);
                remove.setAttribute("onclick", "removeProduct(this.getAttribute('rownumber'))");
                console.log("the value of row1.rowIndex is: " + row1.rowIndex);
                
                var cell2 = row1.insertCell(1);
                var os = document.createElement("select"); 
                /* add all operating systems options */
                option = new Option("Windows", "Windows", false, false);
                option.id = "Windows" + vm_num;
                os.appendChild(option);
                    
                option = new Option("Red Hat 6 64-bit", "Red Hat 6 64-bit", false, false);
                option.id = "RedHat" + vm_num;
                //option.setAttribute("selected", "selected");
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
                
                cell2.appendChild(os);
                cell2.setAttribute("colspan", "2");
                os.id = "os" + vm_num;
                os.setAttribute("optionval", vm_num);
                os.setAttribute("sys", "sys" + vm_num);
                os.setAttribute("manager", "manager" + vm_num);
                os.setAttribute("vm-type", id);
                os.setAttribute("onchange", "processOS(this.getAttribute('vm-type'), document.getElementById(this.id).value, this.getAttribute('sys'), this.getAttribute('manager'), this.getAttribute('optionval'))");
                
                var cell3 = row1.insertCell(2);
                var price = document.createElement("input");
                price.setAttribute("type", "text");
                cell3.appendChild(price);
                cell3.setAttribute("colspan", "1");
                price.id = "service-price" + vm_num;
                price.className = "sub vm-sub vm-sub" + vm_num;
                price.value = "$" + slice_price;
                document.getElementById("service-price" + vm_num).readOnly = true;
                
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
                cpu_qty.className += " cpu_qty userinput";
                cpu_qty.setAttribute("dest", "" + cpu_sub_out);
                cpu_qty.setAttribute("num", vm_num);
                cpu_qty.setAttribute("cpu-price", cpu_price_val);
                cpu_qty.setAttribute("onchange", "getEstimate('cpu', this.id, this.getAttribute('cpu-price'), this.getAttribute('dest'), 'vm-sub' + this.getAttribute('num'))");
                    
                var celld = row2.insertCell(3);
                var cpu_sub = document.createElement("input");
                cpu_sub.setAttribute("type", "text");
                celld.appendChild(cpu_sub);
                celld.setAttribute("colspan", "1");
                cpu_sub.id = cpu_sub_out;
                document.getElementById(cpu_sub_out).readOnly = true;
                cpu_sub.className = "sub vm-sub vm-sub" + vm_num;
                    
                var row3 = table.insertRow(++rowCount);
                
                var celle = row3.insertCell(0);
                var mem = document.createTextNode("Additional RAM");                       
                celle.appendChild(mem);
                celle.setAttribute("colspan", "1");
                
                var cellf = row3.insertCell(1);
                var mem_price = document.createTextNode("$" + mem_price_val + "/GB");
                cellf.appendChild(mem_price);
                cellf.setAttribute("colspan", "1");
                    
                var cellg = row3.insertCell(2);
                var mem_qty = document.createElement("input");
                mem_qty.setAttribute("type", "text");
                mem_qty_in = "mem-qty" + vm_num;
                mem_sub_out = "mem-sub" + vm_num;
                cellg.appendChild(mem_qty);
                cellg.setAttribute("colspan", "1");
                mem_qty.id = mem_qty_in;
                mem_qty.className += " userinput";
                mem_qty.setAttribute("dest", mem_sub_out);
                mem_qty.setAttribute("num", vm_num);
                mem_qty.setAttribute("mem-price", mem_price_val);
                mem_qty.setAttribute("onchange", "getEstimate('mem', this.id, this.getAttribute('mem-price'), this.getAttribute('dest'), 'vm-sub' + this.getAttribute('num'))");
                    
                var cellh = row3.insertCell(3);
                var mem_sub = document.createElement("input");
                mem_sub.setAttribute("type", "text");
                cellh.appendChild(mem_sub);
                cellh.setAttribute("colspan", "1");
                mem_sub.id = mem_sub_out;
                document.getElementById(mem_sub_out).readOnly = true;
                mem_sub.className = "sub vm-sub vm-sub" + vm_num;
                
                
                var row4 = table.insertRow(++rowCount);
                
                if(id == 'ST_VM')
                {
                    
                    var celli = row4.insertCell(0);
                    var str = document.createTextNode("Additional 'Silver' Storage");                        
                    celli.appendChild(str);
                    celli.setAttribute("colspan", "1");
                
                    var cellj = row4.insertCell(1);
                    var str_price = document.createTextNode("$49.42/TB");
                    cellj.appendChild(str_price);
                    cellj.setAttribute("colspan", "1");
                
                    var cellk = row4.insertCell(2);
                    var str_qty = document.createElement("input");
                    str_qty.setAttribute("type", "text");
                    str_qty_in = "str-qty" + vm_num;
                    str_sub_out = "str-sub" + vm_num;
                    cellk.appendChild(str_qty);
                    cellk.setAttribute("colspan", "1");
                    str_qty.id = str_qty_in;
                    str_qty.className += " userinput";
                    str_qty.setAttribute("dest", str_sub_out);
                    str_qty.setAttribute("num", vm_num);
                    str_qty.setAttribute("str-price", str_price_val);
                    str_qty.setAttribute("onchange", "getEstimate('silver', this.id, this.getAttribute('str-price'), this.getAttribute('dest'), 'vm-sub' + this.getAttribute('num'))");
                    
                    var celll = row4.insertCell(3);
                    var str_sub = document.createElement("input");
                    str_sub.setAttribute("type", "text");
                    celll.appendChild(str_sub);
                    celll.setAttribute("colspan", "1");
                    str_sub.id = str_sub_out;
                    document.getElementById(str_sub_out).readOnly = true;
                    str_sub.className = "sub vm-sub vm-sub" + vm_num;
                }
                
                else if(id == 'HS_VM')
                {
                    var celli = row4.insertCell(0);
                    var alert = document.createTextNode("Silver storage is unavailable for High Security VMs.");
                    celli.appendChild(alert);
                    celli.setAttribute("colspan", "4");
                    celli.className = "alert";
                }
                
                var row5 = table.insertRow(++rowCount);
                    
                var cellm = row5.insertCell(0);
                var san = document.createTextNode("Additional 'Gold' Storage");                        
                cellm.appendChild(san);
                cellm.setAttribute("colspan", "1");
                    
                var celln = row5.insertCell(1);
                var san_price = document.createTextNode("$125.00/TB");
                celln.appendChild(san_price);
                celln.setAttribute("colspan", "1");
                    
                var cello = row5.insertCell(2);
                var san_qty = document.createElement("input");
                san_qty.setAttribute("type", "text");
                san_qty_in = "san-qty" + vm_num;
                san_sub_out = "san-sub" + vm_num;
                cello.appendChild(san_qty);
                cello.setAttribute("colspan", "1");
                san_qty.id = san_qty_in;
                san_qty.className += " userinput";
                san_qty.setAttribute("dest", san_sub_out);
                san_qty.setAttribute("num", vm_num);
                san_qty.setAttribute("san-price", san_price_val);
                san_qty.setAttribute("onchange", "getEstimate('gold', this.id, this.getAttribute('san-price'), this.getAttribute('dest'), 'vm-sub' + this.getAttribute('num'))");
                
                var cellp = row5.insertCell(3);
                var san_sub = document.createElement("input");
                san_sub.setAttribute("type", "text");
                cellp.appendChild(san_sub);
                cellp.setAttribute("colspan", "1");
                san_sub.id = san_sub_out;
                document.getElementById(san_sub_out).readOnly = true;
                san_sub.className = "sub vm-sub vm-sub" + vm_num;
                
                var row6 = table.insertRow(++rowCount);
                
                cell = row6.insertCell(0);
                var sysmanagement = document.createTextNode("System Management:");
                cell.appendChild(sysmanagement);
                cell.setAttribute("colspan", "1");
                
                cell = row6.insertCell(1);
                var sysmanagement_text = document.createElement("input");
                sysmanagement_text.setAttribute("type", "text");
                cell.appendChild(sysmanagement_text);
                cell.setAttribute("colspan", "3");
                
                sysmanagement_text.id = "sys" + vm_num;     
                sysmanagement_text.className = "info";
                document.getElementById(sysmanagement_text.id).readOnly = true;
                if(id == 'ST_VM')
                {
                  document.getElementById(sysmanagement_text.id).value = "Included";  
                }
                else
                {
                    document.getElementById(sysmanagement_text.id).value = "User-managed OR Added Premium (Contact SDSC for details)";
                }
                
                var row7 = table.insertRow(++rowCount);
                
                cell = row7.insertCell(0);
                var manager = document.createTextNode("Manager:");
                cell.appendChild(manager);
                cell.setAttribute("colspan", "1");
                
                cell = row7.insertCell(1);
                var themanager = document.createElement("input");
                themanager.setAttribute("type", "text");
                cell.appendChild(themanager);
                cell.setAttribute("colspan", "3");
                themanager.id = "manager" + vm_num;
                sysmanagement_text.className = "info";
                document.getElementById(themanager.id).readOnly = true;
                document.getElementById(themanager.id).value = "Brian Balderston";
                
                var row8 = table.insertRow(++rowCount);
                
                var cellq = row8.insertCell(0);
                var subtext = document.createTextNode("Subtotal:");
                cellq.appendChild(subtext);
                cellq.setAttribute("colspan", "3");
                
                var cellr = row8.insertCell(1);
                var vmsubtotal = document.createElement("input");
                vmsubtotal.setAttribute("type", "text");
                cellr.appendChild(vmsubtotal);
                cellr.setAttribute("colspan", "1");
                vmsubtotal.id = "vm-sub" + vm_num + "-total";
                vmsubtotal.className = "sub";
                document.getElementById(vmsubtotal.id).readOnly = true;
                document.getElementById(vmsubtotal.id).value = "$" + slice_price;
                sub('vm-sub');
            }
            
            function getEstimate(type, id, price, dest, theclass)
            {
                var item = document.getElementById(id);
                var subtotal = document.getElementById(dest);
                
                if(item.value === null || item.value === "" || isNaN(item.value) )
                {
                    subtotal.value = "";
                }
                else
                {
                    if(validate(type, id, dest))
                    {
                        document.getElementById(dest).value = "$" +  (parseFloat(document.getElementById(id).value) * price).toFixed(2);
                        sub(theclass);
                        sub('vm-sub');
                    }
                }
            }
            
            function sub(theclass)
            {
                var subarray = document.getElementsByClassName(theclass);
                var valtext;
                var val;
                var sum = 0;
                for(i = 0; i < subarray.length; i++)
                {
                    if(subarray[i].value != null || subarray[i].value != "")
                    {
                        valtext = subarray[i].value.replace("$", "");
                        val = parseFloat(valtext);
                        if(!isNaN(val) && val != null)
                        {
                            sum += val;
                        }
                    }  
                }
                
                document.getElementById(theclass + "-total").value = "$" + sum.toFixed(2);
            }
            
            function validate(type, id, dest)
            {
                
                var v = document.getElementById(id).value;
                var d = document.getElementById(dest);
                d.style.color = "#000";
                if(type == "cpu")
                {
                    if(v < 0 || v > 11)
                    {
                        d.value = "Please enter a number from 0 to 11";
                        d.style.color = "#ff0000";
                        return false;
                    }
                }
                
                if(type == "mem")
                {
                    if(v < 0 || v > 190 )
                    {
                        d.value = "Please enter a number from 0 to 190";
                        d.style.color = "#ff0000";
                        return false; 
                    }
                }
                
                if(type == "silver")
                {
                    if(v < 0 || v > 30000)
                    {
                        d.value = "Please enter a number from 0 to 30000";
                        d.style.color = "#ff0000";
                        return false;
                    }
                }
                
                if(type == "gold")
                {
                    if(v < 0 || v > 4900)
                    {
                        d.value = "Please enter a number from 0 to 4900";
                        d.style.color ="#ff0000";
                        return false;
                    }
                }
                return true;
            }
            
            function removeProduct(rowNum)
            {
                var thetable = document.getElementById("quote-table");
                var row = document.getElementById(rowNum);
                var index = row.rowIndex;
                for(i = 0, j = index; i < 8; i++)
                {
                    thetable.deleteRow(j);
                }
                sub('vm-sub');
            }
            
            function processOS(id, o, system, manager, num)
            {
                var name; 
                
                if(o == 'Red Hat 6 64-bit')
                {
                    name = 'RedHat';
                }
                else
                {
                    name = "" + o;
                }
                
                /* determines the type of system management */
                if((o == 'Windows' || o == 'Red Hat 6 64-bit') && id != 'HS_VM')
                {
                    document.getElementById(system).value = "Included";
                }
                else
                {
                    document.getElementById(system).value = "User-managed OR Added Premium (Contact SDSC for details)";
                }
                
                /* determines the manager */
                if(o != 'Red Hat 6 64-bit' || id == 'HS_VM')
                {
                    document.getElementById(manager).value = "Brian Balderston";
                }
                else
                {
                    document.getElementById(manager).value = "Andrew Ferbert";
                }
                document.getElementById("os" + num).value = o;
                console.log(document.getElementById("os" + num).value);
                console.log("" + name + num);
                document.getElementById("" + name + num).setAttribute("selected", "selected");
            }