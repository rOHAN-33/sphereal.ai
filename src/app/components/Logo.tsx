import React, { HTMLAttributes } from 'react'
import logoImage from "../../../public/sphereal-logo.svg"
import { twMerge } from 'tailwind-merge'
const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
    const{className, style, ...otherProps} = props
  return (
    <div >
        <div
                            className={twMerge("size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]",className)}
                            style={{
                                maskImage: `url(${logoImage.src})`,
                                maskSize: "contain",
                                WebkitMaskImage: `url(${logoImage.src})`,
                                WebkitMaskSize: "contain",
                                ...style,
                            }}
                        />
    </div>
  )
}

export default Logo