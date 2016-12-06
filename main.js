var test = {};

//Call JSON 
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "missionStatementSeed.json");
myRequest.send();

myRequest.addEventListener("load", parseWords); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

function executeThisCodeIfXHRFails() {
	alert("Please refresh");
}

//Parse JSON & assign to objects//call functions
function parseWords() {
	 test = JSON.parse(this.responseText);
	console.log("test", test);
}

//Randomly generate sentence

//Randomly generate words to go in sentence

//output to DOM