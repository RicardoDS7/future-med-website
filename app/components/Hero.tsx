import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-medium text-[var(--foreground)] mb-6">
            The Best{" "} <br/>
            <span className="bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Skin Analytics
            </span>{" "}
            <br />
            Medical Device
          </h1>

          {/* Subheading */}
          <p className="text-gray-500 text-lg max-w-xl md:max-w-lg mb-8 mx-auto md:mx-0">
            Cutting-edge biomarkers to support clinical practice, offering patients time and health.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="cursor-pointer relative inline-block font-bold text-lg text-white py-3 px-6 rounded-full hover:shadow-lg transition shadow-md"
              onClick={() => window.location.href = "#get-started"}
              style={{
                background: `linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)`,
              }}
            >
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src="https://legit.health/assets/images/legit-health-medical-device-1500-afd8e81eba9ea090f0042629aa1d4703.avif"
            alt="Medical Device"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>

    </section>
  );
}
