import ReactAudioPlayer from 'react-audio-player';
import spotify from '../image/spotify.jpg';
import youtube from '../image/youtube.jpg';
import soundcloud from '../image/soundcloud.jpg';

export const Music = () => {
    return(
        <>
        <div className='row'  style={{padding:"0 170px", marginTop:"20px"}}>
            <h3> 
                <img src={spotify}/>
            <p>
            <ReactAudioPlayer
                src={require('../music/AudioSpoty.m4a')}
                controls
            />
            </p>
            </h3>
            <p style={{padding:"0 40px"}}>
            <h3> 
                <img src={youtube}/>
            <p>
            <ReactAudioPlayer
                src={require('../music/AudioYT.m4a')}
                controls
            />
            </p>
            </h3>
            </p>
            <p style={{padding:"0 0px"}} ></p>
            <h3> 
                <img src={soundcloud}/>
            <p>
            <ReactAudioPlayer
                src={require('../music/AudioSC.m4a')}
                controls
            />
            </p>
            </h3>
            
        </div>
        
        </>
    )   
}