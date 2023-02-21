<?php



    class Index extends CI_Controller
    {

        public function __construct ()
        {
            parent ::__construct ();

        }

        protected $VERSION_='0.2.1';

        //TODO NORMAL Characters TO HASH 
        protected $Characters=
        [
            'A'=>'Z1',
            'a'=>'z1',
            'B'=>'Z2',
            'b'=>'z2',
            'C'=>'Z3',
            'c'=>'z3',
            'D'=>'Z4',
            'd'=>'z4',
            'E'=>'Z5',
            'e'=>'z5',
            'F'=>'Z6',
            'f'=>'z6',
            'G'=>'Z7',
            'g'=>'z7',
            'H'=>'Z8',
            'h'=>'z8',
            'I'=>'Z9',
            'i'=>'z9',
            'J'=>'O0',
            'j'=>'o0',
            'K'=>'O1',
            'k'=>'o1',
            'L'=>'O2',
            'l'=>'o2',
            'M'=>'O3',
            'm'=>'o3',
            'N'=>'O4',
            'n'=>'o4',
            'O'=>'O5',
            'o'=>'o5',
            'P'=>'O6',
            'p'=>'o6',
            'Q'=>'O7',
            'q'=>'o7',
            'R'=>'O8',
            'r'=>'o8',
            'S'=>'O9',
            's'=>'o9',
            'T'=>'T0',
            't'=>'t0',
            'U'=>'T1',
            'u'=>'t1',
            'V'=>'T2',
            'v'=>'t2',
            'W'=>'T3',
            'w'=>'t3',
            'X'=>'T4',
            'x'=>'t4',
            'Y'=>'T5',
            'y'=>'t5',
            'Z'=>'T6',
            'z'=>'t6',
            ' '=>'S-',
            '0'=>'AZ',
            '1'=>'ZA',
            '2'=>'YB',
            '3'=>'XC',
            '4'=>'WD',
            '5'=>'VE',
            '6'=>'UF',
            '7'=>'TG',
            '8'=>'SH',
            '9'=>'RI',
            '?'=>'QU',
            '-'=>'MI',
            '+'=>'AD',
            '='=>'EQ',
            '/'=>'DI',
            '%'=>'PE',
            '`'=>'MA',
            '_'=>'UN',
            '^'=>'PO',
            '*'=>'ST',
            '('=>'OP',
            ')'=>'CL',
            '$'=>'DS',
            '@'=>'AT',
            '#'=>'HA',
            '!'=>'EX',
            ':'=>'TW',
            '['=>'BO',
            ']'=>'BC',
            ';'=>'SE',
            "'"=>'CO',
            '\\'=>'BS',
            ','=>'CA',
            '.'=>'DO',
            '~'=>'MA',
            '&'=>'AN',
            '{'=>'O-',
            '}'=>'C-',
            '"'=>'DC',
            '|'=>'OR',
            '<'=>'LT',
            '>'=>'GT',
            
        ];
        protected $HashedCharacters=
        [
            'Z1'=>'+&',
            'z1'=>'+y',
            'Z2'=>'Y{',
            'z2'=>'wN',
            'Z3'=>'T{',
            'z3'=>'4N',
            'Z4'=>'ox',
            'z4'=>'5!',
            'Z5'=>'B<',
            'z5'=>';-',
            'Z6'=>'nU',
            'z6'=>'UB',
            'Z7'=>'.V',
            'z7'=>'jL',
            'Z8'=>'=^',
            'z8'=>'7Q',
            'Z9'=>'D{',
            'z9'=>':g',
            'O0'=>'Xb',
            'o0'=>'e~',
            'O1'=>'?{',
            'o1'=>'SB',
            'O2'=>'7r',
            'o2'=>'DX',
            'O3'=>'*4',
            'o3'=>'*4',
            'O4'=>'cp',
            'o4'=>'pP',
            'O5'=>'=k',
            'o5'=>'5;',
            'O6'=>'Bk',
            'o6'=>'!L',
            'O7'=>'^>',
            'o7'=>'Wd',
            'O8'=>'^Y',
            'o8'=>'q(',
            'O9'=>'i.',
            'o9'=>'j-',
            'T0'=>'XW',
            't0'=>'4f',
            'T1'=>'-e',
            't1'=>'H>',
            'T2'=>'1r',
            't2'=>'Hh',
            'T3'=>'H0',
            't3'=>'*s',
            'T4'=>'1w',
            't4'=>'t9',
            'T5'=>'x=',
            't5'=>'g+',
            'T6'=>'h)',
            't6'=>'eX',
            'S-'=>':=',
            'AZ'=>'uw',
            'ZA'=>'dj',
            'YB'=>'1m',
            'XC'=>'fy',
            'WD'=>'74',
            'VE'=>'{>',
            'UF'=>'UF',
            'TG'=>'Jm',
            'SH'=>'F6',
            'RI'=>'GS',
            'QU'=>'HW',
            'MI'=>'f@',
            'AD'=>'6N',
            'EQ'=>'xW',
            'DI'=>'@9',
            'PE'=>'M+',
            'MA'=>'#P',
            'UN'=>'Ud',
            'PO'=>'Ca',
            'ST'=>'7q',
            'OP'=>'3<',
            'CL'=>'7}',
            'DS'=>'Yj',
            'AT'=>'Ml',
            'HA'=>'Gf',
            'EX'=>':q',
            'TW'=>'eL',
            'BO'=>'cW',
            'BC'=>'G^',
            'SE'=>'OG',
            "CO"=>'#)',
            'BS'=>'Y?',
            'CA'=>'+D',
            'DO'=>'h!',
            'MA'=>'8p',
            'AN'=>'?t',
            'O-'=>'}I',
            'C-'=>'?2',
            'DC'=>'JK',
            'OR'=>"g=",
            'LT'=>'?k',
            'GT'=>'9p',
            'EN'=>'a#',
            
        ];





        public function index(){


            $output['version']=$this->VERSION_;
            
            $this -> load -> view ( 'index' ,$output);



        }


        public function makeHash(){

            $Rawtext=$this->input->post('textinput');
            





            $output['answer']=$this->Hasher($Rawtext);
            $output['version']=$this->VERSION_;
            $this -> load -> view ( 'answer' ,$output);



        }

        public function Unhash(){

            $HashedText=$this->input->post('textinput');



            $output['answer']=$this->Unhasher($HashedText);

            $this -> load -> view ( 'answer' ,$output);



        }
        
        public function Hasher(string $EnteredText)
        {
        
            
            $FinalStr='';
            $EnteredTextAsArray=str_split($EnteredText);
            
            //TODO enter has 2 \n WEIRDLY! EnterLock Controlls it.
            $EnterLock=0;
            foreach($EnteredTextAsArray as $Char)
            {
                
                if(array_key_exists($Char, $this->Characters))
                {
                    $EncryptPart = $this->HashedCharacters[$this->Characters[$Char]];
                    $FinalStr .= $EncryptPart;
                }else if($EnterLock==1){
                    $EnterLock=0;
                    continue;
                }
                else if(strstr($EnteredText,PHP_EOL)){
                    $FinalStr .=$this->HashedCharacters['EN'];
                    $EnterLock=1;
                }else
                {

                    $FinalStr.=' "'.$Char.'" ';
                }
            }

            return $FinalStr;

        }


        public function Unhasher(string $HashedText)
        {
            $FinalStr='';
            $ReversedChararacter= array_flip($this->Characters);
            $ReversedHashedCharacters= array_flip($this->HashedCharacters);

            // return ($HashedText);
            $EnteredHashedAsArray=str_split($HashedText,2);

            foreach($EnteredHashedAsArray as $Char){

                if(array_key_exists($Char, $ReversedHashedCharacters)){

                    if($Char=='a#'){    
                    
                        $FinalStr.='<br>';
                        continue;
                    }

                    $FinalStr.=$ReversedChararacter[$ReversedHashedCharacters[$Char]];
    
                }else{
                    echo $Char.'<br>';

                    return 'ERROR: wrong entry!';
                }
            }

            return $FinalStr;

        }




        public function VersionInfo(){

            function printStyledVersion($version,$date){

                
                
                
                $spanStyle='style="color: crimson;font-size:16px;"';

                $text='<br><span '.$spanStyle.'>version '.$version.'</span><br><span style="color:black">'.$date.'</span><br>';

                return $text;
            }

            $output['notes']='
            '.printStyledVersion('0.0.0','10/21/2022').'it was just an idea for sending encypted massages and saying things 
            that you and the person you want can read.<br>
            i didnt done any project related or knowing any algorithm for encrypting.<br> 
            another idea behind it was using this methods for my own projects and making something for my own.<br>
            '.printStyledVersion('0.1.0','10/22/2022').'
            in the first version i used a pattern for changing characters but the idea was so 
            simple for me because i could understnad if i wanted to without using unhash method.<br>
            the unhash method is not working because i didnt work on it but its comming soon...<br>
            '.printStyledVersion('0.2.0','10/23/2022').'
            its using 2 step encrypting pattern but the idea is still the same but i cant understand what is happening with characters
            and noone can because they are too random.<br>
            unhash method is still not working.<br>
            '.printStyledVersion('0.2.1','10/25/2022').'
            it wasnt working fine because of including \' and " in encryption method therefor you couldnt use js method to copy the text into the clipboard<br>
            i changed the arrays and removed 2 characters and now its working like a clock
            ';

            $this->load->view('version',$output);
        }
        
        
            //header("Content-Type: application/json");
            //print_r(($this->Characters));
            //die();
    }

?>