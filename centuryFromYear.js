function centuryFromYear(year){
    let century = Math.floor(year / 100);
    let decade = year % 100;
    if(decade > 0){
        return century + 1;
    }
    return century;
}


console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
