import React from "react";
import { Funnel, HandHelping, Image, LucideScanSearch, ShieldAlert, Smartphone } from "lucide-react"; // Or any icon

const features = [
  {
    number: "001",
    title: "Smart referral",
    description: "Ensure that the right patient sees the right specialist at the right time and improve the efficiency of your clinical workforce.",
    icon: <Funnel size={16} />,
  },
  {
    number: "002",
    title: "Diagnosis support",
    description:
      "The artificial intelligence provides immediate data to the HCP to assist them in their diagnosis.",
    icon: <LucideScanSearch size={16} />,
  },
  {
    number: "003",
    title: "Treatment supervision",
    description: "Automatically measure if patients are responding to treatment with the high-precision neural network.",
    icon: <HandHelping size={16} />,
  },
  {
    number: "004",
    title: "Severity measure",
    description: "Automatically fills in the most common scoring systems (PASI, SCORAD...) just by taking a smartphone image.",
    icon: <ShieldAlert size={16} />,
  },
  {
    number: "005",
    title: "Image Quality Check",
    description: "Ensure in real-time that images taken by users have sufficient clinical utility and automatically provide assistance.",
    icon: <Image size={16} />,
  },
  {
    number: "006",
    title: "Patient & Doctor app",
    description: "An easy-to-use interface that allows users to upload photos and understand all the clinical data generated.",
    icon: <Smartphone size={16} />,
  },
];

export default function KeyVisionSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-[#0e0c1d] max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          Here are some key vision
        </h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          We are committed to upholding the highest standards of medical excellence while ensuring each patient feels valued and heard.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="relative bg-[#f5f5fa] p-6 rounded-3xl shadow-sm hover:shadow-lg"
          >
            {/* <div className="text-sm text-gray-400 font-medium mb-2">{feature.number}</div> */}
            <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] text-white rounded-full p-2 flex items-center justify-center shadow-sm ">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
