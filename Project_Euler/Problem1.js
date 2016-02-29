// Problem 1 
// If we list all the natural numbers below 10 that are multiples of 3 or
// 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var multipleStorage = []; 

for (var counter = 0; counter<1000; counter++){
	multiples(counter)
}

add(multipleStorage)


function multiples(counter){
	if (counter%3===0 && counter%5 === 0){
		multipleStorage.push(counter); 
		return; 
	}
	if (counter%3 === 0){
		multipleStorage.push(counter);
	}
	if (counter%5 === 0){
		multipleStorage.push(counter);
	}
}

function add(array){
	var total = 0; 
	for(var i = 0; i<array.length; i++){
		total=total+array[i]
	}
	console.log(total)
}