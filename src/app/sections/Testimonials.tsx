"use client"
import React from "react";
import AshwinSantiago from "../../../public/ashwin-santiago.jpg";
import AlecWhitten from "../../../public/alec-whitten.jpg";
import ReneWells from "../../../public/rene-wells.jpg";
import MollieHall from "../../../public/mollie-hall.jpg";
import { SectionContent } from "../components/SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaQuoteLeft } from 'react-icons/fa';

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];
const SELECTED_TESTIMONIALS_INDEX = 0;

export const Testimonials = () => {
return (
    <section className=" p-4">
    <div className="container">
        <SectionContent>
            <div className="border-gradient rounded-3xl px-6 py-16 relative flex flex-col gap-12 md:mx-10 md:px-10 md:flex-row items-center lg:px-16 lg:py-24 lg:mx-20">
                <FaQuoteLeft className="absolute size-20 text-violet-400 top-0 -translate-y-1/2 left-20 -translate-x-1/2" />
                {testimonials.map((testimonial, index) => (
                    <React.Fragment key={testimonial.name}>
                        {SELECTED_TESTIMONIALS_INDEX === index && (
                            <blockquote key={testimonial.name} className="flex flex-col gap-12 lg:flex-row">
                                <p className="text-xl font-medium md:text-2xl">{testimonial.quote}</p>
                                <cite className="not-italic">
                                    <Image src={testimonial.image} alt={testimonial.name} className="rounded-xl size-28 max-w-none"></Image>
                                    <div className="font-bold mt-4">{testimonial.name}</div>
                                    <div className="text-xs text-gray-400 mt-2">{testimonial.title}</div>
                                </cite>
                            </blockquote>
                        )}
                    </React.Fragment>
                ))}
                <div className="flex gap-2 justify-center md:flex-col">
                    {testimonials.map((testimonial, index)=>(
                        <div key={testimonial.name} className="size-6 relative isolate inline-flex items-center justify-center">
                            {SELECTED_TESTIMONIALS_INDEX === index &&(
                                    <div className="absolute border-gradient size-full rounded-full -z-10"></div>
                            )}
                            
                            <div className="size-1.5 bg-gray-200 rounded-full ">

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </SectionContent>
    </div>
</section>
    )
  
};

export default Testimonials;