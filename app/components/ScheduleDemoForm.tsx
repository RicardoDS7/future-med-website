"use client";

import React, { useState } from "react";

export default function ScheduleDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwryepb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error(
          json.error || "There was a problem submitting the form."
        );
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section
      id="get-started"
      className="py-16 md:py-20"
      style={{
        background:
          "linear-gradient(90deg, var(--color-secondary) 10%, var(--color-primary-hover) 50%, var(--color-primary) 80%)",
      }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-[30px] shadow-xl px-6 py-10 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Schedule a Live Demo
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your details and our team will contact you to arrange a personalized walkthrough of Legit.Health.
        </p>

        {submitted ? (
          <div className="text-green-600 font-semibold text-center py-8">
            ✅ Thank you! We&apos;ll be in touch shortly.
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* First Name */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="Jane"
                />
              </div>

              {/* Surname */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surname <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="surname"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="you@email.com"
                />
              </div>

              {/* Phone */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="Phone number"
                />
              </div>

              {/* Company */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="Company name"
                />
              </div>

              {/* City */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="e.g., Cape Town"
                />
              </div>

              {/* Role Selector */}
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What best describes you?
                </label>
                <select
                  name="role"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                >
                  <option value="">Select one</option>
                  <option value="GP">General Practitioner</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Insurer">Health Insurer</option>
                  <option value="Pharma">Pharmaceutical Company</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  placeholder="Tell us more about your needs"
                />
              </div>

              {/* reCAPTCHA */}
              <input type="hidden" name="_captcha" value="true" />

              {/* Submit Button */}
              <div className="col-span-1 lg:col-span-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full font-bold text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--color-primary-hover) 30%, var(--color-primary) 70%)",
                  }}
                >
                  Schedule Demo
                </button>
              </div>
            </form>

            {error && (
              <p className="mt-4 text-center text-red-600">{error}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
