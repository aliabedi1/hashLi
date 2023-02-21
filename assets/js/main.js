var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
     autoplay: {
         delay: 3500,
         disableOnInteraction: false,
     },
  });


$(document).ready(function () {
  var index = 0;
  $(".showMore").click(function () { 
    $(".showMoreWrapper").slideToggle();

    if (index % 2 == 0){
      $(".showMore p").html("مشاهده کمتر");
    }

    else{
      $(".showMore p").html("مشاهده بیشتر");
    }
    
    index++;
  });

});

////////////// search
$(".searchIcon").click(function (e) { 
  $(".searchBoxWrapper").slideToggle();
  
});
/////////////// end of search




////////////// get code

// $("#getCode").click(function (e) {
//   $("#accCode").slideDown();
// });

////////////// end get code




/////////////
$(".loginIcon").click(function (e) { 
  $(".registerIcon").toggleClass("registerIconAddClass");
  $(".profModal").slideToggle();
});



// login singup page
$(".singupBtn").click(function () { 
  $(".singupFormWrapper").slideDown("slow");
  $(".loginFormWrapper").slideUp("fast");
  // $(".bgWrapper img").addClass("bgWrapperFlip");
  $(".bgWrapper img").css("transform", "scaleX(-1)");
});

$(".loginBtn").click(function () { 
  $(".singupFormWrapper").slideUp("fast");
  $(".loginFormWrapper").slideDown("slow");
  $(".bgWrapper img").css("transform", "scaleX(1)");
});






// nobat dehi

$(document).ready(function () {

  $(".hour").click(function () {
    $(this).addClass("clickFuncktion");
    $(".hour").not(this).removeClass("clickFuncktion");
  });

  $(".day").click(function () {
    $(this).addClass("clickFuncktion");
    $(".day").not(this).removeClass("clickFuncktion");
  });


  $(".nobatBtn").click(function () {
    $(".chairs").slideDown();
  });

  $(".chair").click(function () {
    $(this).addClass("chairClick");
    $(".chair").not(this).removeClass("chairClick");


    // $(".dayWeekWrapper").show();
    $(".dayWeekWrapper").css("visibility", "visible");
    $(".dayWeekWrapper").css("transform", "scale(1)");

  });



  $(".day").click(function () {
    $(".hoursWrapper").slideDown();
  });




  $(".hour").click(function () {
    $(".namePriceWrapper").slideDown();
  });



});




$(document).ready(function () {


  
$(document).ready(function () {

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.nextWeek2',
      prevEl: '.prvWeek',
    },
    slidesPerView: 2,
    spaceBetween: 20,
    // init: false,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: true,
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

});




  var swiper = new Swiper('.mySwiper2', {
    navigation: {
      nextEl: '.nextWeek2',
      prevEl: '.prvWeek',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    // init: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    }
  });


  

});

// end of nobat dehi



















































$(document).on("click" , ".day" , function (){
  $(".hoursWrapper").slideDown();

  $(this).addClass("clickFuncktion");
  $(".day").not(this).removeClass("clickFuncktion");
});

$(document).on("click" , ".hour" , function (){
  $(".namePriceWrapper").slideDown();

  // var test = $(this).find('.hour1').val();
  // $(this).find('.hour1').attr('checked', true);
  // alert(test);
  // console.log(test);

  $(this).addClass("clickFuncktion");
  $(".hour").not(this).removeClass("clickFuncktion");
  $(this).find('.hour1').attr('checked', true);

  // alert($(this).find('.hour1').val());
});




$(".userInfo").click(function () {
  $(".userInfoInner").slideToggle();
});

$(".close").click(function () {
  $(".userInfoInner").slideUp();
});

$('body').click(function(evt){
  if(!$(evt.target).is('.userInfo , .userInfo .fa-user')) {
    $(".userInfoInner").slideUp();
  }
});


$(document).on("click" , ".hour" , function (){
  $(this).find('.hour1').attr('checked', true);
});

// nobat dehi ajax
function showRes(id){

  $(".weeksInner>.swiper-container>.swiper-wrapper>.swiper-slide").remove();
  $(".hoursInner>.row>.hourWrap").remove();

  $(".codeBoxHolder").slideUp();
  $(".hoursWrapper").slideUp();

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function (){
    if (this.readyState==4 && this.status==200){

      if (this.responseText){


        // console.log(this.responseText);
        var jsonOBJ = JSON.parse(this.responseText);


        for (var i=0; i<jsonOBJ.day_date.length; i++){
          var dayName= jsonOBJ.day_name[i];
          var dayDate= jsonOBJ.day_date[i];
          var dayId= jsonOBJ.day_id[i];


          $(".weeksInner>.swiper-container>.swiper-wrapper").append('' +
              '<div class="swiper-slide" role="group">' +
              '<div class="dayWrapper">' +
              '<div class="day">' +
              '<label onclick="showRes2('+dayId+')"  for="'+dayId+'">' +
              '<h3>'+dayName+'</h3>' +
              '<p>'+dayDate+'</p>' +
              '</label>' +
              '<input type="radio" value="" name="day" id="'+dayId+'">' +
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
            // init: false,
            // autoplay: {
            //     delay: 3500,
            //     disableOnInteraction: false,
            // },
            // loop: true,
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

  xmlhttp.open("POST" , "/index/ajax_get_days" , true)
  xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
  xmlhttp.send("id=" + id)

}














function showRes2(id){

  $(".hoursInner>.row>.hourWrap").remove();
  $(".hoursWrapper").slideDown();
  $(".codeBoxHolder").slideUp();


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
              '<div class="hour" onclick="fixSelect()">' +
              '<label for="'+hourId+'">' +
              '<h3>'+hour+'</h3>' +
              // '<p>'+resrvText+'</p>' +
              '</label>' +
              '<input class="hour1" type="radio" value="'+hourId+'" name="appointment_id" id="'+hourId+'">' +
              '</div>' +
              '</div>');
        }

      }
    }
  }

  xmlhttp.open("POST" , "/index/AJAX_get_appointment" , true)
  xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
  xmlhttp.send("id=" + id)

}



function sendRes(){

  var fullName =  $(".fullnameInput").val();
  // var turnId = $('input[name="appointment_id"]:checked').val();
  var turnId = $(".hourWrap .clickFuncktion input").val();

  $(".codeBoxHolder").slideDown();



  var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function (){
  //
  // }

  xmlhttp.open("POST" , "/index/reserve_appointment" , true)
  xmlhttp.setRequestHeader("Content-type" , "application/x-www-form-urlencoded")
  xmlhttp.send("turnId=" + turnId +"&fullName=" + fullName)

}












































// change password page

function changePass() {

  var old_pass = $('input[name="old_pass"]').val();
  var password = $('input[name="password"]').val();
  var password2 = $('input[name="password2"]').val();


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.responseText) {

      console.table(this.responseText);

      if (this.responseText == 1) {
        $('.errorMsg').html('رمز عبور قدیمی اشتباه وارد شده است.')
      }
      else if (this.responseText == 2) {
        $('.errorMsg').html('رمز عبور ها یکسان نیستند.')
      }
      else if (this.responseText == 3) {
        $('.errorMsg').html('رمز عبور با موفقیت تغییر کرد.')
        setTimeout(function (){
          location.reload();
        },1500)
      }

      else {
        $('.errorMsg').html(this.responseText.replace('"', '').slice(0, -1))
      }

    }

  }

  xmlhttp.open("POST", "/index/upload_change_password", true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("old_pass=" + old_pass + "&new_pass=" + password + "&new_pass2=" + password2)
}










// change mobile number
function changeMobileNumber() {

  var mobileNumber = $('input[name="mobile_number"]').val();


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.responseText) {

      if (this.responseText == 1) {
        $('.errorMsg2').html('کد تایید ارسال شد.');
        $("#accCode").slideDown();
        $(".numberHolder").slideUp();
      }
      else if (this.responseText == 0) {
        $('.errorMsg2').html('کد تایید برای این شماره از قبل ارسال شده است.');

      }
      else {
        $('.errorMsg2').html(this.responseText.replace('"', '').slice(0, -1))
      }

    }

  }

  xmlhttp.open("POST", "/index/upload_change_mobile_number", true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("mobile_number=" + mobileNumber)
}

// send verify code
function sendVrifyCode() {

  var code = $('input[name="code"]').val();


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.responseText) {

      if (this.responseText == 1) {
        $('.errorMsg2').html('شماره ی موبایل با موفقیت تغییر کرد.');
        setTimeout(function (){
          location.reload();
        },2000)
      }
      else if (this.responseText == 2) {
        $('.errorMsg2').html('کد وارد شده اشتباه است.');
      }
      else if (this.responseText == 3) {
        $('.errorMsg2').html('کد وارد شده اشتباه است.');
      }

      else {
        $('.errorMsg2').html(this.responseText.replace('"', '').slice(0, -1))
      }

    }

  }

  xmlhttp.open("POST", "/index/upload_verify_mobile_number", true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("code=" + code)
}











// change email
function changeEmail() {

  var email = $('input[name="email"]').val();


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.responseText) {

      if (this.responseText == 1) {
        $('.errorMsg3').html('پست الکترونیکی با موفقیت تغییر کرد.');
        setTimeout(function (){
          location.reload();
        },2000)
      }
      else {
        $('.errorMsg3').html(this.responseText.replace('"', '').slice(0, -1));
      }

    }

  }

  xmlhttp.open("POST", "/edit_user/update_user", true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("email=" + email)
}














// singup send data
function singupData() {

  var fullnameInp      = $('input[name="fullname"]').val();
  var usernameInp      = $('input[name="username"]').val();
  var emailInp         = $('input[name="email"]').val();
  var mobile_numberInp = $('input[name="mobile_number"]').val();
  var passwordInp      = $('input[name="password"]').val();


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.responseText) {

      const data = JSON.parse(this.responseText)

      $('.fullnameError p').html(data.fullname);
      $('.usernameError p').html(data.username);
      $('.emailError p').html(data.email);
      $('.numberError p').html(data.mobile_number);
      $('.passwordError p').html(data.password);

      if (this.responseText == 1){
        // alert('worked');
        window.location.replace('/signup/verify_mobile_number');
      }
    }

  }

  xmlhttp.open("POST", "/signup/insert", true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("fullname=" + fullnameInp + "&username=" + usernameInp + "&email=" + emailInp + "&mobile_number=" + mobile_numberInp + "&password=" + passwordInp)
}











// live search
function liveSearch() {

  var dataInp = $('input[name="search"]').val();
  $(".searchResult>p").remove();

  if (dataInp.length == 0){
    $('.searchResult').slideUp();
  }

  // alert(dataInp);


  else if(dataInp.length >= 0){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState==4 && this.status==200) {

        if (this.responseText) {
          $('.searchResult').slideDown();
          const data = JSON.parse(this.responseText);
          console.table(data.result);

          if (data.check == 0){
            for (var i = 0; i < data.result.length; i++) {
              $(".searchResult").append('<p><a href="/article/show_article/'+ data.result[i].id +'">'+ data.result[i].title.substring(0,30) +' ...</a></p>\n');
            }
          }

          else if(data.check == 1){
            $(".searchResult").append('<p>نتیجه ای یافت نشد</p>')
          }
        }

      }
    }

    xmlhttp.open("POST", "/article/article_search", true)
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlhttp.send("search=" + dataInp)
  }
}