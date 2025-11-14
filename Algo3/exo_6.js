function mostFrequent(arr) {
  return arr.sort((a,b) =>
    arr.filter(v => v === a).length - arr.filter(v => v === b).length
  ).pop();
}

let arr = [1, 2, 2, 3, 2];

console.log(mostFrequent(arr))
