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
