<!DOCTYPE html>
<html lang="en">



<?php


$id = $this->session->userdata("id");
$this->db->where('id', $id);
if ($query = $this->db->get('user')->result()) {


    $user_type                          = $query[0]->type;
    $post_permission                    = $query[0]->post_permission;
    $appointment_permission             = $query[0]->appointment_permission;
    $setting_permission                 = $query[0]->setting_permission;
    $checkout_permission                = $query[0]->checkout_permission;
}

?>
<head>
    <?php
    $this -> db -> limit ( 1 );
    $this->db->order_by('id','desc');
    if ($query = $this->db->get('settings')->result()) {
        $logo_img = $query[0]->logo_img;
    }
    ?>
    <link rel="icon" href="<?=base_url()?>assets/images/settings/<?= $logo_img ?>">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/admin/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/admin/css/fonts/fontawsome-5.13.0/all.min.css">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/admin/css/swiper-bundle.min.css">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/admin/css/persianDatepicker-default.css">
    <link rel="stylesheet" type="text/css" href="<?=base_url()?>assets/admin/css/style.css">
    <title><?=$title?></title>
</head>

<body>
<div class="row wrapper">

    <div class="slide1 col">
        <ul class="menu1 menu11">

            <a href="<?=base_url()?>Admin/index"><li class="col-md-12"><i class="fas fa-home"></i><p>منوی ادمین</p></li></a>
            <?php
            if ($appointment_permission==1 || $user_type==2 || $user_type==1):
            ?>
            <li class="col-md-12 turnMenu"><i class='fas fa-clipboard'></i><p>نوبت ها</p></li>
            <?php
            endif;
            ?>
            <li class="col-md-12 userMenu"><i class='fas fa-users'></i><p>کاربران</p></li>
            <?php
            if ($post_permission==1 || $user_type==2):
            ?>
            <li class="col-md-12 archiveMenu"><i class="fas fa-layer-group"></i><p>آرشیو</p></li>
            <?php
            endif;
            ?>

            <a href="<?=base_url()?>admin/transactions"><li class="col-md-12 "><i class="fas fa-credit-card"></i><p>تراکنش ها</p></li></a>
            <?php
            if ($checkout_permission==1 || $user_type==2):
            ?>
            <a href="<?=base_url()?>admin/checkout_transactions"><li class="col-md-12 "><i class="fas fa-money-bill-wave"></i><p>تراکنش تسویه حساب</p></li></a>
            <?php
            endif;
            ?>

            <?php
            if ($setting_permission==1 || $user_type==2):
            ?>
            <li class="col-md-12 settingMenu"><i class="fas fa-cogs"></i><p>تنظیمات</p></li>
            <a href="<?=base_url()?>admin/working_schedule"><li class="col-md-12"><i class="fas fa-clock"></i><p>ساعت کاری کلینیک</p></li></a>

            <?php
            endif;
            ?>
            <a href="<?=base_url()?>"><li class="col-md-12"><i class="fas fa-tv"></i><p>ورود به سایت</p></li></a>
            <a href="<?=base_url()?>login/logout"><li class="col-md-12"><i class="fas fa-sign-out-alt"></i><p>خروج</p></li></a>



        </ul>
    </div>

    <div class="slide2 col">
        <?php
        if ($appointment_permission==1 || $user_type==2 || $user_type==1):
        ?>
        <ul class="menu2 menu21">

            <a href="<?=base_url()?>admin/reserve_appointment"><li class="col-md-12"><i class="fas fa-plus-circle"></i>رزرو نوبت</li></a>
            <a href="<?=base_url()?>admin/change_turn"><li class="col-md-12"><i class="fas fa-exchange-alt"></i>جا به جایی نوبت ها</li></a>
            <a href="<?=base_url()?>admin/delete_turn"><li class="col-md-12"><i class="fas fa-times-circle"></i>حذف نوبت</li></a>
            <a href="<?=base_url()?>admin/future_appointments"><li class="col-md-12"><i class="fas fa-history"></i>نوبت های آینده</li></a>
            <a href="<?=base_url()?>admin/passed_appointments"><li class="col-md-12"><i class="fas fa-history"></i>نوبت های گذشته</li></a>
            <a href="<?=base_url()?>admin/create_appointment"><li class="col-md-12"><i class="fas fa-plus-circle"></i>نوبت های جدید</li></a>
            <a href="<?=base_url()?>admin/edit_appointments"><li class="col-md-12"><i class="fas fa-edit"></i>اصلاح نوبت ها</li></a>
            <a href="<?=base_url()?>admin/deleted_appointments/0"><li class="col-md-12"><i class="fas fa-minus-circle"></i>نوبت های حذف شده</li></a>
        </ul>
        <?php
        endif;
        ?>


        <ul class="menu2 menu22">
            <a href="<?=base_url()?>admin/admin"><li class="col-md-12"><i class='fas fa-user-cog'></i>مدیران</li></a>
            <a href="<?=base_url()?>admin/users"><li class="col-md-12"><i class="fas fa-user-circle"></i>کاربران عادی</li></a>
            <a href="<?=base_url()?>admin/expertise"><li class="col-md-12"><i class="fas fa-users-cog"></i>تخصص ها</li></a>
        </ul>

        <?php
        if ($post_permission==1 || $user_type==2):
        ?>
        <ul class="menu2 menu23">

            <a href="<?=base_url()?>admin/article"><li class="col-md-12"><i class="fas fa-newspaper"></i>مقاله ها</li></a>
            <a href="<?=base_url()?>admin/service"><li class="col-md-12"><i class="	fas fa-hand-holding-medical"></i>خدمات کلینیک</li></a>
            <a href="<?=base_url()?>admin/comments"><li class="col-md-12"><i class="fas fa-comments"></i>نظرات برتر</li></a>

        </ul>
        <?php
        endif;
        ?>

        <?php
        if ($setting_permission==1 || $user_type==2):
        ?>
        <ul class="menu2 menu24">

            <a href="<?=base_url()?>admin/settings"><li class="col-md-12"><i class="fas fa-cog"></i>تنظیمات اصلی</li></a>
            <a href="<?=base_url()?>admin/slideshow"><li class="col-md-12"><i class="far fa-list-alt"></i>اسلایدشو</li></a>
            <a href="<?=base_url()?>admin/mainpage_services"><li class="col-md-12"><i class="fas fa-toolbox"></i>سرویس ها</li></a>

        </ul>
        <?php
        endif;
        ?>
    </div>

