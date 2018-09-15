$(function(){
	$(".nav_tab ul li").eq(0).addClass("xia")
	$(".nav_tab ul li").click(function(){
		$(this).addClass("xia")
		$(this).siblings().removeClass("xia")
	})
})
