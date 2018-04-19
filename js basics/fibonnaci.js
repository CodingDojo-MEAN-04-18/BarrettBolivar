function fib() {
    if (first === undefined){
        var first = 0;
        var second = 1;
    };
    function nacci() {
        const temp = second;
        console.log(first);
        first = second;
        second = second + temp;
    };
    console.log(second);
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"