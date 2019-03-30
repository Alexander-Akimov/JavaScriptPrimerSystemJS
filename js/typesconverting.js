// Converting Numbers to Strings
NumToStr();
function NumToStr() {
    var myData1 = 5 + 5;
    var myData2 = 5 + "5";
    console.log("Result 1: " + myData1);
    console.log("Result 2: " + myData2);
    var myData3 = (5).toString() + String(5);
    console.log("Num to Str Result: " + myData3);
}
// Converting Strings to Numbers
StrToNum();
function StrToNum() {
    var firstVal = "5";
    var secondVal = "5";
    var result = Number(firstVal) + Number(secondVal);
    console.log("Str to Num Result: " + result);
}
