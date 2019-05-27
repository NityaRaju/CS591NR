function evaluate (expression) {
    const no1 = parseInt(expression[0]);
    const no2 = parseInt(expression[2]);

    if (expression[1] == '+')
    {
        return no1 + no2 ;
    }
    if (expression[1]=='-')
    {
        return no1 - no2;
    }
    if (expression[1]=='*')
    {
        return no1 * no2;
    }
    if (expression[1]=='/')
    {
        return no1/no2;
    }
}
var expression = '4+2';
console.log(`${expression} = ${evaluate(expression)}`)
var expression = '5*7';
console.log(`${expression} = ${evaluate(expression)}`)
var expression = '6-1';
console.log(`${expression} = ${evaluate(expression)}`)
var expression = '9/2';
console.log(`${expression} = ${evaluate(expression)}`)

