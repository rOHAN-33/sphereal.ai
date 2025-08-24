import { twMerge } from "tailwind-merge"
import { HTMLAttributes } from "react"
export const Orbit = (props: HTMLAttributes<HTMLDivElement>) => {
    return(
        <div className={twMerge("absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] border border-gray-200/30 rounded-full isolate -z-10",props.className)} >

        </div>
    )
}