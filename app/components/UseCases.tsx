"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

type UseCase = {
  title: string;
  key: string;
  image: string;
  overview: string;
  benefits: string[];
};

const useCases: UseCase[] = [
  {
    title: "General Practitioners (GPs)",
    key: "gp",
    image: "/gp.jpg",
    overview:
      "Legit.Health empowers GPs with clinical-grade AI to diagnose 300+ skin conditions in under 30 seconds — helping manage high patient volumes without specialist support.",
    benefits: [
      "Diagnose common skin conditions with >90% accuracy using AI — no specialist needed",
      "Reduce unnecessary referrals by up to 27%, easing load on dermatologists",
      "Cut appointment times by up to 50%, freeing up your schedule",
      "Improve rural access: enable remote follow-ups using image uploads",
    ],
  },
  {
    title: "Dermatologists",
    key: "dermatologist",
    image: "/dermatologist.jpg",
    overview:
      "Legit.Health standardizes referrals and follow-ups with AI-backed scoring, freeing dermatologists to focus on complex cases while reducing diagnostic variation.",
    benefits: [
      "Receive structured, AI-scored referrals from GPs — no more guesswork",
      "Use AI to track condition progression and validate treatment efficacy",
      "Reduce non-critical visits by 27% through better triage",
      "Improve diagnostic consistency with standardized severity scoring (PASI, EASI, etc.)",
    ],
  },
  {
    title: "Health Insurers",
    key: "insurer",
    image: "/insurer.jpg",
    overview:
      "Legit.Health helps insurers cut dermatology claims costs, avoid expensive late-stage treatments, and simplify claims processing. By equipping provider networks with AI diagnostics, insurers gain financial efficiency and actionable data to improve underwriting and retention.",
    benefits: [
      "Cut claim costs by up to 20% by eliminating unnecessary referrals and overtreatment",
      "Enable earlier detection of serious conditions like melanoma to reduce long-term expenses",
      "Streamline approvals with AI-generated diagnostic reports and reduce admin delays",
      "Boost customer loyalty by offering faster, more accurate care via your provider network",
      "Leverage diagnostic data to improve risk modeling, premiums, and underwriting",
    ],
  },
  {
    title: "Pharmaceutical Companies",
    key: "pharma",
    image: "/pharma.jpg",
    overview:
      "Pharma companies can integrate Legit.Health to improve trial design, track outcomes in real time, and distribute digital diagnostic tools with product bundles.",
    benefits: [
      "Run smarter clinical trials: track treatment impact using AI-powered visual scoring",
      "Get real-world efficacy data from doctors using your dermatology products",
      "Bundle Legit.Health with products to boost differentiation and adherence",
      "Access anonymized insights across 500+ clinics for research & product strategy",
    ],
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("gp");

  return (
    <section id="use-cases" className="w-full pt-16 pb-4 px-4 md:px-10 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
      {/* Desktop Tabs */}
      <div className="text-center max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How FutureMed Delivers Value Across the Healthcare Industry
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                From general practitioners and dermatologists to insurers and pharmaceutical leaders, Legit.Health enhances accuracy, reduces costs, and streamlines care with AI-powered dermatology diagnostics.
            </p>
        </div>

      <div className="hidden md:flex flex-wrap gap-3 mb-6 items-center justify-center">
        {useCases.map((item) => (
          <div
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`rounded-full p-[2px] cursor-pointer transition 
              ${activeTab === item.key
                ? "bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)]"
                : "bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] hover:shadow-lg"
              }`}
          >
            <button
              className={`cursor-pointer px-4 py-2 rounded-full font-medium w-full h-full transition
                ${activeTab === item.key
                  ? "text-white bg-transparent"
                  : "bg-white"
                }`}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="hidden md:block bg-white rounded-[50px] shadow-lg p-0">
        {useCases
          .filter((item) => item.key === activeTab)
          .map((item) => (
            <div
              key={item.key}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <div className="w-full md:w-1/2 relative min-h-[600px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-[50px]"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6 max-w-xl">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title.replace("I'm ", "")}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {item.overview}
                </p>
                <ul className="space-y-3 text-base">
                  {item.benefits.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)] text-xl mt-1 font-black">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="cursor-pointer relative inline-block font-bold text-white py-2 px-6 rounded-full hover:brightness-105 transition shadow-md mt-4"
                  onClick={() => (window.location.href = "#get-started")}
                  style={{
                    background:
                      "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
                  }}
                >
                  Schedule a demo
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-4 pb-2">
        {useCases.map((item) => (
            <details
            key={item.key}
            className="group bg-white rounded-3xl shadow-md transition overflow-hidden"
            >
            <summary className="flex items-center justify-between px-5 py-4 font-medium text-base text-gray-800 cursor-pointer bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] text-white">
                <span
                className={`
                    inline-block px-4 py-1 rounded-full font-bold text-sm transition
                `}
                >
                {item.title}
                </span>
                <Plus size={20} />
            </summary>

            <div className="space-y-4">
                <div className="w-full h-52 relative rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-sm">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
                </div>

                <p className="text-sm text-gray-700 px-4">{item.overview}</p>

                <ul className="space-y-2 text-sm px-4">
                {item.benefits.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1 font-bold">✓</span>
                    <span>{point}</span>
                    </li>
                ))}
                </ul>

                <div className="flex items-center justify-between px-4 pb-4">
                <button
                className="mx-auto text-center font-bold text-white py-2 px-4 rounded-full mt-2 transition hover:brightness-105"
                style={{
                    background:
                    "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
                }}
                onClick={() => (window.location.href = "#get-started")}
                >
                Schedule a demo
                </button>
                </div>
            </div>
            </details>
        ))}
        </div>

      </div>
    </section>
  );
}
