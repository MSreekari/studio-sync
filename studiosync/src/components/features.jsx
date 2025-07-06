import React from "react";
import collabImg from "../assets/images/collaboration.svg";
import proImg from "../assets/images/project.svg";
import filesImg from "../assets/images/files.svg";
import analyImg from "../assets/images/analytics.svg";


const Features = () => {
  const features = [
    {
      title: "Seamless Real-Time Collaboration Across Teams",
      desc: "Say goodbye to long email threads and version chaos. StudioSync lets writers, designers, editors, and managers collaborate in real time edit, comment, and share feedback in one unified workspace.",
      img: collabImg,
    },
    {
      title: "Visual Project Tracking from Idea to Launch",
      desc: "Plan smarter with intuitive timelines, task boards, and milestone checklists. Monitor every stage of your creative projects and ensure nothing slips through the cracks even on the busiest days.",
      img: proImg,
    },
    {
      title: "Built-In File Sharing with Version Control",
      desc: "Upload and organize design files, documents, audio, and more — all within your project. With version tracking and instant previews, your team always works on the right file, at the right time.",
      img: filesImg,
    },
    {
      title: "Insightful Analytics to Measure Creative Impact",
      desc: "Gain visibility into how your content is performing. StudioSync delivers visual dashboards with key engagement metrics, helping you learn what works and optimize future campaigns",
      img: analyImg,
    },
  ];
  return (
    <section id="features" className="py-20 bg-white">
        <div className="space-y-20">
            {features.map((feature, indx) => (
                <div key={indx} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                    <img src={feature.img} alt={feature.title} className="rounded-xl h-64 w-64 md:w-90 object-contain"/>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-5xl font-recoleta font-bold mb-4">{feature.title}</h2>
                        <p className="text-gray-950 text-xl">{feature.desc}</p>
                    </div>
                </div>
            )
            )}
        </div>
    </section>
  );
};

export default Features;
