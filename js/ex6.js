var seconds = parseInt(prompt("Enter the seconds."));
var minutes = parseInt(prompt("Enter the minutes."));
var hours = parseInt(prompt("Enter the hour."));

if (seconds < 0 || seconds >60){
    throw "Invalid seconds entered";
}
if (minutes < 0 || minutes >60){
    throw "Invalid minutes entered";
}
if (hours < 0 || hours >24){
    throw "Invalid hours entered";
}

var datetime = new Date();
datetime.setSeconds(seconds);
datetime.setMinutes(minutes);
datetime.setHours(hours);
console.log("Time input: " + datetime.getHours() + ":" + datetime.getMinutes() + ":"+ datetime.getSeconds());

datetime.setSeconds(datetime.getSeconds() + 1);

console.log("One second later: " + datetime.getHours() + ":" + datetime.getMinutes() + ":"+ datetime.getSeconds());