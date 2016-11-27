//console.log("JS file is connected to HTML! Woo!")
/*var cardOne = 'King';
var cardTwo = 'King';
var cardThree = 'Queen';
var cardFour = 'Queen';*/
//console.log(cardOne == cardTwo);
//console.log(cardThree == cardFour);

var createCards = function(){
	var gameBoard = document.getElementById('game-board')
	for (var i = 0; i<=3; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card'
		gameBoard.appendChild(newCard)
	}
}

createCards ()

/*if(cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}*/