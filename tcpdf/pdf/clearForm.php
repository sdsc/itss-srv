<?php
  $file = $_POST["filename"];
  $path = "savedForms/" . $file;
  unlink($path);
 ?>
