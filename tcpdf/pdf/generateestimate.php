<?php
     ob_start();
    require_once('tcpdf_include.php');

    class MYPDF extends TCPDF
    {
        public function Header()
        {
            $this->SetFont('helvetica', 'b', 15, '', '', true);
            $this->Write(30, 'SDSC IT Services Estimate', '', false, 'C', false, '', false, false, 150, '', '');
        }
    }
    $stylecode = '<style>'.file_get_contents('../../css/global.css').'</style>';
    $htmlcode = $_POST["formcode"];
    $html = $stylecode . $htmlcode;
    $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    $pdf->SetMargins(8, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
    $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
    $pdf->AddPage();
    $pdf->writeHTML($html, true, false, true, false, '');


    $name = "SDSC IT Services Estimate.pdf";
    $pdf->Output($name, 'I');

?>
