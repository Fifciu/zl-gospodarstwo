(function(){
  var el = document.querySelector('div.header');
  if(el == null) {
    return;
  }

  window.addEventListener('scroll', function() {
    if(el.classList.contains('special')){
      if(window.scrollY < 100){
        el.classList.remove('special');
      }
    } else {
      if(window.scrollY >= 100){
        el.classList.add('special');
      }
    }
  });
})();

(function(){
  // Smooth scroll in menu
  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }


  function elmYPosition(eID) {
    var elm = document.querySelector(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }


  function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  }

  var mobileLinks = document.querySelectorAll('.mobile-link');
  if(mobileLinks) {
    for(var i = 0, len = mobileLinks.length; i < len; i++) {
      mobileLinks[i].addEventListener('click', function(){
        smoothScroll(mobileLinks[i].href);
      });
    }
  } else {
    var desktopLinks = document.querySelectorAll('.desktop-link');
    if(desktopLinks) {
      for(var i = 0, len = desktopLinks.length; i < len; i++) {
        desktopLinks[i].addEventListener('click', function(){
          smoothScroll(desktopLinks[i].href);
        });
      }
    }
  }
})();

// Show logo in top left corner
(function(){
  var el = document.querySelector('.logo__link');
  var targetEl = document.querySelector('#about');
  if(!el || !targetEl){
    return;
  }


  window.addEventListener('scroll', function(){
    var target = targetEl.offsetTop;

    if(window.scrollY >= target) {
      if(!el.classList.contains('visible')){
        el.classList.add('visible');
      }
    } else {
      if(el.classList.contains('visible')){
        el.classList.remove('visible');
      }
    }
  });

})();