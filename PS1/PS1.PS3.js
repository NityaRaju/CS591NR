const spitter =(srt, ct) => ct(srt);
let resulta = spitter("supercalifragilisticexpialidocious", su => su.split(/(?=c)/g) );
console.log(resulta)

const replacer= (word) =>
{
    var replaced= word.replace(/a/g,"A");
    const obj ={
        originalString: word,
        modifiedString: replaced,
        numberReplaced: replaced.length - replaced.replace(/[A-Z]/g, '').length,
        length: word.length

    }
return obj

}
let result= replacer("supercalifragilisticexpialidocious")
console.log(result)