//Problems Chapter 1
function one(x){
	var end;
	var start; 

	start = new Date(); 
	for (var i =0; i<1000; i++){
		Math.log(x); 
	}
	end = new Date(); 

	console.log('Operation took '+ (end.getTime() - start.getTime()) + 'msec')
	// var math = Math.log(x); 
	// var time = math.getTime();
}

one(2);