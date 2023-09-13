function findDaysInMonth() {
    var month=2;
    var year=2012;
    if (month >= 1 && month <= 12) 
    {
        if (month == 4 || month == 6 || month == 9 || month == 11) 
        {
            console.log("The Month has"+" "+"30 days");
        }
        else if (month != 2)
         {
            console.log("The Month has"+" "+"31 days");
        }
        else if (month == 2) 
        {
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
             {
                console.log("The Month has"+" "+"29 days");
            }
            else
             {
                console.log("The Month has"+" "+"28 days");
            }
        }
    }
    else
     {
        console.log("Invalid Month");
    }
}
findDaysInMonth();
