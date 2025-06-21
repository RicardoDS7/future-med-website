import React from "react";

const benefits = [
    {
        title: "Accelerate Workflows",
        description:
            "Automate repetitive tasks and streamline your processes to save valuable time and resources.",
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#E0E7FF" />
                <path d="M10 16h12M16 10v12" stroke="#3730A3" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "AI-Powered Insights",
        description:
            "Leverage advanced AI to extract actionable insights from your data, enabling smarter decisions.",
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#D1FAE5" />
                <path d="M16 10v12M10 16h12" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Seamless Integration",
        description:
            "Easily connect with your existing tools and platforms for a unified, efficient workflow.",
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#FDE68A" />
                <path d="M12 20l8-8M12 12h8v8" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

const Benefits: React.FC = () => (
    <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
                Unlock the full potential of your organization with our intelligent solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                    >
                        <div className="mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Benefits;