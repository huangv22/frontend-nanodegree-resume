//[string]replace([old],[new])
var email = "thosekidsme@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

//*/
var formattedName = HTMLheaderName.replace("%data%","Vincent")
var formattedRole = HTMLheaderRole.replace("%data%","Product Manager");


$("#header").prepend(formattedName).append(formattedRole);

// $("#header").append(formmatedName);

/*/

/*
Replacing Awesome with Fun


var awesomeThoughts = "I am Vincent and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

console.log(funThoughts);

$("#main").append(funThoughts);

*/
