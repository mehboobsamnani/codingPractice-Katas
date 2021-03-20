function bubbleSort(arr) {
    let len = arr.length;
    console.time('Timer name');
    for(let i = 0 ; i < len  ; i++ ) {
        for(let j = 0; j < len ; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                
            }
        }
    }
    console.timeEnd('Timer name');
    return arr;
}

var arr = [2,3,14,5, 11 ,7,2,4,12,5,4,9];
console.log(bubbleSort(arr));