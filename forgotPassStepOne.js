// Main Condition :
if (localStorage.getItem("ForgotPasswordFirstStageAccess") == "Not Given") {
  window.location.href = "/logIn";
}

// Submit Btn :
document.querySelector(".searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    email: document.querySelector(".inputEmailClass").value,
  };

  fetch(`/resetPasswordStepOne/${JSON.stringify(obj)}`)
    .then((response) => response.json())
    .then((message) => {
      if (message.resFromBackEndForgotPassword == "OK") {
        localStorage.setItem("ForgotPasswordSecondStageAccess", "Given");
        document.querySelector(".positiveResponse").style.display = "block";
        document.querySelector(".negativeResponse").style.display = "none";
      } else if (message.resFromBackEndForgotPassword == "NOT OK") {
        document.querySelector(".negativeResponse").style.display = "block";
        document.querySelector(".positiveResponse").style.display = "none";
      }
    });
});
