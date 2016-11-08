<?php
  $file = $_POST["filename"];
  $path = "savedForms/" . $file;
  if(is_file($path)){
    echo file_get_contents($path);
  }else{
    echo false;
  }
?>
