"use client";

import AcmeCorpLogo from "../../../public/acme-corp-logo.svg";
import EchoValleyLogo from "../../../public/echo-valley-logo.svg";
import QuantumLogo from "../../../public/quantum-logo.svg";
import PulseLogo from "../../../public/pulse-logo.svg";
import OutsideLogo from "../../../public/outside-logo.svg";
import CelestialLogo from "../../../public/celestial-logo.svg";
import Image from "next/image";
import SectionBorder from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import { motion } from "framer-motion";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Pulse",
    logo: PulseLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  // Create duplicated arrays for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="">
      <div className="container">
        {/* <SectionBorder> */}
        <SectionContent className="!pt-0">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-16">
            Empowering creators at leading companies
          </h2>
          
          {/* Slider container with overflow hidden */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-20"
              animate={{
                x: [0, -50 * companies.length], // Move by the width of one set
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15, // Adjust speed here (lower = faster)
                  ease: "linear",
                },
              }}
              style={{
                width: `${200 * duplicatedCompanies.length}px`, // Ensure enough width
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[160px]"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ maxWidth: '100%' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionContent>
        {/* </SectionBorder> */}
      </div>
    </section>
  );
};

export default Companies;