"use client"

import { useAuth, useUser } from "@clerk/nextjs"
import { createContext, useContext, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
export const AppContext = createContext()

export const useAppContext = () =>{
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const { user } = useUser()
    const {getToken} = useAuth()

    const [chats, setChats] = useState([])
    const [selectedChat, setSelectedChat] = useState(null)

    const createNewChat = async ()=>{
        try {
            if(!user) return null
            const token = await getToken()

            await axios.post("/api/chat/create" ,{ } , {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const fetchUsersChats = async()=>{
        try {
            const token = await getToken()
            const {data} = await axios.get('/api/chat/get', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            if(data.success){
                console.log(data.data)
                setChats(data.data)


                if(data.data.length === 0){
                    await createNewChat();
                    return fetchUsersChats()
                }
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const value = {
        user
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}