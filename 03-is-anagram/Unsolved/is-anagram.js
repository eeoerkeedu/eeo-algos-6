// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
	const arrA = strA.split("");
	const arrB = strB.split("");
	// console.log(arrA, arrB);

	// determines if the arrays are the same length
	if (arrA.length !== arrB.length) {
		console.log("different lengths");
		return false;
	}

	// sorts the arrays so they have the same order of characters
	// .concat() to not mutate arguments
	const arr1 = arrA.concat().sort();
	const arr2 = arrB.concat().sort();

	// checks each character of A against B
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			console.log("different letters");
			return false;
		}
	}
	console.log("match", arr1, arr2);
	return true;
};
