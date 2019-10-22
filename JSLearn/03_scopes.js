//scope - это то что говорит нам о
// доступности определнныех переменных в функциях в нашем коде
//область видимости
//-global scope (e.g. - document, window)
//-local scope
function funcA(params) {
    let a = 1
    function funcB(params) {
        let b = 2
        function funcC(params) {
            let c = 3
            console.log('funcC:', a, b, c)
        }
        funcC()
        console.log('funcB:', a, b)
    }
    funcB()
    console.log('funcA:', a)
}

funcA()