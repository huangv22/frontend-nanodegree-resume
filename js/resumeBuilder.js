//[string]replace([old],[new])
var email = "thosekidsme@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);

var bio = {
  "name" : "Vincent Huang",
  "role" : "Product Manager",
  "contacts" : {
    "mobile" : "+1 415.547.0369",
    "github" : "huangv22",
    "twitter": "@huangv",
    "location":"San Francisco",
    "blog" :"http://www.vincentkardiogram.com/",
  },
  "welcomeMsg" : "Zig a Zig ahhh",
  "skills" : ["Saying, good question", "Product Management"],
  "bioPic":"images/me.png"
}

//*/
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole).prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedblog = HTMLblog.replace("%data%",bio.contacts.blog);
$("#topContacts").append(formattedlocation).append(formattedMobile).append(formattedTwitter)
                 .append(formattedgithub).append(formattedblog);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedskills = HTMLskills.replace("%data%",bio.skills)

$("#header").append(formattedbioPic).append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart).append(formattedskills);


// $("#header").append(formmatedName);

/*/
Replacing Awesome with Fun


var awesomeThoughts = "I am Vincent and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

console.log(funThoughts);

$("#main").append(funThoughts);
*/
