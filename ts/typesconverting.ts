// Converting Numbers to Strings
NumToStr();
function NumToStr() {
    let myData1 = 5 + 5;
    let myData2 = 5 + "5";

    console.log("Result 1: " + myData1);
    console.log("Result 2: " + myData2);

    let myData3 = (5).toString() + String(5);
    console.log("Num to Str Result: " + myData3);
}

// Converting Strings to Numbers
StrToNum();
function StrToNum() {
    let firstVal = "5";
    let secondVal = "5";
    let result = Number(firstVal) + Number(secondVal);
    console.log("Str to Num Result: " + result);
}
