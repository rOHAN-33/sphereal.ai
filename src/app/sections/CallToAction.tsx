import React from 'react'
import { SectionContent } from '../components/SectionContent'
import { Button } from '../components/Button'
import underlineImage from "../../../public/underline.svg"
import { Orbit } from '../components/Orbit'
import Planet from '../components/Planet'

const CallToAction = () => {
  return (
    <section className='-mt-[100px] '>
        <div className='container'>
            <SectionContent className='relative min-h-screen flex flex-col justify-center items-center isolate'>
                <div></div>
               <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#e879f9_0%,#a855f7_30%,#6366f1_60%,#111827_100%)] opacity-60"
  style={{
    maskImage: 'radial-gradient(circle at center, black 10%, transparent 70%)',
  }}
></div>

<div className="absolute inset-0 flex items-center justify-center">
  <div className="w-[80vw] h-[80vh] max-w-5xl max-h-[800px] rounded-full border-none overflow-hidden pointer-events-none">
    <div className="absolute inset-0 flex items-center justify-center">
      <Orbit className="size-[100px]"></Orbit>
      <Orbit className="size-[200px]"></Orbit>
      <Orbit className="size-[300px]"></Orbit>
      <Orbit className="size-[400px]"></Orbit>
      <Orbit className="size-[500px]"></Orbit>
      <Orbit className="size-[600px]"></Orbit>
      <Orbit className="size-[700px]"></Orbit>
      
    </div>
    <div className='absolute-center -z-10'>
       <Planet size='lg' color='violet' className='translate-y-[200px] -translate-x-[200px]'></Planet>
       <Planet size='lg' color='violet' className='absolute translate-x-[350px] translate-y-[0px]' />
    <Planet size='lg' color='fuchsia' className='absolute translate-x-[-247px] translate-y-[247px]' />
    <Planet size='lg' color='teal' className='absolute translate-x-[0px] translate-y-[-350px]' />
    <Planet size='md' color='violet' className='absolute translate-x-[175px] translate-y-[303px]' />
    <Planet size='sm' color='fuchsia' className='absolute translate-x-[100px] translate-y-[0px]' />
    <Planet size='md' color='violet' className='absolute translate-x-[-71px] translate-y-[71px]' />
    </div>
  </div>
</div>
                <h2 className='text-gray-200 font-semibold text-3xl text-center lg:text-5xl leading-tight max-w-3xl mx-auto' >Join the AI Revolution with  <span className='relative isolate'>
                    <span>Spereal</span>
                    <span className='absolute h-4 w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,#fcd34d,#5eead4,#a78bfa,#e879f9)] max-w-3xl max-auto' style={{maskImage:`url(${underlineImage.src})`,
                    maskSize:"contain",
                    maskPosition:"center",
                    maskRepeat:"no-repeat",
                }}></span>
                    </span></h2>
                <p className='text-center text-xl mt-8 max-w-2xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex error, delectus quos iste culpa mollitia dolorum fuga perferendis sit aperiam.</p>
                <div className='flex justify-center mt-10'>
                   <Button intent="secondary">Get Started</Button> 
                </div>
               
            </SectionContent>
        </div>
    </section>
  )
}

export default CallToAction