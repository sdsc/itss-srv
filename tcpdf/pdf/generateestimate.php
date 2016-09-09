<?php
     ob_start();
    require_once('tcpdf_include.php');

    class MYPDF extends TCPDF
    {
        public function Header()
        {
            $this->SetFont('helvetica', 'b', 15, '', '', true);
            $this->Write(30, 'SDSC IT Services Estimate', '', false, 'C', false, '', false, false, 150, '', '');
            if ($this->PageNo() == 1) {
              $this->Ln(10);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->SetX(128);
              $this->Write(30,'Date: ','',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $this->Write(30,date('m/n/Y'));
              $this->Ln(5);
              $this->SetX(128);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->Write(30,'Created For: ','',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $this->Write(30,$_POST['CustomerHidden'],'',false,'C',false,''.false,150,'','');
              $this->Ln(5);
              $this->SetX(128);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->Write(30,'Created By: ','',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $this->Write(30,$_POST['CreatedHidden'],'',false,'C',false,''.false,150,'','');

            }
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
