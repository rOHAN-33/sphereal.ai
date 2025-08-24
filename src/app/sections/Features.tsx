import React from 'react';
import slackLogo from "../../../public/slack-logo.png";
import dockerLogo from "../../../public/docker-logo.png";
import figmaLogo from "../../../public/figma-logo.png";
import githubLogo from "../../../public/github-logo.png";
import vsCodeLogo from "../../../public/vs-code-logo.png";
import notionLogo from "../../../public/notion-logo.png";
import jiraLogo from "../../../public/jira-logo.png";
import gcpLogo from "../../../public/gcp-logo.png";
import SectionBorder from "../components/SectionBorder";
import { SectionContent } from "../components/SectionContent";
import { Button } from "../components/Button";
import { Orbit } from "../components/Orbit";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Logo from "../components/Logo";
import Image from "next/image";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return(
    <section className="flex justify-center"> {/* Use flexbox to center the content within the section */}
      <div className="container mx-auto px-4"> {/* Use `mx-auto` for horizontal centering and `px-4` for padding */}
        <SectionContent>
          {/* Use `place-items-center` to center both horizontally and vertically in the grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
            {/* The first grid item for text content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-gray-200">Your AI-Powered Collaboration Companion</h2>
              <ul className="mt-12 flex flex-col items-center md:items-start gap-8">
                {features.map((feature)=>(
                  <li key={feature} className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCircleCheck} className="size-6 text-violet-400" />
                    <span className="text-xl font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-16 mx-auto md:mx-0">Try It Now</Button>
            </div>
            
            {/* The second grid item for the orbit animation */}
            <div className="flex justify-center">
              <div className="size-[270px] relative">
                <div className="absolute inset-0">
                  <Orbit className="size-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center"> {/* Use flexbox to center inner elements */}
                  <Orbit className="size-[180px]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center"> {/* Use flexbox to center the logo */}
                  <Logo className="size-24" />
                </div>
                {logos.map(({src, alt, rotate}) => (
                  <div
                    className=" absolute inset-0"
                    style={{ transform: `rotate(${rotate}deg)` }}
                    key={alt}
                  >
                    <div
                      className="inline-flex size-10 items-center justify-center border border-gray-300 rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950"
                      style={{ transform: `rotate(-${rotate}deg)` }}
                    >
                      <Image src={src} alt={alt} className="size-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
}

export default Features;