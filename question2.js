// Question2 :- Find Largest element from array

var arr = [50, 20, 70, 80, 100, 500, 40, 600, 800, 2, 55];
var large = arr[0];

for (var i = 0; i < arr.length; i++) {
  large = arr[i] > large ? arr[i] : large;
}

console.log(large);
