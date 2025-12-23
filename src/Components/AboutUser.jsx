import React from "react";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AboutUser = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-80 text-center">
        <img
          src={user.photoURL }
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-2 border-blue-400 object-cover shadow-md"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {user.displayName}
        </h2>
        <p className="mt-2 text-gray-500">{user.email}</p>
        <p className="mt-2 text-gray-500">UID: {user.uid}</p>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-blue-300 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AboutUser;
