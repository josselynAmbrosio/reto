$(window).scroll(function(){
	var navegador= $(this).scrollTop();
	if (navegador > 650){
		$(".navbar").addClass("scroll");
		$(".navbar-brand").removeClass("hidden")
	}
	else if (navegador < 500){
		$(".navbar").removeClass("scroll");
		$(".navbar-brand").addClass("hidden")

	}
});





$(document).ready(function(){
    $(".externo").hover(function(){
        $(".texto-interno").toggleClass("hidden");
        $(".interno-overlay").toggleClass("hidden");
    });
});


