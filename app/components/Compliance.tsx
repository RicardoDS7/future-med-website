import Image from "next/image";

export default function Compliance() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Certified for Global Standards in Healthcare
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Legit.Health® is designed to meet the world&apos;s most rigorous standards for medical software — ensuring privacy, safety, and full regulatory compliance.
            As the official reseller in South Africa, FutureMed brings this trusted, globally certified solution to local clinics and hospitals with complete confidence.
        </p>

        <div className="flex flex-wrap gap-8 items-top justify-center">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/iso-certified.png"
              alt="ISO 13485"
              width={150}
              height={150}
            />
            <p className="text-sm mt-2 text-gray-700">
              ISO 13485<br />
              Quality Management for Medical Devices
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/une-certified.png"
              alt="UNE 62304"
              width={150}
              height={150}
            />
            <p className="text-sm mt-2 text-gray-700">
              IEC 62304<br />
              Medical Software Lifecycle Compliance
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/ce-certified.png"
              alt="CE-Certified Medical Device"
              width={150}
              height={150}
            />
            <p className="text-sm mt-2 text-gray-700">
              CE 93/42/EEC<br />
              Certified Medical Device
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/gdpr-certified.png"
              alt="GDPR"
              width={150}
              height={150}
            />
            <p className="text-sm mt-2 text-gray-700">
              GDPR<br />
              EU Data Privacy Regulation
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src="/hipaa-certified.png"
              alt="HIPAA"
              width={150}
              height={150}
            />
            <p className="text-sm mt-2 text-gray-700">
              HIPAA<br />
              US Health Data Security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
