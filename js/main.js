$(document).ready(function(){
			$("#menu li a ").click(function(event){
				event.preventDefault();
				var element =$(this).attr('href');
				var top=$(""+element+"").offset().top;
				var scroll = top - $("#menu").height()
				$('html,body').animate({
				scrollTop:scroll
				},600)
			})
			});