$(document).ready(function(){
	registerAllEvents();

	loadAllSettings();
});

function loadAllSettings() {
	var e = document.getElementsByTagName("input");
	for (key in e) {
		getSetting(e[key]);
	}
}


function setSetting(e, val) {
	localStorage[e.id] = (val == undefined)?"":val;
}

function getSetting(e) {
	document.getElementById(e.id).value = (localStorage[e.id]==undefined)?"":localStorage[e.id];
}


function registerAllEvents() {
	document.querySelector("#host").onkeyup = function() {
		setSetting(this, this.value);
	};
	
	document.querySelector("#port").onkeyup = function() {
		setSetting(this, this.value);
	};
	
	document.querySelector("#login").onkeyup = function() {
		setSetting(this, this.value);
	};

}