function Mixtape(name, format, intendedRecipient){
	this.name = name; 
	this.format = format; 
	this.intendedRecipient = intendedRecipient; 
	this.createdAt = new Date();
	this.songs = []; 

	this.addSong = function(song){
		this.songs.push(song); 
	}

	this.removeSong = function(songRemove) {
		for (var i=0; i<songs.length; i++){
			if (songs[i] == songRemove){
				songs.remove(songs[i])
			}
		}
	}

	this.playSong = function (callback, song) {
		callback(song);
	}
}

var erinMixtape = new Mixtape("Best Pop Songs", "CD", "Elizabeth"); 

erinMixtape.addSong("Hotline Bling"); 

erinMixtape.playSong(function(){
	openSpotify()
}, song)

console.log(erinMixtape.songs)

// Build forEach. 

function forEach(array, callback) {
	// Loop through each element and call callback, and return new array.
	for (var i = 0; i <= array.length; i++){

	}
}

forEach([1, 2, 3, 4], function(n) {
	return n + 10;
})

document.getElementById("hi").onClick(function() {

})


function outerFunction() {
	this.greeting = "hello";
	this.lunch = "hot dog";
	console.log(this.lunch);

	function innerFunction() {
		this.lunch = "hamburger";
		console.log(this.lunch)
	}
}

