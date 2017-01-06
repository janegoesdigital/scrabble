var wordsIn = ["a","b","c", "do", "don't", "orange", "ox", "eleven", "qi"];
var wordsOut = ["f", "g", "bbbl", "goad"];

//this works to look through a string and see if there is a letter in it

var testWord = "azofllll";
console.log(testWord.search('l'));


var eachWord = function(wordsIn, testLetter){
	var selectedWords = [];
	for (i  = 0 ; i < wordsIn.length; i ++) {
		var testWord = wordsIn[i];
		// console.log("The test word is " + testWord);
		var test = testWord.search(testLetter);
		// console.log("The test letter is " + testLetter + "with a number of " + test);
		if (test >=0){
			selectedWords.push(testWord);

		}

	}
		// console.log(selectedWords);
		return selectedWords;
};
var theWords = eachWord(wordsIn, 'o');
console.log("The answer to your question is " + theWords);
