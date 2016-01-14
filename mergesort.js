var left = new Array(0,3,2);
var right = new Array(4,1,5);


function merge(left, right){

	var newArray = [];
	var i = 0; 
	var j = 0; 

	while (i < left.length && j < right.length){
		console.log("inside 1")
		if (left[i]<right[j]){
			console.log("inside 2")
			newArray.push(left[i]); 
			i = i+1;
		} else {
			console.log("inside 3")
			newArray.push(right[j]);
			j = j+1;
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