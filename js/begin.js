var count = 0;
var oldCode;
$(document).ready(function() {
    
    /* perform initial subtotaling */
    
    var valid = true; 
    
    //sub('sub');
    
    /* Create PDF from the content */

    
    $('body').on('keydown', 'input, select', function(e) {
        var self = $(this)
          , form = self.parents('form:eq(0)')
          , focusable
          , next
          ;
        if (e.keyCode == 13) {
            focusable = form.find('input,a,select,button').filter(':visible');
            next = focusable.eq(focusable.index(this)+1);
            if (next.length) {
                next.focus();
            } else {
                //form.submit();
            }
            return false;
        }
    });
    
    document.getElementById('vm-table').setAttribute("hidden", "hidden");
    // document.getElementById('vm-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('pa-table').setAttribute("hidden", "hidden");
    document.getElementById('pa-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('str-table').setAttribute("hidden", "hidden");
    document.getElementById('str-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('backup-table').setAttribute("hidden", "hidden");
    document.getElementById('backup-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('consult-table').setAttribute("hidden", "hidden");
    document.getElementById('consult-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('sp-table').setAttribute("hidden", "hidden");
    document.getElementById('sp-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('cl-compute-table').setAttribute("hidden", "hidden");
    document.getElementById('cl-compute-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('totals').setAttribute("hidden", "hidden");
    
});

function validateForm() {
        var valid = true;
        $('.vm-sub').each(function(i, e) {
            if (e.value == "Invalid input") {
                valid = false;
            }
        });
    if (valid) {
        
        //$('.tables tr *:nth-child(1)').attr("width", "1px");
        //$('.tables td').attr("height", "1px");
        
        oldCode = $('#quote-content').clone();
        var child = document.getElementById('vm-table');
        // var child2 = document.getElementById('vm-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('str-table');
        var child2 = document.getElementById('str-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('pa-table');
        var child2 = document.getElementById('pa-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('backup-table');
        var child2 = document.getElementById('backup-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('consult-table');
        var child2 = document.getElementById('consult-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('sp-table');
        var child2 = document.getElementById('sp-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('cl-compute-table');
        var child2 = document.getElementById('cl-compute-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");
        
        var child = document.getElementById('totals');
        if (child.getAttribute("hidden") == "hidden") {
            child.parentNode.removeChild(child);
        }
        child.setAttribute("colspan", "4");
        
        $('.remove-button').each(function(i, e) {
            e.parentNode.removeChild(e);
        });
        
        var child = document.getElementById('pdfbutton');
        child.parentNode.removeChild(child);
        
        var child = document.getElementById('savebutton');
        child.parentNode.removeChild(child);
        
        var child = document.getElementById('loadbutton');
        child.parentNode.removeChild(child);
        
        var child = document.getElementById('cleardata');
        child.parentNode.removeChild(child);
        
        $('.userinput').each(function(i, e) {
            if (e.value == "") {
                e.setAttribute("value", "0");
            }
        });
        
        $('.vm-sub, .str-sub, .pa-sub, .backup-sub, .consult-sub, .sp-sub').each(function(i, e) {
            if (e.value == "") {
                e.setAttribute("value", "$0.00");
            }
        });
        
        
        document.getElementById('formcode').value = $("#quote-content").html();
        
        document.getElementById("quote").submit();
        $("#quote-content").replaceWith(oldCode.clone());
        $("#quote-content").replaceWith(oldCode);
        
    } else {
        alert("There are some invalid input fields. Please correct them before continuing.");
        
    }
        
}

function saveForm()
{
    var sourceCode = $('#quote-content').html();
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("source", sourceCode);
    } else {
        alert("No local storage support.");
    }
}

function loadForm()
{
    if(typeof(Storage) !== "undefined") {
        var oldCode = localStorage.getItem("source");
        //$("#quote-content").replaceWith((oldCode.clone()));
        if (oldCode == null) {
            alert("No saved forms found.");
        } else {
            $("#quote-content").html(oldCode);
        }
    } else {
        alert("No local storage support.");
    }
}

function clearData()
{
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
    }
}