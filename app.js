const str = "CodingGame";

function printShiftStr(str) {

    let characters = str.split("");
    console.log(characters.join(""));
    for(let i = 0 ; i < str.length ; i++){
      let last = characters.pop();
      characters = [last,...characters];
      console.log(characters.join(""));
    }
    
}

printShiftStr(str);


//make string to array
// str.split("")
// get remove firstelement and add in last
// str.shift()

// print array