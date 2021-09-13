const container=document.querySelector(".container");
const btn=document.querySelectorAll("button");
const txt=document.querySelector("h2");
const bg=document.querySelector(".bg");

document.addEventListener('click',function(e){
	if(e.target.className=='y'){
		txt.innerHTML="will you marry me?";
		bg.style.backgroundImage="url('img2.png')";
		btn[0].classList.replace('y','ya');
	}

	else if(e.target.className=='ya'){
		container.removeChild(btn[0]);
		container.removeChild(btn[1]);
		txt.innerHTML="me too hehe";
		txt.style.marginLeft="20px";
		txt.style.paddingTop="26px";
	}

	else if(e.target.className=='t'){
		container.removeChild(btn[0]);
		container.removeChild(btn[1]);
		bg.style.backgroundImage="url('3.png')";
		txt.innerHTML="Nooooo";
		txt.style.marginLeft="40px";
		txt.style.paddingTop="26px";
	}
})