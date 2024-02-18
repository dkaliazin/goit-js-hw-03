function makeArray(firstArray, secondArray, maxLength) {
    let thirdArray = [];
    let startLength = 0;
    for (let i = 0; i < firstArray.length; i += 1){
        if (startLength < maxLength) {
            thirdArray.push(firstArray[i]);
            startLength += 1;
        }
    }
    for (let i = 0; i < secondArray.length; i += 1){
        if (startLength < maxLength) {
            thirdArray.push(secondArray[i]);
            startLength += 1;
        }
    }
    return thirdArray;
}
console.log("task-2")
console.log("__________________________________________");
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log("__________________________________________");