const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    pincode: String,
    city: String,
    state: String,
    country: String,

    companyType: String,
    companyName: String,
    website: String,
    address: String,
    businessPhone: String,

    catalogue: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);