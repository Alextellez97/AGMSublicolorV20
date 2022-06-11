import React from 'react'

export const Footer = () =>{
    return(
        <footer className="bg-primary text-center text-lg-start" style={{marginTop:"0px", position: 'relative'}}>
        <div className="text-center p-3 text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            ©2022 Copyright:
            <a className="text-white" href="https://www.facebook.com/sublimacionesSC" target={"_blank"}> SUBLICOLOR Nicaragua</a>
        </div>
        </footer>
    )
}