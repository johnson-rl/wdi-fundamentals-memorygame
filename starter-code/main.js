var cards = ['queen','queen','king','king']
var cardsInPlay = []
var gameBoard = document.getElementById('game-board')
var createBoard = function(){
	for (var i = 0; i<cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card',cards[i]);
		newCard.addEventListener("click", isTwoCards);
		gameBoard.appendChild(newCard);
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='queen'){
		this.innerHTML = "<img src='queen.png'>"
	} else {
		this.innerHTML = "<img src='king.png'>"
	}
	if (cardsInPlay.length ===2){
		isMatch(cardsInPlay);
	}
}

var isMatch = function(matching){
	cardsInPlay = []
	if(matching[0] === matching[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.");
		for(var i =0;i<=cards.length;i++){
			document.querySelectorAll('.card')[i].innerHTML = '';
		}
	}
}

createBoard()
//console.log("JS file is connected to HTML! Woo!")

//The following code was used to test an earlier iteration of the card comparison function
/*var cardOne = 'King';
var cardTwo = 'King';
var cardThree = 'Queen';
var cardFour = 'Queen';*/
//console.log(cardOne == cardTwo);
//console.log(cardThree == cardFour);
/*if(cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}*/

//the following is a prior version of the createBoard function
/*var createCards = function(){
	var gameBoard = document.getElementById('game-board')
	for (var i = 0; i<=3; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card'
		gameBoard.appendChild(newCard)
	}
}

createCards ()*/

