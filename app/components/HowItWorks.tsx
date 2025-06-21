import React from "react";

const steps = [
    {
        title: "1. Capture Clinical Images",
        description:
            "Use your smartphone or camera to take high-quality images of your patient's skin conditions directly in the clinic or remotely.",
    },
    {
        title: "2. Instant AI Analysis",
        description:
            "Upload the images to legit.health. Our AI instantly analyzes the images, providing objective severity scores and diagnostic suggestions.",
    },
    {
        title: "3. Generate Reports & Track Progress",
        description:
            "Receive comprehensive reports and track patient progress over time. Share results with patients and integrate them into your workflow.",
    },
];

const HowItWorks: React.FC = () => (
    <section className="how-it-works">
        <h2 className="text-2xl font-bold mb-6 text-center">
            How legit.health Works for Medical Professionals
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
            {steps.map((step, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md p-6 flex-1 min-w-[250px]"
                >
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default HowItWorks;