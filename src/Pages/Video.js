import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';


export const Video = () => {
    return (  
      <section>
        <div className="row" style={{marginTop:"89px"}}>
        <p className="row">
                        
                        <p>
                        <h6 style={{marginLeft:"40%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.dailymotion.com/embed/video/x8bl214' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"40%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.dailymotion.com/embed/video/x8bl214' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        </p>
        </div>
      </section>
      
    )
}