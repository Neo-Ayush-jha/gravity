const express = require("express");
const multer = require("multer");
const Vendor = require("../models/Vendor");

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("catalogue"), async (req, res) => {
  try {
    const vendor = new Vendor({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      pincode: req.body.pincode,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,

      companyType: req.body.companyType,
      companyName: req.body.companyName,
      website: req.body.website,
      address: req.body.address,
      businessPhone: req.body.businessPhone,

      catalogue: req.file ? req.file.filename : null,
    });

    await vendor.save();

    res.status(201).json({
      success: true,
      message: "Vendor form submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: vendors.length,
      data: vendors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;