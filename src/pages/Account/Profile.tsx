import React, { useRef, useState } from "react";
import { PhotoIcon, DocumentArrowUpIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "../../components/ui/card";

/**
 * Polished KYCProfile
 * - Keeps original structure & UX
 * - Adds independent sub-type selects for Fruits/Vegetables
 * - Validation, previews, and small UX polish (disable submit while invalid)
 */

/* ---------- Static data ---------- */

// African countries data
const AFRICAN_COUNTRIES = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Ethiopia", "Tanzania",
  "Uganda", "Algeria", "Sudan", "Morocco", "Angola", "Mozambique", "Madagascar",
  "Ivory Coast", "Cameroon", "Niger", "Mali", "Burkina Faso", "Malawi", "Zambia",
  "Senegal", "Chad", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi",
  "Tunisia", "South Sudan", "Togo", "Sierra Leone", "Libya", "Congo", "Liberia",
  "Central African Republic", "Mauritania", "Eritrea", "Namibia", "Gambia", "Botswana",
  "Gabon", "Lesotho", "Guinea-Bissau", "Equatorial Guinea", "Mauritius", "Eswatini",
  "Djibouti", "Comoros", "Cabo Verde", "Sao Tome and Principe", "Seychelles"
];

// Country codes for African countries
const COUNTRY_CODES: { [key: string]: string } = {
  "Nigeria": "+234", "Ghana": "+233", "Kenya": "+254", "South Africa": "+27",
  "Egypt": "+20", "Ethiopia": "+251", "Tanzania": "+255", "Uganda": "+256",
  "Algeria": "+213", "Sudan": "+249", "Morocco": "+212", "Angola": "+244",
  "Mozambique": "+258", "Madagascar": "+261", "Ivory Coast": "+225",
  "Cameroon": "+237", "Niger": "+227", "Mali": "+223", "Burkina Faso": "+226",
  "Malawi": "+265", "Zambia": "+260", "Senegal": "+221", "Chad": "+235",
  "Somalia": "+252", "Zimbabwe": "+263", "Guinea": "+224", "Rwanda": "+250",
  "Benin": "+229", "Burundi": "+257", "Tunisia": "+216", "South Sudan": "+211",
  "Togo": "+228", "Sierra Leone": "+232", "Libya": "+218", "Congo": "+242",
  "Liberia": "+231", "Central African Republic": "+236", "Mauritania": "+222",
  "Eritrea": "+291", "Namibia": "+264", "Gambia": "+220", "Botswana": "+267",
  "Gabon": "+241", "Lesotho": "+266", "Guinea-Bissau": "+245", "Equatorial Guinea": "+240",
  "Mauritius": "+230", "Eswatini": "+268", "Djibouti": "+253", "Comoros": "+269",
  "Cabo Verde": "+238", "Sao Tome and Principe": "+239", "Seychelles": "+248"
};

// Product categories
const PRODUCT_CATEGORIES = ["Fruits", "Vegetables"];

// Product subtypes (sample lists — extend as needed)
const PRODUCT_SUBTYPES: Record<string, string[]> = {
  Fruits: [
    "Mango", "Pineapple", "Banana", "Orange", "Apple", "Papaya", "Avocado", "Guava"
  ],
  Vegetables: [
    "Tomato", "Pepper", "Onion", "Carrot", "Cabbage", "Spinach", "Okra", "Cucumber"
  ]
};

// Identification types
const IDENTIFICATION_TYPES = ["Driver's License", "National ID", "Passport"];

/* ---------- Component ---------- */

const KYCProfile: React.FC = () => {
  const [profileType, setProfileType] = useState<"farmer" | "buyer">("farmer");

  const [formData, setFormData] = useState({
    // Common fields
    fullName: "",
    username: "",
    dateOfBirth: "",
    country: "",
    location: "",
    // For farmer
    typeOfProduct: "", // Fruits | Vegetables
    typeOfProductSubtype: "", // Mango, Tomato...
    // For buyer
    preferredProductCategory: "", // Fruits | Vegetables
    preferredProductSubtype: "",
    idType: "",
    idNumber: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    farmLocation: "",
    companyName: ""
  });

  const [image, setImage] = useState<File | null>(null);
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const idDocRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Year settings for DOB validation
  const currentYear = new Date().getFullYear();

  /* ---------- Handlers ---------- */

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (field === "country" && value) {
      setFormData(prev => ({ ...prev, countryCode: COUNTRY_CODES[value] || "" }));
    }
  };

  const handlePhoneNumberChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    setFormData(prev => ({ ...prev, phoneNumber: cleaned }));
  };

  const handleCountryCodeChange = (country: string) => {
    const code = COUNTRY_CODES[country] || "";
    setFormData(prev => ({ ...prev, country, countryCode: code }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }
    setImage(file);
  };

  const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;

    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please select a PDF, JPG, or PNG file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }
    setIdDocument(file);
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeDocument = () => {
    setIdDocument(null);
    if (idDocRef.current) idDocRef.current.value = "";
  };

  const validatePhoneNumber = (phone: string, countryCode: string) => {
    if (!phone || !countryCode) return false;
    // Simplified check: between 7 and 12 digits for local number
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 12;
  };

  const isFormValid = () => {
    // Basic required checks
    if (!formData.fullName.trim()) return false;
    if (!formData.username.trim()) return false;
    if (!formData.dateOfBirth) return false;
    if (!formData.country) return false;
    if (!formData.location.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.phoneNumber.trim() || !formData.countryCode) return false;
    if (!formData.idType || !formData.idNumber.trim()) return false;
    if (!image || !idDocument) return false;
    if (!validatePhoneNumber(formData.phoneNumber, formData.countryCode)) return false;

    if (profileType === "farmer") {
      if (!formData.typeOfProduct) return false;
      if (!formData.typeOfProductSubtype) return false;
      if (!formData.farmLocation.trim()) return false;
    } else {
      if (!formData.preferredProductCategory) return false;
      if (!formData.preferredProductSubtype) return false;
      if (!formData.companyName.trim()) return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please complete all required fields correctly before submitting.");
      return;
    }

    // Prepare payload (files would be sent as FormData in real implementation)
    const commonPayload = {
      profileType,
      fullName: formData.fullName,
      username: formData.username,
      dateOfBirth: formData.dateOfBirth,
      country: formData.country,
      location: formData.location,
      idType: formData.idType,
      idNumber: formData.idNumber,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      countryCode: formData.countryCode,
      fullPhoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
      faceVerification: image,
      idDocument
    };

    const profilePayload = profileType === "farmer"
      ? {
          ...commonPayload,
          typeOfProduct: formData.typeOfProduct,
          typeOfProductSubtype: formData.typeOfProductSubtype,
          farmLocation: formData.farmLocation
        }
      : {
          ...commonPayload,
          preferredProductCategory: formData.preferredProductCategory,
          preferredProductSubtype: formData.preferredProductSubtype,
          companyName: formData.companyName
        };

    console.log("KYC payload:", profilePayload);

    try {
      // Example: send FormData to API in production
      // const fd = new FormData();
      // fd.append("payload", JSON.stringify(profilePayloadWithoutFiles));
      // fd.append("face", image!);
      // fd.append("idDoc", idDocument!);
      // await fetch("/api/kyc", { method: "POST", body: fd });

      alert("KYC Profile submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  /* ---------- Render ---------- */

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 max-sm:p-4 flex flex-col justify-center"
          >
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Setup Your KYC Profile</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Please select your role and complete the form below.
                </p>
              </div>

              {/* Profile Type Toggle */}
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setProfileType("farmer")}
                  className={cn(
                    "px-4 py-2 rounded-md font-semibold border transition-all",
                    profileType === "farmer"
                      ? "bg-lime-300 text-white border-lime-400"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Farmer
                </button>

                <button
                  type="button"
                  onClick={() => setProfileType("buyer")}
                  className={cn(
                    "px-4 py-2 rounded-md font-semibold border transition-all",
                    profileType === "buyer"
                      ? "bg-lime-300 text-white border-lime-400"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Buyer
                </button>
              </div>

              {/* Face Verification */}
              <div className="text-center mt-2 flex justify-center sm:col-span-2">
                <div className="relative w-32 h-32 max-sm:w-24 max-sm:h-24 rounded-full border-2 border-lime-300 flex items-center justify-center">
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-900 cursor-pointer">
                    <PhotoIcon className="mx-auto size-12 text-lime-300" />
                    <span className="text-sm text-gray-500">Upload Face ID</span>
                  </label>

                  <input
                    ref={fileInputRef}
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              {image && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={removeImage}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Remove Image
                  </button>
                </div>
              )}

              {/* Common Inputs */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Username *</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  required
                  placeholder="Choose a username"
                  className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Date of Birth *</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  max={`${currentYear - 18}-12-31`}
                  required
                  className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                />
                <p className="text-xs text-gray-500 mt-1">Year will be kept private</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleCountryCodeChange(e.target.value)}
                  required
                  className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                >
                  <option value="">Select Country</option>
                  {AFRICAN_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Location/Address *</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  required
                  placeholder="Enter your address"
                  className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                />
              </div>

              {/* Product category & subtypes - Farmer vs Buyer fields are independent */}
              {profileType === "farmer" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">Type of Product *</label>
                    <select
                      value={formData.typeOfProduct}
                      onChange={(e) => {
                        handleInputChange("typeOfProduct", e.target.value);
                        handleInputChange("typeOfProductSubtype", "");
                      }}
                      required
                      className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                    >
                      <option value="">Select Category</option>
                      {PRODUCT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {formData.typeOfProduct && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-900">
                        {formData.typeOfProduct} Type *
                      </label>
                      <select
                        value={formData.typeOfProductSubtype}
                        onChange={(e) => handleInputChange("typeOfProductSubtype", e.target.value)}
                        required
                        className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                      >
                        <option value="">Select a type</option>
                        {PRODUCT_SUBTYPES[formData.typeOfProduct]?.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-900">Farm Location *</label>
                    <input
                      type="text"
                      value={formData.farmLocation}
                      onChange={(e) => handleInputChange("farmLocation", e.target.value)}
                      required
                      placeholder="Specific location of your farm"
                      className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    />
                  </div>
                </>
              )}

              {profileType === "buyer" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">Preferred Product Category *</label>
                    <select
                      value={formData.preferredProductCategory}
                      onChange={(e) => {
                        handleInputChange("preferredProductCategory", e.target.value);
                        handleInputChange("preferredProductSubtype", "");
                      }}
                      required
                      className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                    >
                      <option value="">Select Category</option>
                      {PRODUCT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {formData.preferredProductCategory && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-900">
                        {formData.preferredProductCategory} Type *
                      </label>
                      <select
                        value={formData.preferredProductSubtype}
                        onChange={(e) => handleInputChange("preferredProductSubtype", e.target.value)}
                        required
                        className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                      >
                        <option value="">Select a type</option>
                        {PRODUCT_SUBTYPES[formData.preferredProductCategory]?.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-900">Company / Organization Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      required
                      placeholder="Enter your company name"
                      className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    />
                  </div>
                </>
              )}

              {/* Contact information */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Phone Number *</label>
                <div className="flex gap-2 mt-2.5">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => {
                      const selectedCountry = Object.keys(COUNTRY_CODES).find(
                        c => COUNTRY_CODES[c] === e.target.value
                      );
                      if (selectedCountry) handleCountryCodeChange(selectedCountry);
                    }}
                    required
                    className="w-32 rounded-md border px-3 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                  >
                    <option value="">Code</option>
                    {Object.entries(COUNTRY_CODES).map(([country, code]) => (
                      <option key={country} value={code}>{code} ({country})</option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handlePhoneNumberChange(e.target.value)}
                    required
                    placeholder="Phone number"
                    className="flex-1 rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    maxLength={15}
                  />
                </div>
                {formData.countryCode && formData.phoneNumber && (
                  <p className="text-xs text-gray-500 mt-1">Full number: {formData.countryCode}{formData.phoneNumber}</p>
                )}
              </div>

              {/* Means of Identification & Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-900">Means of Identification *</label>
                <select
                  value={formData.idType}
                  onChange={(e) => handleInputChange("idType", e.target.value)}
                  required
                  className="mt-2.5 w-full rounded-md border px-3.5 py-2 text-sm text-gray-500 focus:ring-2 focus:ring-lime-300"
                >
                  <option value="">Choose one</option>
                  {IDENTIFICATION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {formData.idType && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">{formData.idType} Number *</label>
                    <input
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange("idNumber", e.target.value)}
                      required
                      placeholder={`Enter your ${formData.idType} number`}
                      className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-300"
                    />
                  </div>

                  <div className="mt-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Upload {formData.idType} Document *</label>

                    <div className={cn(
                      "flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-200 relative",
                      idDocument ? "border-lime-400 bg-lime-50" : "border-lime-300 hover:border-lime-400 hover:bg-gray-50"
                    )}>
                      <input
                        ref={idDocRef}
                        id="idDocument"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,image/*"
                        onChange={handleDocChange}
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />

                      <div className="text-center">
                        <DocumentArrowUpIcon className="h-12 w-12 text-lime-400 mb-3 mx-auto" />
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          {idDocument ? "Document Selected" : "Upload your ID document"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {idDocument ? idDocument.name : `Click or drag to upload your ${formData.idType} (PDF, JPG, PNG)`}
                        </p>
                        {idDocument && <p className="text-xs text-lime-600 mt-2">✓ Document ready for submission</p>}
                      </div>
                    </div>

                    <div className="mt-2 text-xs text-gray-500">
                      <p>Accepted formats: PDF, JPG, PNG (Max: 5MB)</p>
                    </div>

                    {idDocument && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Document Preview:</p>

                        {idDocument.type.startsWith("image/") ? (
                          <div className="flex flex-col items-start">
                            <img
                              src={URL.createObjectURL(idDocument)}
                              alt={`${formData.idType} Preview`}
                              className="w-full max-w-xs h-auto object-contain rounded-md border-2 border-lime-200"
                              loading="lazy"
                            />
                            <button type="button" onClick={removeDocument} className="mt-2 text-xs text-red-600 hover:text-red-700 font-medium">
                              Remove document
                            </button>
                          </div>
                        ) : idDocument.type === "application/pdf" ? (
                          <div className="flex items-center gap-3 p-3 border border-lime-200 rounded-md bg-lime-50">
                            <DocumentIcon className="h-8 w-8 text-lime-500" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{idDocument.name}</p>
                              <p className="text-xs text-gray-500">PDF Document</p>
                            </div>
                            <button type="button" onClick={removeDocument} className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-md">
                            <DocumentIcon className="h-8 w-8 text-gray-400" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{idDocument.name}</p>
                              <p className="text-xs text-gray-500">{idDocument.type || "Unknown file type"}</p>
                            </div>
                            <button type="button" onClick={removeDocument} className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={cn(
                  "w-full h-12 text-white font-bold rounded-md shadow-[0_5px_0_#57cc99] transition-all",
                  isFormValid() ? "bg-[#80ed99] hover:shadow-[0_3px_0_#57cc99] active:translate-y-[2px]" : "bg-gray-300 cursor-not-allowed shadow-none"
                )}
              >
                Submit KYC Profile
              </button>
            </div>
          </form>

          {/* Right visual column */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kyBp73_Rn5vtVsmcXdLZDZpokJtswoSENoRpMhyStMiYQ6gxCwz5Kd9rGkcABu4Ixb4&usqp=CAU"
              alt="Agriculture"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KYCProfile;
