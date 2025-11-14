function countOccurrences(arr, value) {
  return arr.filter(item => item === value).length;
}

let arr = [1, 2, 2, 3, 2];
console.log(countOccurrences(arr, 2))

