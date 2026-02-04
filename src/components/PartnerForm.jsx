import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import InteriorImg from "../assets/Rectangle163562.png";

function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    companyType: "",
    companyName: "",
    website: "",
    address: "",
    businessPhone: "",
  });
  const [catalogue, setCatalogue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setCatalogue(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (catalogue) {
        data.append("catalogue", catalogue);
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendor`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Form submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          pincode: "",
          city: "",
          state: "",
          country: "",
          companyType: "",
          companyName: "",
          website: "",
          address: "",
          businessPhone: "",
        });
        setCatalogue(null);
      } else {
        setMessage("Error: " + result.message);
      }
    } catch (error) {
      setMessage("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5efe6] py-20 md:py-24">
      <h2 className="text-[34px] md:text-[38px] font-semibold text-[#2b2b2b] text-center mb-4">
        Vendor Partnership Form
      </h2>

      <div className="w-full grid md:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div className="w-full h-screen ">
          <img
            src={InteriorImg}
            alt="Interior"
            className="w-full h-full object-cover rounded-none"
          />
        </div>

        <form onSubmit={handleSubmit} className="text-[13px] text-[#6f6f6f] px-8 md:pr-14 md:pl-8 max-w-[640px] py-12">
          <p className="text-[#2b2b2b] font-medium mb-5 text-lg">Your Details</p>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="underline-input mb-7"
            placeholder="Your Full Name"
            required
          />

          <div className="grid grid-cols-2 gap-8 mb-7">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="underline-input"
              placeholder="Business Email Address"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="underline-input"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-7">
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="underline-input"
              placeholder="Pincode"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="underline-input"
              placeholder="City"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="underline-input"
              placeholder="State"
              required
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="underline-input"
              placeholder="Country"
              required
            />
          </div>

          <p className="text-[#2b2b2b] font-medium mb-5 text-lg">
            Your Business Details
          </p>

          <select
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className="underline-input mb-7"
            required
          >
            <option value="">Select Company Type</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Distributor">Distributor</option>
            <option value="Retailer">Retailer</option>
          </select>

          <div className="grid grid-cols-2 gap-8 mb-7">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="underline-input"
              placeholder="Company Name"
              required
            />
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="underline-input"
              placeholder="Website"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="underline-input"
              placeholder="Address"
              required
            />
            <input
              type="tel"
              name="businessPhone"
              value={formData.businessPhone}
              onChange={handleChange}
              className="underline-input"
              placeholder="Business Phone Number"
              required
            />
          </div>

          <p className="text-[#2b2b2b] font-medium mb-3 text-lg">
            Upload Your Catalogue
          </p>

          <input
            type="file"
            onChange={handleFileChange}
            className="file-input mb-10 text-base"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
          />

          {message && (
            <p
              className={`mb-5 text-center font-medium ${
                message.includes("Form submitted successfully!") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#4f5b45] text-white w-full py-3 rounded-full flex items-center justify-center gap-2 text-lg hover:bg-[#3d4835] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"} <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default PartnerForm;
