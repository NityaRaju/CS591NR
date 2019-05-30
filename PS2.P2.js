function* splitter (sentence)
{
    const anArray= sentence.split(" ")
    for (x of anArray)
    {
        yield x
    }
}


let store= splitter("All I know is something like a bird within her sang")
let spl= "All I know is something like a bird within her sang".split(" ")
spl.forEach (e=>
{
    console.log(store.next().value)
});
