import React from "react";

const useCases = [
    {
        title: "Automated Diagnosis",
        description:
            "Leverage AI to assist healthcare professionals in diagnosing skin conditions quickly and accurately, reducing human error and improving patient outcomes.",
    },
    {
        title: "Remote Patient Monitoring",
        description:
            "Enable continuous monitoring of patients' skin health remotely, allowing for timely interventions and reducing the need for frequent in-person visits.",
    },
    {
        title: "Treatment Progress Tracking",
        description:
            "Track the effectiveness of prescribed treatments over time with visual documentation and AI-powered analysis, ensuring optimal care plans.",
    },
    {
        title: "Clinical Decision Support",
        description:
            "Provide clinicians with evidence-based recommendations and insights, supporting better decision-making and personalized patient care.",
    },
];

const UseCases: React.FC = () => (
    <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                Legit.Health Use Cases
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
                {useCases.map((useCase, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-gray-700">{useCase.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default UseCases;