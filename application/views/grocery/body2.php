<!-- ============ Body content start ============= -->
<div class="main-content-wrap sidenav-open d-flex flex-column">
    <div class="breadcrumb">
        <h4> <?=$section_title?></h4>
    </div>

    <div class="separator-breadcrumb border-top"></div>

    <div class="row">
        <div class="col-lg-12 col-md-12">

            <?php foreach($css_files as $file): 	?>
                <link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
            <?php endforeach; ?>
            <?php foreach($js_files as $file):
                ?>
                <script src="<?php echo $file; ?>"></script>
            <?php endforeach; ?>
            <?php echo $output; ?>

        </div>
    </div>


</div>

<style>


    /*.row{*/
    /*    width: 100%;*/
    /*}*/

</style>


<!--<script src="--><?//=base_url()?><!--assets/js/vendor/bootstrap.bundle.min.js"></script>-->
<!--<script src="--><?//=base_url()?><!--assets/js/vendor/perfect-scrollbar.min.js"></script>-->
<!--<script src="--><?//=base_url()?><!--assets/js/vendor/datatables.min.js"></script>-->
