function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    yield 0
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    } }


//Get a few fibs
function* evenfibs () {

    myFibs = fibs()
    while (true) {
        let z = myFibs.next().value
        if (z == 0 || z % 2 == 0) {
            yield z
        }
    }
}


myFib = evenfibs()
let count = 5;
while (count --> 0)
    console.log(myFib.next().value)
