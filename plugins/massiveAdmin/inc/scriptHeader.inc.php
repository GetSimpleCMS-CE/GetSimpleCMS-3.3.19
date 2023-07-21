<?php
global $SITEURL;
$themeChecker = @file_get_contents(GSDATAOTHERPATH . 'massiveTheme/option.txt') ?? 'massive';

echo'<link rel="stylesheet" href="'.$SITEURL.'plugins/massiveAdmin/theme/'.$themeChecker.'.css">';
echo'<link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">';
echo'<i class="uil uil-user-circle" style="font-size:5rem;margin-bottom:1rem;"></i>';
echo' <meta name="viewport" content="width=device-width, initial-scale=1.0">';

 
;?>