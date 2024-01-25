import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let mainContainer = document.querySelector(".mainContainer");

const firebaseConfig = {
  apiKey: "AIzaSyC_xWX2Nudxcfhijq_LFc1qKunHVo7vh9M",
  authDomain: "pokedex-first-94b6b.firebaseapp.com",
  projectId: "pokedex-first-94b6b",
  storageBucket: "pokedex-first-94b6b.appspot.com",
  messagingSenderId: "862898242985",
  appId: "1:862898242985:web:8e7bb1b19608175961f0b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const userSignIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        let obj = {
          email: user.email,
          userName: user.displayName,
          password: "",
        };

        fetch(`/googleSignIn/${JSON.stringify(obj)}`);

        localStorage.setItem("Access", "Given");
        window.location.href = "/homePage";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Login Page :
function loginPage() {
  if (document.getElementById("pokLoginMainMainContainerID")) {
    const abc = document.getElementById("pokLoginMainMainContainerID");
    abc.remove();
  }

  const pokLoginMainMainContainer = document.createElement("div");
  pokLoginMainMainContainer.classList.add("pokLoginMainMainContainer");
  pokLoginMainMainContainer.setAttribute("id", "pokLoginMainMainContainerID");
  mainContainer.appendChild(pokLoginMainMainContainer);

  const pokLoginMainContainer = document.createElement("div");
  pokLoginMainContainer.classList.add("pokLoginMainContainer");
  pokLoginMainMainContainer.appendChild(pokLoginMainContainer);

  // Childs of main :
  const pokLoginMainNav = document.createElement("div");
  pokLoginMainNav.classList.add("pokLoginMainNav");
  pokLoginMainContainer.appendChild(pokLoginMainNav);
  const pokLoginMainBody = document.createElement("div");
  pokLoginMainBody.classList.add("pokLoginMainBody");
  pokLoginMainContainer.appendChild(pokLoginMainBody);
  const pokLoginMainFooter = document.createElement("div");
  pokLoginMainFooter.classList.add("pokLoginMainFooter");
  pokLoginMainContainer.appendChild(pokLoginMainFooter);

  // pokLoginMainNav :
  const pokLoginMainNavHeading = document.createElement("h1");
  pokLoginMainNavHeading.classList.add("pokLoginMainNavHeading");
  pokLoginMainNavHeading.innerText = "Login Page";
  pokLoginMainNav.appendChild(pokLoginMainNavHeading);
  const pokLoginMainNavError = document.createElement("p");
  pokLoginMainNavError.classList.add("pokLoginMainNavError");
  pokLoginMainNavError.innerText = "Something went wrong, Please Try again!";
  pokLoginMainNav.appendChild(pokLoginMainNavError);

  // pokLoginMainBody :
  const pokLoginMainBodyForm = document.createElement("form");
  pokLoginMainBodyForm.classList.add("pokLoginMainBodyForm");
  pokLoginMainBody.appendChild(pokLoginMainBodyForm);

  // pokLoginMainBodyForm :
  const pokLoginFormEmailLabel = document.createElement("label");
  pokLoginFormEmailLabel.classList.add("pokLoginFormEmailLabel");
  pokLoginFormEmailLabel.innerText = "Email";
  pokLoginMainBodyForm.appendChild(pokLoginFormEmailLabel);
  const pokLoginFormEmailImput = document.createElement("input");
  pokLoginFormEmailImput.classList.add("pokLoginFormEmailImput");
  pokLoginFormEmailImput.placeholder = "Email";
  pokLoginFormEmailImput.type = "email";
  pokLoginFormEmailImput.addEventListener("input", () => {
    pokLoginMainNavError.style.display = "none";
  });
  pokLoginMainBodyForm.appendChild(pokLoginFormEmailImput);
  const pokLoginFormPassLabel = document.createElement("label");
  pokLoginFormPassLabel.classList.add("pokLoginFormPassLabel");
  pokLoginFormPassLabel.innerText = "Password";
  pokLoginMainBodyForm.appendChild(pokLoginFormPassLabel);
  const pokLoginFormPassInput = document.createElement("input");
  pokLoginFormPassInput.classList.add("pokLoginFormPassInput");
  pokLoginFormPassInput.type = "password";
  pokLoginFormPassInput.placeholder = "Password";
  pokLoginFormPassInput.addEventListener("input", () => {
    pokLoginMainNavError.style.display = "none";
  });
  pokLoginMainBodyForm.appendChild(pokLoginFormPassInput);

  // pokLoginMainFooter :
  const pokLoginLoginBtn = document.createElement("button");
  pokLoginLoginBtn.classList.add("pokLoginLoginBtn");
  pokLoginLoginBtn.innerText = "Login";
  pokLoginLoginBtn.addEventListener("click", logInFunction);
  pokLoginMainFooter.appendChild(pokLoginLoginBtn);
  const pokSignInWithGoogleBtnMainDiv = document.createElement("button");
  pokSignInWithGoogleBtnMainDiv.classList.add("pokSignInWithGoogleBtnMainDiv");
  pokSignInWithGoogleBtnMainDiv.addEventListener("click", userSignIn);
  pokLoginMainFooter.appendChild(pokSignInWithGoogleBtnMainDiv);
  const pokSignInWithGoogleBtnImg = document.createElement("img");
  pokSignInWithGoogleBtnImg.classList.add("pokSignInWithGoogleBtnImg");
  pokSignInWithGoogleBtnImg.src =
    "imgs/googleImg/google-suite-icon-google-icon-LmAAJV07.jpg";
  pokSignInWithGoogleBtnMainDiv.appendChild(pokSignInWithGoogleBtnImg);
  const pokSignInWithGoogleBtn = document.createElement("p");
  pokSignInWithGoogleBtn.classList.add("pokSignInWithGoogleBtn");
  pokSignInWithGoogleBtn.innerText = "Sign In With Google";
  pokSignInWithGoogleBtnMainDiv.appendChild(pokSignInWithGoogleBtn);

  const pokLoginSignUpDiv = document.createElement("div");
  pokLoginSignUpDiv.classList.add("pokLoginSignUpDiv");
  pokLoginMainFooter.appendChild(pokLoginSignUpDiv);
  const pokLoginForgotPasswordDiv = document.createElement("div");
  pokLoginForgotPasswordDiv.classList.add("pokLoginForgotPasswordDiv");
  pokLoginMainFooter.appendChild(pokLoginForgotPasswordDiv);

  // pokLoginSignUpDiv :
  const pokLoginSignUpDivText = document.createElement("p");
  pokLoginSignUpDivText.classList.add("pokLoginSignUpDivText");
  pokLoginSignUpDivText.innerText = "Don't have an account.";
  pokLoginSignUpDiv.appendChild(pokLoginSignUpDivText);
  const pokLoginSignUpDivLink = document.createElement("a");
  pokLoginSignUpDivLink.classList.add("pokLoginSignUpDivLink");
  pokLoginSignUpDivLink.href = "signUp";
  pokLoginSignUpDivLink.innerText = "Sign Up";
  pokLoginSignUpDivLink.addEventListener("click", () => {
    pokLoginMainMainContainer.style.display = "none";
    signupPage();
  });
  pokLoginSignUpDiv.appendChild(pokLoginSignUpDivLink);

  // pokLoginForgotPasswordDiv :
  const pokLoginForgotPasswordText = document.createElement("p");
  pokLoginForgotPasswordText.classList.add("pokLoginForgotPasswordText");
  pokLoginForgotPasswordText.innerText = "Forgot Password.";
  pokLoginForgotPasswordDiv.appendChild(pokLoginForgotPasswordText);
  const pokLoginForgotPasswordLink = document.createElement("a");
  pokLoginForgotPasswordLink.classList.add("pokLoginForgotPasswordLink");
  pokLoginForgotPasswordLink.href = "forgotPassStepOne.html";
  pokLoginForgotPasswordLink.innerText = "Click Here";
  pokLoginForgotPasswordLink.addEventListener("click", () => {
    localStorage.setItem("ForgotPasswordFirstStageAccess", "Given");
  });
  pokLoginForgotPasswordDiv.appendChild(pokLoginForgotPasswordLink);

  function logInFunction() {
    let obj = {
      email: pokLoginFormEmailImput.value,
      password: pokLoginFormPassInput.value,
    };

    fetch(`/userLogIn/${JSON.stringify(obj)}`)
      .then((response) => response.json())
      .then((message) => {
        if (message.resFromBackEndLogIn == "OK") {
          localStorage.setItem("Access", "Given");
          window.location.href = "/homePage";

          pokLoginMainNavError.style.display = "none";
        } else {
          pokLoginMainNavError.style.display = "block";
        }
      });
  }
}
loginPage();

// Setting Some Local Storage :
localStorage.setItem("ForgotPasswordFirstStageAccess", "Not Given");
localStorage.setItem("ForgotPasswordSecondStageAccess", "Not Given");
