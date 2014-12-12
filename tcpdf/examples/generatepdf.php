<?php
    require_once('tcpdf_include.php');
    $jscode = file_get_contents('../../js/functions.js');
    $stylecode = '<style>'.file_get_contents('../../css/global.css').'</style>';
    $htmlcode = $_POST["formcode"];
    $html = $stylecode . $htmlcode;

    $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
    $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
    $pdf->AddPage();
    

    $pdf->IncludeJS($jscode);
    $pdf->writeHTML($html, true, false, true, false, '');
    $pdf->Output('merp.pdf', 'I');
?>