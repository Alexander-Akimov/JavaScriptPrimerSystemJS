//const Lang = require("\lang");

class AmazingSpanish {
    static ShowMessage(msg) {
        console.log(msg);
    }
    static getAlertMsg() {
        return "I like this!";
    }

}
let f = () => {
    AmazingSpanish.ShowMessage("Must learn spanish!!!");
    document.getElementById("header").innerText = AmazingSpanish.getAlertMsg();


};
console.log(a);
var a = 5;


setTimeout(f, 500);