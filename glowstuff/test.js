document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var instance = M.Carousel.init({
    fullWidth: true,
  });
});

var first_click = true;
var stuff;
function glow() {
    if (first_click) {

        var i = 0;
        var act = document.getElementById('myGlower').getElementsByClassName('carousel-item active');
        console.log(act);
        var glow = document.getElementById('myGlower');
        stuff = setInterval(function(){
            if(i == 0) {
                glow.setAttribute('class','active');
                i++;}
        },10);
        first_click = false;
    } else {

      var glow = document.getElementById('myGlower');
      glow.removeAttribute('class');
      console.log(glow);
      clearInterval(stuff);
      first_click = true;

      return;
  }
}
