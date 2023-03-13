// Note: Importing required libraries...!
const express = require("express");
// const mailTransporter = require("../../../mailSending");
const router = express.Router();
// Note: Importin required schemas...!
const UserModel = require("../models/user");

// Note: API function to add Querys...!
router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;

  let messages = {
    message_200: "Query Added Successfully!",
    message_400: "Fields Are Required",
    message_500: "Something went wrong while saving Querys in DB!",
    message_409: "Request Timeout",
  };

  try {
    if (!name) {
      return res.status(400).send({
        status: false,
        message: messages.message_400,
      });
    } else {
      // const resulting = await QueryModel.find({ email });
      // if (resulting.length == 0) {
      const newUser = new UserModel({
        name: name,
        email: email,
        password: password,
      });

      let saveUser = await newUser.save();

      if (saveUser) {
        res.status(200).send({
          status: true,
          message: messages.message_200,
          data: newUser,
        });
      }
      // }
      else {
        res.status(409).send({
          status: true,
          message: messages.message_409,
          data: "",
        });
      }
    }
  } catch (error) {
    console.log(`Something went wrong while signing up user: ${error}`);
    res.status(500).send({
      status: false,
      message: messages.message_500,
    });
  }
});

// Note: API function to fetch all Query...!
router.get("/api/fetch/user-list", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (!err) {
      return res.status(200).send({
        status: true,
        message: "User Lists!",
        data: data,
      });
    }

    return res.status(500).send({
      status: false,
      message: "Something went wrong while fetching Query list from Db!",
    });
  });
});
module.exports = router;
