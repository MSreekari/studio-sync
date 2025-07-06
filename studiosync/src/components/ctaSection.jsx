import React from "react";
// import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
        // const navigate = useNavigate();

        // const handleClick = () => {
        //     navigate('/register');
        // };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-70 text-center md:text-left">
        <div className="flex-1">
          <h2 className="font-recoleta font-bold text-6xl text-black mb-3">Bring Your Creative Team Together in One Powerful Workspace</h2>
          <p className="text-gray-950">
            From brainstorming to final delivery StudioSync keeps your
            writers, designers, and strategists aligned, organized, and moving
            faster. No scattered files, no lost feedback just effortless
            collaboration.
          </p>
        </div>
        <div>
            <button className="
            flex-shrink-0 bg-black text-white font-bold hover:bg-white hover:text-black rounded-full px-6 py-3 transition duration-200 hover:border hover:border-black cursor-pointer">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
