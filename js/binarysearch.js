function binarySearch(arr, target) {
	let index = 0;
	let left = 0;
	let right = arr.length - 1;
	let guess;
	let position = undefined;

	if (target > arr[arr.length-1]) {
		arr.splice(arr.length, 0, target)
		position = arr.length;
	}

	while(position === undefined) {
		guess = (Math.floor(right + left / 2))

		if(arr[guess] === target) {
			position = guess;
			break;
		}

		if(right < left) {
			arr.splice(left, 0, target)
			position = left;
		}

		if(arr[guess] < target) {
			left = guess + 1;
		}
		if(arr[guess] > target) {
			right = guess - 1;	
		}

	}

	//either we stop when the number === the desired, or when the 
	//position is identified and inserted 
	return {position: position, arr: arr};
}

const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

console.log(binarySearch(primes, 10));
console.log(binarySearch(primes, 50));
console.log(binarySearch(primes, 67));
console.log(binarySearch(primes, 500));
