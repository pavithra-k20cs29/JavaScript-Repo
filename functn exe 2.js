function findTringletype(){
    let side1=5;
    let side2=6;
    let side3=5;
    if(side1==side2 && side2==side3 && side3==side1){
        console.log("Equilateral Triangle");
    }
    else if(side1==side2 || side2==side3 || side3==side1){
        console.log("Isosceles Triangle");
    }
    else
        console.log("Scalene Triangle")
}
findTringletype();