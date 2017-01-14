console.log("Are we ready betty?");

$( document ).ready(function() {

console.log("jQuery ready");


var wordsIn = [
		"ae", "ti", "wo", "re", "er", "eh", "ay", "qr", "qt", "qi", "oy", "oi", "te", "ad", "io", "xi", "ta", "oz", "zo", "zee", "zoa", "zoon", "ala", "ikon", "la", "da", "mo", "zo", "ca", "ol", "ed", "ai", "da", "ut", "oh", "yo","pa", "si", "ho", "og","oy", "oi", "go", "ye", "pdf", "pdl", "pd", "ph", "pi", "pc","po", "ope", "qat", "qtr", "qts", "qid", "qiyas", "qua", "iwi(s)"
		];

var wordsOut = [
	"ig", "ir", "ih", "ew", "aw", "ow", "uw", "eg", "ee", "et", "fe", "ag", "eb", "ja", "aa", "le", "eq", "fi", "qy", "el", "ep", "ap", "iw", "ue", "uf", "ro", "za", "ze", "zi", "zu", "al", "il", "ey", "ug", "na", "ne", "zu", "zi", "ed", "ga", "ge", "gi", "gu", "un", "ef", "pe", "pu", "py", "ve"
	];

//List all the wordsOut
var listEach = function(testList, appendTo){
	var list = testList.sort();
	// console.log(list);
	for ( i = 0; i < list.length; i ++) {
		var eachWord = list[i];
		// console.log(eachWord);
		var $newP = $( "<p class='tile'></p>" );
		$newP.html(eachWord);
		$(appendTo).append($newP);
		}
	};


listEach(wordsIn, "#wordsIn");

listEach(wordsOut, "#wordsOut");






//find me words with the testLetter in it so I can play it

var hasLetter = function(testLetter){
	var selectedWords = [];
	var sortList = selectedWords.sort();
	console.log("The sorted list is: " + sortList);
	var message;
		for (i  = 0 ; i < wordsIn.length; i ++) {
			var testWord = wordsIn[i];
			var testIn = testWord.search(testLetter);
			if (testIn >=0){
				selectedWords.push(testWord);
			}
		}
		if ( selectedWords.length > 0 ) {
				$(".oldLetter").remove();
				for ( i = 0; i < sortList.length; i ++) {
					var eachWord = sortList[i];
					var $newP = $( "<p class='tile oldLetter'></p>" );
					$newP.html(eachWord);
					$("#hasLetterAnswer").append($newP);
				}
			}
		else {
		message = "<div class='oldLetter'> Hmmm...can't find any words with the letter " +  testLetter + "- can you belive that! </div>";

			$("#oldLetter").remove();
		 	var $newerP = $( "<p id='tile oldLetter'></p>" );
		 	$newerP.html(message);
	 	$("#hasLetterAnswer").append($newerP);
		}
		console.log(message);
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
		message = "<div class='tile'>" + word + "</div> <br>" + "Huzzah! Yes, it's in our list and you can use it!";
	}
	else if (checkOut === true) {
		message = "Nah.  We looked " + "<strong> " + word + "</strong>" + " up before and it ain't a word";
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
