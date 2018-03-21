$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('.nav').addClass('change');
    }
    else {
      $('.nav').removeClass('change');
    }

    let Y = pageYOffset;
    console.log(Y);
  
    // if(Y>=0 && Y<756){
    //   $('#m1').addClass('onto');
    //   $('#m1').mouseover(function(e){
    //   $('#m1').removeClass('onto');
    //   })
    //   $('#m1').mouseleave(function(e){
    //   $('#m1').addClass('onto');
    //   });
    // }
    // else{$('#m1').removeClass('onto');}
    
    // if(Y>756 && Y<1500){$('#m2').addClass('onto');}
    // else{$('#m2').removeClass('onto');}
    
    // if(Y>1500 && Y<2300){$('#m3').addClass('onto');}
    // else{$('#m3').removeClass('onto');}
    
    // if(Y>2300){$('#m4').addClass('onto');}
    // else{$('#m4').removeClass('onto');}

  });
  
  // var wH = $(window).height();
  // console.log(wH);

});