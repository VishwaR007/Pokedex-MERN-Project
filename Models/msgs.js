const mongoose = require("mongoose");

const msgsSchema = new mongoose.Schema({
  from: String,
  msg: String,
  to: String,
  seen: String,
});

const Msgs = mongoose.model("msgs", msgsSchema);

module.exports = Msgs;
