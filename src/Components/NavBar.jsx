import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const NavBar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const signOutUser = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile(user.photoURL);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
      } else {
        setProfile(null);
        localStorage.removeItem("isAuth");
        setIsAuth(false);
      }
    });
  }, []);
  const userDetails = () => {
    navigate("/userDetails");
  };
  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-2xl font-semibold text-blue-400">Typen.io</h2>
          <div className="hidden md:flex items-center space-x-6 text-blue-300 font-medium text-xl">
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
            {!isAuth ? (
              <>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
                <Link to="/login" className="hover:text-blue-500 transition">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/posts" className="hover:text-blue-500 transition">
                  Create Post
                </Link>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-md object-cover"
                  onClick={userDetails}
                />
                <button
                  onClick={signOutUser}
                  className="hover:text-blue-500 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <button
            className="md:hidden text-3xl text-blue-400"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 pb-4 space-y-3 text-blue-300 font-medium flex flex-col items-start">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-500 transition"
          >
            Home
          </Link>
          {!isAuth ? (
            <>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                About
              </Link>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/posts"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                Create Post
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                About
              </Link>
              <img
                src={profile}
                alt="Profile"
                className="w-15 h-15 rounded-full border-2 border-blue-400 shadow-md object-cover"
                onClick={userDetails}
              />
              <button
                onClick={() => {
                  signOutUser();
                  setOpen(false);
                }}
                className="block hover:text-blue-500 transition"
              >
                SignOut
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
