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
  //question4   date location

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

  // question2 = 3;
  // question3 = 3;

  var response1 = ""
  var response2 = ""
  var response3 = ""
  ///// response to question 1

  //var textMessage = 0;


  Person.prototype.introText = function(){
    //Dark person
    if (profileDark === true && firstText === 1) {
      response1 = "dark intro = DARK response"
      this.dark += 1;
    } else if (profileDark === true && firstText === 2) {
      response1 = "crazy intro = DARK response"
    } else if (profileDark === true && firstText === 3) {
      response1 = "normal intro= DARK response"
      //Crazy person
    } else if (profileCrazy === true && firstText === 1) {
      response1 = "dark intro= CRAZY response"
    } else if (profileCrazy === true && firstText=== 2) {
      response1 = "crazy intro= CRAZY response"
      this.crazy += 1;
    } else if (profileCrazy === true && firstText=== 3) {
      response1 = "normal intro= CRAZY response"
      //Normal Person
    } else if (profileNormal === true && firstText === 1) {
      response1 = "dark intro= NORMAL response"
    } else if (profileNormal === true && firstText=== 2) {
      response1 = "crazy intro = NORMAL response"
    } else if (profileNormal === true && firstText === 3) {
      response1 = "normal intro = NORMAL response"
      this.normal += 1;
    }

  }
  //introText();

  Person.prototype.pickUpLine = function(){
    if (profileDark === true && pickUpText  === 1) {
      response2 = "dark pickupline= DARK response";
      this.dark += 1;
    } else if(profileDark === true && pickUpText === 2){
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
  //pickUpLine();

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


  $("button.message").click(function() {
    $(".testBox").slideToggle();

  });

  $("button.introT").click(function() {
    $("#test").show();
    var text1 = setInterval(answer1, 4000);
    function answer1() {
      $("#answer1").show();
      $(".introT").hide();
      $(".pickUp").show();
      $(".newMessage").show();
      clearInterval(text1);
    }
  });

  $("button.pickUp").click(function() {
    $("#test1").show();
    $(".newMessage").hide();
    var text2 = setInterval(answer2, 4000);
    function answer2() {
      $(".newMessage").show();
      $("#answer2").show();
      $(".pickUp").hide();
      $(".dateLoc").show();
      clearInterval(text2);
    }

  });

  $("button.dateLoc").click(function() {
    $("#test2").show();
    $(".newMessage").hide();
    var text3 = setInterval(answer3, 4000);
    function answer3() {
      $(".newMessage").show();
      $("#answer3").show();
     $(".dateLoc").hide();
     $(".doesNothing").show();
      clearInterval(text3);
    }

  });

  document.getElementById("test").innerHTML = response1;
  document.getElementById("test1").innerHTML = response2;
  document.getElementById("test2").innerHTML = response3;


//////////////////////////////////
var dateResponse = "";


var question1 = 2;
var question2 = 1;
var question3 = 1;
var question4 = 3;
var question5 = 2;
var question6 = 1;
var question7 = "";
var question8 = "";


Person.prototype.dateQuestion1 = function(){
    if (question1  === 1) {
      dateResponse = "branch 1 response";
    } else if (question1 === 2){
      dateResponse = "branch 2 response";
}
}

///question branch 1
Person.prototype.dateQuestion2_firstPath = function(){
  ////DARK PROFILE
  if (question1 === 1 && profileDark === true && question2 === 1) {
    dateResponse = "question2 DARK = DARK response";
    this.dark +=1;
  } else if (question1 === 1 && profileDark === true && question2  === 2){
    dateResponse = "question2 CRAZY = DARK response";

  } else if (question1 === 1 && profileDark === true && question2 === 3){
    dateResponse = "question2 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question1 === 1 && profileCrazy === true && question2  === 1) {
    dateResponse = "question2 DARK  = CRAZY response";
  } else if(question1 === 1 && profileCrazy === true && question2  === 2){
    dateResponse= "question2 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question1 === 1 && profileCrazy=== true && question2 === 3) {
    dateResponse = "question2 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question1 === 1 && profileNormal === true && question2  === 1){
    dateResponse= "question2 DARK  = NORMAL response";
  } else if(question1 === 1 && profileNormal === true && question2 === 2){
    dateResponse= "question2 CRAZY  = NORMALresponse";
  } else if(question1 === 1 && profileNormal === true && question2 === 3){
    dateResponse= "question2 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question branch 2
Person.prototype.dateQuestion2_secondPath = function(){
  ////DARK PROFILE
  if (question1 === 2 && profileDark === true && question2 === 1) {
  dateResponse= "question2 DARK = DARK response";
    this.dark +=1;
  } else if (question1 === 2 && profileDark === true && question2  === 2){
    dateResponse= "question2 CRAZY = DARK response";
  } else if (question1 === 2 && profileDark === true && question2 === 3){
    dateResponse = "question2 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question1 === 2 && profileCrazy === true && question2  === 1) {
    dateResponse = "question2 DARK  = CRAZY response";
  } else if(question1 === 2 && profileCrazy === true && question2  === 2){
    dateResponse = "question2 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question1 === 2 && profileCrazy=== true && question2 === 3) {
    dateResponse = "question2 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question1 === 2 && profileNormal === true && question2  === 1){
    dateResponse = "question2 DARK  = NORMAL response";
  } else if(question1 === 2 && profileNormal === true && question2 === 2){
    dateResponse = "question2 CRAZY  = NORMALresponse";
  } else if(question1 === 2 && profileNormal === true && question2 === 3){
    dateResponse = "question2 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

//question triggering differnt branch
Person.prototype.dateQuestion3 = function(){
    if (question3  === 1) {
      dateResponse = "branch 1 response";
    } else if (question3 === 2){
      dateResponse = "branch 2 response";
}
}

///question3 branch 1
Person.prototype.dateQuestion4_firstPath = function(){
  ////DARK PROFILE
  if (question3 === 1 && profileDark === true && question4 === 1) {
    dateResponse = "question4 DARK = DARK response";
    this.dark +=1;
  } else if (question3 === 1 && profileDark === true && question4  === 2){
    dateResponse = "question4 CRAZY = DARK response";

  } else if (question3 === 1 && profileDark === true && question4 === 3){
    dateResponse = "question4 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question3 === 1 && profileCrazy === true && question4  === 1) {
    dateResponse = "question4 DARK  = CRAZY response";
  } else if(question3 === 1 && profileCrazy === true && question4  === 2){
    dateResponse= "question4 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question3 === 1 && profileCrazy=== true && question4 === 3) {
    dateResponse = "question4 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question3 === 1 && profileNormal === true && question4  === 1){
    dateResponse= "question4 DARK  = NORMAL response";
  } else if(question3 === 1 && profileNormal === true && question4 === 2){
    dateResponse= "question4 CRAZY  = NORMALresponse";
  } else if(question3 === 1 && profileNormal === true && question4 === 3){
    dateResponse= "question4 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question3 branch 2
Person.prototype.dateQuestion4_secondPath = function(){
  ////DARK PROFILE
  if (question3 === 2 && profileDark === true && question4 === 1) {
  dateResponse= "question4 DARK = DARK response";
    this.dark +=1;
  } else if (question3 === 2 && profileDark === true && question4  === 2){
    dateResponse= "question4 CRAZY = DARK response";
  } else if (question3 === 2 && profileDark === true && question4 === 3){
    dateResponse = "question4 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question3 === 2 && profileCrazy === true && question4  === 1) {
    dateResponse = "question4 DARK  = CRAZY response";
  } else if(question3 === 2 && profileCrazy === true && question4  === 2){
    dateResponse = "question4 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question3 === 2 && profileCrazy=== true && question4 === 3) {
    dateResponse = "question4 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question3 === 2 && profileNormal === true && question4  === 1){
    dateResponse = "question4 DARK  = NORMAL response";
  } else if(question3 === 2 && profileNormal === true && question4 === 2){
    dateResponse = "question4 CRAZY  = NORMALresponse";
  } else if(question3 === 2 && profileNormal === true && question4 === 3){
    dateResponse = "question4 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

//question triggering differnt branch
Person.prototype.dateQuestion5 = function(){
    if (question5  === 1) {
      dateResponse = "branch 1 response";
    } else if (question5 === 2){
      dateResponse = "branch 2 response";
}
}

///question3 branch 1
Person.prototype.dateQuestion6_firstPath = function(){
  ////DARK PROFILE
  if (question5 === 1 && profileDark === true && question6 === 1) {
    dateResponse = "question6 DARK = DARK response";
    this.dark +=1;
  } else if (question5 === 1 && profileDark === true && question6  === 2){
    dateResponse = "question6 CRAZY = DARK response";

  } else if (question5 === 1 && profileDark === true && question6 === 3){
    dateResponse = "question6 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question5 === 1 && profileCrazy === true && question6  === 1) {
    dateResponse = "question6 DARK  = CRAZY response";
  } else if(question5 === 1 && profileCrazy === true && question6  === 2){
    dateResponse= "question6 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question5 === 1 && profileCrazy=== true && question6 === 3) {
    dateResponse = "question6 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question5 === 1 && profileNormal === true && question6  === 1){
    dateResponse= "question6 DARK  = NORMAL response";
  } else if(question5 === 1 && profileNormal === true && question6 === 2){
    dateResponse= "question6 CRAZY  = NORMALresponse";
  } else if(question5 === 1 && profileNormal === true && question6 === 3){
    dateResponse= "question6 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question5 branch 2
Person.prototype.dateQuestion6_secondPath = function(){
  ////DARK PROFILE
  if (question5 === 2 && profileDark === true && question6 === 1) {
  dateResponse= "question6 DARK = DARK response";
    this.dark +=1;
  } else if (question5 === 2 && profileDark === true && question6  === 2){
    dateResponse= "question6 CRAZY = DARK response";
  } else if (question5 === 2 && profileDark === true && question6 === 3){
    dateResponse = "question6 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question5 === 2 && profileCrazy === true && question6  === 1) {
    dateResponse = "question6 DARK  = CRAZY response";
  } else if(question5 === 2 && profileCrazy === true && question6  === 2){
    dateResponse = "question6 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question5 === 2 && profileCrazy=== true && question6 === 3) {
    dateResponse = "question6 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question5 === 2 && profileNormal === true && question6  === 1){
    dateResponse = "question6 DARK  = NORMAL response";
  } else if(question5 === 2 && profileNormal === true && question6 === 2){
    dateResponse = "question6 CRAZY  = NORMALresponse";
  } else if(question5 === 2 && profileNormal === true && question6 === 3){
    dateResponse = "question6 NORMAL = NORMAL response";
    this.normal += 1;
  }
}





//profile1.dateQuestion1();
//profile1.dateQuestion2_firstPath();
// profile1.dateQuestion2_secondPath();
// profile1.dateQuestion3();
// // profile1.dateQuestion4_secondPath();
// profile1.dateQuestion4_firstPath();
profile1.dateQuestion5();
profile1.dateQuestion6_secondPath();

  document.getElementById("story").innerHTML = dateResponse;
  document.getElementById("story1").innerHTML = "Hello";




});
