


function isArray(arr) {
    return arr.constructor === Array;
}

Array.prototype.sameStructureAs = function (other) {
    if (!isArray(other)) return false;
    if (this.length != other.length) return false;

    //loop through length
    //first check if its array then loop through array and match
    for (let i = 0; i < this.length; i++) {
        const thisElement = this[i];
        const otherElement = other[i];

        if (isArray(thisElement) && !thisElement.sameStructureAs(otherElement)) {
            return false;
        }
    }

    return true;
}

console.log([1, [1, 1], 1].sameStructureAs([2, 2, [2, 2]]));
console.log([1, [], 1].sameStructureAs([2, [], 2]));