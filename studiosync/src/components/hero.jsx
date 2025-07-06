import React from "react";
import { FaPaintBrush, FaFeatherAlt, FaMusic } from "react-icons/fa";
import HeroImage from "../assets/images/StudioSync.png";

const Hero = () => {
  return (
    <div className="bg-[#120723] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        <div className="flex-1">
          <h1 className="text-7xl font-bold font-recoleta mb-6">
            Solving creative collaboration once and for all
          </h1>
          <p className="text-lg leading-8 mb-6">
            StudioSync is your all-in-one workspace for writers, designers, and
            musicians to brainstorm, build, and create together, in real time.
          </p>
          <button className="bg-[#7A30D4] text-white text-[1.15rem] px-7 py-2 mt-5 rounded-full hover:bg-white hover:text-black transition duration-200 ease-in-out cursor-pointer">
            Sign up for free
          </button>
          <div className="mt-12 flex flex-col items-start">
            <p className="mb-4">Trusted by:</p>
          <div className="flex gap-8 justify-center text-2xl opacity-80 items-center flex-wrap">
            <span className="flex items-center gap-2">
              <FaPaintBrush className="text-white" />
              PixelCraft
            </span>
            <span className="flex items-center gap-2">
              <FaFeatherAlt className="text-white" />
              InkSync
            </span>
            <span className="flex items-center gap-2">
              <FaMusic className="text-white" />
              TuneForge
            </span>
          </div>
          </div>
        </div>
        <div className="flex-1 self-start">
          <img
            src={HeroImage}
            alt="Collaboration visual"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
