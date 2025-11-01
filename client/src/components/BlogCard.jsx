import React from "react";
import { blog_data } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* cards section */}
      <div
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 lg:px-10 xl:px-32 md:px-20 "
      >
        {blog_data.map((dash) => (
          <div onClick={() => navigate(`/blog/${dash._id}`)}
            key={dash._id}
            className="border w-[17rem] m-4 rounded-xl border-gray-300 shadow transition hover:shadow-lg hover:scale-[101%] cursor-pointer"
          >
            <div className="w-[17rem] h-[21rem]">
              <img src={dash.image} className="w-[17rem] rounded-t-xl" alt="" />
              <h1 className="m-5 border rounded-2xl w-[5rem] text-center font-medium bg-purple-100 border-none text-purple-900">
                {dash.category}
              </h1>
              <h1 className="font-semibold m-3 text-black">{dash.title}</h1>
              <p className="mx-3 text-xs text-gray-500" dangerouslySetInnerHTML={{"__html": dash.subTitle.slice(0, 80)}}></p>
            </div>
          </div>
        ))}
      </div>

      {/* Email section */}
      <div className="my-25">
        <div className="flex flex-col items-center space-y-2 justify-center">
          <h1 className="font-semibold text-2xl md:text-4xl">Never Miss a Blog!</h1>
          <p className="md:text-lg pb-8 text-center text-gray-500/70">
            Subscribe to get the latest blog, new tech, and exclusive news.
          </p>

          {/* Email form */}
          <form className="flex items-center justify-center max-w-2xl w-9/10 sm:w-full md:h-13 h-12 bg-white">
            <input
              type="text"
              className="border border-gray-300 rounded-md h-full border-r-0 w-full font-medium rounded-r-none px-3 text-gray-500 outline-none" 
              placeholder="Enter your email id" required
            />
            <button type="submit"
              className="md:px-12 px-8 h-full text bg-indigo-600
            text-white font-medium transition-transform duration-300 rounded-md hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
