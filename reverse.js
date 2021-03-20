// const str = "Welcome to this Javascript Guide!";

// const reverseString = str.split(" ");
// //.reverse().join(" ");

// const reverseDString = reverseString.reduce((previousValue , currentValue) => { 
//     console.log({previousValue,currentValue});
//     return previousValue + currentValue.reverse()
// }, " ")




var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
    debugger;
  return string.split(separator).reverse().join(separator);
}

console.log(reverseEachWord);