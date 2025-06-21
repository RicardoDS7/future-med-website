"use client";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import Benefits from "./components/Benefits";
import ScheduleDemoForm from "./components/ScheduleDemoForm";
import Footer from "./components/Footer";
import Compliance from "./components/Compliance";
import Stats from "./components/Stats";
import DoctorsCarousel from "./components/DoctorsCarousel";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Partners />
      <Compliance />
      <Stats />
      <DoctorsCarousel />
      <Features />
      <HowItWorks />
      <UseCases />
      <Benefits />
      <ScheduleDemoForm />
      <Footer />
    </main>
  );
}
