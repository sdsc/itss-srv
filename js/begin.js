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
    // document.getElementById('pa-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('str-table').setAttribute("hidden", "hidden");
    // document.getElementById('str-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('backup-table').setAttribute("hidden", "hidden");
    // document.getElementById('backup-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('consult-table').setAttribute("hidden", "hidden");
    // document.getElementById('consult-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('sp-table').setAttribute("hidden", "hidden");
    // document.getElementById('sp-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('cl-compute-table').setAttribute("hidden", "hidden");
    // document.getElementById('cl-compute-table-totals').setAttribute("hidden", "hidden");
    document.getElementById('totals').setAttribute("hidden", "hidden");

});

function validateForm() {
        $.post("generateestimate.php", {name: "name"});
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
        // var child2 = document.getElementById('str-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");

        var child = document.getElementById('pa-table');
        var child2 = document.getElementById('pa-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");

        var child = document.getElementById('backup-table');
        // var child2 = document.getElementById('backup-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");

        var child = document.getElementById('consult-table');
        // var child2 = document.getElementById('consult-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");

        var child = document.getElementById('sp-table');
        // var child2 = document.getElementById('sp-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
        }
        child.setAttribute("colspan", "4");

        var child = document.getElementById('cl-compute-table');
        // var child2 = document.getElementById('cl-compute-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            // child2.parentNode.removeChild(child2);
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

        var child = document.getElementById('estimatebutton');
        child.parentNode.removeChild(child);

        var child = document.getElementById('savebutton');
        child.parentNode.removeChild(child);

        var child = document.getElementById('loadselect');
        child.parentNode.removeChild(child);

        var child = document.getElementById('loadLabel');
        child.parentNode.removeChild(child);

        var child = document.getElementById('cleardata');
        child.parentNode.removeChild(child);

        var child = document.getElementById('clearLabel');
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
        /* The affiliation textbox reverts back to UC reagardless of what it was set to.
           The following code loops thorugh all elements that have the name "affiliation"
           and then checks whether the value of its "value" attribute is the same as the
           label of the selected option of each affiliaion select box. If they do not match,
           the option is updated to match the value of the affiliaion's "value" attribute.
           */
                // affiliations is assumed to be an array of select elements
                var affiliations = document.getElementsByName("affiliation");
                // Do not do anything if there are no elements with this name
                if(affiliations.length != 0){
                  //Loop though each element in affiliations array
                  //(They are all expected to select objects)
                  for(i = 0; i < affiliations.length; i++){
                    //Loop through the options of each affiliation select object
                    for(j = 0; j < affiliations[i].options.length; j++){
                      // Update the selected option to match with the affiliation's "value" attribute
                      if(affiliations[i].options[j].label == affiliations[i].getAttribute("value")){
                        affiliations[i].options[j].selected = true;
                      }
                    }
                  }
                }
    } else {
        alert("There are some invalid input fields. Please correct them before continuing.");

    }

}

function saveForm()
{
    var postObj = new Object();
    var sourceCode = $('#quote-content').html();
    var filename = document.getElementById("saveFormNameInput").value;
    if(filename == ""){
      alert("Please enter a filename for the form");
      return;
    }
    $("#dialog-confirm").html("Saved forms are accessible to everyone. Do you still want to save the form?");

    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Confirm Saved Form",
        height: 250,
        width: 400,
        buttons: {
          "Yes": function() {
            $(this).dialog('close');
            postObj.html = sourceCode;
            postObj.filename = filename;
            postObj.num = numProducts;
            $.post("tcpdf/pdf/saveForm.php", postObj, function(data){
              if(!data){
                alert("A form with that name has already been saved. Please choose another name and try again.");
              }else{
                renewSelectOptions();
              }
            });
          },
          "No": function() {
            $(this).dialog('close');
          }
        }
      });

}

function loadForm()
{
    var postObj = new Object();
    postObj.filename = document.getElementById("loadselect").value;
    if(postObj.filename == "-- Select File --"){
      return;
    }
    $.post("tcpdf/pdf/loadForm.php", postObj, function(data){

        data = JSON.parse(data);
        $("#quote-content").html(data.html);
        numProducts = data.num;
        resetFields();

    });
}

function clearData(){
  var postObj = new Object();
  postObj.filename = document.getElementById("cleardata").value;
  if(postObj.filename == "-- Select File --"){
    return;
  }
  var clearForm = confirm("Delete the form named " + postObj.filename + "?");
  if(clearForm){
    $.post("tcpdf/pdf/clearForm.php", postObj);
  }
  renewSelectOptions();
}

function changeForm(id)
{
    if(id == "estimatebutton") {
        document.getElementById("quote").action = "./tcpdf/pdf/generateestimate.php";
    }
    else {
        document.getElementById("quote").action = "./tcpdf/pdf/generatepdf.php";
    }
}

function changePHPFileName() {
    var name = "asdfasdf";
    window.location.href = "generatepdf.php?name=" + name;
}

function resetFields(){
    renewSelectOptions();
    document.getElementById("saveFormNameInput").value = "";
}

function renewSelectOptions(){
  $.post("tcpdf/pdf/getForms.php", function(data){
    var obj = eval('(' + data + ')');
    var formSelect = document.getElementById("loadselect");
    var clearFormSelect = document.getElementById("cleardata");

    formSelect.innerHTML = "";
    clearFormSelect.innerHTML = "";

    var option = document.createElement("option");
    option.innerHTML = "-- Select File --";
    formSelect.appendChild(option);

    var option2 = document.createElement("option");
    option2.innerHTML = "-- Select File --";
    clearFormSelect.appendChild(option2);

    for(var i in obj) {
      option = document.createElement("option");
      option.innerHTML = obj[i];
      formSelect.appendChild(option);

      option2 = document.createElement("option");
      option2.innerHTML = obj[i];
      clearFormSelect.appendChild(option2);
    }
  });
}
