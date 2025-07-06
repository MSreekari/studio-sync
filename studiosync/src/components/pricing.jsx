import React from 'react'
import { RiCheckboxCircleFill } from "react-icons/ri";

const Pricing = () => {
    const prices = [
    {title: "Starter",
    subtitle: "Perfect to get started",
    price: "$20",
    billing: "/month",
    features: [
      "120 credits per month",
      "$0.4 per article",
      "All Types of content",
      "Online article editor",
      "Advanced export",
    ],
    highlight: false,
  },
  {
    title: "Popular",
    subtitle: "Perfect to get Popular",
    price: "$100",
    billing: "/month",
    features: [
      "7000 credits per month",
      "Same day support",
      "All Types of content",
      "Online article editor",
      "Advanced export",
    ],
    highlight: true,
  },
  {
    title: "Business",
    subtitle: "Perfect to get business",
    price: "$150",
    billing: "/month",
    features: [
      "600 credits per month",
      "$0.1 per article",
      "All Types of content",
      "Online article editor",
      "Advanced export",
    ],
    highlight: false,
  },
    ];
  return (
    <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto p-8">
            <h2 className="text-4xl font-recoleta font-bold items-center text-center mb-4">Pricing plans that scale</h2>
            <p className="text-xl text-center text-gray-700">Simple, transparent pricing that grows with you. Try any plan <br></br>free for 30 days.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {prices.map((plan, index) => (
                <div key={index} className={`rounded-xl p-8 border transition ${plan.highlight ? "bg-[#7A30D4] text-white border-transparent" : "bg-white text-black border-gray-400"}`}>
                    <h3 className="font-semibold text-3xl">{plan.title}</h3>
                    <p>{plan.subtitle}</p>
                    <div className="text-6xl font-recoleta font-bold mt-4 mb-4">{plan.price}
                        <span className="text-xl font-lg ml-4 font-black">{plan.billing}</span>
                    </div>
                    <ul>
                        <span className="font-semibold text-xl">Starter included:</span>
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex flex-row items-center gap-2 mt-4">
                                <span><RiCheckboxCircleFill /></span>
                                <span>{feature}</span>
                            </li>
                        )
                        )}
                    </ul>
                    <button className={`w-full rounded-full py-3 font-semibold mt-4 cursor-pointer ${plan.highlight ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black"}`}>Get Free Trial</button>
                </div>
            )
            )}
        </div>
        </div>
    </section>
  )
}

export default Pricing