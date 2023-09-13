function checkLeapYear(){
    let year=2003;
    if(year%4==0 && year%100!=0){
        console.log("This is Leap Year");
    }
    else if(year%4==0 && year%100!=0 || year%400==0){
        console.log("This is Leap year");
    }
    else{
        console.log("Not a Leap year");
    }
}
checkLeapYear();