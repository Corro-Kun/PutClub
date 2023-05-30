import React from "react";
import "../style/ficha.css"
import {Link, useNavigate} from "react-router-dom"

function Ficha({id, name, image}){

    const Navigate = useNavigate();

    function Detalls(ID){
        Navigate('/producte/' + ID);
    }

    return (
        <div className="ficha" onClick={() => Detalls(id)}>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default Ficha