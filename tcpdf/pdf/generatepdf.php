<?php
    require_once('tcpdf_include.php');
    
    class MYPDF extends TCPDF
    {
        public function Header()
        {
            //$image = '../../images/SDSClogo.jpg';
            //$this->Image($image, 10, 10, 56, 14, 'JPEG', '', '', '', '', '', '', '', '', '', false, true, false, '');
            //$this->Text('50', '10', 'SDSC Service Level Agreement', false, false, false, '', '', 'M', false, '', '', false, 'T', 'T', false);
            $this->SetFont('helvetica', 'b', 20, '', '', true);
            $this->Write(30, 'Service Level Agreement', '', false, 'C', false, '', false, false, 150, '', '');
        }
    }
    $stylecode = '<style>'.file_get_contents('../../css/global.css').'</style>';
    $htmlcode = $_POST["formcode"];
    $html = $stylecode . $htmlcode;

    $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
    $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
    $pdf->AddPage();
    $pdf->writeHTML($html, true, false, true, false, '');

    $pdf->AddPage();
    
    $html = '<b><u><font style="font-size: 11px">Customer Contact and Signatures:</font></u></b><br>
        <font style="font-size: 10px; color: #ff0000;">
            (to be completed by customer)
        </font><br>
        <table border="1" colspan="2" width="550" cellpadding="3" style="font-size: 11px; text-align: right;">
            <tr>
                <td width="150"><b>Project Name/<br>Department:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr style="background-color: #EFEFEF">
                <td width="150"><b>Principal Investigator:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr>
                <td width="150"><b>Business Contact Name:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr style="background-color: #EFEFEF">
                <td width="150"><b>Business Contact Email:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr>
                <td width="150"><b>Business Contact Phone:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr style="background-color: #EFEFEF">
                <td width="150"><b>Technical Contact Name:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr>
                <td width="150"><b>Technical Contact Email:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
            <tr style="background-color: #EFEFEF">
                <td width="150"><b>Technical Contact Phone:</b></td>
                <td width="350">&nbsp;</td>
            </tr>
        </table>
        <br><br>
        <table border="0" colspan="2" width="530" cellspacing="3" cellpadding="3" style="font-size: 10px;">
            <tr>
                <td width="250"><b>San Diego Supercomputer Center: <br><br>Signature:___________________________</b>
                </td>
                <td width="250"><b>Provider, Direct Customer, or Agency:<br><br>Signature:___________________________<br>(By signing, I authorize and request SDSC to begin work to provide the services listed above. I understand that I will be responsible for any charges listed above. By signing I acknowledge that I have read, understand, and accept the terms and conditions of the core SDSC service level agreement and relevant service exhibits).</b>
                </td>
            </tr>
            <tr>
                <td width="250"><b>Name:_______________________________</b></td>
                <td width="250"><b>Name:_______________________________</b></td>
            </tr>
            <tr><td width="250"><b>Title:________________________________</b></td>
                <td width="250"><b>Title:________________________________</b></td>
            </tr>
            <tr><td width="250"><b>Date:________________________________</b></td>
                <td width="250"><b>Date:________________________________</b></td>
            </tr>
        </table>
        <br>
        <br>
        <font style="font-size: 11px;"><b><u>Customer Recharge Information</u><br><br>
        Index number(s) for all services: <br><br>
        100% to index: ________________<br>
        Other:_________________________________________________________________________<br>
        &nbsp;______________________________________________________________________________<br><br>
        [&nbsp;&nbsp;] Invoice Customer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [&nbsp;&nbsp;] Intercampus Transfer #_______________________________</b></font>
        <br><br>
        <font style="color: #bbb; font-size: 11px;"><b>(SDSC USE ONLY)</b><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;] New Service &nbsp;&nbsp;&nbsp; [&nbsp;&nbsp;] Service Change/Add to SLA #:_______________<br><br>
        <b>CHANGE LOG:</b><br>
        <table width="550" colspan="4" border="1" style="font-size: 10px">
            <tr>
                <td width="60"><b>Date</b><br></td>
                <td width="200"><b>Change</b><br></td>
                <td width="150"><b>Customer Name</b><br></td>
                <td width="60"><b>Customer<br>Initials</b></td>
            </tr>
            <tr>
                <td width="60">&nbsp;</td>
                <td width="200">&nbsp;</td>
                <td width="150">&nbsp;</td>
                <td width="60">&nbsp;</td>
            </tr>
            <tr>
                <td width="60">&nbsp;</td>
                <td width="200">&nbsp;</td>
                <td width="150">&nbsp;</td>
                <td width="60">&nbsp;</td>
            </tr>
        </table>';
    $pdf->writeHTML($html, true, false, true, false, '');
    $pdf->Output('SDSC_SLA.pdf', 'I');
?>