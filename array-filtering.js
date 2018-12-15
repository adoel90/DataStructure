
/*
var pets = ['cat', 'dog', 'elephant'];

var filtered = pets.filter(function(pet){

	 
		operator '==' arti-nya pet bernilai equal/ sama dengan 'elephant', sebalik-nya,
		kalau '!==' arti-nya pet harus tidak memiliki nilai equal dengan 'elephant'.

		
	
	return (pet !== 'elephant');

});

console.log(filtered);

*/

//r numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

var numbers = [1,2,3,4,5,6,7,8,9,10];

var filtered = numbers.filter(function evenNumbers(number){

	/*
		mengembalikan number (argumen) dengan modulus (sisa angka setealah di angka modulus, dalam hal ini yaitu '2') 2 yang mesti dan WAJIB sama persis (EQUAL VALUE, EQUAL TYPE)
		dengan 0
	
	*/
	return number % 2 === 0;
});

console.log(filtered);
