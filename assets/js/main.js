// Preloader hiding and display..............................................

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    var preloader = document.getElementById("loading");
    var content = document.getElementById("afterload");

    setTimeout(function () {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 1000);
  };
});

// auto update Year........................................................
document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("current-year");
  var currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});


