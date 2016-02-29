// Your JS code goes here.

$(document).ready(function(event){


	$("#add_song_enter").click(function(){
		document.querySelector("input").focus();
		alert(document.activeElement.tagName);
	})
})