// switch statements!!
/* ***switch = a statement checks for an expression or value and then 
takes waterfal shape to check number of possible cases. ***** */
// syntax 
/*
switch (expression OR value) {
    case choice1:
        // run this code 
        break;
    case choice2:
        // run this different code
        break;
    // add as many cases as needed 
    default:
        // run this code to find a match
        // if there is no then no need to break here!
}
*/
// example //////////////////////////////
// we can also pass in some code inside switch!
/* let's generate random number from 1 to 4 
to use that in switch */
/*
switch (Math.floor(Math.random()*4)+1) {
    case (1):
        console.log(1);
        break;
    case (2):
        console.log(2);
        break;
    case (3):
        console.log(3);
        break;
    default:
        console.log("there is no match!");
} 
*/
//////////////////////////////////////////////////////////////////
/*
switch (1) {
    case (1):
        console.log(1);
        break;
    case (2):
        console.log(2);
        break;
    case (3):
        console.log(3);
        break;
    case (4):
        console.log(4);
        break;
    case (5):
        console.log(5);
        break;
    default:
        console.log("there is no match:(")
}
*/
///////////////////////////////////////////////////////////////////

switch (Math.floor(Math.random()*11)+1) {
    case (1):
        console.log("1");
        break;
    case (2):
        console.log("2");
        break;
    case (3):
        console.log("3");
        break;
    case (4):
        console.log("4");
        break;
    case (5):
        console.log("5");
        break;
    case (6):
        console.log("6");
        break;
    case (7):
        console.log("7");
        break;
    case (8):
        console.log("8");
        break;
    case (9):
        console.log("9");
        break;
    case (10):
        console.log("10");
        break;
    default:
        console.log("there is no match!");

}



//console.log("1");
//console.log(1);



