const arr = [20,1,-1,2,2,1,-1,5,3,2,3,2,5,20,5];


function doTest(){

    //let elementCount = {};

    // for(let i = 0; i < arr.length; i++){
    //     const number = arr[i];
    //     elementCount[number] = elementCount[number] ? elementCount[number] + 1 : 1;  
    // }
    const arr = [20,1,-1,2,2,1,-1,5,3,2,3,2,5,20,5];

    let elementCount = arr.reduce((elementCount,element, i) => {
        debugger;
      //  const number = arr[i];
        elementCount[element] = elementCount[element] ? elementCount[element] + 1 : 1;  
        return elementCount;
    },{});
    console.log(elementCount);
    for(const element in elementCount){
        if(elementCount[element] % 2 != 0) {
            return element;
        }
    }

}
console.log(doTest());