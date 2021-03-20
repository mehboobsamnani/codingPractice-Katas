function quickSort(arr) {
   
    if (arr.length <= 1) {
        return arr;
    }
  
    var arrLength = arr.length;
    var pivotPosition = Math.floor(arrLength / 2);
    var pivotValue = arr[pivotPosition];
    var less = [],
    more = [],
    same = [];

    for(var i = 0 ; i < arrLength; i++){
        if(arr[i] < pivotValue){
            less.push(arr[i]);
        } else if (arr[i] === pivotValue){
            same.push(arr[i]);
        } else {
            more.push(arr[i]);
        }
    }

    return quickSort(less).concat(same , quickSort(more));
}

var arr = [2,3,5,7,2,4,12,5,4,9];
console.log(quickSort(arr));