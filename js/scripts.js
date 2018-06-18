var Person = function(name, age, aboutMe, astrolgical, occupation) {
  this.name = name;
  this.age = age;
  this.aboutMe; aboutMe;
  this.astrolgical = astrolgical;
  this.occupation = occupation;
  this.dark = dark;
  this.crazy = crazy;
  this.normal = normal;

}
var Player = function(playerName, genderInterests, upperAge, lowerAge){
  this.playerName = playerName;
  this.genderInterests = genderInterests;
  this.upperAge = upperAge;
  this.lowerAge = lowerAge;
}

var profileNames = ["Dutchess", "Lupusina", "Brenda"];
var profileAges = [27, 25, 30];
var profileAboutMes = [
                        "Just moved to the area from Transylvania. Back in the market for love after a misunderstanding with the locals. No garlic please.",

                        "On the prowl for that special someone who can respect my space when I need it (regular monthly trips).",

                        "Not really sure what I am doing on here, my friends made me set up a profile.",

                      ];


var profileAstrologicals = ["Capricorn","Leo","Virgo"];
var profileOccupations = ["Night Shift", "Bartender", "Wage Slave"];

$(document).ready(function(){
  $("#form-match").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedLowerAge = $("#lower-age").val();
    var inputtedUpperAge = $("#upper-age").val();
    var inputtedGender = $("input:radio[name=gender]:checked").val();

    var newPlayer = new Player (inputtedName, inputtedGender, inputtedUpperAge, inputtedLowerAge);
    console.log(newPlayer.playerName);
    //Create Panels
    for (i = 0; i < profileNames.length; i++) {
      var newPerson = new Person (profileNames[i], profileAges[i], profileAboutMes[i], profileAstrologicals[i], profileOccupations[i]);      $("#profiles").append(
                            '<div class="panel panel-danger col-md-4">' +
                              '<h2 class = "panel-heading"><span class = "profile-name" >' +  + '</span></h2>'
                              <div class="panel-body">
                                <div class="row">
                                  <div class="col-md-6">
                                    <strong>Age:</strong> <span class = "profile-age" ></span>
                                  </div>
                                  <div class="col-md-6">
                                    <strong>Interested In:</strong> <span class = "gender-interests"></span>
                                  </div>
                                </div>
                              </div>
                              <img src="img/vampire.jpg" alt="">
                              <div class="initial-hidden">
                                <p><strong>Astrological Sign:</strong> <span class ="profile-astrological"></span></p>
                                <p><strong>Occupation:</strong> <span class = "profile-occupation"></span></p>
                                <strong>About me:</strong> <span class = "profile-about-me"></span>
                              </div>
                            </div>
                          );
    }
  });
});
