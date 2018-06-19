//Constructors
var Person = function(name, age, aboutMe, astrological, occupation, hobby, profileImage, dark, crazy, normal) {
  this.name = name;
  this.age = age;
  this.aboutMe= aboutMe;
  this.astrological = astrological;
  this.occupation = occupation;
  this.hobby = hobby;
  this.profileImage = profileImage;
  this.dark = dark;
  this.crazy = crazy;
  this.normal = normal;
}

//Profile Information
var profileNames = ["Dutchess Capreanu", "Supul Sinac", "Brenda Smith"];
var profileAges = [30, 27, 25];
var profileAboutMes = [
                        "Just moved to the area from Transylvania. Back in the market for love after a misunderstanding with the locals. No garlic please.",

                        "On the prowl for that special someone who can respect my space when I need it (regular monthly trips).",

                        "Not really sure what I am doing on here, my friends made me set up a profile.",

                      ];
var profileAstrologicals = ["Capricorn","Leo","Virgo"];
var profileOccupations = ["Night Shift", "Bartender", "Wage Slave"];
var profileHobbies = ["Candelabra", ""]
var profileImages = ["vampire", "wolf", "basic"];
var profileDarkScore = [10, 5, 2];
var profileCrazyScore = [5, 2, 10];
var profileNormalScore = [2, 10, 5];

//Global variables
var Player = new Person ()


$(document).ready(function(){
  $("#form-match").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedLowerAge = $("#lower-age").val();
    var inputtedUpperAge = $("#upper-age").val();
    var inputtedGender = $("input:radio[name=gender]:checked").val();

    Player = new Person (inputtedName);
    console.log(Player);
    //Create Panels
    for (i = 0; i < profileNames.length; i++) {
      var newPerson = new Person (profileNames[i], profileAges[i], profileAboutMes[i], profileAstrologicals[i], profileOccupations[i], profileImages[i]);
      $("#profiles").append(
                            '<div class="panel panel-danger col-md-4">' +
                              '<h2 class = "panel-heading"><span class = "profile-name" >' + newPerson.name + '</span></h2>' +
                              '<div class="panel-body">' +
                                '<div class="row">' +
                                  '<div class="col-md-6">' +
                                    '<strong>Age:</strong> <span class = "profile-age" >' + newPerson.age + '</span>' +
                                  '</div>' +
                                  '<div class="col-md-6">' +
                                    '<strong>Interested In:</strong> <span class = "gender-interests">Male</span>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                              '<img src="img/' + newPerson.profileImage + '.jpg" alt="">' +
                              '<div class="initial-hidden">' +
                                '<p><strong>Astrological Sign:</strong> <span class ="profile-astrological">' + newPerson.astrological + '</span></p>' +
                                '<p><strong>Occupation:</strong> <span class = "profile-occupation">' + newPerson.occupation + '</span></p>' +
                                '<strong>About me:</strong> <span class = "profile-about-me">' + newPerson.aboutMe + '</span>' +
                              '</div>' +
                            '</div>'
                          );
    }
  });

//
//
//   var dark = 0;
//   var crazy = 0;
//   var normal = 0;
//
//   var profile1 = new Person("Eddie", dark, crazy, normal);
//
//   profileDark = true;
//   profileCrazy = false;
//   profileNormal = false;
//
//   // response to each question. responses output 1 - 3
//   firstText = 1; // first text
//   pickUpText = 1; // second text
//   locationText = 1; // third text
//
//   // question2 = 3;
//   // question3 = 3;
//
//   var response1 = ""
//   var response2 = ""
//   var response3 = ""
//   ///// response to question 1
//
//   //var textMessage = 0;
//
//
//   Person.prototype.introText = function(){
//     //Dark person
//     if (profileDark === true && firstText === 1) {
//       response1 = "dark intro = DARK response"
//       this.dark += 1;
//     } else if (profileDark === true && firstText === 2) {
//       response1 = "crazy intro = DARK response"
//     } else if (profileDark === true && firstText === 3) {
//       response1 = "normal intro= DARK response"
//       //Crazy person
//     } else if (profileCrazy === true && firstText === 1) {
//       response1 = "dark intro= CRAZY response"
//     } else if (profileCrazy === true && firstText=== 2) {
//       response1 = "crazy intro= CRAZY response"
//       this.crazy += 1;
//     } else if (profileCrazy === true && firstText=== 3) {
//       response1 = "normal intro= CRAZY response"
//       //Normal Person
//     } else if (profileNormal === true && firstText === 1) {
//       response1 = "dark intro= NORMAL response"
//     } else if (profileNormal === true && firstText=== 2) {
//       response1 = "crazy intro = NORMAL response"
//     } else if (profileNormal === true && firstText === 3) {
//       response1 = "normal intro = NORMAL response"
//       this.normal += 1;
//     }
//
//   }
//   //introText();
//
//   Person.prototype.pickUpLine = function(){
//     if (profileDark === true && pickUpText  === 1) {
//       response2 = "dark pickupline= DARK response";
//       this.dark += 1;
//     } else if(profileDark === true && pickUpText === 2){
//       response2 = "crazy pickUpLine= DARK response";
//     } else if(profileDark === true && pickUpText  === 3){
//       response2 = "normal pickUpLine= dark response";
//
//     } else if (profileCrazy  === true && pickUpText  === 1) {
//       response2 = "dark pickupline= CRAZY response";
//     } else if(profileCrazy  === true && pickUpText === 2){
//       response2 = "crazy pickUpLine= CRAZY response";
//       this.crazy += 1;
//     } else if(profileCrazy === true && pickUpText  === 3){
//       response2 = "normal pickUpLine = CRAZY  response";
//
//     } else if (profileNormal === true && pickUpText  === 1) {
//       response2 = "dark pickupline= NORMAL response";
//     } else if(profileNormal  === true && pickUpText  === 2){
//       response2 = "crazy pickUpLine= NORMAL response";
//     } else if(profileNormal === true && pickUpText  === 3){
//       response2 = "normal pickUpLine = NORMAL response";
//       this.normal += 1;
//     }
//
//
//   }
//   //pickUpLine();
//
//   Person.prototype.dateLocation = function(){
//     if (profileDark === true && locationText  === 1) {
//       response3 = "dark location= DARK response";
//       this.dark +=1;
//     } else if (profileDark === true && locationText === 2){
//       response3 = "crazy location= DARK response";
//     } else if (profileDark=== true && locationText === 3){
//       response3 = "normal location= DARK response";
//
//     } else if (profileCrazy === true && locationText  === 1) {
//       response3 = "dark location = CRAZY response";
//     } else if(profileCrazy === true && locationText === 2){
//       response3 = "crazy location = CRAZY response";
//       this.crazy += 1;
//     } else if(profileCrazy=== true && locationText === 3){
//       response3 = "normal location=  CRAZY response";
//
//     } else if (profileNormal === true && locationText  === 1) {
//       response3 = "dark location = NORMAL response";
//     } else if(profileNormal === true && locationText === 2){
//       response3 = "crazy location= NORMALresponse";
//     } else if(profileNormal === true && locationText === 3){
//       response3 = "normal location= NORMAL response";
//       this.normal += 1;
//     }
//
//   }
//
//
//   profile1.dateLocation();
//   profile1.introText();
//   profile1.pickUpLine();
//
//
//   $("button.message").click(function() {
//     $(".testBox").slideToggle();
//
//   });
//
//   $("button.introT").click(function() {
//     $("#test").show();
//     var text1 = setInterval(answer1, 4000);
//     function answer1() {
//       $("#answer1").show();
//       $(".introT").hide();
//       $(".pickUp").show();
//       $(".newMessage").show();
//       clearInterval(text1);
//     }
//   });
//
//   $("button.pickUp").click(function() {
//     $("#test1").show();
//     $(".newMessage").hide();
//     var text2 = setInterval(answer2, 4000);
//     function answer2() {
//       $(".newMessage").show();
//       $("#answer2").show();
//       $(".pickUp").hide();
//       $(".dateLoc").show();
//       clearInterval(text2);
//     }
//
//   });
//
//
//   $("button.dateLoc").click(function() {
//     $("#test2").show();
//     $(".newMessage").hide();
//     var text3 = setInterval(answer3, 4000);
//     function answer3() {
//       $(".newMessage").show();
//       $("#answer3").show();
//      $(".dateLoc").hide();
//      $(".doesNothing").show();
//       clearInterval(text3);
//     }
//
//   });
//
//
//
//
//
//   document.getElementById("test").innerHTML = response1;
//   document.getElementById("test1").innerHTML = response2;
//   document.getElementById("test2").innerHTML = response3;
//
// });
//
//

});
