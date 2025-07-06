import React from "react";
import Counter from "./counter";

const CounterSection = () => {
  const stats = [
    { label: "Creators Onboarded", end: 10000, duration: 2 },
    { label: "Monthly Collaborations", end: 5000, duration: 2 },
    { label: "Revenue Generated", end: 1000000, duration: 2 },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, indx) => (
            <Counter 
            key = {indx}
            label = {stat.label}
            end = {stat.end}
            duration={stat.duration}
            />
        )
        )}
      </div>
    </section>
  );
};

export default CounterSection;
