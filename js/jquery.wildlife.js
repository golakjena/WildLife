;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function fixNav(){
		$(window).on("scroll", function(){
			var topScroll = $(this).scrollTop();
			if(topScroll > 115){
				$(".header").addClass("fixHeader");
			}
			else{
				$(".header").removeClass("fixHeader");	
			}
		});
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var right = parseInt($(".topNav").css("right"));
			if(right == -200){
				$(this).animate({
					right:200
				}, 300);
				$(".topNav").animate({
					right:0
				}, 300);
			}
			else{
				$(this).animate({
					right:0
				}, 300);
				$(".topNav").animate({
					right:-200
				}, 300);	
			}

		});
	}

	function heading(){
		$(".heading2").css({opacity:0});
		$(".heading2").waypoint(function() {
            $(".heading2").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '85%',
            triggerOnce: true
        });
	}

	function navigation(){
		$(".navList li a").each(function(){
			$(this).on("click", function(){
				var headerHeight = $(".header").outerHeight();
				var winWidth = $(window).width();
				var target = $(this).attr("href");
				$("html, body").animate({
					scrollTop:$(target).offset().top-headerHeight
				}, 300);

				if(device || winWidth <= 767){
					$(".btnMobileNav").animate({
						right:0
					}, 300);
					$(".topNav").animate({
						right:-200
					}, 300);
				}

				return false;
			});
		});
	}
	


	$(function(){
		fixNav();
		mobileNav();
		navigation();
		if(!device){
			heading();
		}
		$(window).on("resize", function(){
			var winWidth = $(window).width();
			if(winWidth > 767){
				$(".topNav").removeAttr("style");
			}
		});
	});

})(jQuery);




