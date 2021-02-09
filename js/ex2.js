const day = prompt("Please enter a day: ");
var sun="Sunday";
var mon="Monday";
var tue="Tuesday";
var wed="Wednesday";
var thu="Thursday";
var fri="Friday";
var sat="Saturday";

switch (day) {
  case "sun":
    console.log("You entered: "+ sun);
    console.log("The following day is: "+ mon);
    break;
  case "mon":
    console.log("You entered: "+ mon);
    console.log("The following day is: "+ tue);
    break;
  case "tue":
    console.log("You entered: "+ tue);
    console.log("The following day is: "+ wed);
    break;  
  case "wed":
    console.log("You entered: "+ wed);
    console.log("The following day is: "+ thu);
    break;
  case "thu":
    console.log("You entered: "+ thu);
    console.log("The following day is: "+ fri);  
    break;
  case "fri":
    console.log("You entered: "+ fri);
    console.log("The following day is: "+ sat);  
    break;
  case "sat":
    console.log("You entered: "+ sat);
    console.log("The following day is: "+ sun);
  default:
    console.log("Not a valid day type");
}
