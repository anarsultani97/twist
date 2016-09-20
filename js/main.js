$(document).ready(function(){
			$(".nav li a").click(function(event){
				event.preventDefault();
				var element =$(this).attr('href');
				var top=$(""+element+"").offset().top;
				var scroll = top - $(".nav").height()
				$('html,body').animate({
				scrollTop:scroll
				},1000)
			})
			});