let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

 img1.addEventListener("click", function() {
  image1.style.display = "block";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
});

img2.addEventListener("click", function() {
  image1.style.display = "none";
  image2.style.display = "block";
  image3.style.display = "none";
  image4.style.display = "none";
});

img3.addEventListener("click", function() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "block";
  image4.style.display = "none";
});

img4.addEventListener("click", function() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
});