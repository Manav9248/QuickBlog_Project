import React from "react";

const NewsLetter = () => {
  return (
    <div className="my-25">
      <div className="flex flex-col items-center space-y-2 justify-center">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Never Miss a Blog!
        </h1>
        <p className="md:text-lg pb-8 text-center text-gray-500/70">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>

        {/* Email form */}
        <form className="flex items-center justify-center max-w-2xl w-9/10 sm:w-full md:h-13 h-12 bg-white">
          <input
            type="text"
            className="border border-gray-300 rounded-md h-full border-r-0 w-full font-medium rounded-r-none px-3 text-gray-500 outline-none"
            placeholder="Enter your email id"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text bg-indigo-600
            text-white font-medium transition-transform duration-300 rounded-md hover:bg-indigo-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
