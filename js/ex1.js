var name = prompt(`Please enter your name: `);
var grade = parseInt(prompt(`Enter the number of units completed : `));

if(grade<0){
   console.log (`Invalid grade`);
}

else{
    console.log(`Hello ${name}!`);
  

    if ((grade >=0) && (grade <= 30)) {
        console.log(`Your gradestanding is Freshman`);
        }

    if ((grade >=31) && (grade <= 60)) {
        console.log(`Your gradestanding is Sophomore`);
        }    

    if ((grade >=61) && (grade <= 90)) {
        console.log(`Your gradestanding is Junior`);
        }

    if (grade >=91) {
        console.log(`Your gradestanding is Senior`);
    }
}