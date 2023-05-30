import React,{useEffect, useState} from "react";
import "../style/Details.css"
import {useParams} from "react-router-dom"
import { Function } from "../context/context";

function Details(){

    const [Getapi, setGetapi] = useState([])

    async function Getdata(){
        setGetapi(await details(id));
    }

    const {details} = Function();

    const {id} = useParams();

    useEffect(()=>{
        Getdata();
    },[])

    return(
        <div className="Contener2">
            {

                Getapi.map(Getapi =>{
                    return(
                        <div key={Getapi.id} className="details">
                            <h2>{Getapi.name}</h2>
                            <img src={Getapi.url} alt="" />
                            <h2>Descripcion</h2>
                            <p>{Getapi.descripcion}</p>
                            <h2>Edad</h2>
                            <p>{Getapi.age}</p>
                            <h2>Estado</h2>
                            <p>{Getapi.status}</p>
                            <h2>Puntuacion</h2>
                            <p>{Getapi.punctuation}</p>
                            <h2>Precio</h2>
                            <p>${Getapi.worth}</p>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Details