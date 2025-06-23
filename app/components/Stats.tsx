"use client";

import React from "react";
import { ArrowRight, TrendingDown, TrendingUp, UserSearch } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Stats() {
  return (
    <section className="bg-gray-50 py-20 px-6">


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Empowering Doctors to <span className="bg-gradient-to-r from-[var(--color-primary-hover)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Deliver Faster, Smarter
            </span> <br /> Care
          </h2>
          <p className="text-gray-500 text-lg">
            Legit.Health enables accurate diagnosis of 300+ skin conditions, optimizes referrals, and dramatically increases specialist efficiency through AI-powered decision support.
          </p>
          <Link
            to="get-started"
            offset={-48}
            smooth={true}
            duration={500}
            className="cursor-pointer relative w-fit font-bold text-white py-2 px-6 rounded-full hover:shadow-lg transition shadow-md"
            style={{
                background:
                "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
            }}
            >
            Schedule a Free Demo <ArrowRight size={16} className="inline ml-1" />
          </Link>
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