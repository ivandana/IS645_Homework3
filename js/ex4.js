var secret = "secret";
var count = 4;
for (i = 1; i < count; i++) {
    var password = prompt("Enter a password");
    if (i< count && password == secret) {
        console.log("You entered the correct password after " +i + " attempt(s)");
        break;
    }
    else{
        console.log("Your account is locked!  You failed to enter the correct password " + count+ " times")
    }
}
