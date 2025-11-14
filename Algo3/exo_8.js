const num = [ '1', '2', '3','4','5','6']

function filterEven(arr){
    return arr.filter(num => num % 2 === 0)
}

console.log(filterEven(num))