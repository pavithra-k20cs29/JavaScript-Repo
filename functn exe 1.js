function findLargest(){
    let num1=90;
    let num2=70;
    let num3=40;
    if(num1>num2 && num1>num3){
        console.log(num1+" "+"is largest number");  //num1>num2
    }
    else if(num2>num3){
        console.log(num2+" "+"is largest number");  //num1<num2
    }
    else{
        console.log(num3); //num1==num2
    }
}
findLargest();