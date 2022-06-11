import ReactPlayer from 'react-player';


export const Video = () => {
    return (  
      <section>
        <div className="row" style={{marginTop:"89px"}}>
        <p className="row">
                        <p>
                        <h6 style={{paddingLeft:"260px"}}> Como sublimar camisas </h6>
                        <ReactPlayer url='https://www.youtube.com/embed/lDLjPrGMsds' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"40%"}}/>
                        </p>
                        <p>
                        <h6  style={{paddingLeft:"400px"}}>Como sublimar Tazas</h6>
                        <ReactPlayer url='https://www.youtube.com/embed/Nr2gYfzY9Es' 
                                    controls
                                    width={400}
                                    height={300}
                                    style={{marginLeft:"60%"}}/> 
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                        </p>

                        </p>
        </div>
      </section>
      
    )
}