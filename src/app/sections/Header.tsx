"use client"
import logoImage from "../../../public/sphereal-logo.svg"
import { Button } from "../components/Button"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Orbit } from "../components/Orbit"

export const navItems = [
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Pricing", 
        href: "#pricing"
    },
    {
        name: "About",
        href: "#about"
    }
]

export const loginItems = [
    {
        buttonVarient: "tertiary",
        name: "login",
        href: "#login"
    },
    {
        buttonVarient: "tertiary", 
        name: "signup",
        href: "#sign-up"
    }
] satisfies {
    name: string,
    href: string,
    buttonVarient: string,
}[];

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
        <header className="border-b border-gray-200/20">
            <div className="container">
                <div className="flex items-center justify-between h-18 px-4">
                    {/* Left: Logo */}
                    <div className="flex gap-4 items-center flex-shrink-0">
                        <div
                            className="size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                            style={{
                                maskImage: `url(${logoImage.src})`,
                                maskSize: "contain",
                                WebkitMaskImage: `url(${logoImage.src})`,
                                WebkitMaskSize: "contain",
                            }}
                        />
                        <div className="font-extrabold text-2xl text-white">sphereal.ai</div>
                    </div>

                    {/* Center: Nav */}
                    <nav className="hidden lg:flex justify-center flex-1 mx-8">
                        <div className="flex items-center h-full">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-8 relative font-bold text-xs tracking-widest text-gray-400 uppercase h-full inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 last:after:block hover:text-gray-200 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Right: Buttons / Hamburger */}
                    <div className="flex justify-end items-center gap-5 flex-shrink-0">
                        <div className="hidden lg:flex gap-5">
                            {loginItems.map(({ buttonVarient, name, href }) => (
                                <a href={href} key={name}>
                                    <Button intent={buttonVarient as "primary" | "secondary" | "tertiary"}>
                                        {name}
                                    </Button>
                                </a>
                            ))}
                        </div>
                        <div className="lg:hidden">
                            

<button 
  onClick={() => setIsMobileOpen(!isMobileOpen)} // Add an onClick handler
  className="size-10 rounded-lg border-2 border-transparent [background:linear-gradient(white,white),conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] [background-clip:padding-box,border-box] relative"
>
  {/* Single container to center both lines */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    
    {/* Top line */}
    <div className={twMerge(
      "w-4 h-0.5 bg-gray-600 transition-transform duration-300",
      isMobileOpen ? "rotate-45" : "-translate-y-1"
    )}></div>

    {/* Bottom line */}
    <div className={twMerge(
      "w-4 h-0.5 bg-gray-600 transition-transform duration-300",
      isMobileOpen ? "-rotate-45" : "translate-y-1"
    )}></div>

  </div>
</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {isMobileOpen && (
            // This should be conditionally rendered, e.g., {isMobileOpen && (...)}
<div className="fixed top-16 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden"> {/* Note: top-16 is a standard Tailwind value */}
  
  {/* Single container for a unified layout */}
  {/* Added 'relative' to create a positioning context for the circle */}
  <div className="container h-full relative">
    
    {/* Circle is now 'absolute' to act as a background element */}
    {/* It is centered and has a low z-index (or no z-index) */}
    <Orbit className="size-[200]"></Orbit>
    <Orbit className="size-[350]"></Orbit>
    <Orbit className="size-[500]"></Orbit>
    <Orbit></Orbit>

    
    {/* Nav is 'relative' with a z-index to ensure it's on top */}
    <nav className="relative z-10 flex flex-col items-center gap-4 py-8 h-full justify-center">
      {navItems.map(({ name, href }) => (
        <a href={href} key={name} className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10">
          {name}
        </a>
      ))}
      {loginItems.map(({ buttonVarient, name, href }) => (
        <a href={href} key={name} className="w-full max-w-xs">
          <Button block intent={buttonVarient as "primary" | "secondary" | "tertiary"}>
            {name}
          </Button>
        </a>
      ))}
    </nav>
    
  </div>
</div>
        )}
        
        </>
        
    );
}