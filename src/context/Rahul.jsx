import { createContext, useState } from "react";

export const Box=createContext();
export const BoxProvider=({children})=>{
    const [value, setvalue] = useState("");
    const [list, setlist] = useState([]);
    

    return<Box.Provider value={{value,setvalue,list,setlist}}>{children}</Box.Provider>
}