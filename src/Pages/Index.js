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
        
        <div style={{padding: "70px 90px", color: "white"}}>
            <h3>Encuentranos en nuestra ubicación</h3>
        <iframe src="https://embed.waze.com/es/iframe?zoom=16&lat=12.141947&lon=-86.203418&ct=livemap" width="500" height="350" allowfullscreen></iframe>
        </div>

            <div  style={{padding:"140px 50px", color:"white", textAlign: 'center'}}>
            
                <h2>BIENVENIDO A SUBLICOLOR</h2>
                <h3>{user.nickname}</h3>
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