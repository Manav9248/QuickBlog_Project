import React, { useState } from "react";
import {blogCategories } from "../assets/assets.js";
import BlogCard from "./BlogCard.jsx";

const Mainhero = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="">
      {/* form section */}
      <form className="flex justify-between mx-auto max-w-lg max-sm:scale-75 border rounded border-gray-300 bg-white overflow-hidden">
        <input
          type="text"
          className="pl-4 w-full outline-none"
          placeholder="Search for blogs"
          required
        />
        <button
          type="submit"
          className=" rounded bg-indigo-600
            text-white font-medium transition-transform duration-300 hover:scale-[105%] px-8 py-2 m-1.5"
        >
          Search
        </button>
      </form>

      {/* select blog list */}

      <div className="flex gap-4 sm:gap-8 justify-center my-10 text-gray-600 relative">
        {blogCategories.map((category) => (
          <div className="relative" key={category}>
            <button
              onClick={() => setMenu(category)}
              className={`cursor-pointer text-gray-500 ${
                menu === category && "text-white px-4 pt-0.5"
              }`}
            >
            {category}
            {/* for using smoth transition use motion from npm */}
      <div className={` ${menu === category ? "absolute left-0 right-0 top-0 h-7 -z-1 bg-indigo-700 rounded-full transition-all " :""}`}></div>
            </button>
          </div>
        ))}
      </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 lg:px-10 xl:px-32 md:px-20 ">
          {/* checking the blog list is equal to blog card or not */}
          {/* {blog_data.filter((blog)=> menu === "All" ? true : blog.category === menu).map((blog)=> <BlogCard key={blog._id} blog={blog} />)}
        </div> */} 
    </div>
  );
};

export default Mainhero;
