/***** Note: Customer Schema *****/
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    // reEnterpassword: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    collection: "customer_list",
  }
);

const CustomerModel = mongoose.model("customer_list", customerSchema);
module.exports = CustomerModel;
