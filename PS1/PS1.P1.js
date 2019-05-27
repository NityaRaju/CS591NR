
function alphabetize (word)
{
    return word.split('').sort().join('');
}
console.log(`${alphabetize("supercalifragilisticexpialidocious")}`)