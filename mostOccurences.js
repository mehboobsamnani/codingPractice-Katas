let array1 = [1,2,2,2,3,4,5,6,7];
let array2 = [3,3,2,2,3,4,5,6,7];
let array3 = [3,3,2,1,3,4,5,6,7];

let comb = [...array1,...array2,...array3];

let mostOcurrenceCount = {};

for(let i = 0 ; i < comb.length ; i++ ) {

    //if element is there in array 
    // increment count 
    // else initialize it to 1
    if(mostOcurrenceCount[comb[i]]) {
        mostOcurrenceCount[comb[i]] = mostOcurrenceCount[comb[i]] + 1;
    } else {
        mostOcurrenceCount[comb[i]] = 1;
    }
     //   mostOcurrenceCount[comb[i]] = mostOcurrenceCount[comb[i]] ?  mostOcurrenceCount[comb[i]]++ : 1;
}

let temp = null;
for(const [key,value] of Object.entries(mostOcurrenceCount)){
    if( temp < value){
        temp = key;
    }
}
console.log(`element ${temp} with ${mostOcurrenceCount[temp]} occurances`);