// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
	// console.log(arr);
	// console.log(target);

	const indexOfTarget = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			console.log(i);
			return i;
		}
	}

	console.log(indexOfTarget);

	return indexOfTarget;
};
