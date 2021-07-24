//----------------------------------------------------
var side = document.querySelector(".side");
var toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
	side.classList.toggle("closed");
});
//----------------------------------------------------
if (screen.width < 600){
	$(".side").addClass("closed");
}else{
	if(screen.width < 1024){
		$(".side").removeClass("closed");
	}else{
		$(".side").removeClass("closed");
	}
}
//----------------------------------------------------
$(window).resize(function() {
	if (screen.width < 600){
		$(".side").addClass("closed");
	}else{
		if(screen.width < 1024){
			$(".side").removeClass("closed");
		}else{
			$(".side").removeClass("closed");
		}
	}
});