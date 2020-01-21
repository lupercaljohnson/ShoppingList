

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", ".amountti", function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", ".roskis", function(event){
	$(this).parent().fadeOut(500, function	(){
			$(this).remove();
	});
	event.stopPropagation(); //estää kuplimisen
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grappingn new todo text from input
		var todoText = ($(this).val());
		var shoppinAmount = ($("input[type='number']").val());
		$(this).val("");
		//create new li and to ul
		$("ul").append("<li><span class='roskis'><i class='fas fa-trash'></i></span> " + todoText + "<span class='amountti'>" + shoppinAmount + "</span></li>");
	}
});

$("input[type='number']").keypress(function(event){
	if(event.which === 13){
		//grappingn new todo text from input
		var todoText = ($("input[type='text']").val());
		var shoppinAmount = ($("input[type='number']").val());
		$("input[type='text']").val("");
		$("input[type='number']").val("");
		//create new li and to ul
		$("ul").append("<li><span class='roskis'><i class='fas fa-trash'></i></span> " + todoText + "<span class='amountti'>" + shoppinAmount + "</span></li>");
	}
});

$(".fa-shopping-bag").click(function(){
	$("input").fadeToggle();
})