<?php
  $file = $_POST["filename"];
  $html = $_POST["html"];
  $num = $_POST["num"];
  $path = "savedForms/" . $file;
  if(is_file($path)){
    echo false;
  }else{
    file_put_contents( $path, $num);
    echo file_put_contents( $path, $html, FILE_APPEND);
  }
 ?>
