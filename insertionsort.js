//Insertion Sort 
var array_m = new Array(31, 41, 59, 26, 41, 58);

function insertionSort(array){

	for (var j=1; j<array.length; j++){
		key = array[j];
		var i = j-1; 
		console.log("key: "+key);
		console.log("array[j]: "+array[j]);
		console.log("array[i]: "+array[i]);
		console.log("i: "+i);
		while (array[i]>key & i>=0){
			console.log("arrary of i:" + array[i])
			console.log("arrary of j:" + array[j])
			array[i+1] = array[i];
			i = i-1;
			console.log(array)
			console.log("----")

		}
		console.log("-COMPLETED ONE CHANGE-")
		array[i+1] = key;
	}
}

insertionSort(array_m)