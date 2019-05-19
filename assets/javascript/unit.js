//  we create variables  
var random_result = 0;
var win = 0;
var lost = 0;
var numberOptions = [];
var counter = 0;
var targetNumber = 0;
// then I create the random for the computer to chose
targetNumber = Math.floor(Math.random() * 101) + 19;
$("result").html("random: ");
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < 4; i++) {
  numberOptions[i] = Math.floor(Math.random() * 11) + 1;
}
$("#number-to-guess").text(targetNumber);


// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.


// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("#image-" + (i + 1));

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.


  // Each imageCrystal will be given a src link to the crystal image


  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  // $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  console.log(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  $("#player-guess").text(counter);

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  // alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
    win++;
    $("#win").text(win);

    reset();
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    lost++;
    $("#lost").text(lost);
    reset();
  }

});

var reset = function () {
  numberOptions = [];
  counter = 0;
  targetNumber = Math.floor(Math.random() * 101) + 19;
  for (var i = 0; i < 4; i++) {
    numberOptions[i] = Math.floor(Math.random() * 11) + 1;
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("#image-" + (i + 1));

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.


    // Each imageCrystal will be given a src link to the crystal image


    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  }
  $("#player-guess").text("0");
  $("#number-to-guess").text(targetNumber);
  $("#lost").text(lost);
  $("#win").text(win);


}

