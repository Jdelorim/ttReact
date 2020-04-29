import React from 'react';
import './Bio.css';

export default class Bio extends React.Component {
    

    render(){
        return(
            <div className='main-can'>
                 <div className='main'>
                <div className='bio-container'>
                <div className='bio-header'>
                    BIO
                </div>
                <div className='bio'>
                    <img src='/img/newJosh.jpg' alt='Joshua deLorimier'></img>
                    <p>
                    Joshua deLorimier is a new media artist, software developer and full stack web developer residing in Philadelphia, PA USA. He has crafted a career designing audio reactive visuals for stage concerts.
                    Josh has designed and performed real time visuals with many acclaimed musicians and DJ's spanning multiple genres. It is his passion to create immersive interactive experiences. He works fluently with 3D packages and 2D design tools. Writes custom software designed specifically to achieve his meticulous goals. Josh is currently working on various types of software for visuals and VR experiences, while looking for companies and artists to collaborate with professionally.   
                    </p>
                </div>
                </div>
            </div>
            </div>
           
        )
    }


}