// Note: Importing required libraries...!
const express = require("express");
// const mailTransporter = require("../../../mailSending");
const router = express.Router();
// Note: Importin required schemas...!
const BasicModel = require("../models/basic");

// Note: API function to add Querys...!
router.post("/basic", async (req, res) => {
  let { fname, lname, email, raddress } = req.body;

  let messages = {
    message_200: "Query Added Successfully!",
    message_400: "Fields Are Required",
    message_500: "Something went wrong while saving Querys in DB!",
    message_409: "Request Timeout",
  };

  try {
    if (!fname) {
      return res.status(400).send({
        status: false,
        message: messages.message_400,
      });
    } else {
      // const resulting = await QueryModel.find({ email });
      // if (resulting.length == 0) {
      const newBasic = new BasicModel({
        fname: fname,
        lname: lname,
        email: email,
        raddress: raddress,
      });

      let saveBasic = await newBasic.save();

      if (saveBasic) {
        res.status(200).send({
          status: true,
          message: messages.message_200,
          data: newBasic,
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
router.get("/api/fetch/basic-list", (req, res) => {
  BasicModel.find({}, (err, data) => {
    if (!err) {
      return res.status(200).send({
        status: true,
        message: "Basic Lists!",
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
