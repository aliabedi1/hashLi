$(document).ready(function () {

  $(".turnMenu").click(function () {
    $(".slide2").toggleClass("slide22");
    $(".menu21").addClass("menu211");

    $(".menu22").removeClass("menu222");
    $(".menu23").removeClass("menu233");
    $(".menu24").removeClass("menu244");

    $(".slide3").addClass("col-md-9");
    $(".slide3").toggleClass("col-md-10");

  });


  $(".userMenu").click(function () {
    $(".slide2").toggleClass("slide22");
    $(".menu22").addClass("menu222");

    $(".menu21").removeClass("menu211");
    $(".menu23").removeClass("menu233");
    $(".menu24").removeClass("menu244");

    $(".slide3").addClass("col-md-9");
    $(".slide3").toggleClass("col-md-10");

  });

  $(".archiveMenu").click(function () {
    $(".slide2").toggleClass("slide22");
    $(".menu23").addClass("menu233");

    $(".menu22").removeClass("menu222");
    $(".menu21").removeClass("menu211");
    $(".menu24").removeClass("menu244");


    $(".slide3").addClass("col-md-9");
    $(".slide3").toggleClass("col-md-10");

  });
  $(".settingMenu").click(function () {
    $(".slide2").toggleClass("slide22");
    $(".menu24").addClass("menu244");

    $(".menu22").removeClass("menu222");
    $(".menu21").removeClass("menu211");
    $(".menu243").removeClass("menu233");

    $(".slide3").addClass("col-md-9");
    $(".slide3").toggleClass("col-md-10");

  });


  $(".menu1 li").click(function () {
    $(this).toggleClass("liClickFunc");
    $(this).css("border-color", "#98c1d9");
    $(".menu1 li").not(this).removeClass("liClickFunc");

  });


  function docHeight() {
    var windowHeight;
    var slide3Height;
    slide3Height = $(".slide3").height();
    windowHeight = $(window).height();

    if (windowHeight < slide3Height) {
      $(".slide3").css("height", windowHeight - 2);
    }
    else {

    }
  }

});


$(document).ready(function () {
  
  $(document).on("click" , ".day" , function (){
    $(this).addClass("clickFuncktion");
    $(".day").not(this).removeClass("clickFuncktion");
  });
  
  $(document).on("click" , ".hour" , function (){
    $(this).addClass("clickFuncktion");
    $(".hour").not(this).removeClass("clickFuncktion");
  });
  
  
  $(document).on("click" , ".day2" , function (){
    $(this).addClass("clickFuncktion2");
    $(".day2").not(this).removeClass("clickFuncktion2");
  });
  
  $(document).on("click" , ".hour2" , function (){
    $(this).addClass("clickFuncktion2");
    $(".hour2").not(this).removeClass("clickFuncktion2");
  });

});

//
//
// $(document).ready(function () {
//   var swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.nextWeek2',
//       prevEl: '.prvWeek',
//     },
//     slidesPerView: 2,
//     spaceBetween: 20,
//     // init: false,
//     // autoplay: {
//     //     delay: 3500,
//     //     disableOnInteraction: false,
//     // },
//     // loop: true,
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 7,
//         spaceBetween: 20,
//       },
//     }
//   });
// });







  $(".dayCheck").click(function () {
    var prop = $(this).find("input").prop("checked");
    // alert(prop);
    if(prop == true){
        $(this).addClass("clickFuncktionTimeWork");
    }
    else if(prop == false){
        $(this).removeClass("clickFuncktionTimeWork");
    }
  });


// $(document).on("click" , ".dayCheck" , function (){
//   $(this).toggleClass("clickFuncktionTimeWork");
// });


$(document).ready(function () {


  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",

    slidesPerView: 3,
    spaceBetween: 20,

    mousewheel: true,

    // loop: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }

  });


});




$(document).ready(function () {


  imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }

  imgInp2.onchange = evt => {
    const [file] = imgInp2.files
    if (file) {
      blah2.src = URL.createObjectURL(file)
    }
  }

  imgInp3.onchange = evt => {
    const [file] = imgInp3.files
    if (file) {
      blah3.src = URL.createObjectURL(file)
    }
  }

  imgInp4.onchange = evt => {
    const [file] = imgInp4.files
    if (file) {
      blah4.src = URL.createObjectURL(file)
    }
  }
  imgInp5.onchange = evt => {
    const [file] = imgInp5.files
    if (file) {
      blah5.src = URL.createObjectURL(file)
    }
  }
  imgInp6.onchange = evt => {
    const [file] = imgInp6.files
    if (file) {
      blah6.src = URL.createObjectURL(file)
    }
  }

});


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








