// Various useful functions to be used elsewhere in the project

// homogenousArray() - Takes an array and returns boolean representing if all values in the array are identical
function homogenousArray(arr) {
    return arr.every(value => value == arr[0]);
}
export {homogenousArray}
// END homogenousArray