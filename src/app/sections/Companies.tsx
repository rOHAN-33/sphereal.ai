import AcmeCorpLogo from "../../../public/acme-corp-logo.svg";
import EchoValleyLogo from "../../../public/echo-valley-logo.svg";
import QuantumLogo from "../../../public/quantum-logo.svg";
import PulseLogo from "../../../public/pulse-logo.svg";
import OutsideLogo from "../../../public/outside-logo.svg";
import CelestialLogo from "../../../public/celestial-logo.svg";
import Image from "next/image";
import SectionBorder from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
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
  return(
    <section className="">
  <div className="container">
    {/* <SectionBorder> */}
      <SectionContent className="!pt-0">
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-16">
          Empowering creators at leading companies
        </h2>
        <div className="flex overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex flex-none gap-20 px-4 md:gap-20">
            {companies.map(({ logo: Logo, name }) => (
              <div key={name} className="flex-shrink-0 flex items-center">
                <Image 
                  src={Logo} 
                  alt={name} 
                  className="h-12 md:h-16 transition-transform duration-300 hover:scale-105" 
                  style={{ maxWidth: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContent>
    {/* </SectionBorder> */}
  </div>
</section>
  ) 
  
};

export default Companies;