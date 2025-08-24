import React from 'react'
import robotImg from "../../../public/robot.jpg"
import Image from 'next/image'
import { Button } from '../components/Button'
import underLineImage from "../../../public/underline.svg"
import loaderSvg from '../../../public/loader.svg'
import { Orbit } from '../components/Orbit'
import Planet from '../components/Planet'
import SectionBorder from '../components/SectionBorder'
import { SectionContent } from '../components/SectionContent'
const Hero = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container '>
        <SectionBorder>
          {/* <SectionContent></SectionContent> */}
        <div className='border-l border-r border-gray-200/30'>
          <div className='container py-24 md:py-36 lg:py-48 relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
            <div className='absolute -z-10 inset-0 bg-[radial-gradient(circle_at_center,#e879f9_0%,#a855f7_20%,#6366f1_80%,#3730a3_100%)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]'>
</div>
<div className='absolute inset-0 -z-10'>
    <div className='absolute-center'>
        <Orbit className='size-[350px]'></Orbit>
    </div>
    <div className='absolute-center'>
        <Orbit className='size-[600px]'></Orbit>
    </div>
    <div className='absolute-center'>
        <Orbit className='size-[850px]'></Orbit>
    </div>
    <div className='absolute-center'>
        <Orbit className='size-[1100px]'></Orbit>
    </div>
    <div className='absolute-center'>
        <Orbit className='size-[1350px]'></Orbit>
    </div>

</div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight'>The Future of AI Conversation with Saphaire.AI 
              <span className='relative '>
                <span>Sphereal</span>
                <span className='absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,#fcd34d,#5eead4,#a78bfa,#e879f9)] max-w-3xl max-auto' style={{maskImage:`url(${underLineImage.src})`,
                    maskSize:"contain",
                    maskPosition:"center",
                    maskRepeat:"no-repeat",
                }}></span>
              </span>
            </h1>
            <p className='text-center text-lg mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo dolor velit autem ad quia soluta ratione cum dolorem obcaecati.</p>
            <div className='flex justify-center'>
              <Button intent="primary" className='mt-10 '>Start Chatting</Button> 
            </div>
            <div className='relative  isolate max-w-6xl mx-auto'>
                <div className='absolute left-1/2 top-0'>
                <Planet size="lg" color='violet' className='-translate-x-[315px] -translate-y-[76px] rotate-135'></Planet>
                    {/* <div className='bg-gradient-to-b from-violet-400 to-gray-950 size-8 rounded-full '></div> */}
                    <Planet size="lg" color='violet' className='-translate-y-[190px] translate-x-[300px] -rotate-135'></Planet>
                    <Planet size="md" color='teal' className='-translate-y-[372px] translate-x-[500px] -rotate-135'></Planet>
                </div>
            

            <div className='absolute  left-0 z-10 top-[30%] -translate-x-10'>
                <div className='bg-gray-800/70 backdrop:blur-md border-gray-700 rounded-xl p-4 w-72 '>
                    <div>Can You Generate an incredible frontend dev video tutorial</div>
                    <div className='text-right text-gray-400 text-sm font-semibold'>1m age</div>
                </div>
            </div>
            <div className='absolute  right-0 z-10 top-[50%] translate-x-10'>
                <div className='bg-gray-800/70 backdrop:blur-md border-gray-700 rounded-xl p-4 w-72 '>
                    <strong>BrainWave:</strong> I created one based on some reference from the youtube video
                    <div className='text-right text-gray-400 text-sm font-semibold'>Suggest Now</div>
                </div>
            </div>
            
            <div className='mt-20 rounded-2xl border-2 border-gradient flex overflow-hidden relative  '>
                
              <Image src={robotImg} alt='robotimg'></Image> 
              <div className='absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full px-4 '>
                <div className='bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full'>
                    <Image src={loaderSvg} alt='loader' width={24} height={24} className='text-violet-400'></Image>
                    <div className='font-semibold text-xl text-gray-100 '>AI is generating <span>|</span></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </SectionBorder>
      </div>
    </section>
  );
}

export default Hero