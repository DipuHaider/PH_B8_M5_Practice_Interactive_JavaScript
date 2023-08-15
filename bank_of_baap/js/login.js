document.getElementById("submit-btn").addEventListener("click", function () {
  //console.log("clicked");
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(password);

  if (email === "admin" && password === "123456") {
    // console.log("!!!Valid User!!!");
    window.location.href = "bank.html";
  } else {
    // console.log("Invalid User. Try admin & 123456");
    alert("Invalid User. Try admin & 123456");
  }
});
