var left = new Array(0,3,2);
var right = new Array(4,1,5);


function merge(left, right){

	var newArray = [];
	var i = 0; 
	var j = 0; 

	while (i < left.length && j < right.length){
		console.log("left[i]: "+left[i])
		console.log("right[j]: "+right[j])
		
		if (left[i]<right[j]){
			newArray.push(left[i]);
			left.shift() 
			console.log(newArray)
			console.log(left)
			console.log("___")
		} else {
			newArray.push(right[j]);
			newArray.push(right[j]);
			right.shift() 
			console.log(newArray)
			console.log(right)
			console.log("___")
		}
	}
	console.log(newArray.concat(left.slice(i)).concat(right.slice(j))); 
}

merge(left, right)





// function merge(left, right){
//     var result  = [],
//         il      = 0,
//         ir      = 0;

//     while (il < left.length && ir < right.length){
//         if (left[il] < right[ir]){
//             result.push(left[il++]);
//         } else {
//             result.push(right[ir++]);
//         }
//     }

//     return result.concat(left.slice(il)).concat(right.slice(ir));
// }

// *
//  * Sorts an array in ascending natural order using
//  * merge sort.
//  * @param {Array} items The array to sort.
//  * @return {Array} The sorted array.
 
// function mergeSort(items){

//     if (items.length < 2) {
//         return items;
//     }

//     var middle = Math.floor((items.length)/2);
//     console.log(middle)
//         left    = items.slice(0, middle);
//         right   = items.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// }

// mergeSort(3,6,5,2,7,1)