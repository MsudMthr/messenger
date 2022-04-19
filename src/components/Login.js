import React from "react";

import firebase from "firebase";
import { auth } from "../firebase";

import google from "../assets/google.svg";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-3 bg-white py-6 px-10 rounded-lg border-2">
        <h2 className="font-bold">Welcome to Msudgram !</h2>

        <div
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
          className="flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-800 transition-all ease-in-out select-none"
        >
          <img src={google} alt="google" className="w-8" />
          <p>sign in with google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
