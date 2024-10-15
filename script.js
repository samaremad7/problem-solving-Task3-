/*Exercise 1: Filtering an Array */
function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
const inputArray = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(inputArray); 
console.log(result);


/*Exercise: 2 Find the Largest Number */
function findLargestNumber(numbers) {

    if (numbers.length === 0) {
        return null; 
    }
    return Math.max(...numbers);
}
const inputArray2 = [3, 1, 4, 1, 5, 9];
const result2 = findLargestNumber(inputArray);
console.log(result2); 

/*Exercise: 3 Reverse a String */
function reverseString(str) {
    return str.split('').reverse().join('');
}
const inputString = "hello";
const result3 = reverseString(inputString);
console.log(result3);

/*Exercise: 4 Remove Duplicates */
function removeDuplicates(numbers) {
    return Array.from(new Set(numbers));
}
const inputArray4 = [1, 2, 2, 3, 4, 4, 5];
const result4 = removeDuplicates(inputArray);
console.log(result4); 