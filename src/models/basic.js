/***** Note: Users Schema *****/
const mongoose = require("mongoose");
const basicSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    raddress: {
      type: String,
      required: true,
    },
    // reEnterpassword: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    collection: "basic_list",
  }
);

const basicModel = mongoose.model("basic_list", basicSchema);
module.exports = basicModel;
