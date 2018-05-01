$(function() {
	/****** Nav Slider for small Devices*******/
	$(".Menu").click(function() {
		$(".nav_slider").slideToggle();
	});

	/****** Mouseover content for  Nav ********/
	$(".introduction").mouseenter(function(){
		$(".nav_slider ul li:nth-child(1)").css("background-color", "black");
	});

	$(".introduction").mouseleave(function(){
		$(".nav_slider ul li:nth-child(1)").css("background-color", "inherit");
	});

	$("#direct_menu").mouseenter(function(){
		$(".nav_slider ul li:nth-child(2)").css("background-color", "black");
	});

	$("#direct_menu").mouseleave(function(){
		$(".nav_slider ul li:nth-child(2)").css("background-color", "inherit");
	});

	$("#about_us").mouseenter(function(){
		$(".nav_slider ul li:nth-child(3)").css("background-color", "black");
	});

	$("#about_us").mouseleave(function(){
		$(".nav_slider ul li:nth-child(3)").css("background-color", "inherit");
	});

	$("footer").mouseenter(function(){
		$(".nav_slider ul li:nth-child(4)").css("background-color", "black");
	});

	$("footer").mouseleave(function(){
		$(".nav_slider ul li:nth-child(4)").css("background-color", "inherit");
	});
});

