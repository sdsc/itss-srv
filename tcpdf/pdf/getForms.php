<?php
  $files = array_filter(scandir('savedForms'), function($item) {
      return !is_dir('savedForms' . $item);
  });
  echo json_encode($files);
 ?>
