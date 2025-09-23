"use client"

import Image from "next/image"
import { useState } from "react"
import {assets} from "../../../public/assets/assets"
import Sidebar from "../../../src/app/ai/components/Sidebar"
import PromptBox from "./components/PromptBox"
import Message from "./components/Message"

export default function AiModel(){
    const[expand, setExpand] = useState(false)
    const[messages, setMessages] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    return (
        <div className="text-white">
            <div className="flex h-screen">
                <Sidebar expand={expand} setExpand={setExpand}></Sidebar>
                <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
                    <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
                        <Image src={assets.menu_icon } className="rotate-180 "alt="" onClick={()=>(expand? setExpand(false) : setExpand(true))}></Image>
                        <Image src={assets.chat_icon } className="opacity-70 "alt=""></Image>
                    </div>
                    {messages.length === 0 ? (<>
                        <div className="flex items-center gap-3">
                            <Image src={assets.logo_icon} alt="" className="h-16">
                            

                            </Image>
                            <p className="text-2xl font-medium">Hi, Im Sperial</p>
                        </div>
                        <p className="text-sm mt-2">
                            How can I help you today?
                        </p>
                    </>)
                    :
                    (
                        <div>
                            <Message role="user" content="What is next js">

                            </Message>
                        </div>
                    )}

                    <PromptBox isLoading={isLoading} setIsLoading={setIsLoading}></PromptBox>
                    <p className="text-xs absolute bottom-1 text-gray-500">
                        AI-generated , for reference only
                    </p>
                </div>
            </div>
        </div>
    )
}