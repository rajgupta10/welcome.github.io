document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the form and submit button
  var form = document.getElementById("registration-form");
  var submitButton = document.getElementById("submit-button");

  // Add an event listener to the form for submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect to welcome.html
    window.location.href = "welcome.html";
  });
});
