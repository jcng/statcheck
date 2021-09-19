// Various useful functions to be used elsewhere in the project

// homogenousArray() - Takes an array and returns boolean representing if all values in the array are identical
function homogenousArray(arr) {
    return arr.every(value => value === arr[0]);
}
export {homogenousArray}
// END homogenousArray

// styleStatColors() - Takes in a string and returns a string with elements wrapped in styling tags (to be converted back to HTML)
function styleStatColors(str) {
    const matches =  str.matchAll(/(?<AD>\+.+?\WAD)|(?<AP>\+.+?\WAP)|(?<physicalDamage>physical damage)|(?<magicDamage>magic damage)/g)
    for (const match of matches) {
        if (match.groups.AD || match.groups.physicalDamage) {
            str = str.replace(match[0], `<span class='physical-text'>${match[0]}</span>`)
        }
        else if (match.groups.AP || match.groups.magicDamage) {
            str = str.replace(match[0], `<span class="magic-text'>${match[0]}</span>`)
        }
    }
    return str
}
export {styleStatColors}