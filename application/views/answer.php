<html>
    <head></head>
    <body>
        <br>
        <br>
        <br>
        <?php
        echo $answer;
        ?>
        <br>
        <br>
        
        

        <!-- The button used to copy the text -->
        <button onclick="DoCopy()">Copy text</button>
        <br>
        <br>
        <a style="color: crimson;" href="<?php echo base_url();?>">hash more</a>

        <?php
        
        if($this->uri->segment(2) == "Unhash"){


            $answer = str_replace( '<br>' , '\n' , $answer);

        }

        ?>
        
    </body>
        <script>
            function DoCopy() {

                navigator.clipboard.writeText('<?= $answer?>');
                alert("Copied!");
            }
        </script>
</html>