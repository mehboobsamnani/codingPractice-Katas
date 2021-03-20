function quickSort(arr){
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivotValue = arr[pivotIndex];
    var less = [],
    more = [],
    same = []

    for(let i = 0 ; i < arr.length ; i++ ) {
            let currentVal = arr[i];
            if(currentVal == pivotValue){
                same.push(currentVal);
            } else if ( currentVal < pivotValue ) {
                less.push(currentVal);
            } else {
                more.push(currentVal);
            }
    }

    return quickSort(less).concat(same , quickSort(more));
}



var arr = [2,3,4,1,6,8,42,12,44,64,23,54]

console.log(quickSort(arr));