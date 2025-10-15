///   <reference   types="../@types/jquery/" />

/* Change NavBar Background Color */
$(window).on("scroll", function () {
  if (window.scrollY > $("#about").offset().top - $("nav").outerHeight(true))
    $("nav").css("cssText", ` background-color :  green  !important ;`);
  else $("nav").css("cssText", `backgroundColor : reset !important `);
});
/* SmoothScroll  */
$("a").on("click", function (e) {
  const sectionName = $(e.target).attr("href");

  $("html").animate({ scrollTop: $(sectionName).offset().top }, 1000);
});
/* Loading Screen  */
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $(".loading").remove();
    });
  });
  $("body").css({ "overflow-y": "auto " });
});

/** Aside  */
$(".aside-icon").on("click", function () {
  if ($("aside").css("left") === "0px") {
    $("aside").animate({ left: -$(".aside-box").outerWidth(true) });
  } else {
    $("aside").animate({ left: "0px" });
  }
});

$(".colors span ").on("click", function (e) {
  $("p , h1 , h3  ,span , h4").css({
    color: $(e.target).css("backgroundColor"),
  });
});


$('.imges').on('click', function (e) {

    $('header').css('backgroundImage', `linear-gradient( rgba(0 0 0 /0.5 ) ,  rgba(0 0 0 /0.5 )  ) , url(${ $(e.target).attr('src')  })  ` )
}); 
