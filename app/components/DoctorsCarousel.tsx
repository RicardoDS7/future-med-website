"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Linkedin, Instagram, X, Facebook } from "lucide-react";

const doctors = [
  {
    name: "Ramon Grimalt",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/ramon-grimalt-00dfbc92aa0d1e4de4c74156c09d2aea.png",
  },
  {
    name: "Pedro Rodríguez",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/pedro-rodriguez-00c3b8c2de10f4633ec2fc70a688e04c.png",
  },
  {
    name: "Sergio Vaño",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/pedro-rodriguez-00c3b8c2de10f4633ec2fc70a688e04c.png",
  },
  {
    name: "Gaston Roustan",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/gaston-roustan-176806592d5f3a05d8c32962e90bea80.jpeg",
  },
  {
    name: "Gaston Roustan",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/gaston-roustan-176806592d5f3a05d8c32962e90bea80.jpeg",
  },
  {
    name: "Gaston Roustan",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/gaston-roustan-176806592d5f3a05d8c32962e90bea80.jpeg",
  },
  {
    name: "Gaston Roustan",
    role: "Strategic & finance",
    image: "https://legit.health/assets/images/gaston-roustan-176806592d5f3a05d8c32962e90bea80.jpeg",
  },
];

export default function DoctorsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false, // smoother experience for now
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4.5, spacing: 24 },
      },
    },
  });

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[var(--foreground)]">
        Developed by Doctors, for Doctors
      </h2>
      <p className="text-gray-500 text-center mb-10">
        We aim to share information about our team
      </p>

      <div ref={sliderRef} className="keen-slider overflow-hidden min-w-0">
        {doctors.map((doc, index) => {
          const isSelected = selectedIndex === index;

          return (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`
                keen-slider__slide cursor-pointer transition-all duration-300
                rounded-[30px] pb-4 text-center shadow-md my-2
              `}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-64 object-cover rounded-[20px] mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{doc.name}</h3>
              <p className="text-sm opacity-70">{doc.role}</p>

              <div className="flex justify-center gap-4 mt-6">
                {[Linkedin, Instagram, X, Facebook].map((Icon, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                      isSelected
                        ? "border border-white text-white"
                        : "border border-gray-300 text-gray-700 hover:border-white hover:text-white"
                    }`}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
