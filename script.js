// Image file paths
const sunny = "sunny.png";
const cloudy = "cloudy.png";
const storm = "storm.png";

// The two sequences
const versionA = {
  title: "The Perfect Day",
  images: [sunny, cloudy, storm]
};

const versionB = {
  title: "After the Storm",
  images: [storm, cloudy, sunny]
};

// Get elements from the page
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const storyTitle = document.getElementById("storyTitle");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

const imageSlots = [img1, img2, img3];

// Show a sequence on the page
function showSequence(version, activeButton) {
  storyTitle.textContent = version.title;

  for (let i = 0; i < imageSlots.length; i++) {
    imageSlots[i].src = version.images[i];
    imageSlots[i].alt = version.title + " - image " + (i + 1);
  }

  btnA.classList.remove("active");
  btnB.classList.remove("active");
  activeButton.classList.add("active");
}

// Button event listeners
btnA.addEventListener("click", function () {
  showSequence(versionA, btnA);
});

btnB.addEventListener("click", function () {
  showSequence(versionB, btnB);
});

// Show Version A when the page loads
showSequence(versionA, btnA);
