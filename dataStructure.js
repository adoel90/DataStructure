// Reccrusion, Chapter-1, Hal-10
function factorial(number){
	if(number == 1){
		return number;
	} else {
		return number * factorial(number -1);
	}
}
console.log(factorial(17));


/*
	Creating Arrays, Chapter-2, Hal-14

*/

// #1, The simplest way to create an array
var numbers = [];

// #2, Create an array with declare array variable with a set of elements inside []
var numbers = [1,2,3,4,5];

// #3, Create an Array by calling the Array Constructor
var numbers = new Array();

// #4, Create an array with a set of elements as arguments to the constructor
var numbers = new Array(1,2,3,4,5);

// #5, Array element tidak harus dengan type yang sama
var arrayElements = [1, Adoel, true];

// #6, Periksa apa 'ini' adalah sebuah array
var numbers = [1,2,3,4];
Array.isArray(numbers);

// #7 Creating Array from String
var sentence = "The quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");

for (var i = 0; i < words.length; ++i) {
	console.log("word " + i + ": " + words[i]);
}


// #8, Aggregate Array Operation, Hal-16
var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // displays 400

// -------

var nums = [];
var samenums = [];
function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; ++i) {
		arr2[i] = arr1[i];
	}
}
copy(nums, samenums);


/* 

#9, Accessor Functions,to access the elements of an array, return some representation of the target array
as their return values

*/

//Searching for value
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var name = "Raymond";
var position = names.indexOf(name);

if (position >= 0) {
	console.log("Found " + name + " at position " + position);
} else {
	console.log(name + " not found in array.");
}

//String Representations of Arrays, hasil representasi berupa String dari Array
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
// Cara-1, built-in  to representate String
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer

// Cara-2, built-in to representate String
namestr = names.toString();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer



//Creating New Arrays from Existing Arrays
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);


//Work with splice();
var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept); // Raymond,Cynthia,Danny
console.log(cisDept); // Mike,Clayton,Terrill,Jennifer



//#10, Mutator Functions, JavaScript has a set of mutator functions that allow you to modify the contents of an array without referencing the individual elements

// Adding element to an Array in last
var nums = [1,2,3,4,5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
console.log(nums); // 1,2,3,4,5,6


// Adding element to an Array in front
var nums = [2,3,4,5];
print(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums); // 1,2,3,4,5

//Adding and Removing Elements from the Middle of an Array
//*1
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

//*2
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,1,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

//*3
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,2,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

//New WAY to add and remove elements from the Middle of an Array
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);


var nums = ["Hello","gan","makan", "yuk", "!"];
nums.splice(2,0,"disini kita");
console.log(nums);
}

//*****Putting Array Elements in Order, wait to BIG HIT in here !!!
var nums = [1,2,3,4,5];
nums.reverse();


//#11, ITERATOR FUNCTION
/* 
	Non–Array-Generating Iterator Functions
*/

//*1
function square(num) {
	console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

//*2
function isEven(num) {
	return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);

if (even) {
	console.log("all numbers are even");
} else {
	console.log("not all numbers are even");
}

//*3
function isEven(num) {
	return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);

if (someEven) {
	consle.log("some numbers are even");
}
else {
	console.log("no numbers are even");
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);

if (someEven) {
	console.log("some numbers are even");
}
else {
	console.log("no numbers are even");
}

//*4
function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);

//*5
function concat(accumulatedString, item) {
	return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"

//*6
function concat(accumulatedString, item) {
	return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"