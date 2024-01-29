// In-built modules import :
const express = require("express");
const path = require("path");
// DB Connection :
const connectDb = require("./mongodbDataBase");
// DB Models :
const Users = require("./Models/user");
const Msgs = require("./Models/msgs");
// Password Hashing :
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = "adnan-tech-programming-computers";
const iv = crypto.randomBytes(16);

const app = express();

// Global Variables :
let fnameGlobal;
let emailGlobal;
let likedPoksArrGlobal = [];
let OTP = "";
let resetEmail = "";

// Loading the static files like html, css and js files using express.static middleware :
app.use(express.static(__dirname + "/"));
// This below line automatically parse incoming JSON data from req :
app.use(express.json());

// Getting the request and sending out html file as a response :
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "logIn.html"));
});
app.get("/logIn", (req, res) => {
  res.sendFile(path.join(__dirname, "logIn.html"));
});
app.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "signUp.html"));
});
app.get("/homePage", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});
app.get("/resetPasswordStepOne", (req, res) => {
  res.sendFile(path.join(__dirname, "forgotPassStepTwo.html"));
});

// passing value to home page using below route :
app.get("/user", async (req, res) => {
  const user = await Users.find({ email: emailGlobal });
  if (user) {
    if (user[0].likedPoks) {
      likedPoksArrGlobal = user[0].likedPoks;
    }
  }
  res.send({ fnameGlobal, emailGlobal, likedPoksArrGlobal });
});

// Sign Up route :
let userSignUpVar;
app.post("/userSignUp", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const likedPoks = [];
  userSignUpVar = 0;

  // Password Hashing :
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedPassword = cipher.update(password, "utf-8", "hex");
  encryptedPassword += cipher.final("hex");
  const base64data = Buffer.from(iv, "binary").toString("base64");

  const checkUser = await Users.find({ email: email });
  if (checkUser.length > 0) {
    res.send({ statusFromBackEnd: "NOT OK" });
  } else {
    userSignUpVar = await Users.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      base64data,
      likedPoks,
    });

    fnameGlobal = fname;
    emailGlobal = email;
    likedPoksArrGlobal = likedPoks;

    res.send({
      statusFromBackEnd: "OK",
    });
  }
});

// Log In route
app.get("/userLogIn/:userObj", async (req, res) => {
  try {
    const { userObj } = req.params;
    const user = await Users.find({ email: JSON.parse(userObj).email });
    if (user.length > 0) {
      // Password Hashing :
      const base64data = Buffer.from(user[0].base64data, "base64");
      const decipher = crypto.createDecipheriv(algorithm, key, base64data);
      let decryptedPassword = decipher.update(user[0].password, "hex", "utf-8");
      decryptedPassword += decipher.final("utf8");

      if (decryptedPassword == JSON.parse(userObj).password) {
        fnameGlobal = user[0].fname;
        emailGlobal = user[0].email;
        likedPoksArrGlobal = user[0].likedPoks;
        res.send({
          resFromBackEndLogIn: "OK",
          presentUserName: user[0].fname,
          presentUserEmail: user[0].email,
          likedPoksArr: user[0].likedPoks,
        });
      } else {
        res.send({ resFromBackEndLogIn: "NOT OK" });
      }
    } else {
      res.send({ resFromBackEndLogIn: "NOT OK" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Google Sign In route :
app.get("/googleSignIn/:userObj", async (req, res) => {
  const { userObj } = req.params;
  const user = await Users.find({ email: JSON.parse(userObj).email });
  if (user.length > 0) {
    fnameGlobal = JSON.parse(userObj).userName;
    emailGlobal = JSON.parse(userObj).email;
    likedPoksArrGlobal = user[0].likedPoks;
  } else {
    fnameGlobal = JSON.parse(userObj).userName;
    emailGlobal = JSON.parse(userObj).email;
    userSignUpVar = await Users.create({
      fname: JSON.parse(userObj).userName,
      lname: "",
      email: JSON.parse(userObj).email,
      password: "",
      base64data: "",
      likedPoks: [],
    });
  }
});
// Liked Poks route :
app.post("/likedPoks", async (req, res) => {
  try {
    const { presentUserEmail, likedPoksArr } = req.body;

    const user = await Users.findOneAndUpdate(
      { email: presentUserEmail },
      { $set: { likedPoks: likedPoksArr } }
    );

    return res.json({ resFromBack: "OK" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Chat Section routes:
app.post("/allMsgs", async (req, res) => {
  const { from, msg, to, seen } = req.body;
  let chatMsgCreate = await Msgs.create({
    from,
    msg,
    to,
    seen,
  });
  let chatMsgGet = await Msgs.find();

  res.send({
    statusFromBackEnd: "OK",
    chatMsgGet: chatMsgGet,
  });
});
app.get("/onSelectOfUserToChat", async (req, res) => {
  let chatMsgGet = await Msgs.find();
  res.send({
    statusFromBackEnd: "OK",
    chatMsgGet: chatMsgGet,
  });
});
app.post("/offcanvasToChatPageNotSeenContacts", async (req, res) => {
  const { to, seen } = req.body;
  let chatMsgGet = await Msgs.find({ to: to, seen: seen });
  res.send({
    statusFromBackEnd: "OK",
    chatMsgGet: chatMsgGet,
  });
});
app.post("/chatSearchUser", async (req, res) => {
  const { objVal } = req.body;
  const allUsersObjectArr = await Users.find();

  let resultArrOfNames = [];

  allUsersObjectArr.forEach((obj) => {
    if (obj.email.startsWith(objVal)) {
      resultArrOfNames.push(obj.email);
    }
  });

  res.send({
    statusFromBackEnd: "OK",
    allUsersObjectArr: resultArrOfNames,
  });
});
app.post("/updateSeenInChat", async (req, res) => {
  const { from, to, seen } = req.body;

  const findAndUpdate = await Msgs.updateMany(
    { from: from, to: to },
    { $set: { seen: "True" } }
  );
});

// Forgot Pass Step One route :
app.get("/resetPasswordStepOne/:userObj", async (req, res) => {
  try {
    const { userObj } = req.params;
    resetEmail = JSON.parse(userObj).email;
    const user = await Users.find({ email: JSON.parse(userObj).email });
    if (user.length > 0) {
      OTP = generateOTP();
      logicForResetPassowrd(JSON.parse(userObj).email);

      res.send({ resFromBackEndForgotPassword: "OK" });
    } else {
      res.send({ resFromBackEndForgotPassword: "NOT OK" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Forgot Pass Step Two route :
app.get("/resetPasswordStepTwoLogic/:userObj", async (req, res) => {
  try {
    const { userObj } = req.params;
    // Password #ing :
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedPassword = cipher.update(
      JSON.parse(userObj).newPassword,
      "utf-8",
      "hex"
    );
    encryptedPassword += cipher.final("hex");
    const base64data = Buffer.from(iv, "binary").toString("base64");

    const user = await Users.find({ email: JSON.parse(userObj).email });
    if (user.length > 0) {
      const user = await Users.findOneAndUpdate(
        { email: JSON.parse(userObj).email },
        {
          $set: {
            password: encryptedPassword,
            base64data,
          },
        }
      );

      res.send({ resFromBackEndForgotPassword: "OK" });
    } else {
      res.send({ resFromBackEndForgotPassword: "NOT OK" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to check the OTP :
app.get("/resetPasswordEmailAndOTP", async (req, res) => {
  res.send({ OTP: OTP, resetEmail: resetEmail });
});

// DB Connection :
connectDb();

// Listening to port 8080 :
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

// =======================================================
// =======================================================
var nodemailer = require("nodemailer");

function logicForResetPassowrd(emailInUserInput) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "vishwa07770@gmail.com",
      pass: "mwqj hcsl safs qmjk",
    },
  });

  var mailOptions = {
    from: {
      name: "Pokedex Support Team",
      address: "vishwa07770@gmail.com",
    },
    to: [emailInUserInput],
    subject: "Pokedex Password Recovery",
    text: `That was easy!`,
    html: `
    <p>Hello User.</p>
    <p>Greetings of the day.</p>

    <p>Click on the below link to navigate to the reset password page and enter the below mentioned OTP.</p>
    <a href="http://localhost:8080/forgotPassStepTwo.html">Link for reset password</a>

    <p>Please enter the below One Time Password to reset your Pokedx App Password. </p>
    <h1>${OTP}</h1>

    <p> Thank You </p>
    <p> Pokedex Support Team. </p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function generateOTP() {
  let digits = "0123456789";
  OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
