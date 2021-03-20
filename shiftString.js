const str = "CodingGame";

function printShiftStr(str) {
    let characters = str.split("");
    for(let i = 0 ; i < str.length ; i++){
        let first = characters.shift();
        console.log([first,...characters].join(""));
    }
}

printShiftStr(str);