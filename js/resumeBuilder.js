//[string]replace([old],[new])
var email = "thosekidsme@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

//*/
var name = "Vincent Huang"
var formattedName = HTMLheaderName.replace("%data%",name)

var role = "Product Manager"
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole).prepend(formattedName);

// $("#header").append(formmatedName);

/*/
Replacing Awesome with Fun


var awesomeThoughts = "I am Vincent and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

console.log(funThoughts);

$("#main").append(funThoughts);
*/
