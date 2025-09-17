"use client"

import Image from "next/image"
import { useState } from "react"



export default function AiModel(){
    const[expand, setExpand] = useState(false)
    const[messages, setMessages] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    return (
        <div className="text-white">
            <div className="flex h-screen">
                {/* sidebar */}
                <div>
                    <div>
                        <Image src={} className="rotate-180 "></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}