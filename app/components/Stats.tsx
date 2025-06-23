"use client";

import React from "react";
import { ArrowRight, TrendingDown, TrendingUp, UserSearch } from "lucide-react";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="bg-gray-50 py-20 px-6">


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Your <span className="bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Trusted
            </span> <br /> Healthcare Providers
          </h2>
          <p className="text-gray-500 text-lg">
            Public does not participate in payment for order flow as a source of revenue. Instead, we route all orders directly.
          </p>
          <button
              className="cursor-pointer w-fit relative inline-block font-bold text-lg text-white py-3 px-6 rounded-full hover:shadow-lg transition shadow-md"
              onClick={() => window.location.href = "#get-started"}
              style={{
                background: `linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)`,
              }}
            >
              Schedule a demo <ArrowRight className="inline ml-2" />
        </button>
        </div>

        {/* Right Card */}
        <div className="flex items-center justify-center">
            <Image
                src="/doctor-remote-legit-health.svg"
                alt="Healthcare Providers"
                width={400}
                height={400}
            />
        </div>


      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "300+",
            subtitle: "Legit.Health® is capable of accurately diagnosing over 300 skin conditions.",
            icon: <UserSearch size={24} className="text-white"/>,
          },
          {
            title: "27%",
            subtitle: "Reduction in patient referral rates to specialists.",
            icon: <TrendingDown size={24} className="text-white"/>,
          },
          {
            title: "6.5x",
            subtitle: "Specialists can see 6.5x more patients per day with our AI assistance.",
            icon: <TrendingUp size={24} className="text-white"/>,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-lg"
          >
            <div>
              <h4 className="text-2xl font-bold text-[var(--foreground)]">
                {stat.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
            </div>
            <div className="text-2xl bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] text-white rounded-full p-2 flex items-center justify-center">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}