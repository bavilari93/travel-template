$(()=>{
	console.log('works');
	var home_class= document.getElementById('home').querySelectorAll('img');

console.log(home_class);
	home_class.forEach(e=>{
		$(e).on("mouseenter",()=>{
			var  text= $(e).attr('alt')
			e.style.opacity = "0.5"
			e.style.cursor="pointer"
			e.innerHTML += text;
		})
		$(e).on("mouseleave", ()=>{
			e.style.opacity ="1"
		})
	})
	



})


