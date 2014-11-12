<?php
    $VM_PRICE = 69.75;
    $VM_CPU = 12.94;
    $VM_MEM = 12.94;
    $VM1_STORAGE = 49.42;
    $VM2_STORAGE = 125.00;
?>
<!DOCTYPE html>
<html>
    <head>
    <title>SDSC Servicse Estimation Tool</title>
    <link rel="stylesheet" type="text/css" href="css/global.css">
    <script>
        
        /* declare constant prices here. For rough draft, 
        I will be using Javscript to implement the calculator. 
        In later versions, I will be switching to a combo of
        PHP/MySQL for easier maintenance and adding of services*/
        
        function getEstimate(id, price, dest)
        {
            var item = document.getElementById(id);
            var subtotal = document.getElementById(dest);
            
            if(item.value == null || item.value == "")
            {
                subtotal.value = "";
            }
            else
            {
                document.getElementById(dest).value = "$" +  (parseFloat(document.getElementById(id).value) * price).toFixed(2);
            }
        }
    </script>
    </head>
    <body>
       <table>
           <tr>
               <th>Service Name</th>
               <th>Details</th>
               <th>Qty</th>
               <th>Unit Price</th>
               <th>Subtotal</th>
           </tr>
           
           <!-- First Block: Windows VM 1 -->
           <tr class="vm-1">
               <td>Windows VM 1</td>
               <td>
                   <ul>
                       <li>Base 1 CPU</li>
                       <li>2 GB Memory</li>
                       <li>100 GB Storage</li>
                       <li>SysAdmin 8AM - 5PM</li>
                   </ul>
               </td>
               <td><input type="text" id="vm-1-qty" onchange="getEstimate('vm-1-qty', <?php echo $VM_PRICE; ?>, 'vm-1-sub');"></td>
               <td>$69.75/month</td>
               <td><input type="text" class="subtotal" id="vm-1" readonly="true"></td>
           </tr>
           <tr class="vm-1">
               <td><span class="add-on">Additional CPUs</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-1-cpu" onBlur="getEstimate('vm-1-cpu', <?php echo $VM_CPU; ?>, 'vm-1-cpu-sub');"></td>
               <td>$12.94/CPU</td>
               <td><input type="text" class="subtotal" id="vm-1-cpu-sub" readonly="true"></td>
           </tr>
           <tr class="vm-1">
               <td><span class="add-on">Additional Memory</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-1-mem" onchange="getEstimate('vm-1-mem', <?php echo $VM_MEM; ?>, 'vm-1-mem-sub');"></td>
               <td>$12.94/GB</td>
               <td><input type="text" class="subtotal" id="vm-1-mem-sub" readonly="true"></td>
           </tr>
           <tr class="vm-1">
               <td><span class="add-on">Additional Storage</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-1-storage" onchange="getEstimate('vm-1-storage', <?php echo $VM1_STORAGE; ?>, 'vm-1-storage-sub');"></td>
               <td>$49.42/TB</td>
               <td><input type="text" class="subtotal" id="vm-1-storage-sub" readonly="true"></div></td>
           </tr>
           <!-- End First Block -->
           
           <!-- Second Block: Windows VM2 -->
           <tr class="vm-2">
               <td>Windows VM 2</td>
               <td>
                   <ul>
                       <li>Base 1 CPU</li>
                       <li>2 GB Memory</li>
                       <li>100 GB Storage</li>
                       <li>SysAdmin 8AM - 5PM</li>
                   </ul>
               </td>
               <td><input type="text" id="vm-2-qty" onchange="getEstimate('vm-2-qty', <?php echo $VM_PRICE; ?>, 'vm-2-sub');"></td>
               <td>$69.75/month</td>
               <td><input type="text" class="subtotal" id="vm-2-sub" readonly="true"></td>
           </tr>
           <tr class="vm-2">
               <td><span class="add-on">Additional CPUs</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-2-cpu" onchange="getEstimate('vm-2-cpu', <?php echo $VM_CPU; ?>, 'vm-2-cpu-sub');"></td>
               <td>$12.94/CPU</td>
               <td><input type="text" class="subtotal" id="vm-2-cpu-sub" readonly="true"></td>
           </tr>
           <tr class="vm-2">
               <td><span class="add-on">Additional Memory</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-2-mem" onchange="getEstimate('vm-2-mem', <?php echo $VM_MEM; ?>, 'vm-2-mem-sub');"></td>
               <td>$12.94/GB</td>
               <td><input type="text" class="subtotal" id="vm-2-mem-sub" readonly="true"></td>
           </tr>
           <tr class="vm-2">
               <td><span class="add-on">Additional Storage</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="vm-2-storage" onchange="getEstimate('vm-2-storage', <?php echo $VM2_STORAGE; ?>, 'vm-2-storage-sub');"></td>
               <td>$49.42/TB</td>
               <td><input type="text" class="subtotal" id="vm-2-storage-sub" readonly="true"></td>
           </tr>
           <!-- End Second Block -->
           
           <!-- Third Block: Unix VM1 -->
           <tr class="unix-vm-1">
               <td>Unix VM 1</td>
               <td>
                   <ul>
                       <li>Base 1 CPU</li>
                       <li>2 GB Memory</li>
                       <li>100 GB Storage</li>
                       <li>SysAdmin 8AM - 5PM</li>
                   </ul>
               </td>
               <td><input type="text" id="unix-vm-1-qty" onchange="getEstimate('unix-vm-1-qty', <?php echo $VM_PRICE; ?>, 'unix-vm-1-sub');"></td>
               <td>$69.75/month</td>
               <td><input type="text" class="subtotal" id="unix-vm-1-sub" readonly="true"></td>
           </tr>
           <tr class="unix-vm-1">
               <td><span class="add-on">Additional CPUs</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="unix-vm-1-cpu" onchange="getEstimate('unix-vm-1-cpu', <?php echo $VM_CPU; ?>, 'unix-vm-1-cpu-sub');"></td>
               <td>$12.94/CPU</td>
               <td><input type="text" class="subtotal" id="unix-vm-1-cpu-sub" readonly="true"></td>
           </tr>
           <tr class="unix-vm-1">
               <td><span class="add-on">Additional Memory</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="unix-vm-1-mem" onchange="getEstimate('unix-vm-1-mem', <?php echo $VM_MEM; ?>, 'unix-vm-1-mem-sub');"></td>
               <td>$12.94/GB</td>
               <td><input type="text" class="subtotal" id="unix-vm-1-mem-sub" readonly="true"></td>
           </tr>
           <tr class="unix-vm-1">
               <td><span class="add-on">Additional Storage</span></td>
               <td>&nbsp;</td>
               <td><input type="text" id="unix-vm-1-storage" onchange="getEstimate('unix-vm-1-storage', <?php echo $VM1_STORAGE; ?>, 'unix-vm-1-storage-sub');"></td>
               <td>$49.42/TB</td>
               <td><input type="text" class="subtotal" id="unix-vm-1-storage-sub" readonly="true"></td>
           </tr>
           <!-- End Second Block -->
       </table> 
    </body>
</html>