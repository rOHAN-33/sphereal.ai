import AcmeCorpLogo from "../../../public/acme-corp-logo.svg";
import EchoValleyLogo from "../../../public/echo-valley-logo.svg";
import QuantumLogo from "../../../public/quantum-logo.svg";
import PulseLogo from "../../../public/pulse-logo.svg";
import OutsideLogo from "../../../public/outside-logo.svg";
import CelestialLogo from "../../../public/celestial-logo.svg";
import Image from "next/image";
import SectionBorder from "../components/SectionBorder";
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
    <section className="pb-[1000px]">
        <div className="container">
            <SectionBorder>
            <h2>Empowering creators at leading Companies</h2>
            <div>
               {companies.map(({logo:Logo, name})=>(
                <div key={name}>    
                   <Image src={Logo} alt="logo"></Image>
                </div>
            ))} 
            
            </div>
            </SectionBorder>
        </div>
  </section>
  ) 
  
};

export default Companies;