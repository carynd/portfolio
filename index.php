<?php
    $url = 'https://main--caryn-resume.netlify.app/Resume.jpg';
    $content = file_get_contents($url);
    header('Content-Type: image/jpg');
    header('Content-Disposition: attachment; filename="image-to-download.jpg"');
    echo $content;
?>
