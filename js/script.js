window.addEventListener('load', function() {
	document.getElementById("menu-button").addEventListener("click", showMenu);
	document.getElementById("exit").addEventListener("click", hideMenu);
	document.getElementById("speakers-button").addEventListener("click", showSpeakers);
});

function showMenu() {	
	document.getElementById("mobile-menu").style.marginTop = "0";
	document.getElementById("menu-button").style.marginTop = "500px";
	document.getElementById("logo-green").style.display = "block";
}
	
function hideMenu() {
	document.getElementById("mobile-menu").style.marginTop = "-510px";
	document.getElementById("menu-button").style.marginTop = "0";	
	document.getElementById("logo-green").style.display = "none";
}

function showSpeakers(e) {           
	e.preventDefault();
	var speakers = document.getElementsByClassName("hidden-speaker");
	if (document.getElementById("btn-bold").innerHTML == "All") {
		document.getElementById("btn-bold").innerHTML = "Hide";
		for  (i = 0; i < speakers.length; i++) {
			speakers[i].style.display = "inline-block";
		}	
	} else {
		for  (i = 0; i < speakers.length; i++) {
			speakers[i].style.display = "none";
		}
		document.getElementById("btn-bold").innerHTML = "All"
	}
}
