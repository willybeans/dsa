const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

console.log(binarySearch(primes, 11));
console.log(binarySearch(primes, 50));
//console.log(binarySearch(primes, 67));
console.log(binarySearch(primes, 500));

function binarySearch(arr, target) {
	let position = undefined;
	let left = 0;
	let right = arr.length - 1;

	if(target > arr[right]){
		position = arr.length;
		arr.push(target);
	}

	while(position === undefined) {
		const guess = Math.floor((right + left) / 2);		
		console.log('guess:', guess);	
		if (arr[guess] === target) {
			position = guess;
			//break;
		}

		if(left > right) {
			position = right;
			arr.splice(left, 0, target)
		}

		if(target > arr[guess]) {
			left = guess + 1;
		} 

		if (target < arr[guess]) {
			right = guess - 1;
		}


	}

	return {position, array: arr};
}
