// add elemets of an array of numbers
const sumArray = (array: number[]): number => {
	return array.reduce((a, b) => a + b, 0);
};

// find all the possible combinations of an array of numbers
function powerSet(coinArray: number[]): Array<number[]> {
	let combinations: Array<number[]> = [];
	let length = coinArray.length;

	for (let i = 0; i < Math.pow(2, length); i++) {
		let combination: number[] = [];

		for (let j = 0; j < length; j++) {
			if (i & Math.pow(2, j)) {
				combination.push(coinArray[j]);
			}
		}
		if (combination.length > 0) combinations.push(combination);
	}
	return combinations;
}

//
// use a has map to store all the possible combinations for a given sum ranging from
// the lowest to max value(sum of elements in array)
//
// eg, for array [1,3], for the sum 3 the possible combinations are [[1,3], [3,1]]
// (but from power set 1,3 and 3,1 are same so suppose [1,3] is the only combination)
// so the map will be {3: [[1,3]]}
//
function combinations_for_sum(coinArray: number[]): Map<number, [number[]]> {
	let combinations: Array<number[]> = powerSet(coinArray);
	let sumCombinations: Map<number, [number[]]> = new Map();

	combinations.forEach((combination) => {
		let sum: number = sumArray(combination);

		if (sumCombinations.has(sum)) {
			sumCombinations.get(sum)?.push(combination);
		} else {
			sumCombinations.set(sum, [combination]);
		}
	});

	return sumCombinations;
}

//
// returns the max possible change without break starting from 1
// it does so by checking the hash map for existence of sum, if there is a break it exits
function calc_max_possible_change(coinArray: number[]): number {
	coinArray.sort();
	let sumCombinations: Map<number, [number[]]> = combinations_for_sum(coinArray);

	let maxChange: number = 0;

	for (let i = 1; i <= sumArray(coinArray); i++) {
		if (!sumCombinations.has(i)) {
			break;
		}
		maxChange = i;
	}

	return maxChange;
}

let coinArray: number[] = [1, 1, 1, 1, 5, 10, 20];
console.log(calc_max_possible_change(coinArray));
