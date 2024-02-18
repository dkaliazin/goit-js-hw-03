function slugify(title) {
    let array1 = title.split(" ");
    let array2 = [];
    for (let i = array1.length - 1; i >= 0; i -= 1){
        array2.push(array1[i].toLowerCase());
    }
    return array2.join("-");
}
console.log("task-1");
console.log("__________________________________________");
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
console.log("__________________________________________");