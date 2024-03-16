/*
let sound;
switch ("cat") {
    case ("dog"):
        sound = "bark";
        break;
    case ("cat"):
        sound = "meow";
        break;
    case ("cow"):
        sound = "moo";
        break;
    default:
        sound = "none";

}
console.log(sound);
*/
///////////////////////////////////////////////////////////////////
/*
let key = "cdl";
let sound;
let animal;
switch (key.charAt(Math.floor(Math.random()*4))) {
    case ("c"):
        sound = "meow";
        animal = "cat";
        break;
    case ("d"):
        sound = "bark";
        animal = "dog";
        break;
    case ("l"):
        sound = "roarr";
        animal = "lion";
        break;
    default:
        sound = "therefore no sound";
        animal = "there is no animal";
        
}
console.log(animal,sound);
*/


/////////////////////////////////////////////////////////////////////
/*
let key = "cdlh";
let animal;
let sound;
switch (key.charAt(Math.floor(Math.random()*5))) {
    case ("c"):
        animal = "cat";
        sound = "meow";
        break;
    case ("d"):
        animal = "dog";
        sound = "bark";
        break;
    case ("l"):
        animal = "lion";
        sound = "roar";
        break;
    case ("h"):
        animal = "hippo";
        sound = "growl";
        break;
    default:
        animal = "there is no animal";
        sound = "therefore no sound";
} console.log(animal,sound);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////

// decision tree thinking using switch statement i,e.. rock, paper, scissors!!
/*
let playerOne = "scissors";
let computer = "scissors";
switch (playerOne) {
    case (computer):
        console.log("Tie!");
        break;
    case ("rock"):
        if (computer === "paper") {
            console.log("computer wins!");
        } else {
            console.log("player wins");
        }
        break;
    case ("paper"):
        if (computer === "scissors") {
            console.log("computer wins!");
        } else {
            console.log("player wins!");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("computer wins!");
        } else {
            console.log("player wins!");
        }
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
// using Math.random method to generate random choice (rock, paper, scissors!!)
let key = "rps";
let playerOne = key.charAt(Math.floor(Math.random()*3));
let computer = key.charAt(Math.floor(Math.random()*3));
switch (playerOne) {
    case (computer):
        console.log("Tie");
        break;
    case ("r"):
        if (computer === "p") {
            console.log("player = rock vs computer = paper");
            console.log("computer won!");
        } else {
            console.log("player = rock vs computer = scissors");
            console.log("player won!");
        }
        break;   // you forgot to add break; ****
    case ("p"):
        if (computer === "s") {
            console.log("player = paper vs computer = scissors");
            console.log("computer won!");
        } else {
            console.log("player = paper vs computer = rock");
            console.log("player won!");
        } 
        break;// you forgot to add break; *****
    default:
        if (computer === "r" ) {
            console.log("player = scissors vs computer = rock");
            console.log("computer won!");
        } else {
            console.log("player = scissors vs computer = paper");
            console.log("player won!");
        }
}
/*
if (playerOne === computer === "r") {
    console.log("player = rock vs computer = rock");
    //console.log("Tie!");
}
if (playerOne === computer === "p") {
    console.log("player = paper vs computer = paper");
    //console.log("Tie!");
}
if (playerOne === computer === "s") {
    console.log("player = scissors vs computer = scissors");
    //console.log("Tie!");
}
*/
// if you don't add break after each case, then it will execute and return for each step***** 
// so the break; are must!!!!





















































