
// HOISTING

console.log(favoriteNumbers()); // this will log 7.

function favoriteNumber() { // Expression
	return 7;
}

console.log(favoriteColor()); // this will log undefined.

var favoriteColor = function() { // Declaration
	return "purple";
};




function MyFavoriteEverything() {
	this.getFavoriteNumber = favoriteNumbers();

	function favoriteNumbers() { // Expression
		return 7;
	}

	var favoriteColor = function() { // Declaration
		return "purple";
	};
}

var erinFavorites = new MyFavoriteEverything();

erinFavorites.getFavoriteNumber();