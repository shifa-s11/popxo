import { useState } from "react";
import { Input } from "../components/ui/Input";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
    const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    password.length >= 6;
  const isFormValid =
    validateEmail(formData.email) &&
    validatePassword(formData.password);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col min-h-screen bg-gray-50 pt-12 pb-6 px-8 gap-4 ">
       <h2 className="text-2xl font-bold w-3/5">Signin to your PopX account</h2>
         <p className="text-gray-500 mb-2 text-base w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="flex flex-col gap-2">
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              required={true}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {formData.email && !validateEmail(formData.email) && (
              <p className="text-sm text-red-500 mt-[-25px] ml-1 mb-2">
                Enter a valid email address
              </p>
            )}

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              required={true}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            {formData.password && !validatePassword(formData.password) && (
              <p className="text-xs text-red-500 mt-[-25px] ml-1 mb-2">
                Password must be at least 6 characters
              </p>
            )}
          </form>
                 <Link
          to={isFormValid ? "/profile" : "#"} // 
          className={`block w-full py-3 text-center rounded-lg font-medium transition ${
            isFormValid
              ? "bg-[#6c25ff] text-white cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Login
        </Link>
      </div>

    </div>
  );
}
