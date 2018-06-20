var Person = function(name) {
  // this.name = name;
  // this.profileDark = profileDark;
  // this.profileCrazy = profileCrazy;
  // this.profileNormal =profileCrazy;

}

var profileNames = ["Helga", "Mindy", "Jane "];
var profileAges = [45];
var profileAboutMes = [
  "My name is " + profileNames[Math.floor((Math.random() * 3))] + " I hail from Bavaria. I like beer, bratwurst and Oompah music.  I hold the record for Das Boot in all of Germany. I like strong aggressive men.",
];

var profileAstrologicals = ["Scorpio"];
var profileOccupations = ["Beer Witch"];

$(document).ready(function(){

  var profile1 = new Person("Eddie");

  var profileDark = false;
  var profileCrazy = false;
  var profileNormal = false;

  // response to each question. responses output 1 - 3
  var firstText = 1; // 1st text -- 4 options
  var pickUpText = 1; // 2nd text -- 4 options
  var peronalInfoText = 1; // 3rd text -- 1 option
  var responseDLKtext = 1; // 4th text -- 1 option
  var responseToBioText = 1 // 5th text -- 4 options
  var locationText = 1; // 6th text -- 2 options

  var response1Dutchess = ""
  var response1Supul = ""
  var response1Brenda = ""

  var response2Dutchess = ""
  var response2Supul = ""
  var response2Brenda  = ""

  var response3Dutchess = ""
  var response3Supul = ""
  var response3Brenda = ""

  var response4Dutchess = ""
  var response4Supul = ""
  var response4Brenda = ""

  var response5Dutchess = ""
  var response5Supul = ""
  var response5Brenda = ""

  var response6Dutchess = ""
  var response6Supul = ""
  var response6Brenda = ""

  Person.prototype.introText = function(){
    //Dark person Dutchess
    if (profileDark === true && firstText === 1) {
      response1Dutchess = "... "
    } else if (profileDark === true && firstText === 2) {
      response1Dutchess = "... ugh"
    } else if (profileDark === true && firstText === 3) {
      response1Dutchess = "Greatings morta" + profile1.name;
    } else if (profileDark === true && firstText === 4) {
      response1Dutchess = "Um... hello?";
      //Crazy person Supul
    } else if (profileCrazy === true && firstText === 1) {
      response1Supul = "Huh? WhaT? You talking to MEEE?"
    } else if (profileCrazy === true && firstText === 2) {
      response1Supul = "HONEY WHAT???"
    } else if (profileCrazy === true && firstText === 3) {
      response1Supul = "WHAT?? WHO TOLD YOU???"
    } else if (profileCrazy === true && firstText === 4) {
      response1Supul = "HEEEEEEEEEEEEEEEEYYYY!!!!"
      //Normal Person Brenda
    } else if (profileNormal === true && firstText === 1) {
      response1Brenda = "Sup"
    } else if (profileNormal === true && firstText=== 2) {
      response1Brenda  = "Ew"
    } else if (profileNormal === true && firstText === 3) {
      response1Brenda  = "EW"
    } else if (profileNormal === true && firstText === 4) {
      response1Brenda  = "Ugh"
  }
}
  Person.prototype.pickUpLine = function(){
    if (profileDark === true && pickUpText === 1) {
      response2Dutchess = "Oh, no... they don't have anything I could eat";
    } else if(profileDark === true && pickUpText === 2){
      response2Dutchess = "Speak not of the accursed ones!";
    } else if(profileDark === true && pickUpText  === 3){
      response2Dutchess = "Oh my, well let us hope it doesn't rattle right out of you haha ;)";
    } else if(profileDark === true && pickUpText  === 4){
      response2Dutchess = "Eh, on occasion I suppose...";

    } else if (profileCrazy  === true && pickUpText  === 1) {
      response2Supul = "Bah, where's the fun if the food's just sitting there waitin' for ya?";
    } else if(profileCrazy  === true && pickUpText === 2){
      response2Supul = "REEEEEEEE";
    } else if(profileCrazy === true && pickUpText  === 3){
      response2Supul = "Look, this hair is impossible OK?";
    } else if(profileCrazy === true && pickUpText  === 4){
      response2Supul = "AAAWWWWOOOOOOOOOOOOOOOOO!!!!";

    } else if (profileNormal === true && pickUpText  === 1) {
      response2Brenda = "OOOMG can you pick me up some chai??";
    } else if(profileNormal  === true && pickUpText  === 2){
      response2Brenda = "Ew";
    } else if(profileNormal === true && pickUpText  === 3){
      response2Brenda = "What?? How am I spooky???";
    } else if(profileNormal === true && pickUpText  === 4){
      response2Brenda = "Wow ok slow down there...";
  }
  }

  /////
  Person.prototype.personalInfo = function(){
    if (profileDark === true && peronalInfoText === 1) {
      response3Dutchess = "First you should know, as my profile mentioned, I am a widow and a recent immigrant to this fine kingdom. Second, I am, due to my work of course, a creature of the night and must spend my days sleeping. I've not yet seen everything the Dark Lord's Kingdom has to offer, but so far I feel right at home.";

    } else if (profileCrazy === true && peronalInfoText === 1) {
      response3Supul = "Where to start, where to start??? I am a fulltime bartender/athletics instructor/hunter (damn site would only let me put in one job). I loooove being out in the wild, the smell of the grass, the scent of the prey... ooooh and the Dark Lord's Kingdom as THE best places to hunt!!!";

    } else if (profileNormal === true && peronalInfoText === 1) {
      response3Brenda = "Let's see... I moved to the Dark Lord's Kingdom on a student visa 8 years ago. After school I already had lots of wage slave offers and so I decided to stay and apply for a work visa. I think maybe it was the seclution in college, but I never realized until afterwards how... strange this country is, and I'm not sure I really fit in...";
    }
  }

  Person.prototype.responseDLK = function(){
    if (profileDark === true && responseDLKtext === 1) {
      response4Dutchess = "Yeah, I really love it here, great place!";

    } else if (profileCrazy === true && responseDLKtext === 1) {
      response4Supul = "Yeah, I really love it here, great place!";

    } else if (profileNormal === true && responseDLKtext === 1) {
      response4Brenda = "Mmmm yeah idk this place is kinda weird...";
    }
  }

  Person.prototype.responseToBio = function(){
    if (profileDark === true && responseToBioText === 1) {
      response5Dutchess = "How… pedantic.";
    } else if (profileDark === true && responseToBioText === 2){
      response5Dutchess = "In… in the sun?";
    } else if (profileDark=== true && responseToBioText === 3){
      response5Dutchess = "How delightful";
    } else if (profileDark=== true && responseToBioText === 4){
      response5Dutchess = "Well, I do love to feed";

    } else if (profileCrazy === true && responseToBioText === 1) {
      response5Supul = "BO-RING";
    } else if(profileCrazy === true && responseToBioText === 2){
      response5Supul = "Mmmm fresh meat";
    } else if(profileCrazy === true && responseToBioText === 3){
      response5Supul = "Did you say… HULA-HOOPING??";
    } else if(profileCrazy === true && responseToBioText === 4){
      response5Supul = "Yeeeeah! Yes! YES! YESS!";

    } else if (profileNormal === true && responseToBioText === 1) {
      response5Brenda = "OMG I luv Netflix!!!!!!!!!!!!!!!! I’ve watched every episode of The Office 7 times!";
    } else if(profileNormal === true && responseToBioText === 2){
      response5Brenda = "Uuuuuh… cooooooool?";
    } else if(profileNormal === true && responseToBioText === 3){
      response5Brenda = "You kinda sound like a creeper.";
    } else if(profileNormal === true && responseToBioText === 3){
      response5Brenda = "I’m a Vegan.";
  }
}

  Person.prototype.dateLocation = function(){
    if (profileDark === true && locationText === 1) {
      response6Dutchess = "Absolutely, darling.";
    } else if (profileDark === true && locationText === 2){
      response3Dutchess = "I suppose I have the time…";

    } else if (profileCrazy === true && locationText  === 1) {
      response6Supul = "YAYAYAYAYAYA!";
    } else if(profileCrazy === true && locationText === 2){
      response3Supul = "What have I got to lose?";

    } else if (profileNormal === true && locationText === 1) {
      response6Brenda = "Uh sure.";
    } else if(profileNormal === true && locationText === 2){
      response6Brenda = "Sigh, I guess.";
    }
  }


  $("button.message").click(function() {
    $(".testBox").slideToggle();
  });
  $("button.introT").click(function() {
    profileDark = true;
      profile1.introText();
    $("#test").show();
    var text1 = setInterval(answer1, 4000);
    function answer1() {
      $("#answer1").show();
      $(".introT").hide();
      $(".pickUp").show();
      $(".newMessage").show();
      clearInterval(text1);
    }
    document.getElementById("test").innerHTML = response1Dutchess;
      profileDark = false;
  });

  $("button.pickUp").click(function() {
    profileDark = true;
    profile1.pickUpLine();
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
    document.getElementById("test1").innerHTML = response2Dutchess;
  profileDark = false;
  });

  $("button.dateLoc").click(function() {
    profileDark = true
    profile1.dateLocation();
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
    document.getElementById("test2").innerHTML = response6Dutchess;
      profileDark = false;
  });


  //profile1.introText();
  // profile1.pickUpLine();
  // profile1.personalInfo();
  // profile1.responseDLK();
  // profile1.responseToBio();
  // profile1.dateLocation();


//////////////////////////////////
var dateResponse = "";


var question1 = 1; //branch question 2 options (1 work or 2 hobbies)
var question2 = 1;
var question3 = 1;
var question4 = 1;
var question5 = 1;
var question6 = 1;
var question7 = 1;
var question8 = 1;


Person.prototype.dateQuestion1 = function(){
  if (question1 === 1 && profileDark === true) {
    dateResponse = "Of course darling, even before I moved to the Dark Lord’s Kingdom I was a creature of the night. I’m currently haunting the Old Farm Hotel between 11pm and sunrise. I don’t see many people these days but that is ok with me, I only need a few to survive. You should stay a night if you haven’t already, the decor is to die for!";
  } else if (question1 === 2 && profileDark === true){
    dateResponse = "Well, I have a great penchant for candelabra, and they have let me do some interior decorating at the hotel when the nights are slow. I am also a collector of fine -red- wines, although unlike most I prefer a younger blend… [she gazes off into the distance apparently lost in this thought.";
///CRAZY PROFILE
  } else if (question1 === 1 && profileCrazy === true) {
    dateResponse = "Aaaah what’s to tell?? I flip bottles and bounce drunks most of the time, but I also make a good deal with all the fresh meat I bring in from my hunts! The bartending is just to fill in the gaps. I live for the hunt!";
  } else if(question1 === 2 && profileCrazy === true){
    dateResponse= "YOU BETCHA! Did I mention that I love hunting? I am also a master taxidermist and decorated marathon runner!!! THINK YOU CAN KEEP UP?!?!";
///NORMAL PROFILE
  } else if (question1 === 1 && profileNormal === true){
    dateResponse= "Oooooh you knooooow, I just work a boring nine to five over at the Wage Slave Industries. I got my degree in Wage Slavery, and the Dark Lord’s Kingdom has world class Wage Slavery! The work is fine, it’s the weirdos that get to me…";
  } else if(question1 === 2 && profileNormal === true){
    dateResponse= "Ooooh well you know, everyone and everything in this place so so strange and foreign, I basically just watch Netflix these days. Have you seen the Office??";
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
