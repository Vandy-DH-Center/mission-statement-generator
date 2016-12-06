var text = {};
var missionStatement = "";
//Call JSON 
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "missionStatementSeed.json");
myRequest.send();

myRequest.addEventListener("load", parseText); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

function executeThisCodeIfXHRFails() {
	alert("Please refresh");
}

//Parse JSON & assign to objects//call functions
function parseText() {
	 text = JSON.parse(this.responseText);
	console.log("text", text);
	generateSentences(text.sentences);
	// parseAdjectives(test.adjectives);
}

//Randomly generate sentence
function generateSentences(sentences){
	var randomSentence = randomNumber(sentences.sentence);
	console.log("randomSentence", randomSentence);
	parseSentence(randomSentence);

}
function generateWord(words, word){
	var randomWord = randomNumber(words.word);
	return randomWord;
}

function randomNumber(myArray){
	 var random = myArray[Math.floor(Math.random() * myArray.length)];
	 return random;
	 console.log("random", random);

}
function parseSentence(sentence) {
	console.log("sentence", sentence);
	var adjectives = text.adjectives;
	adjectives = adjectives.adjective
	var nouns = text.nouns;
	nouns = nouns.noun;
	var verbs = text.verbs;
	verbs = verbs.verb;

	var completedSentence = sentence.replaceWords({noun: nouns, adjective:adjectives, verb:verbs});
	
	// return sentence.replace(/<(.*?)>/g, function(match) {
 //    	match = match.replace(/<|>/g,'');
 //    	return options[match][Math.floor(Math.random()*options[match].length)];
 //  	});
  	console.log("sentence", completedSentence);
	// console.log("sentence", sentence);
	// var noun = /_noun_/gi;
	// var verb = /_verb_/gi;
	// var adjective = /_adjective_/gi;
	// var adverb = /_adverb_/gi;
	// var matchesNoun = sentence.match(noun);
	// console.log(matchesArray);
}
//Randomly generate words to go in sentence
String.prototype.replaceWords = function(hash){
		 var string = this,
        				key,
        				entry;

    	for (key in hash) {
	        if (hash.hasOwnProperty(key)) {
	            entry = hash[key]
	            string = string.replace(new RegExp('\\<' + key + '\\>', 'gm'), function() {
	                return entry[Math.floor(Math.random() * entry.length)]
	            });
	        }
    	}
    	return string;
	};
//output to DOM