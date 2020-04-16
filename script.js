$(function() {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".battle-button").click(clickedBattleButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Gidgit", weight: "20", happiness: "15", message:"Hi! I'm Gidgit!" };

function clickedTreatButton() {
  // Increase pet happiness
  // Increase pet weight
  pet_info.weight++;
  pet_info.happiness++;
  pet_info.message="*Om Nom Nom Nom* That was delicious!";
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  // Decrease pet weight
  pet_info.happiness++;
  pet_info.weight--;
  pet_info.message="last one is a rotten egg!";
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight
  pet_info.happiness--;
  pet_info.weight--;
  pet_info.message="No pain, no gain!! *Eye of the tiger playing*";
  checkAndUpdatePetInfoInHtml();
}

function clickedBattleButton(){
  //Decrease pet happiness
  //Increase pet weight
  pet_info.happiness--;
  pet_info.weight++;
  pet_info.message="Come at me bro!";
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  var petWeight = pet_info.weight;
if(pet_info.weight<0|| pet_info.happiness<0){
   pet_info.weight = 0;
  pet_info.happiness=0;
}
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".message").text(pet_info["message"]);
}
