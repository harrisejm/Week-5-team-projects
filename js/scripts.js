var Person = function(name, age, aboutMe, astrolgical, occupation) {
  this.name = name;
  this.age = age;
  this.aboutMe; aboutMe;
  this.astrolgical = astrolgical;
  this.occupation = occupation;
  this.dark = dark;
}


var profileNames = ["Helga", "Mindy", "Jane "];
var profileAges = [45];
var profileAboutMes = [
                        "My name is " + profileNames[Math.floor((Math.random() * 3))] + " I hail from Bavaria. I like beer, bratwurst and Oompah music.  I hold the record for Das Boot in all of Germany. I like strong aggressive men.",
                      ];

                      
var profileAstrologicals = ["Scorpio"];
var profileOccupations = ["Beer Witch"];

$(document).ready(function(){






document.getElementById("test").innerHTML = profileAboutMes;


});

