/***** Note: Users Schema *****/
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // reEnterpassword: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    collection: "user_list",
  }
);

const UserModel = mongoose.model("user_list", userSchema);
module.exports = UserModel;
