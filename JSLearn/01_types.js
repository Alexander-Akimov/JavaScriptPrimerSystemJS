//null, undefined, boolean, number, string, object, symbol
//нет такого типа данных как функция - функция объект
/*
console.log(typeof 0) // number
console.log(typeof true) // boolean
console.log(typeof 'Javascript') //"", '', `` string
console.log(typeof undefined) // undefined
console.log(typeof Math) // object
console.log(typeof Symbol('JS')) // symbol
console.log(typeof null)// object
console.log(typeof function () { })//function
console.log(typeof (1 / 0))// number
console.log(1 / 0) // Infinity
console.log(undefined * 1) //NaN (Not a Number)
console.log(typeof NaN) // number
//__________
var target
console.log(target)// undefined

function execute() {// функция ничего не возращает
    let i = 1 + 1
}
console.log(execute())// undefined
//__________
let myVar = {}
myVar = null
console.log(typeof myVar)
*/

//Приведение типов
/*let language = 'JavaScript'
// language = 0
language = !NaN
if (language) {
    console.log('The best language is: ', language)
}*/
/*
//falsy values
// '', 0, null, NaN, false, undefined
//false
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(null))
//true
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))//true
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function(){}))
*/

//Строки и числа
/*console.log(typeof (1 + 2 + "2"))//string
console.log(typeof ("1" + 2))//string
console.log('' - 1 + 0)//-1
console.log('3' * '8')//24
console.log(1 + 2 + '3')//33
console.log('42'- 40)//2
console.log('42px'- 40 + 1)//NaN
console.log(40 + 1 - '42px')//-1
console.log(null - 2)//-2
console.log(undefined + 42)//NaN
*/

// == VS ===
// == Сравнивает значения с приведением типов
// === Сравнивает значения без приведения типов
/*console.log(2 == '2')
console.log(2 === '2')
console.log(undefined == null)
console.log(undefined === null)//recomended
console.log('0' == false)//true
console.log('0' == 0)//true
console.log(0 == 0)//true
*/
/*
console.log(false == '')
//console.log(false == Boolean([]))//false
console.log(false == [])//true, empty array - false?
console.log(false == {})//false, an object is true
console.log('' == 0)//true
console.log('' == [])//true
console.log('' == {})//false
console.log(0 == [])//true
console.log(0 == {})//false
console.log(0 == null)//false
*/

/*
types: 

    undefined, 
    object - null, {}, [], Math
    number - NaN,
    string,
    boolean - true, false,
    symbol,
    function - () => {}
    
*/

/*console.log('______js types______')
console.log(typeof undefined)
//undefined - number: NaN
console.log('____________________')
*/

//falsy values: '', 0, '0', [], Boolean(null), Boolean(undefined), Boolean(NaN), false
/*console.log(false == 0)//convert to numbers
console.log(false == '0')//convert to numbers
console.log(false == [])//convert to numbers
console.log(false == [0])//convert to numbers
console.log(0 == '')//convert to numbers
console.log(true == [1])//convert to numbers
*/
/*
console.log('0' == ['0'])//convert to object
*/

console.log(false == '') //convert to Boolean
console.log(true == [1]) //convert to Boolean
console.log(false == Boolean(NaN)) //convert to Boolean
console.log(false == Boolean(undefined))
console.log(false == Number(0))
console.log(0 == false)


console.log('______')

var car = console.log;

console.log(typeof car)

console.log(typeof (() => { }))
console.log(typeof function () { })
console.log(typeof Object())


console.log(
    Object.getPrototypeOf(Function.prototype) === Object.prototype
)//true

console.log(
    Object.getPrototypeOf(Number.prototype) === Object.prototype
)//true

console.log(
    Object.getPrototypeOf(String.prototype) === Object.prototype
)//true

console.log(
    Object.getPrototypeOf(Object.prototype) === null
)//true    ))))

console.log(
    Object.getPrototypeOf(Array.prototype) === Object.prototype
)//true

console.log(
    Object.getPrototypeOf(Symbol.prototype) === Object.prototype
)//true

console.log(typeof Object.prototype) // {}
console.log(Object.prototype.prototype) // undefined
console.log(typeof undefined) // undefined
console.log(undefined === Object.prototype.prototype)