<?php
  $file = $_POST["filename"];
  $path = "savedForms/" . $file;
  $html = '';

  $f = fopen($path, 'r');
  $num = fgets($f);
  $num = intval($num[0]);


  while(true){
    $read = fgets($f);
    if($read){
      $html = $html . $read;
    }else{
      break;
    }
  }
  fclose($f);

  $json = array(
    'html' => $html,
    'num' => $num,
  );

  echo json_encode($json);
?>
