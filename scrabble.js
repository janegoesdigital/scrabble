console.log("Are we ready betty?");

$( document ).ready(function() {

console.log("jQuery ready");

//this works to look through a string and see if there is a letter in it
//

var wordsIn = ["a","b","c", "do", "don't", "orange", "ox", "eleven", "qi"];
var wordsOut = ["f", "g", "bbbl", "goad"];

// var testWord = "azofllll";
// console.log(testWord.search('l'));

var contains = function(letter){
	testWord.search(letter);

};


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

findWord("a", wordsIn);

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
	console.log("The message from the isWord function is: " + message);
  var $p = $( "<p></p>" );
  $p.html(message);
  $("#isWordForm").after($p);
};



$( "#isWordForm" ).submit(function( event ) {
	var word = $("#yourWord").val();
	console.log(word);
	isWord(word);
  event.preventDefault();
});



//this is the closure for the jQuery function - don't delete it!
});
