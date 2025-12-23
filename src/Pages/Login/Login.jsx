import React from "react";
import { google } from "../../assets/Images";

const Login = ({ signInWithGoogle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div
        className="
          w-full max-w-md
          bg-white/90 backdrop-blur
          rounded-2xl shadow-xl
          p-8 sm:p-10
          animate-mobileEnter
        "
      >
        <h1 className="text-3xl font-semibold text-gray-900 text-center animate-fadeIn">
          Welcome Back
        </h1>

        <p className="text-base text-gray-500 text-center mt-3 animate-fadeIn delay-150">
          Continue with Google to proceed
        </p>

        <button
          onClick={signInWithGoogle}
          className="
            mt-10 w-full flex items-center justify-center gap-3
            rounded-xl border border-gray-300 bg-white
            px-5 py-4 text-base font-medium text-gray-700
            shadow-md transition-all duration-200
            hover:bg-gray-100 hover:shadow-lg
            hover:-translate-y-0.5
            active:scale-[0.96]
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
            animate-popIn delay-300
          "
        >
          <img src={google} alt="Google" className="h-6 w-6" />
          Continue with Google
        </button>

        <p className="text-sm text-gray-400 text-center mt-8 animate-fadeIn delay-500">
          Secure Google authentication
        </p>
      </div>
    </div>
  );
};

export default Login;
