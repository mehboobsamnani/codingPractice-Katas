let arr  = [0,3,1,6,2,2,7] 
let subArr = [3,6,2,7];


function isSubsequence(arr,subArr){
    if(!arr.length || !subArr.length) return false;
    let elementToCheck = subArr.splice(0,1);
    for(let i = 0 ; i < arr.length; i++){
        if(elementToCheck === arr[i])
        {
            elementToCheck = subArr.splice(0,1)
        }
    }
    return subArr.length == 0;
}


console.log(isSubsequence(arr,subArr) === true);