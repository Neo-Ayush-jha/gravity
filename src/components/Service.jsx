import { Download } from "lucide-react";
import React, { useState, useEffect } from "react";

function Service() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isImageFile = (filename = "") => {
    const lower = filename.toLowerCase();
    return (
      lower.endsWith(".jpg") ||
      lower.endsWith(".jpeg") ||
      lower.endsWith(".png") ||
      lower.endsWith(".gif") ||
      lower.endsWith(".webp")
    );
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      setLoading(true);
          
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendor`);
      const result = await response.json();

      if (result.success) {
        setVendors(result.data);
        setError("");
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Error fetching vendors: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-[#414040] min-h-screen">
      <h1 className="text-4xl font-bold text-[#2b2b2b] mb-10">All Vendors</h1>

      {vendors.length === 0 ? (
        <p className="text-center text-lg text-[#6f6f6f]">No vendors found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor._id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-[#2b2b2b]">
                  {vendor.fullName}
                </h2>
                <p className="text-[#4f5b45] font-medium text-lg">
                  {vendor.companyName}
                </p>
              </div>

              <div className="space-y-3 text-[#6f6f6f] text-sm">
                <div>
                  <span className="font-semibold text-[#2b2b2b]">Email:</span>
                  <p>{vendor.email}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">Phone:</span>
                  <p>{vendor.phone}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">
                    Business Phone:
                  </span>
                  <p>{vendor.businessPhone}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">
                    Company Type:
                  </span>
                  <p>{vendor.companyType}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">
                    Location:
                  </span>
                  <p>
                    {vendor.city}, {vendor.state} {vendor.pincode}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">Address:</span>
                  <p>{vendor.address}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#2b2b2b]">Website:</span>
                  <p>{vendor.website || "N/A"}</p>
                </div>
                {vendor.catalogue && (
                  <div>
                    <span className="font-semibold text-[#2b2b2b]">
                      Catalogue:
                    </span>
                    <div className="mt-2">
                      <img
                        src={
                          `${import.meta.env.VITE_API_URL}${vendor.catalogue}`}
                        alt={`${vendor.companyName || "Vendor"} catalogue`}
                        className="w-full max-w-[260px] h-[250px] rounded-md border border-[#e6e0d8]"
                      />
                      <a
                        href={`http://localhost:5000/uploads/${vendor.catalogue}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4f5b45] hover:underline flex flex-1 gap-2 py-4"
                      >
                        Download <Download />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={fetchVendors}
        className="mt-10 bg-[#4f5b45] text-white px-6 py-3 rounded-full hover:bg-[#3d4835] transition-colors"
      >
        Refresh Data
      </button>
    </div>
  );
}

export default Service;
