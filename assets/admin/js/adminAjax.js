$(document).ready(function () {
    $("#persianFormat").persianDatepicker({
        cellWidth: 48,
        cellHeight: 30,
        fontSize: 15,
    });
    $("#persianFormat1").persianDatepicker({
        cellWidth: 48,
        cellHeight: 30,
        fontSize: 15,
    });
});

$(document).on("click" , ".day" , function (){
    $(".hoursWrapper").slideDown();

    $(this).addClass("clickFuncktion");
    $(".day").not(this).removeClass("clickFuncktion");
});



$(document).on("click" , ".hour" , function (){
    // $(".namePriceWrapper").slideDown();

    $(this).addClass("clickFuncktion");
    $(".hour").not(this).removeClass("clickFuncktion");
});



function showRes3(){

    $(".allweeksdays").slideDown();

    $(".allweeksdays").css("visibility", "visible");
    $(".allweeksdays").css("transform", "scale(1)");

    var id = $("#chairId option:selected").val();
    $(".weeksInner>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInner>.row>.hourWrap").remove();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            // alert("alert");
            if (this.responseText){


                var jsonOBJ = JSON.parse(this.responseText);



                for (var i=0; i<jsonOBJ.day_date.length; i++){
                    var dayName= jsonOBJ.day_name[i];
                    var dayDate= jsonOBJ.day_date[i];
                    var dayId= jsonOBJ.day_id[i];


                    $(".weeksInner>.swiper-container>.swiper-wrapper").append('' +
                        '<div class="swiper-slide" role="group">' +
                        '<div class="dayWrapper">' +
                        '<div class="day">' +
                        '<label onclick="showHour('+dayId+')"  for="'+dayId+'">' +
                        '<h3>'+dayName+'</h3>' +
                        '<p>'+dayDate+'</p>' +
                        '</label>' +
                        '<input type="radio" value="'+dayId+'" name="dayAjax" id="'+dayId+'">' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    var swiper = new Swiper('.swiper-container', {
                        navigation: {
                            nextEl: '.nextWeek2',
                            prevEl: '.prvWeek',
                        },
                        slidesPerView: 2,
                        spaceBetween: 20,
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }
                    });
                }

            }

        }
    }

    xmlhttp.open("POST" , "/admin/delete_turn_get_days_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function showFinalBtn(){
    $(".deleteBtnWrapper").slideDown();
}


function showHour(id){


    $(".hoursInner>.row>.hourWrap").remove();
    $(".deleteBtnWrapper").slideDown();
    // $(".deleteBtnWrapper").slideUp('fast');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){

            if (this.responseText){

                var jsonOBJ = JSON.parse(this.responseText);

                // console.log(jsonOBJ);

                for (var i=0; i<jsonOBJ.length; i++){
                    var hour= jsonOBJ[i].clock;
                    var hourId= jsonOBJ[i].id;
                    var reservHour= jsonOBJ[i].reserved;
                    var resrvText="";

                    if(reservHour == 0){
                        resrvText = "آزاد";
                    }
                    else {
                        resrvText = "رزرو شده";
                    }


                    $(".hoursInner>.row").append('' +
                        '<div class="hourWrap col-md-2 col-xs-4 col-6">' +
                        '<div class="hour">' +
                        '<label for="'+hourId+'">' +
                        '<h3>'+hour+'</h3>' +
                        // '<p>'+resrvText+'</p>' +
                        '</label>' +
                        '<input class="hour1" onclick="showFinalBtn()"  type="radio" value="'+hourId+'" name="hourAjax" id="'+hourId+'">' +
                        '</div>' +
                        '</div>');
                }

            }
        }
    }

    xmlhttp.open("POST" , "/admin/delete_turn_get_appointment_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}


function sendData(){

    var dayId = $('input[name="dayAjax"]:checked').val();
    // var hourId = $('input[name="hourAjax"]:checked').val();
    var hourId = $(".hourWrap .clickFuncktion input").val();

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.responseText) {

            if(this.responseText == 0){
                alert("روز با موفقیت حذف شد.");
                location.reload();
            }

            else if(this.responseText == 1){
                alert("خطا!! روز پیدا نشد نشد.");
            }

            else if(this.responseText == 2){
                alert("ساعت با موفقیت حذف شد.");
                location.reload();
            }

            else if(this.responseText == 3){
                alert("خطا!! ساعت پیدا نشد نشد.");
            }

        }

    }

    xmlhttp.open("POST" , "/admin/delete_turn_upload" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("dayId=" + dayId +"&hourId=" + hourId)

}

function showDayEditPage(){


    $(".allweekdaysFirst").css("visibility", "visible");
    $(".allweekdaysFirst").css("transform", "scale(1)");

    // $(".hoursInnerFirst").slideUp();

    $(".weeksInner>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInner>.row>.hourWrap").remove();


    $(".allweeksdaysSecond").slideUp("fast");
    $(".hoursWrapper").slideUp("fast");
    $(".chair2NameWrapper").slideUp("fast");
    $(".hoursWrapperSecond").slideUp("fast");
    $(".deleteBtnWrapper").slideUp("fast");


    var id = $("#chairId option:selected").val();


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){

            if (this.responseText){


                var jsonOBJ = JSON.parse(this.responseText);



                for (var i=0; i<jsonOBJ.day_date.length; i++){
                    var dayName= jsonOBJ.day_name[i];
                    var dayDate= jsonOBJ.day_date[i];
                    var dayId= jsonOBJ.day_id[i];


                    $(".weeksInnerFirst>.swiper-container>.swiper-wrapper").append('' +
                        '<div class="swiper-slide" role="group">' +
                        '<div class="dayWrapper">' +
                        '<div class="day">' +
                        '<label onclick="showHourChangeTurnFirst('+dayId+')"  for="'+dayId+'">' +
                        '<h3>'+dayName+'</h3>' +
                        '<p>'+dayDate+'</p>' +
                        '</label>' +
                        '<input type="radio" value="'+dayId+'" name="dayAjax" id="'+dayId+'">' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    var swiper = new Swiper('.swiper-container3', {
                        navigation: {
                            nextEl: '.nextWeek3',
                            prevEl: '.prvWeek3',
                        },
                        slidesPerView: 2,
                        spaceBetween: 20,
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }
                    });
                }

            }

        }
    }

    xmlhttp.open("POST" , "/admin/change_turn_get_days_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function showHourChangeTurnFirst(id){


    $(".hoursInner>.row>.hourWrap").remove();
    $(".weeksInnerSecond>.swiper-container>.swiper-wrapper>.swiper-slide").remove();

    $(".hoursWrapperFirst").slideDown();

    $(".allweeksdaysSecond").slideUp("fast");
    $(".chair2NameWrapper").slideUp("fast");
    $(".hoursWrapperSecond").slideUp("fast");
    $(".deleteBtnWrapper").slideUp("fast");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){

            if (this.responseText){

                var jsonOBJ = JSON.parse(this.responseText);


                for (var i=0; i<jsonOBJ.length; i++){
                    var hour= jsonOBJ[i].clock;
                    var hourId= jsonOBJ[i].id;
                    var reservHour= jsonOBJ[i].reserved;
                    var resrvText="";

                    if(reservHour == 0){
                        resrvText = "آزاد";
                    }
                    else {
                        resrvText = "رزرو شده";
                    }


                    $(".hoursInnerFirst>.row").append('' +
                        '<div class="hourWrap hourWrap1 col-md-2 col-xs-4 col-6">' +
                        '<div class="hour" onclick="chair2WrapperShow()">' +
                        '<label for="'+hourId+'">' +
                        '<h3>'+hour+'</h3>' +
                        // '<p>'+resrvText+'</p>' +
                        '</label>' +
                        '<input class="hour1" type="radio" value="'+hourId+'" name="hourAjax" id="'+hourId+'">' +
                        '</div>' +
                        '</div>');

                }

            }
        }
    }

    xmlhttp.open("POST" , "/admin/change_turn_get_appointment_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function chair2WrapperShow(){
    $(".chair2NameWrapper").slideDown();

    $(".weeksInnerSecond>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInnerSecond>.row>.hourWrap").remove();

    $(".allweeksdaysSecond").slideUp("fast");
    $(".hoursWrapperSecond").slideUp("fast");
    $(".deleteBtnWrapper").slideUp("fast");
}

function showDayEditPageSecond(){


    // alert("second day");
    $(".allweeksdaysSecond").slideDown();

    $(".hoursWrapperSecond").slideUp("fast");
    $(".deleteBtnWrapper").slideUp("fast");

    $(".allweeksdaysSecond").css("visibility", "visible");
    $(".allweeksdaysSecond").css("transform", "scale(1)");


    $(".weeksInnerSecond>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInnerSecond>.row>.hourWrap").remove();

    var id = $("#chairId2 option:selected").val();


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            // alert("alert");
            if (this.responseText){


                var jsonOBJ = JSON.parse(this.responseText);


                for (var i=0; i<jsonOBJ.day_date.length; i++){
                    var dayName= jsonOBJ.day_name[i];
                    var dayDate= jsonOBJ.day_date[i];
                    var dayId= jsonOBJ.day_id[i];


                    $(".weeksInnerSecond>.swiper-container>.swiper-wrapper").append('' +
                        '<div class="swiper-slide" role="group">' +
                        '<div class="dayWrapper">' +
                        '<div class="day2">' +
                        '<label onclick="showHourChangeTurnSecond('+dayId+')"  for="q'+dayId+'">' +
                        '<h3>'+dayName+'</h3>' +
                        '<p>'+dayDate+'</p>' +
                        '</label>' +
                        '<input type="radio" value="'+dayId+'" name="dayAjaxSec" id="q'+dayId+'">' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    var swiper = new Swiper('.swiper-container', {
                        navigation: {
                            nextEl: '.nextWeek4',
                            prevEl: '.prvWeek4',
                        },
                        slidesPerView: 2,
                        spaceBetween: 20,
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }
                    });
                }

            }

        }
    }

    xmlhttp.open("POST" , "/admin/change_turn_get_free_days_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function showHourChangeTurnSecond(id){

    $(".hoursInnerSecond>.row>.hourWrap").remove();

    $(".deleteBtnWrapper").slideUp("fast");

    $(".hoursWrapperSecond").slideDown();

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){

            if (this.responseText){

                var jsonOBJ = JSON.parse(this.responseText);

                // console.log(jsonOBJ);

                for (var i=0; i<jsonOBJ.length; i++){
                    var hour= jsonOBJ[i].clock;
                    var hourId= jsonOBJ[i].id;
                    var reservHour= jsonOBJ[i].reserved;
                    var resrvText="";

                    if(reservHour == 0){
                        resrvText = "آزاد";
                    }
                    else {
                        resrvText = "رزرو شده";
                    }


                    $(".hoursInnerSecond>.row").append('' +
                        '<div class="hourWrap hourWrap2 col-md-2 col-xs-4 col-6">' +
                        '<div class="hour2">' +
                        '<label for="y'+hourId+'">' +
                        '<h3>'+hour+'</h3>' +
                        // '<p>'+resrvText+'</p>' +
                        '</label>' +
                        '<input class="hour1" onclick="showFinalBtn()"  type="radio" value="'+hourId+'" name="hourAjax2" id="y'+hourId+'">' +
                        '</div>' +
                        '</div>');
                }

            }
        }
    }

    xmlhttp.open("POST" , "/admin/change_turn_get_free_appointment_AJAX" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function showFinalBtn(){
    $(".deleteBtnWrapper").slideDown();
}

function sendDataTurnPage(){

    // var firstHour = $('input[name="hourAjax"]:checked').val();
    // var secondHour = $('input[name="hourAjax2"]:checked').val();

    var firstHour = $(".hourWrap1 .clickFuncktion input").val();
    var secondHour = $(".hourWrap2 .clickFuncktion2 input").val();

    // alert("firstHour:" +firstHour + "        secondHour:" + secondHour);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.responseText) {

            if(this.responseText == 0){
                alert("برای روز یک نوبتی ثبت نشده.");
            }

            else if(this.responseText == 1){
                alert("روز اول وجود ندارد.");
            }

            else if(this.responseText == 2){
                alert("روز دوم آزاد نیست.");
            }

            else if(this.responseText == 3){
                alert("روز دوم وجود ندارد.");
            }

            else if(this.responseText == 4){
                alert("جا به جایی با موفقیت انجام شد.");
                location.reload();
            }

        }

    }


    xmlhttp.open("POST" , "/admin/do_change_turn" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("firstHour=" + firstHour +"&secondHour=" + secondHour)

}






//////////////////////////////// reserve nobat tavasot admin


function showResAddTurn(){

    $(".allweeksdays").slideDown();

    $(".allweeksdays").css("visibility", "visible");
    $(".allweeksdays").css("transform", "scale(1)");

    var id = $("#chairIdAddTurn option:selected").val();
    $(".weeksInner>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInner>.row>.hourWrap").remove();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            // alert("alert");
            if (this.responseText){


                var jsonOBJ = JSON.parse(this.responseText);



                for (var i=0; i<jsonOBJ.day_date.length; i++){
                    var dayName= jsonOBJ.day_name[i];
                    var dayDate= jsonOBJ.day_date[i];
                    var dayId= jsonOBJ.day_id[i];


                    $(".weeksInner>.swiper-container>.swiper-wrapper").append('' +
                        '<div class="swiper-slide" role="group">' +
                        '<div class="dayWrapper">' +
                        '<div class="day">' +
                        '<label onclick="showHourAddTurn('+dayId+')"  for="'+dayId+'">' +
                        '<h3>'+dayName+'</h3>' +
                        '<p>'+dayDate+'</p>' +
                        '</label>' +
                        '<input type="radio" value="'+dayId+'" name="dayAjax" id="'+dayId+'">' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    var swiper = new Swiper('.swiper-container', {
                        navigation: {
                            nextEl: '.nextWeek2',
                            prevEl: '.prvWeek',
                        },
                        slidesPerView: 2,
                        spaceBetween: 20,
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }
                    });
                }

            }

        }
    }

    xmlhttp.open("POST" , "/admin/AJAX_reserve_appointment_DAYS" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function showFinalBtnAdd(){
    $(".addBtnWrapper").slideDown();
}

function showHourAddTurn(id){


    $(".hoursInner>.row>.hourWrap").remove();
    $(".deleteBtnWrapper").slideDown();
    $(".addBtnWrapper").slideUp();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){

            if (this.responseText){

                var jsonOBJ = JSON.parse(this.responseText);

                // console.log(jsonOBJ);

                for (var i=0; i<jsonOBJ.length; i++){
                    var hour= jsonOBJ[i].clock;
                    var hourId= jsonOBJ[i].id;
                    var reservHour= jsonOBJ[i].reserved;
                    var resrvText="";

                    if(reservHour == 0){
                        resrvText = "آزاد";
                    }
                    else {
                        resrvText = "رزرو شده";
                    }


                    $(".hoursInner>.row").append('' +
                        '<div class="hourWrap col-md-2 col-xs-4 col-6">' +
                        '<div class="hour" onclick="showFinalBtnAdd()">' +
                        '<label for="'+hourId+'">' +
                        '<h3>'+hour+'</h3>' +
                        // '<p>'+resrvText+'</p>' +
                        '</label>' +
                        '<input class="hour1" type="radio" value="'+hourId+'" name="hourAjax" id="'+hourId+'">' +
                        '</div>' +
                        '</div>');
                }

            }
        }
    }

    xmlhttp.open("POST" , "/admin/AJAX_reserve_appointment_APPOINTMENT" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}

function sendDataAddTurn(){

    var dayId = $(".dayWrapper .clickFuncktion input").val();
    var hourId = $(".hourWrap .clickFuncktion input").val();
    var name = $('input[name="name"]').val();
    var family = $('input[name="l_name"]').val();
    var number = $('input[name="mobile_number"]').val();


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.responseText) {

            if(this.responseText == 0){
                alert("فرمت نام فارسی نیست.");
            }

            else if(this.responseText == 1){
                alert("فرمت نام خانوادگی فارسی نیست.");
            }

            else if(this.responseText == 2){
                alert("فرمت شماره موبایل درست نیست.");
            }

            else if(this.responseText == 3){
                alert("فرمت روز نابعتبر است.");
            }

            else if(this.responseText == 4){
                alert("نوبت با موفقیت رزرو شد.");
                location.reload();
            }

            else if(this.responseText == 5){
                alert("نوبت یافت نشد.");
            }

            else if(this.responseText == 6){
                alert("نام را وارد کنید.");
            }

            else if(this.responseText == 7){
                alert("نام خانوادگی را وارد کنید.");
            }

            else if(this.responseText == 8){
                alert("شماره موبایل را وارد کنید.");
            }

        }

    }

    xmlhttp.open("POST" , "/admin/upload_reserve_appointment" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("dayId=" + dayId +"&hourId=" + hourId + "&userName=" + name + "&userFamily=" + family + "&userNumber=" + number)

}




// edit appointment page

function showDayRes(){

    $(".allweeksdays").slideDown();
    $(".timeSettingEditPage").slideUp();
    $(".sendEditDataBtnWrapper").slideUp();



    $(".allweeksdays").css("visibility", "visible");
    $(".allweeksdays").css("transform", "scale(1)");

    var id = $("#chairId option:selected").val();
    $(".weeksInner>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
    $(".hoursInner>.row>.hourWrap").remove();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            // alert("alert");
            if (this.responseText){


                var jsonOBJ = JSON.parse(this.responseText);


                // console.log(jsonOBJ);

                for (var i=0; i<jsonOBJ.length; i++){
                    var day = jsonOBJ[i];

                    $(".weeksInner>.swiper-container>.swiper-wrapper").append('' +
                        '<div class="swiper-slide" role="group">' +
                            '<div class="dayWrapper">' +
                                '<div class="day">' +
                                    '<label onclick="showDayResEdits('+day[3]+')"  for="'+day[3]+'">' +
                                        '<h3>'+day[1]+'</h3>' +
                                        '<p>'+day[0]+'</p>' +
                                    '</label>' +
                                    '<input type="radio" value="'+day[0]+'" name="dayAjax" id="'+day[3]+'">' +
                                '</div>' +
                            '</div>' +
                        '</div>');

                    var swiper = new Swiper('.swiper-container', {
                        navigation: {
                            nextEl: '.nextWeek2',
                            prevEl: '.prvWeek',
                        },
                        slidesPerView: 2,
                        spaceBetween: 20,
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }
                    });
                }

            }

        }
    }

    xmlhttp.open("POST" , "/admin/edit_appointments_AJAX_days" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + id)

}


function showDayResEdits(){

    $(".timeSettingEditPage").slideUp();
    $(".timeSettingEditPage").slideDown();

    $(".sendEditDataBtnWrapper").slideDown();
    var id = $("#chairId option:selected").val();

}





function sendEditData(){

    // $(".timeSettingEditPage").slideUp();
    // $(".timeSettingEditPage").slideDown();

    var barberId =  $('#chairId').val();
    var dayId = $('input[name="dayAjax"]:checked').val();
    var start_time_morning = $("input[name=start_time_morning]").val();
    var end_time_morning = $("input[name=end_time_morning]").val();
    var start_time_afternoon = $("input[name=start_time_afternoon]").val();
    var end_time_afternoon = $("input[name=end_time_afternoon]").val();
    var each_turn = $("input[name=each_turn]").val();


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if (this.readyState==4 && this.status==200){
            if (this.responseText) {

                if(this.responseText == 1){
                    alert('اگر زمان پایان صبح مشخص شده باشد باید زمان شروع ظهر مشخص باشد.');
                }

                else if(this.responseText == 3){
                    alert('زمان شروع صبح باید کوچک تر از زمان پایان در ظهر باشد.');
                }

                else if(this.responseText == 4){
                    alert('زمان شروع صبح باید کوچک تر از زمان پایان در ظهر باشد.');
                }

                else if(this.responseText == 5){
                    alert('زمان پایان صبح باید کوچک تر از زمان شروع در ظهر باشد.');
                }

                else if(this.responseText == 6){
                    alert('زمان شروع ظهر باید کوچک تر از زمان پایان در ظهر باشد.');
                }

                else if(this.responseText == 7){
                    alert('لطفا زمان بین هر ویزیت را وارد کنید.');
                }

                else if(this.responseText == 8){
                    alert('زمان شروع صبح نمی تواند خالی باشد.');
                }

                else if(this.responseText == 9){
                    alert('زمان پایان ظهر نمی تواند خالی باشد.');
                }

                else if(this.responseText == 10){
                    alert('مقدار وارد شده در زمان بین هر اصلاح عدد نیست.');
                }

                else if(this.responseText == 11){
                    alert('حداکثر مقدار وارد شده در زمان بین هر اصلاح باید 180 دقیقه باشد.');
                }

                else if(this.responseText == 12){
                    alert('حداقل مقدار وارد شده در زمان بین هر اصلاح باید 15 دقیقه باشد.');
                }

                else if(this.responseText == 13){
                    alert('روز وارد شده یافت نشد.');
                }


                else if(this.responseText == 14){
                    alert('اصلاح نویت انجام شد');
                    location.reload();
                }
                else if(this.responseText == 15){
                    alert('تاریخ و روز را انتخاب کنید.');
                }
                else if(this.responseText == 16){
                    alert('تاریخ و روز را وارد کنید.');
                }

            }
        }
    }
    xmlhttp.open("POST" , "/admin/do_edit_appointments" , true)
    xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
    xmlhttp.send("id=" + dayId + "&barber_id=" + barberId + "&start_time_morning=" + start_time_morning + "&end_time_morning=" + end_time_morning +"&start_time_afternoon=" + start_time_afternoon +"&end_time_afternoon=" + end_time_afternoon +"&each_turn=" + each_turn)

}

function showResDeleteTable(){
    $(".deleteBtnWrapper").slideDown();
}

function sendTableData(){
  	const textMsg = "آیا از حذف جدول مطمئن هستید؟ ";
    var doctorId = $("#chairId option:selected").val();
	
  	if( confirm(textMsg) == true ){
    	   var xmlhttp = new XMLHttpRequest();
    		xmlhttp.onreadystatechange = function (){
                  if (this.responseText) {

                  if(this.responseText == 0){
                      alert("جدول با موفقیت حذف شد.");
                      location.reload();
                  }

                  else if(this.responseText == 1){
                      alert("خطا!! جدول پیدا نشد نشد.");
                  }


              }

          }

        xmlhttp.open("POST" , "/admin/delete_table_upload" , true)
        xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
        xmlhttp.send("doctorId=" + doctorId)
    }
    



}