





<div class="slide3 col-md-10 class">

        <div class="container">


                <div class="col-md-12">
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

    /*.table-section{*/
    /*    width: 100%;*/
    /*}*/
    /*.gc-container {*/
    /*    overflow: auto;*/
    /*}*/
    /*.table-container{*/
    /*    width: 100%;*/
    /*}*/
    /*.tablerow{*/
    /*    width: 100%;*/
    /*}*/

</style>

</body>
