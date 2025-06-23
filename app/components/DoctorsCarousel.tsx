"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const doctors = [
  {
    name: "Ramón Grimalt",
    role: "Dermatologist & Associate Professor",
    image: "/dr-grimalt.png",
  },
  {
    name: "Antonio Martorell",
    role: "Dermatologist and Medical Lead at Legit.Health",
    image: "/dr-antonio-martorell.png",
  },
  {
    name: "Sergio Vaño",
    role: "Dermatologist",
    image: "/dr-vano.png",
  },
  {
    name: "Ricardo Ruiz",
    role: "Director at Clínica Dermatológica Internacional",
    image: "/dr-ruiz.png",
  },
  {
    name: "Jose Luiz Lopez Estebaranz",
    role: "Dermatologist MD PhD",
    image: "/dr-lopez-estebaranz.png",
  },
  {
    name: "Elena Sanchez-Largo",
    role: "Digital Health and Dermatologist Senior Advisor",
    image: "/dr-sanchez-largo.png",
  },
];

export default function DoctorsCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
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
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[var(--foreground)]">
        Developed by Doctors, for Doctors
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
        Meet the medical professionals who help design, test, and guide Legit.Health&apos;s clinical accuracy and usability.
      </p>

      <div ref={sliderRef} className="keen-slider overflow-hidden min-w-0">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="keen-slider__slide cursor-pointer transition-all duration-300
              rounded-[30px] pb-6 text-center shadow-md my-2 bg-white"
          >
            <Image
              width={300}
              height={300}
              src={doc.image}
              alt={doc.name}
              className="object-cover w-full aspect-[9/10] rounded-[20px] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{doc.name}</h3>
            <p className="text-sm text-gray-600">{doc.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
