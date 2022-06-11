import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import background from "../image/circulo.jpg";
import face from "../image/face.png"
import insta from "../image/insta.png"
import tiktok from "../image/tiktok.png"

export const Home = () =>{
    const { user} = useAuth0();
    return(
        
        <body className='row' style={{backgroundImage: `url(${background})`, width:'1370px', height:'600px', backgroundRepeat: 'no-repeat', fontFamily:"Poppins"}}>
        
            <div  style={{padding:"140px 430px", color:"white", textAlign: 'center'}}>
            
                <h2>BIENVENIDO A SUBLICOLOR</h2>
                <h3>{user.name}</h3>
                <br/>
                <br/>
                <h5>Guia de sublimación y productos que puedes usar</h5>
                <h8>Contáctanos en nuestras redes sociales</h8>
                <br/>
                <img href   style={{width:'32px', height:'32px'}} src={face}/>
                <img style={{margin: "15px",width:'32px', height:'32px'}} src={insta}/>
                <img style={{margin: "5px",width:'32px', height:'32px'}} src={tiktok}/>
            </div>
            
            
            
        </body>
    )
}