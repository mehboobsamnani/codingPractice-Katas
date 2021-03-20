function getPower(number,toPow) {
    let poweredVal = 1;
    for(let i = toPow; i > 0 ; i--){
        poweredVal *= toPow;
    }
    return number**toPow;
    return poweredVal;
    
}



console.log(getPower(4,4))
