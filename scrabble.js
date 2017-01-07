console.log("Are we ready betty?");

$( document ).ready(function() {

console.log("jQuery ready");


var wordsIn = ["a","b","c", "do", "don't", "orange", "ox", "eleven", "qi"];
var wordsOut = ["f", "g", "bbbl", "goad"];

//find me words with the testLetter in it so I can play it

var hasLetter = function(testLetter){
	var selectedWords = [];
	var message;
		for (i  = 0 ; i < wordsIn.length; i ++) {
			var testWord = wordsIn[i];
			var testIn = testWord.search(testLetter);
			if (testIn >=0){
				selectedWords.push(testWord);
			}
		}
		if ( selectedWords.length > 0 ) {
			message = "The words that contain the letter <strong>" + testLetter + "</strong> are: " + selectedWords;
			console.log(message);
		}
		else {
		message = "Hmmm...can't find any words with the letter" +  testLetter + "- can you belive that!";
		}
		console.log(message);

		$("#oldLetter").remove();
		var $newP = $( "<p id='oldLetter'></p>" );
		$newP.html(message);
		$("#hasLetterAnswer").prepend($newP);

	};


$("#testLetterForm" ).submit(function( event ) {
	var testLetter = $("#testLetter").val();
	console.log(testLetter);
	hasLetter(testLetter);
  event.preventDefault();
});


// console.log(words.indexOf("do"));

var findWord = function(word, wordList){
	var test = wordList.indexOf(word);
	if (test >= 0 ) {
		return true;
	}
	else {
		return false;
	}
};

var isWord = function(word){
	var checkIn = findWord(word, wordsIn);
	console.log("Checkin " + checkIn);
	var checkOut = findWord(word, wordsOut);

	console.log("Checkout: " + checkOut);
	var message;
	if (checkIn === true ){
		message = "Huzzah! Yes, the word " + "<strong>" + word + "</strong>" + " is in our list and you can use it!";
	}
	else if (checkOut === true) {
		message = "Nah.  We looked " + "<strong>" + word + "</strong>" + " up before and it ain't a word";
	}
	else {
		message = "Oh no! We don't know yet whether " + "<strong>" + word + "</strong> " + " is in or out!";

	}
	 $("#oldAnswer").remove();
  	var $newP = $( "<p id='oldAnswer'></p>" );
  	$newP.html(message);
  $("#isWordAnswer").append($newP);
};

$( "#isWordForm" ).submit(function( event ) {
	var word = $("#yourWord").val();
	console.log(word);
	isWord(word);
  event.preventDefault();
});




//this is the closure for the jQuery function - don't delete it!
});
