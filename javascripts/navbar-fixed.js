$(window).scroll(function(){
	var menu= $(this).scrollTop();
	if (menu > 650){
		$(".navbar").addClass("scroll")
	}
	else if (menu < 500){
		$(".navbar").removeClass("scroll");
	}
});





$(document).ready(function(){
    $(".exterior").hover(function(){
        $(".text-oculto").toggleClass("hidden");
        $(".interno-overlay").toggleClass("hidden");
    });
});