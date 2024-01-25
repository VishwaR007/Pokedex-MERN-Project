// Var local to this poge :
let thisMail = "";
let thisCode = "";

// Fetch email
fetch("/resetPasswordEmailAndOTP")
  .then((response) => response.json())
  .then((message) => {
    thisMail = message.resetEmail;
    thisCode = message.OTP;

    document.querySelector(".inputEmailClass").value = thisMail;
  });

// Submit Btn :
document.querySelector(".submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector(".inputOTPClass").value == thisCode) {
    document.querySelector(".passOTPValidator").style.display = "none";

    // Passowrd Strength :
    let strongnessOfPassword = 0;
    let pokSignupPasswordImputValidationText = document.querySelector(
      ".pokSignupPasswordImputValidationText"
    );
    if (document.querySelector(".inputPasswordClass").value.match(/[a-z]+/)) {
      strongnessOfPassword += 1;
    } else {
      pokSignupPasswordImputValidationText.innerText =
        "Password Should contain at least one lower-case letter.";
      pokSignupPasswordImputValidationText.style.display = "block";
    }
    if (document.querySelector(".inputPasswordClass").value.match(/[A-Z]+/)) {
      strongnessOfPassword += 1;
    } else {
      pokSignupPasswordImputValidationText.innerText =
        "Password Should contain at least one upper-case letter.";
      pokSignupPasswordImputValidationText.style.display = "block";
    }
    if (document.querySelector(".inputPasswordClass").value.match(/[0-9]+/)) {
      strongnessOfPassword += 1;
    } else {
      pokSignupPasswordImputValidationText.innerText =
        "Password Should contain at least one Number b/w 0-9.";
      pokSignupPasswordImputValidationText.style.display = "block";
    }
    if (
      document.querySelector(".inputPasswordClass").value.match(/[@#$%&!?]+/)
    ) {
      strongnessOfPassword += 1;
    } else {
      pokSignupPasswordImputValidationText.innerText =
        "Password Should contain at least one special character from [@, #, $, %, !, ?].";
      pokSignupPasswordImputValidationText.style.display = "block";
    }

    if (strongnessOfPassword >= 4) {
      pokSignupPasswordImputValidationText.style.display = "none";
      if (
        document.querySelector(".inputPasswordClass").value ==
        document.querySelector(".inputReEnterPasswordClass").value
      ) {
        document.querySelector(".passReEnterValidator").style.display = "none";
        let obj = {
          email: document.querySelector(".inputEmailClass").value,
          newPassword: document.querySelector(".inputPasswordClass").value,
        };

        fetch(`/resetPasswordStepTwoLogic/${JSON.stringify(obj)}`)
          .then((response) => response.json())
          .then((message) => {
            if (message.resFromBackEndForgotPassword == "OK") {
              window.location.href = "/logIn";
            }
          });
      } else {
        document.querySelector(".passReEnterValidator").style.display = "block";
      }
    } else {
      pokSignupPasswordImputValidationText.style.display = "block";
    }
  } else {
    document.querySelector(".passOTPValidator").style.display = "block";
  }
});

// Main Condition :
// if (localStorage.getItem("ForgotPasswordSecondStageAccess") == "Not Given") {
//   window.location.href = "/logIn";
// }
