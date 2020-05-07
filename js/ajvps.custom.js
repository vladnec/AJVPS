
var interval = 5000; // delay btween slides
var fxSpeed = 500;
var first = true;
var timer;

function slideShow(){
	
	clearTimeout(timer);
	
	var it = $("#slides");
	var last = it.children().last().index();
	
	if(last === 0) return false;
	else if(first) it.children("#slide01").fadeOut(fxSpeed,function(){
		//$(this).removeClass("active");
		$(this).next().fadeIn(fxSpeed);
		first = false;
		$('ul#slidesDots li a').removeClass('currentSlide').removeAttr('style');
		$('ul#slidesDots li').eq($(this).next().index()).children('a').addClass('currentSlide');
	})
	else{
		var current = it.children(":visible");
		current.fadeOut(fxSpeed);
		$('ul#slidesDots li a').removeClass('currentSlide').removeAttr('style');
		if(current.index() === last) {
			it.children().first().fadeIn(fxSpeed);
			$('ul#slidesDots li').eq(it.children().first().index()).children('a').addClass('currentSlide');
		}
		else{
			current.next().fadeIn(fxSpeed);
			$('ul#slidesDots li').eq(current.next().index()).children('a').addClass('currentSlide');
		}
		
	}
	timer = setTimeout("slideShow()", interval);
}


$(document).ready(function(){
	
	$('body').removeClass('noJS');
	
	
	
	$('#mainMenu li a').removeAttr('title');
		
	timer = setTimeout("slideShow()", interval);
	
	$('ul#mainMenu').children('li').each(function(){
		
		$(this).hoverIntent(function(){
			
			$('.submenu').fadeOut(100);
			
			$(this).children().first().animate({backgroundColor: '#d63e17', color: '#FFFFFF'}, 100);
			if($(this).children('ul').length > 0){
				$(this).children('ul').fadeIn(250);			
			}
			
		},function(){
			$(this).children().first().animate({backgroundColor: '#FFFFFF', color: '#3f3d3c'}, 100);
			if($(this).children('ul').length > 0){
				$(this).children('ul').fadeOut(250);			
			}
		});
		
	});
	$('ul#slidesDots li a').hover(function(){
		if($(this).hasClass('currentSlide')) return false;
		else $(this).animate({backgroundColor: '#15bae0'},200);
		
	},function(){
		if($(this).hasClass('currentSlide')) return false;
		else $(this).animate({backgroundColor: '#8adcef'},200);
	});
	
	$('ul#slidesDots li a').click(function(){
		
		clearTimeout(timer);
		first = false;
		
		$('ul#slidesDots li a').removeClass('currentSlide');
		
		var idx = $(this).parent().index();
		
		$('ul#slides li:visible').fadeOut(fxSpeed);
		$('ul#slides li').eq(idx).fadeIn(fxSpeed);
		
		$(this).addClass('currentSlide');
		
		timer = setTimeout("slideShow()", interval);
		
		return false; 
		
	});
	
	
	$('.light a').hover(function(){
		$(this).parent().animate({width: 165}, 150);
	},function(){
		$(this).parent().animate({width: 30}, 150);
	});
	
	
	$('div.viewPort1').css('height','320px');
	$('ul.pagination').show();
	
	var rowNr = Math.ceil($('ul#itemsList').height()/$('div.viewPort1').height());
	var rowHeight = $('div.viewPort1').height() + 10;
	
	$('ul.pagination li a').click(function(){
										   
		$('ul.pagination li a').removeClass('currentPG');
		
		var idx = $(this).parent().index();
		var topPos = 0;
		
		if(idx === 0) topPos = 0;
		else topPos = -(idx * rowHeight);
				
		$('ul#itemsList').animate({top: topPos+'px'},750, 'easeInOutSine');
		$(this).addClass('currentPG');
		
		return false;
	});
	
	//<img src="../images/vps_animalIcon-caprior.png" width="100" height="100" alt="Caprior" /><span>Caprior</span>
	
	$('#specii li a').hoverIntent(function(){
		$(this).children().last().fadeIn(100);
	}, function(){
		$(this).children().last().fadeOut(100);
	});
		
	
	var toAdd = '<div></div>';
	
	var formErrors = 0;
	$("form input[id!='email']").blur(function(){
				
		if($(this).val() === ""){
			
			if($(this).next().is('label')){
				$(this).after('<div class="wrong"></div>');
				$(this).next().fadeIn(200);	
			}
			else if($(this).next().attr('class') === 'right'){
				$(this).next().fadeOut(200, function(){
					$(this).attr('class','wrong');
					$(this).fadeIn(200);				
				});
			}
			
			formErrors+=1;
		}
		else{
			if($(this).next().is('label')){
				$(this).after('<div class="right"></div>');
				$(this).next().fadeIn(200);	
			}
			else if($(this).next().attr('class') === 'wrong'){
				$(this).next().fadeOut(200, function(){
					$(this).attr('class','right');
					$(this).fadeIn(200);
				});
				
			}
			if (formErrors > 0) formErrors-=1;
		}
		
		return false;	
	});
	
	$("form input#email").blur(function(){
		if($(this).val() === ""){			
			if($(this).next().is('label')){
				$(this).after('<div class="wrong"></div>');
				$(this).next().fadeIn(200);	
			}
			else if($(this).next().attr('class') === 'right'){
				$(this).next().fadeOut(200, function(){
					$(this).attr('class','wrong');
					$(this).fadeIn(200);				
				});
			}
			formErrors+=1;
			return false;
		}
		else{
			if (formErrors > 0) formErrors-=1;
			
			var atIndex = $(this).val().indexOf('@');
			var dotIndex = $(this).val().lastIndexOf('.');	
		
			if (atIndex<1||dotIndex-atIndex<2){
				if($(this).next().is('label')){
					$(this).after('<div class="wrong"></div>');
					$(this).next().fadeIn(200);	
				}
				else if($(this).next().attr('class') === 'right'){
					$(this).next().fadeOut(200, function(){
						$(this).attr('class','wrong');
						$(this).fadeIn(200);				
					});
				}
				formErrors+=1;
				return false;
			}
			else{
				if($(this).next().is('label')){
					$(this).after('<div class="right"></div>');
					$(this).next().fadeIn(200);	
				}
				else if($(this).next().attr('class') === 'wrong'){
					$(this).next().fadeOut(200, function(){
						$(this).attr('class','right');
						$(this).fadeIn(200);
					});
					
				}
				if (formErrors > 0) formErrors-=1;
			}
		}
		
		return false;
	});
	
	
	$("form #submit").click(function(){
						
		$('input[type="text"]').blur();
		
		if(formErrors === 0){
		
			var dataString='name='+$("input#name").val()+'&phone='+$("input#phone").val()+'&email='+$("input#email").val()+'&message='+$("textarea#message").val();
			
			$.ajax({
      			type: "POST",
      			url: "submitForm.php",
      			data: dataString,
      			success: function(r) {	
					$("form").html("<h4>Mesajul dumneavoastra a fost transmis echipei noastre. Va vom contacta in cel mai scurt timp posibil.</h4><h3> Va multumim pentru interesul acordat!</h4>");
				}
     		});
		
			return false;
		
		}
		
		else{
			alert("Va rugam sa completati toate campurile evidentiate.");
			return false;
		}
		
		return false;
		
	});
	
	
	$('.item').hoverIntent(function(){$(this).children('.itemText').fadeIn(100);},function(){$(this).children('.itemText').fadeOut(100);});
	
	$('#galerieFoto .item a').lightBox();

});