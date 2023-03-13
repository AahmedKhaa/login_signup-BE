// Note: Importing required libraries...!
const express = require("express");
// const mailTransporter = require("../../../mailSending");
const router = express.Router();
// Note: Importin required schemas...!
const CustomerModel = require("../models/customer");

// Note: API function to add Querys...!
router.post("/event", async (req, res) => {
  let { category, date, location } = req.body;

  let messages = {
    message_200: "Query Added Successfully!",
    message_400: "Fields Are Required",
    message_500: "Something went wrong while saving Querys in DB!",
    message_409: "Request Timeout",
  };

  try {
    if (!category) {
      return res.status(400).send({
        status: false,
        message: messages.message_400,
      });
    } else {
      // const resulting = await QueryModel.find({ email });
      // if (resulting.length == 0) {
      const newCustomer = new CustomerModel({
        category: category,
        date: date,
        location: location,
      });

      let saveCustomer = await newCustomer.save();

      if (saveCustomer) {
        res.status(200).send({
          status: true,
          message: messages.message_200,
          data: newCustomer,
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
router.get("/api/fetch/customer-list", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (!err) {
      return res.status(200).send({
        status: true,
        message: "customer Lists!",
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
