import { createContext, useContext, useState } from "react";



const ContextData =  createContext();



export const ContextProvider = ({children})=>{
 
const[username, setUserName]  = useState(localStorage.getItem("name") || "")

const [isRotatedRating, setIsRotatedRating] = useState(false);
const [isRotatedSize, setIsRotatedSize] = useState(false);
const [isRotatedDiscount, setIsRotatedDiscount] = useState(false);
const [isRotatedColor, setIsRotatedColor] = useState(false);


return <ContextData.Provider value={{username,setUserName,isRotatedRating, setIsRotatedRating,isRotatedSize, setIsRotatedSize,isRotatedDiscount, setIsRotatedDiscount,isRotatedColor, setIsRotatedColor}}>
    {children}
 </ContextData.Provider>
}

export const useContextData =  ()=> useContext(ContextData)