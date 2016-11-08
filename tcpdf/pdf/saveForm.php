<?php
  $file = $_POST["filename"];
  $html = $_POST["html"];
  $path = "savedForms/" . $file;
  if(is_file($path)){
    echo false;
  }else{
    echo file_put_contents( $path, $html);
  }
 ?>
