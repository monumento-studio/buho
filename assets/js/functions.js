$( document ).ready(function() {

  $(".ham").on("click", function() {
      $(".ham").toggleClass("clicked");
      $(".links").slideToggle();
    });
    $("section.nav-mobile li").on("click", function() {
      $(".ham").toggleClass("clicked");
      $(".links").slideUp();
    });

    $("section.home .containerr .lead .left h2").mouseenter(function() {
      $("section.home .containerr .lead .left .overlayl").addClass("transitionl");
      $(".center h2").addClass("transitionc");
      $("section.home .containerr .lead .left h2").addClass("transitionlead");
      $("section.home .containerr .lead .left h2").addClass("transitiontop");
      $("section.home .containerr .lead .left h3").addClass("transitionh3");
      $("section.home .containerr .lead .left h4").addClass("transitionh4");
      $("section.home .containerr .lead .left a").addClass("transitiona");
      $("section.home .contenedor .menu-ex .links").css("z-index", "0");
    });

    $("section.home .containerr .lead .right").hover(function() {
      $("section.home .containerr .lead .left .overlayl").removeClass("transitionl");
      $(".center h2").removeClass("transitionc");
      $("section.home .containerr .lead .left h2").removeClass("transitionlead");
      $("section.home .containerr .lead .left h2").removeClass("transitiontop");
      $("section.home .containerr .lead .left h3").removeClass("transitionh3");
      $("section.home .containerr .lead .left h4").removeClass("transitionh4");
      $("section.home .containerr .lead .left a").removeClass("transitiona");
      $("section.home .contenedor .menu-ex .links").css("z-index", "2");
    });


    $("section.home .containerr .lead .right h2").mouseenter(function() {
      $("section.home .containerr .lead .right .overlayr").addClass("transitionr");
      $("section.home .containerr .lead .right h2").addClass("transitionrh2");
      $("section.home .containerr .lead .right h3").addClass("transitionrh3");
      $("section.home .containerr .lead .right h4").addClass("transitionrh4");
      $("section.home .containerr .lead .right a").addClass("transitionra");
      $("section.home .contenedor .menu-ex .links").css("z-index", "0");
    });
    $("section.home .containerr .lead .left").hover(function() {
      $("section.home .containerr .lead .right .overlayr").removeClass("transitionr");
      $("section.home .containerr .lead .right h2").removeClass("transitionrh2");
      $("section.home .containerr .lead .right h3").removeClass("transitionrh3");
      $("section.home .containerr .lead .right h4").removeClass("transitionrh4");
      $("section.home .containerr .lead .right a").removeClass("transitionra");
      $("section.home .contenedor .menu-ex .links").css("z-index", "2");
    });

  $(window).scroll(function(){

     if ($(window).scrollTop() > $(window).height()) {
         $('section.somos .contenedor').fadeIn(400);
     }

     else {
         $('section.somos .contenedor').fadeOut(400);
     }
  });

});
