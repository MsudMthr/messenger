import React from "react";

const Navbar = ({LogoutHandler}) => {
  return (
    <div className="flex items-center  h-16 w-screen justify-between px-2 py-4 bg-gray-50 ">
      <h1 className="text-2xl text-green-600 ml-8 font-bold  ">Msudgram</h1>
      <button onClick={LogoutHandler} className="bg-green-500 py-2 px-3  hover:bg-green-800 mr-8 text-white rounded-md font-bold transition-all ease-linear">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
