$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('.nav').addClass('change');
    }
    else {
      $('.nav').removeClass('change');
    }

    let Y = window.pageYOffset;
    
    if(Y>=-5 && Y<$('#technology').offset().top-100){
      $('#m1').addClass('onto');
    }
    else{$('#m1').removeClass('onto');};
    
    if(Y>$('#technology').offset().top-100 && Y<$('#future').offset().top-100){$('#m2').addClass('onto');}
    else{$('#m2').removeClass('onto');};
    
    if(Y>$('#future').offset().top-100 && Y<$('#joinUs').offset().top-100){$('#m3').addClass('onto');}
    else{$('#m3').removeClass('onto');};
    
    if(Y>$('#joinUs').offset().top-100){$('#m4').addClass('onto');}
    else{$('#m4').removeClass('onto');};

  });
  
  var wH = $(window).height();
  // console.log(wH);

});