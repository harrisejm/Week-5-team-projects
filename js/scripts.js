var Person = function(name, dark, crazy, normal) {
  this.name = name;
  // this.age = age;
  // this.aboutMe; aboutMe;
  // this.astrolgical = astrolgical;
  // this.occupation = occupation;
  this.dark = dark;
  this.crazy = crazy;
  this.normal = normal;
}


var profileNames = ["Helga", "Mindy", "Jane "];
var profileAges = [45];
var profileAboutMes = [
  "My name is " + profileNames[Math.floor((Math.random() * 3))] + " I hail from Bavaria. I like beer, bratwurst and Oompah music.  I hold the record for Das Boot in all of Germany. I like strong aggressive men.",
];


var profileAstrologicals = ["Scorpio"];
var profileOccupations = ["Beer Witch"];

$(document).ready(function(){

  //profile1 dark
  //profile2 crazy
  //profile3 normal

  //question1   intro text message
  //1 dark intro
  //2 crazy intro
  //3 normal intro
  //question2   pickup line
  //question3   date location

  var dark = 0;
  var crazy = 0;
  var normal = 0;

  var profile1 = new Person("Eddie", dark, crazy, normal);

  profileDark = true;
  profileCrazy = false;
  profileNormal = false;

  // response to each question. responses output 1 - 3
  firstText = 1; // first text
  pickUpText = 1; // second text
  locationText = 1; // third text

  var response1 = ""
  var response2 = ""
  var response3 = ""

  // var introDarkResponses = ["dark intro = DARK response", "crazy intro = DARK response", "normal intro= Dark response"];
  // var introCrazyResponses = ["dark intro= CRAZY response", "crazy intro= CRAZY response", "normal intro= CRAZY response"];
  // var introNormalResponses = ["dark intro= NORMAL response", "crazy intro = NORMAL response", "normal intro = NORMAL response"];
  //


  Person.prototype.introText = function(){
    //Dark person

    if (profileDark === true && firstText === 1) {
      response1 = "dark intro = DARK response";
      this.dark += 1;
    } else if (profileDark === true && firstText === 2) {
      response1 = "crazy intro = DARK response";
    } else if (profileDark === true && firstText === 3) {
      response1 = "normal intro= Dark response";
      //Crazy person
    } else if (profileCrazy === true && firstText === 1) {
      response1 = "dark intro= CRAZY response";
    } else if (profileCrazy === true && firstText=== 2) {
      response1 = "crazy intro= CRAZY response";
      this.crazy += 1;
    } else if (profileCrazy === true && firstText=== 3) {
      response1 = "normal intro= CRAZY response";
      //Normal Person
    } else if (profileNormal === true && firstText === 1) {
      response1 = "dark intro= NORMAL response";
    } else if (profileNormal === true && firstText=== 2) {
      response1 = "crazy intro = NORMAL response";
    } else if (profileNormal === true && firstText === 3) {
      response1 = "normal intro = NORMAL response";
      this.normal += 1;
    }

  }
  //introText();

  Person.prototype.pickUpLine = function(){
    if (profileDark === true && pickUpText  === 1) {
      response2 = "dark pickupline= DARK response";
      this.dark += 1;
    } else if(profileDark === true && pickUpText  === 2){
      response2 = "crazy pickUpLine= DARK response";
    } else if(profileDark === true && pickUpText  === 3){
      response2 = "normal pickUpLine= dark response";

    } else if (profileCrazy  === true && pickUpText  === 1) {
      response2 = "dark pickupline= CRAZY response";
    } else if(profileCrazy  === true && pickUpText === 2){
      response2 = "crazy pickUpLine= CRAZY response";
      this.crazy += 1;
    } else if(profileCrazy === true && pickUpText  === 3){
      response2 = "normal pickUpLine = CRAZY  response";

    } else if (profileNormal === true && pickUpText  === 1) {
      response2 = "dark pickupline= NORMAL response";
    } else if(profileNormal  === true && pickUpText  === 2){
      response2 = "crazy pickUpLine= NORMAL response";
    } else if(profileNormal === true && pickUpText  === 3){
      response2 = "normal pickUpLine = NORMAL response";
      this.normal += 1;
    }


  }

  Person.prototype.dateLocation = function(){
    if (profileDark === true && locationText  === 1) {
      response3 = "dark location= DARK response";
      this.dark +=1;
    } else if (profileDark === true && locationText === 2){
      response3 = "crazy location= DARK response";
    } else if (profileDark=== true && locationText === 3){
      response3 = "normal location= DARK response";

    } else if (profileCrazy === true && locationText  === 1) {
      response3 = "dark location = CRAZY response";
    } else if(profileCrazy === true && locationText === 2){
      response3 = "crazy location = CRAZY response";
      this.crazy += 1;
    } else if(profileCrazy=== true && locationText === 3){
      response3 = "normal location=  CRAZY response";

    } else if (profileNormal === true && locationText  === 1) {
      response3 = "dark location = NORMAL response";
    } else if(profileNormal === true && locationText === 2){
      response3 = "crazy location= NORMALresponse";
    } else if(profileNormal === true && locationText === 3){
      response3 = "normal location= NORMAL response";
      this.normal += 1;
    }
  }

  profile1.dateLocation();
  profile1.introText();
  profile1.pickUpLine();


  document.getElementById("test").innerHTML = profile1.dark;
  // document.getElementById("test1").innerHTML = response2;
  // document.getElementById("test2").innerHTML = response3;

});
