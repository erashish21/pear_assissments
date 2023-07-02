let spin_no = 0;
// Fetching the video tag and congratulation container
const congratulationVideo = document.createElement("video");
const congratulationOverlay = document.getElementById(
    "congratulationOverlay"
  );

// function to spin the wheel
function spin() {
  // Disable the button
  document.getElementById("spin").disabled = true;

  spin_no++;
  // to play sound
  wheel.play();
  // Fetch container div using id.
  const element = document.getElementById("container");
  let SelectedItem = "";
  // Array is generated using online array generater.
  let TA = shuffle([1770, 2130, 2490]);
  let Myntra = shuffle([1890, 2250, 2610]);
  let Flipkart = shuffle([1850, 2210, 2570]);
  let Samsung = shuffle([1810, 2170, 2530]);
  let OnePlus = shuffle([1750, 2110, 2470]);
  let Realme = shuffle([1630, 1990, 2350]);
  let Whirlpool = shuffle([1570, 1930, 2290]);
  let Macbook = shuffle([1530, 1890, 2250]);
  let Speaker = shuffle([1470, 1830, 2190]);
  let Ipad = shuffle([1410, 1770, 2130]);

  // Store the wheel value in results
  let results = shuffle([
    TA[0],
    Flipkart[0],
    Myntra[0],
    Samsung[0],
    OnePlus[0],
    Realme[0],
    Whirlpool[0],
    Macbook[0],
    Speaker[0],
    Ipad[0],
  ]);

  // Conditions for selected Item value
  if (TA.includes(results[0])) SelectedItem = "Try Again";
  if (Flipkart.includes(results[0])) SelectedItem = "10% Flipkart Discount";
  if (Myntra.includes(results[0])) SelectedItem = "Myntra Coupon";
  if (Samsung.includes(results[0])) SelectedItem = "Samsung Ideapad";
  if (OnePlus.includes(results[0])) SelectedItem = "OnePlus Airbud";
  if (Realme.includes(results[0])) SelectedItem = "Realme X9 5g";
  if (Whirlpool.includes(results[0])) SelectedItem = "Whirlpool AC";
  if (Macbook.includes(results[0])) SelectedItem = "MacBook Air";
  if (Speaker.includes(results[0])) SelectedItem = "Speaker Portable";
  if (Ipad.includes(results[0])) SelectedItem = "Ipad Mini";

  // Set the transition and rotation value
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + results[0] + "deg)";
  element.classList.remove("animate");

  // to add the animate class into wheel
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);
  // Enable the button after the spinning animation is finished
  setTimeout(function () {
    document.getElementById("spin").disabled = false;
  }, 6000);
  if (spin_no === 1 || SelectedItem === "Try Again") {
    // When wheel rotate first times
    setTimeout(function () {
      wheel.pause();
      tryAgain.play();
      // To show the sweet Alert after rotating the wheel
      Swal.fire({
        title: "Uff!",
        html: "TRY AGAIN To SPIN",
        imageUrl:
          "https://www.shutterstock.com/image-vector/icon-symbolizing-trying-again-colorful-600w-457723846.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }, 5500);
  }
  if (spin_no === 2 && SelectedItem !== "Try Again") {
    // When wheel rotate second times
    setTimeout(function () {
      wheel.pause();
      applause.play();
      spin_no--;

      // Display the congratulation video
      congratulationOverlay.style.display = "block";

      // Show the congratulation message
      Swal.fire({
        title: "Wow!",
        html: "You Won " + SelectedItem,
        imageUrl:
          "https://img.freepik.com/free-vector/celebration-emblem-illustration_1284-7727.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      // Add the congratulation video to the overlay
      congratulationVideo.src = "assets/video/congrats.webm";
      congratulationVideo.autoplay = true;
      congratulationVideo.loop = true;
      congratulationVideo.muted = true;
      congratulationVideo.style.width = "100%";
      congratulationVideo.style.height = "100%";

      congratulationOverlay.appendChild(congratulationVideo);
    }, 5500);
  }
//   function to remove the video celibration
  setTimeout(function () {
    congratulationOverlay.removeChild(congratulationVideo);
    congratulationOverlay.style.display = "none";
  }, 10000);

//   function to stop the wheel
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}


// suffle function to rotate the wheel using array number
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }
  return array;
}
