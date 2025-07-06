import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: ["Our Work", "Services", "Community", "Career"],
    },
    {
      title: "Help",
      items: [
        "Customer Support",
        "Blog",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Links",
      items: [
        "About",
        "Delivery Details",
        "Terms & Conditions",
        "Corporate",
        "News",
      ],
    },
  ];
  return (
    <footer className="py-20 bg-[#120723] text-white">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="font-recoleta font-bold text-4xl mb-4">Get started with StudioSync now</h2>
        <button className="bg-[#7A30D4] px-6 py-2 text-white cursor-pointer hover:bg-white hover:text-black rounded-full">Sign up for free</button>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-40">
        <div className="flex flex-col">
          <h2 className="font-florisha text-4xl">StudioSync</h2>
          <p>
            With StudioSync, organize ideas, share feedback, and deliver<br></br>
            stunning creative work together
          </p>
          <div className="flex flex-row gap-2 mt-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>
        {links.map((group, index) => (
            <div key={index}>
                <h4 className="text-xl mb-4">{group.title}</h4>
                <ul>
                    {group.items.map((item, i) => (
                        <li key={i} className="hover:text-[#7A30D4] cursor-pointer mb-2">{item}</li>
                    )
                    )}
                </ul>
            </div>
        )
        )}
      </div>

      <div className="text-center mt-10">
        © Copyright 2025, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
