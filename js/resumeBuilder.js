$("#main").append("Vincent Huang <P>");

//[string]replace([old],[new])
var email = "thosekidsme@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);


var awesomeThoughts = "I am Vincent and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
/*console.log(funThoughts);
*/

$("#main").append(funThoughts);
