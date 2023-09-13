
function evalNUmbers(){
    let num1=50;
    let num2=30;
    let result;
    let calc='multi';
    switch(calc){
        case 'add':
            result=num1+num2;
            break;
        case 'sub':
            result=num1-num2;
            break;
        case 'multi':
            result=num1*num2;
            break;
        case 'div':
            result=num1/num2;
            break;
        case 'mod':
            result=num1%num2;
            break;
        default:
            result="Enter a Valid NUmber !!!!";
    }
    console.log(result);
} 
evalNUmbers();