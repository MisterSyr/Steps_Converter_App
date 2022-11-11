// Call the function
// Event listener to trigger the function
// Event listeners for button click
// Calculate event listener
document.querySelector(".calculate").addEventListener("click", function () {
  // hide output
  document.getElementById("km").style.display = "none";
  document.getElementById("calories").style.display = "none";
  // show loader
  document.querySelector(".loader").style.display = "block";
  setTimeout(StepsConv, 2000);
});

// Event listeners for clear button
// Clear event listener
document.querySelector(".clear").addEventListener("click", clear);

// function [Calculate + Clear]

// Calculate function
function StepsConv() {
  // declaring steps variable
  const steps = document.getElementById("steps").value;
  // conversion from steps to Km
  let index = (steps * 0.000751).toFixed(2);
  // conversion from Km to calories burned
  let index1 = (index * 55).toFixed(2);
  // checking the functionality in two console.log:
  // console.log("Your steps in Km: " + index)
  // console.log("Your calories burned: " + index1)

  // condition to check if step field == 0 or not
  if (steps != 0) {
    const km = document.getElementById("km");
    const calories = document.getElementById("calories");

    // console.log("Your StepsConv is" + index)
    // displaying results on the screen
    km.innerHTML = "KM walked 🏃‍♂️ = " + index + "Km";
    calories.innerHTML = "Calories burned 🔥 = " + index1 + "Cal";

    //Hiding the loader and the output
    document.getElementById("km").style.display = "block";
    document.getElementById("calories").style.display = "block";
    document.querySelector(".loader").style.display = "none";
  } else {
    // Error Message
    // alert('Error!')
    error();
    function error() {
      document.getElementById("km").style.display = "block";
      document.getElementById("calories").style.display = "block";
      document.querySelector(".loader").style.display = "none";
      //displaying an error message
      document.getElementById("km").innerHTML =
        "<span style='color:black; background-color:pink; border-radius:10px; padding:3px;';> ⚠️ Error: Enter Number of steps first!";
      // Settimout method to hide the message after 5 seconds
      setTimeout(() => {
        document.getElementById("km").innerHTML = "";
        document.getElementById("calories").innerHTML = "";
      }, 5000);
    }
  }
}

// Clear function - for the clear button
function clear() {
  document.getElementById("steps").value = "";
  document.getElementById("km").innerHTML = "";
  document.getElementById("calories").innerHTML = "";
}
