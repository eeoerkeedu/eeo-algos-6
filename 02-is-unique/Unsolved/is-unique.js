// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
	// define object
	const numbers = {};

	// check each number and change their value if they appear again
	arr.forEach((element) => {
		if (!numbers[element]) {
			numbers[element] = true;
		} else {
			numbers[element] = false;
		}
	});
	console.log(numbers);

	// check all the object's values to determine if they are all truthy
	const isTruthy = Object.values(numbers).every((value) => value === true);
	return isTruthy;
};
