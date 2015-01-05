$(document).ready(function() {
    
    /* perform initial subtotaling */
    sub('sub');
    
    /* Create PDF from the content */
    $("#pdfbutton").click(function () {
        /*var filename = prompt("Name the file: ");
        html2canvas($('#quote-content'), { background: '#ffffff' }).then(function(canvas)
        {
            var imageData = canvas.toDataURL("image/jpeg");
            var image = new Image('p', 'pt', 'letter');
            image = Canvas2Image.convertToJPEG(canvas);
            var doc = new jsPDF();
            doc.addImage(imageData, 'JPEG', 12, 10);
            var croppingYPosition = 1095;
            count = (image.height) / 1095;

            /* to split up the document into multiple pages if the canvas is too large */
            /*for (var i =1; i < count; i++) {
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
            } 
            
            doc.save(filename); //save file
        }); */
        
        var child = document.getElementById('vm-table');
        var child2 = document.getElementById('vm-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('str-table');
        var child2 = document.getElementById('str-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('pa-table');
        var child2 = document.getElementById('pa-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('backup-table');
        var child2 = document.getElementById('backup-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('consult-table');
        var child2 = document.getElementById('consult-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('sp-table');
        var child2 = document.getElementById('sp-table-totals');
        if (child.rows.length - 1 === 0) {
            child.parentNode.removeChild(child);
            child2.parentNode.removeChild(child2);
        }
        
        var child = document.getElementById('totals');
        if (child.getAttribute("hidden") == "hidden") {
            child.parentNode.removeChild(child);
        }
        document.getElementById('formcode').value = $("#quote-content").html();
    }); 
    
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
                form.submit();
            }
            return false;
        }
    });
    
    document.getElementById('vm-table').setAttribute("hidden", "hidden");
    document.getElementById('vm-table-totals').setAttribute("hidden", "hidden");
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
    document.getElementById('totals').setAttribute("hidden", "hidden");
    
});