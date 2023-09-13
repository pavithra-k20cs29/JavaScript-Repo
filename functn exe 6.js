function findGrade(){
    let mark=66;
    if(mark>=90 && mark==100){
        console.log("S grade");
    }
    else if(mark>=80 && mark<=90){
        console.log("A grade");
    }
    else if(mark>=70 && mark<=80){
        console.log("B grade");
    }
    else if(mark>=60 && mark<=70){
        console.log("C grade");
    }
    else if(mark>=50 && mark<=60){
        console.log("D grade");
    }
    else if(mark>=40 && mark<=50){
        console.log("E grade");
    }
    else if(mark>=0 && mark<=40){
        console.log("Student has failed");
    }
    else{
        console.log("Enter a Valid Marks!")
    }
}
findGrade();