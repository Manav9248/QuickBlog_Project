import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <img onClick={()=>navigate("/")} src={assets.logo} className="w-32 sm:w-44 cursor-pointer" alt="logo" />

      <button onClick={()=>navigate("/admin")} className="flex items-center gap-2 rounded-full cursor-pointer bg-[#007AFF] text-white px-5 py-2.5 text-sm">
         Admin Login
        <img className="w-3" src={assets.arrow} alt="arrow" />
        </button>
      
    </div>
  );
};

export default Navbar;
