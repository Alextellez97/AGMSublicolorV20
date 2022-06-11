import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';


export const Video = () => {
    return (  
      <section>
        <div className="row" style={{marginTop:"89px"}}>
        <p className="row">
                        
                        <p>
                        <h6 style={{marginLeft:"40%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/lDLjPrGMsds' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"40%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/Nr2gYfzY9Es' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/ZHMy1ioVt4o' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/vZ-u6X8nrvc' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/hkVON6yKWOc' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"70%"}}/>
                        </p>
                        <p>
                        <h6  style={{marginLeft:"70%"}}> Titulo:  Porta</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/FS4oVlG70Xk' 
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