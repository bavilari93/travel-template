$(()=>{

	var home_class= document.getElementById('home').querySelectorAll('img');

	home_class.forEach(e=>{
		$(e).on("mouseenter",()=>{
			var  text= $(e).attr('alt')
			e.style.opacity = "0.5"
			e.style.cursor="pointer"
		})
		$(e).on("mouseleave", ()=>{
			e.style.opacity ="1"
		})
	})
	

$(".upper-icon").on("click",()=>{
	
	var section = document.querySelector('.selection');
	
	if (section.style.display=='inline'){
		section.style.display='none';
		 $("html, body").animate({ scrollTop: 0 }, "slow");	
	}else{
		section.style.display='inline';
		 
	}
	
})

})


