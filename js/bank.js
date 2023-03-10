// login button
document.getElementById("submit-button").addEventListener("click", function () {
  // Get email from user
  const mailField = document.getElementById("user-email");
  const userEmail = mailField.value;
  // Get password from user
  const passField = document.getElementById("user-password");
  const userPassword = passField.value;
  if (userEmail == "momenul@gmail.com" && userPassword == "momin") {
    window.location.href = "banking.html";
  }
});
