$( document ).ready(function() {

  $(".ham").on("click", function() {
      $(".ham").toggleClass("clicked");
      $(".links").slideToggle();
    });
    $("section.nav-mobile li").on("click", function() {
      $(".ham").toggleClass("clicked");
      $(".links").slideUp();
    });

    $("section.home .containerr .lead .left").hover(function() {
      $("section.home .containerr .lead .left .overlayl").toggleClass("transitionl");
      $(".center h2").toggleClass("transitionc");
      $("section.home .containerr .lead .left h2").toggleClass("transitionlead");
      $("section.home .containerr .lead .left h2").toggleClass("transitiontop");
      $("section.home .containerr .lead .left h3").toggleClass("transitionh3");
      $("section.home .containerr .lead .left h4").toggleClass("transitionh4");
      $("section.home .containerr .lead .left a").toggleClass("transitiona");
    });

    $("section.home .containerr .lead .right").hover(function() {
      $("section.home .containerr .lead .right .overlayr").toggleClass("transitionr");
      $("section.home .containerr .lead .right h2").toggleClass("transitionrh2");
      $("section.home .containerr .lead .right h3").toggleClass("transitionrh3");
      $("section.home .containerr .lead .right h4").toggleClass("transitionrh4");
      $("section.home .containerr .lead .right a").toggleClass("transitionra");
    });
  
  $(window).scroll(function(){

     if ($(window).scrollTop() > $(window).height()) {
         $('section.somos .contenedor').fadeIn(100);
     }

     else {
         $('section.somos .contenedor').fadeOut(100);
     }
  });

});
