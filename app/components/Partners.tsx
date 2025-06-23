import React from "react";

// Example partner, institute, and certification logos (replace with real images)
const partners = [
    { name: "Aptar Digital Health", logo: "https://aptardigitalhealth.com/wp-content/uploads/2023/07/logo-sticky.svg" },
    { name: "Novartis", logo: "https://www.novartis.com/themes/custom/polaris/logo.svg" },
    { name: "Riberra", logo: "https://legit.health/assets/images/ribera-salud-a9f93b6ebdf15c2898726497b5eb3af8.png" },
    { name: "Hospital Universitario de Torrejon", logo: "https://legit.health/assets/images/torrejon-5fc79e1222b04c9c8557ad5631d91773.png" },
    { name: "EIT Health", logo: "https://legit.health/assets/images/eit-health-b08dcb2ab9e8455fbca18885bf4d87f4.png" },
    { name: "Almirall", logo: "https://www.almirall.com/o/almirall-restyling-theme/images/almirall_logo-footer.svg" },
    { name: "Igderma", logo: "	https://legit.health/assets/images/igderma-0348280e25cfd33309fa8e1e1ddd4191.png" },


];  

const allLogos = [
    ...partners.map((p) => ({ ...p, type: "Partner" })),
];

const Partners: React.FC = () => (
    <section>
        {/* <h2 className="text-2xl font-bold mb-4 text-center">
            Trusted by Leading Partners & Certified by Renowned Institutes
        </h2> */}
        
        <div className="overflow-hidden w-full py-6">
            <div className="relative w-full">
                <div className="carousel-track flex items-center gap-12 lg:gap-24 animate-carousel">
                    {[...allLogos, ...allLogos].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center min-w-[140px] max-w-[180px]"
                            aria-label={item.type}
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-16 object-fill mb-2"
                                loading="lazy"
                            />
                        </div>
                    ))}

                    {/* Duplicate content */}
                    {[...allLogos, ...allLogos].map((item, idx) => (
                        <div
                            key={`duplicate-${idx}`}
                            className="flex flex-col items-center min-w-[140px] max-w-[180px]"
                            aria-label={item.type}
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-16 object-contain mb-2"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <style jsx>{`
            .carousel-track {
                will-change: transform;
            }
            @keyframes carousel {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            .animate-carousel {
                animation: carousel 60s linear infinite;
                width: max-content;
            }
        `}</style>
    </section>
);

export default Partners;