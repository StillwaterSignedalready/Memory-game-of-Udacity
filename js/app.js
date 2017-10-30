/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /* engine */
 var deck = document.getElementsByClassName('deck')[0],
     opened = new Array(),
     toMatch,
     currentGame;
 var cards = deck.getElementsByTagName('li');
 var iGroup = Array.prototype.map.call(cards, (card) => {
          	return card.querySelector('i');
          });

 function judgeVictory(){

 }

 function matchTwoCards(card1, card2){
 	if(card1 != card2 && isNotFixed(card1) && isNotFixed(card2)){
	 	var i1 = card1.querySelector('i'),
	 		i2 = card2.querySelector('i'),
	 		className1,
	 		className2;
	 	if(i1.getAttribute('class') == i2.getAttribute('class')){
	 		// match success, open both two cards
	 		card1.setAttribute('class','card open show');
	 		card2.setAttribute('class','card open show');
	 		toMatch = null;
	 	}else{
	 		// match fail, shut both two cards
	 		card1.setAttribute('class', 'card');
	 		card2.setAttribute('class', 'card');
	 		toMatch = null;
	 	}
 	}
 }

 function isNotFixed(card){
 	var val = (/open show/).exec(card.getAttribute('class'));
 	return !val;
 }

 function liHandler(event){
 	judgeVictory();
 	var target = event.target;
 	if(target.nodeName == 'LI'){
 		// test if target is open show
 		if(toMatch){
 			// match toMatch & target
 			matchTwoCards(toMatch, target);
 		}else{
 			// nothing to match(and target is not fixed), target needs some card to match, let's put it aside
 			if(isNotFixed(target)){
		 		var className = target.getAttribute('class') + ' match';
		 		target.setAttribute('class',className);
		 		toMatch = target;
 			}
 		}
 		
 	}
 }

/* restart shuffle ----------------------------------------*/ 

// Game constructor
function Game(){
	this.icons = arguments.callee.prototype.shuffle(arguments.callee.prototype.icons);
	this.moves = 0;
	for(let i = 0, len = this.icons.length; i < len; i ++){
		cards[i].setAttribute('class', 'card');
		iGroup[i].setAttribute('class', 'fa ' + this.icons[i]);
	}
}

Game.prototype.icons = ['fa-diamond', 'fa-diamond','fa-paper-plane-o', 'fa-paper-plane-o',
'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-anchor', 'fa-anchor', 'fa-leaf', 'fa-leaf',
'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];

Game.prototype.shuffle = function(array) {
    var currentIndex = array.length,
        temporaryValue, 
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
}


function restart(){

}

/* init */ 
 deck.addEventListener('click',liHandler);
 currentGame = new Game();