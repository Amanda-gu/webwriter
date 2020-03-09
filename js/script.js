// Write your part of speech array here
var nouns=['balls', 'bottle','germs', 'seaweed', 'fish', 'rock', 'charity', 'cell', 'police', 'hunger', 'potato soup', 'chicken']
var prep=['upon', 'throughout', 'above','at', 'below', 'for', 'by', 'into','since', 'to', 'with', 'last'];
var modifiers=['crazy','moist', 'extrodinary', 'falling', 'weak', 'talking', 'reading', 'well', 'swimming', 'sad', 'processing', 'illuminating'];
var object=['brush', 'veins', 'internet', 'tomato', 'cocoon', 'seeds', 'water', 'hurricane', 'boy', 'stool', 'worm', 'iPhone'];
var punctuation =['.', '!!', '^^', ':/', '***', '@@', '??????', '!!!!!', '$', ',', '....'];

// Create your wordPicker function here

function randomWord(wordArray){
	var word = wordArray[Math.floor(Math.random()* wordArray.length)];
	return word
}

function sentence(wordArray){

var sentence =  randomWord(nouns)+' '+ randomWord(prep)+' '+ randomWord(modifiers)+' '+ randomWord(object) + randomWord(punctuation);
document.getElementById('word').innerHTML = sentence;

var title = randomWord(nouns)+ ' ' + randomWord(object);
document.title = title
}


window.setInterval(function() {
	 // Run your function here
	sentence();
   
}, 4000);


// Run your function when the page first loads