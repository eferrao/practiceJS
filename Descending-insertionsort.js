//Insertion Sort 
var array_m = new Array(31, 41, 59, 26, 37, 58);

function insertionSort(array){

	for (var j=1; j<array.length; j++){
		key = array[j];
		var i = j-1; 
		while (array[i]<key & i>=0){
			array[i+1] = array[i];
			i = i-1;
		}
		array[i+1] = key;
	}
	console.log(array)
}

insertionSort(array_m)