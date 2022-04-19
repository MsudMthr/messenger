import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center  h-14 w-screen justify-between bg-gray-100 ">
      <h1 className="text-2xl text-teal-900 ml-4 font-semibold">Msudgram</h1>
      <button className="bg-green-500 py-2 px-3 hover:bg-green-800 mr-4 text-white rounded-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
