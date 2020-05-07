import React from 'react';
import WorksMenu from './WorksMenu';
import './Works.css';



class Works extends React.Component {

    render(){
        return (
       
          <div className="main">
            <div className="works-container">
              <WorksMenu />
            <div className="works">
                <p>
                I have undertaken a variety of projects throughout my career. My main focus has been creating real time graphics for live music events.  
                I have worked with acclaimed musicians including Daisy Jopling, Meek Mill, Yellow Claw, Simple Creatures, Flux Pavilion, 5th Harmony and many more. 
                In 2015 I made my first installation entitled “Algorithmic Structures” using the raspberry pi microcomputer and programmed in c++. It showed at a local venue in Newark, Delaware. 
                In 2017 I started integrating VR prototypes into my work flow and was hired as a VR technical assistant to the Tujamo feat. Sorana - One on One VR music video. 
                I am continuing to work on my VR game prototype GenBots VR as well as more experimental VR applications using WEB VR. My early career was in Los Angeles as a film editor where 
                I edited the documentary Dark Legacy. I also directed a experimental music video for the band 60 Watt Kid and for musician Sarah Koon as well as my own one minute short film. 
                </p>
            </div>
            </div>
          </div>
        
        );
    }
}

export default Works;