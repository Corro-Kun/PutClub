import React from "react";
import "../style/contener.css"
import Ficha from "./ficha";
import {Function} from "../context/context.jsx"

function Contener(){

    const {Api} = Function();

    return(
        <div className="Contener">

            {

                Api.map((Api) =>{
                    return(
                        <Ficha key={Api.id} id={Api.id} name={Api.name} image={Api.url} />
                    )
                })

            }
            
        </div>
    )
}

export default Contener