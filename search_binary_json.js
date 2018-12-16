var json = {
    'one': 1,
    'two': 2,
    'seven': 7,
    'twelve': 12,
    'fourty': 40,
    'hundred': 100
};

var middle;
var keys = Object.keys(json);
var values = [];

for (i in json) values.push(json[i]);

middle = keys.length/2;

var search = 99;

var low = 0;
var high = keys.length - 1;
var i;

while (low <= high) {
	i = Math.floor((low + high) / 2);

	if (values[i] < search) { low = i + 1; continue; };
	
	if (values[i] > search) { high = i - 1; continue; };
}

console.log(values[i]);