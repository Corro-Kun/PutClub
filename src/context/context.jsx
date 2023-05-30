import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import {Lists,details} from "../api.js"


const Conttext = createContext();

export function Function(){
    const cont = useContext(Conttext);
    return cont
}

export function Context({children}){

    const [Api, setApi] = useState([]);

    async function SetApi(){
        const result = await Lists();
        setApi(result);
    }

    useEffect(()=>{
        SetApi();
    },[])

    return(
        <Conttext.Provider value={{Api,details}}>
            {children}
        </Conttext.Provider>
    )
}
