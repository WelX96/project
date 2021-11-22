//script hide main nav logo on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    var logoH =document.getElementById("navLogo").offsetHeight;
    var logoHM = logoH*(-1);
    document.getElementById("header").style.top = logoHM +"px";
  }
  prevScrollpos = currentScrollPos;
}
//remove/add animation classes at hover for 575px/sm and change #form class under 757 px/m
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 575) {
      $('.nav-link').removeClass('nav-ani');
    } else if (ww >= 576) {
      $('.nav-link').addClass('nav-ani');
    };
    if (ww < 766) {
      $('#form').removeClass('col-sm-8');
      $('#form').addClass('col-sm-12');
    } else if (ww >= 767) {
      $('#form').removeClass('col-sm-12');
      $('#form').addClass('col-sm-8');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
//initial function call
  alterClass();
});

//set margin top of main container
$(document).ready()
{
  var headerH=document.getElementById("header").offsetHeight;
    document.getElementById("m-container").style.marginTop=headerH+"px";
  window.onresize=function()
  {
    var headerH=document.getElementById("header").offsetHeight;
    document.getElementById("m-container").style.marginTop=headerH+"px";
  }
}
