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
		console.log('test');
		section.style.display='none';	
	}else{
		console.log("is off");
		section.style.display='inline';
		 
	}
	
})

})


