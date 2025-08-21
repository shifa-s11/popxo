import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  // validation functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[0-9]{10,}$/.test(phone); // at least 10 digits

  const validatePassword = (password: string) =>
    password.length >= 6;

  const isFormValid =
    formData.fullName.trim() !== "" &&
    validatePhone(formData.phone) &&
    validateEmail(formData.email) &&
    validatePassword(formData.password) &&
    formData.agency.trim() !== "";

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col min-h-screen bg-gray-50 pt-6 pb-6 px-8 gap-8 justify-between">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold w-3/5">Create your PopX account</h2>
          <form className="flex flex-col gap-2">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              required={true}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />

            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              required={true}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            {formData.phone && !validatePhone(formData.phone) && (
              <p className="text-sm text-red-500 mt-[-25px] ml-1 mb-2">Phone must be at least 10 digits</p>
            )}

            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              required={true}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {formData.email && !validateEmail(formData.email) && (
              <p className="text-sm text-red-500 mt-[-25px] ml-1 mb-2">Enter a valid email address</p>
            )}

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              required={true}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            {formData.password && !validatePassword(formData.password) && (
              <p className="text-xs text-red-500 mt-[-25px] ml-1 mb-2">Password must be at least 6 characters</p>
            )}

            <Input
              label="Company Name"
              placeholder="Enter your company name"
              type="text"
              onChange={(e) => handleChange("company", e.target.value)}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Are you an Agency? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    className="accent-purple-600"
                    required
                    onChange={() => handleChange("agency", "yes")}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    className="accent-[#6c25ff]"
                    required
                    onChange={() => handleChange("agency", "no")}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <Link
          to={isFormValid ? "/login" : "#"}
          className={`block w-full py-3 text-center rounded-lg font-medium transition ${
            isFormValid
              ? "bg-[#6c25ff] text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
