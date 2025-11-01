import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative mt-20 mb-8">
      <div className="flex items-center justify-center">
        <p className="inline-flex items-center justify-center gap-4 px-6 py-1.5 border border-primary/40 text-sm rounded-full text-primary bg-purple-100">
          New: AI feature integrated
          <img src={assets.star_icon} alt="" />
        </p>
      </div>

      <div className="mt-7 text-3xl font-semibold text-center sm:text-6xl text-gray-700 sm:leading-16">
        <h1 className="mb-2">
          Your own <span className="text-blue-800"> blogging</span> <br />{" "}
          platform.
        </h1>
      </div>

       {/* background color use  */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />

      <div className="mt-8 text-center  w-full sm:ml-10 flex justify-center">
        <p className="sm:w-[38rem] md:w-[45rem] text-gray-600 font-medium">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
      </div>
    </div>
  );
};

export default Hero;
