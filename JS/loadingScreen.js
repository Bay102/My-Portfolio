  // Show the loading screen when the page is loading
  window.addEventListener("load", function() {
   document.querySelector(".loading-screen").style.display = "block";
 });

 // Hide the loading screen when the page has finished loading
 window.addEventListener("load", function() {
   setTimeout(function() {
     document.querySelector(".loading-screen").style.display = "none";
   }, 2800); // Hide the loading screen after 3.8 second
 });