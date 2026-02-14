<?php
// PHP Script om automatisch de inhoud van de img map te lezen
$dir = 'img/';
$images = array();

if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            // Filter alleen op afbeeldingsformaten
            if ($file != "." && $file != ".." && preg_match("/\.(jpg|jpeg|png|gif|webp)$/i", $file)) {
                $images[] = "/img/" . $file;
            }
        }
        closedir($dh);
    }
}

header('Content-Type: application/json');
echo json_encode($images);
?>