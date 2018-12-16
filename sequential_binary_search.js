//#https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0

//Sample 01, Sequential/ Linear Search 


var data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


function linearSearch(array, toFind){

  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }

  return -1;
};

linearSearch(data, 19);


//#Sample 01, Binary Search 

var dataToFind = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

binarySearch(dataToFind, 17);