import React from "react";
import { Link } from "react-router-dom";

const LandingCard: React.FC = () => {
  return (
   <div className="flex  flex-col justify-end items-center min-h-screen bg-gray-50 pb-4">
      <div className="w-full max-w-sm p-6  flex flex-col justify-end">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-500 mt-2 text-base w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="mt-6 space-y-3 font-semibold">
          <Link
            to="/signup"
            className="block w-full py-3 text-center rounded-lg bg-[#6c25ff] text-white font-medium transition"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="block w-full py-3 text-center rounded-lg bg-[#cebafb] text-black font-medium hover:bg-purple-200 transition"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
