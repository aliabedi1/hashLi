<html>
    <head></head>
    <body>
        <form action="<?= base_url()?>index/makeHash" method="post">
            <h3 style="color: crimson;">VERSION <?= $version?><br>
            <a style="color: darkblue;" href="<?php echo base_url();?>index/VersionInfo">read more about versions</a></h3>
            

            <br>
            <label for="do">enter the text you wanna hash</label>
            <br>
            <textarea name="textinput" id="do" cols="30" rows="10"></textarea>
            <br>
            <input type="submit" value="Make it hash">

        </form>
        <br>
        <form action="<?= base_url()?>index/Unhash" method="post">
            <label for="undo">unhash the hashed text</label>
            <br>
            <textarea name="textinput" id="undo" cols="30" rows="10"></textarea>
            <br>
            <input type="submit" value="Back to normal text">

        </form>
    </body>
</html>