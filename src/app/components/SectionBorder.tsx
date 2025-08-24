import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
const SectionBorder = (props:HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={twMerge("border-l border-r border-gray-200/30",props.className)} {...props}>

    </div>
  )
}

export default SectionBorder