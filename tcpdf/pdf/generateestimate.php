<?php
     ob_start();
    require_once('tcpdf_include.php');

    class MYPDF extends TCPDF
    {
        public function Header()
        {
          $customer = $_POST['CustomerHidden'];
          $creator = $_POST['CreatedHidden'];
          //$vals = [strlen($customer),strlen($creator)];
          //$length = max($vals); max does not seem to work on holonet
          $length = 0;
          $this->SetFont('helvetica', 'b', 13, '', '', true);
          if ( $this->getStringWidth($customer) > $this->getStringWidth($creator) ) {
              $length = $this->getStringWidth($customer);
          }
          else {
              $length = $this->getStringWidth($creator);
          }
          $cf = 'Created For: ';
          $cb = 'Created By: ';
          $line = strlen($cf);
          $maxlength = 128 + $this->getStringWidth($cf) + 38; // max width of page
          $offset = $maxlength - $this->getStringWidth($cf) - $length;
          $this->SetFont('helvetica', 'b', 15, '', '', true);
          $this->Write(30, 'SDSC IT Services Estimate', '', false, 'C', false, '', false, false, 150, '', '');
            if ($this->PageNo() == 1) {

              // Creates line for date
              $this->Ln(10);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->SetX($offset);
              $this->Write(30,'Date: ','',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $date = date('m/d/Y');
              $this->Write(30,$date);

              // creates line for customer
              $this->Ln(5);
              $this->SetX($offset);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->Write(30,$cf,'',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $this->Write(30,$customer,'',false,'C',false,''.false,150,'','');

              // Creates line for Creater
              $this->Ln(5);
              $this->SetX($offset);
              $this->SetFont('helvetica', 'b', 13, '', '', true);
              $this->Write(30,$cb,'',false,'C',false,''.false,150,'','');
              $this->SetFont('helvetica','', 13, '', '', true);
              $this->Write(30,$creator,'',false,'C',false,''.false,150,'','');

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
