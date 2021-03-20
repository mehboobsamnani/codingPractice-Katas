


function centuryFromYear(year){

    let century = Math.floor(year / 100);

    let decade = year % 10;

    if(decade > 0){
        return century + 1
    }
    return century;

}
console.log(centuryFromYear(1705) , 18);
console.log(centuryFromYear(1900) , 19);
console.log(centuryFromYear(1601) , 17);
console.log(centuryFromYear(2000) , 20);