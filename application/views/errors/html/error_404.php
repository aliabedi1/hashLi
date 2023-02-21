<?php

    $this -> db -> limit ( 1 );
    $this -> db -> order_by('id','desc');
    if ($query = $this->db->get('settings')->result()) {
        $logo_img = $query[0]->logo_img;
    }
?>
<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>صفحه مورد نظر پیدا نشد!</title>
    <link rel="icon" href="<?php
    $CI =& get_instance();
    if( ! isset($CI))
    {
        $CI = new CI_Controller();
    }
    $CI->load->helper('url');
    echo base_url();
    ?>assets/images/settings/<?= $logo_img?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 page</title>
</head>

<body>

<style>
    @font-face {
        font-family: 'BYekan+';
        src: url('css/fonts/BYekan+.ttf') format('truetype');
    }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'BYekan+';
    }

    .page404 {

        height: 100%;
        position: relative;
        width: 100%;
        min-height: 100%;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    p {
        font-size: 17px;
        margin: 0;
        padding: 15px;
        color: #fff;
        background-color: #ffffff33;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    a {
        font-size: 28px;
        color: #222;
        padding: 3px 30px;
        background-color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: .3s;
    }

    a:hover{
        background-color: #ffffff9d;
        padding: 3px 40px;
    }
</style>

<div class="page404" style="background: url('<?php
$CI =& get_instance();
if( ! isset($CI))
{
    $CI = new CI_Controller();
}
$CI->load->helper('url');
echo base_url();
?>assets/images/settings/404.jpg');height: 100%;
        position: relative;
        width: 100%;
        min-height: 100%;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;">

    <p>!..صفحه مورد نظر پیدا نشد</p>
    <a href="<?php $CI =& get_instance();
    if( ! isset($CI))
    {
        $CI = new CI_Controller();
    }
    $CI->load->helper('url');
    echo base_url();
    ?>">بازگشت به خانه</a>
</div>

</body>

</html>