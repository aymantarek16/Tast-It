//  Start Jquery
$(document).ready(function () {

  // Change BG-NavBar On Scroll
  $(window).scroll(function () {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 0) {
      $(".head").addClass("head2");
    } else {
      $(".head").removeClass("head2");
    }
  });
  
  $(".head li a").click(function () {
    let id = $(this).attr("id");
    $("html").animate({ scrollTop: $("." + id).offset().top -20}, 10);
  });
  
  // Change ScrollUp On Scroll 
  $(window).scroll(function () {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 200) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
      })
        // move Scroll Up to scrollTop: 0
    $(".scrollup").click(function () {
      $("body , html").animate({ scrollTop: 0 }, 10);
    });
  
      
  
  });
  //  End Jquery
  
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: 400,
  });
  
  // Home
  sr.reveal(`.carousel__h5` ,{ delay: 500 ,interval: 200, origin: "left"});
  sr.reveal(`.carousel__p`, { delay: 600 ,interval: 200, origin: "right"});
  sr.reveal(`.carousel__h6`, { delay: 900, interval: 300, origin: "bottom" });
  // about
  sr.reveal(`.formN`, { delay: 300 ,interval: 200, origin: "left"});
  sr.reveal(`.cheef`, { delay: 300 ,interval: 200, origin: "right"});
  // now
  sr.reveal(`.now__text`, { delay: 300 ,interval: 200, origin: "bottom"});
  // Our Master Chef
  sr.reveal(`.our`, { delay: 300 ,interval: 200, origin: "bottom"});
  // Perfect Ingredients
  sr.reveal(`.img1`, { delay: 300 ,interval: 200, origin: "left"});
  sr.reveal(`.img2`, { delay: 300 ,interval: 200, origin: "right"});
  // recent
  sr.reveal(`.recent__text`, { delay: 300 ,interval: 200, origin: "bottom"});
  sr.reveal(`.card`, { delay: 300 ,interval: 200, origin: "left"});
  // we
  sr.reveal(`.we__h2`, { delay: 300 ,interval: 200, origin: "top"});
  sr.reveal(`.we__link`, { delay: 300 ,interval: 200, origin: "bottom"});