import React from 'react';

import p5 from 'p5';
import "p5/lib/addons/p5.sound";
// import SimplexNoise from "simplex-noise/simplex-noise";
import PlexusClass from './PlexusClass';


export default class Plexus extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    state = {
        fps: 0,
        distLength: 100,
        micIn: 10,
       
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        let holdClass = [];
        let time, amount;
        let mic;
        
        p.setup = () => {
          p.createCanvas(p.windowWidth,p.windowHeight-130, p.P2D); 
            console.log(p.width);
            if(p.width < 400) {
                amount = 40;
               
                console.log('hiii');
            } else if(p.width < 700){
                amount = 60;
             
            }else{
                amount = 100;
               
            }
            for(let i=0;i<amount;i++) {
                holdClass.push(new PlexusClass(p));
            }
           
            mic = new p5.AudioIn();
            mic.start();
        
            time = 0;
        }

        p.draw = () => {
            p.background(0,0,0,20);
            let micAmp = mic.getLevel();
          
            holdClass.forEach((i, index) => {
               i.update(time);
                i.display();
                i.checkParticles(holdClass.slice(index), this.state.distLength, time);
            });
             
            time = time + 0.0001 + (micAmp * this.state.micIn);
           
            fps();
            // this.setState({
            //     distLength: distance,
            //     micIn: intensity
            // })
        }
      
        p.keyPressed = e => {
            fps();
        }

        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
             });
        }
      

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div style={{position: 'absolute', display: 'inline',  marginLeft: '20px', marginTop: '10px', fontSize: '10px'}}>
            <div style={{color: 'white'}}>FPS: {this.state.fps}</div>
            <label style={{color: 'white'}}>Distance Length: {this.state.distance}</label>
            <br/>
            <input type='range' min='1' max='300' defaultValue='100' onChange={this.handleChange} name='distLength'></input> 
            <br/>
            <label style={{color: 'white'}}>Mic Intensity: {this.state.micIn}</label>
            <br/>
            <input type='range' min='1' max='30' defaultValue='10' onChange={this.handleChange} name='micIn'></input>
            <br/>
           
            <div ref={this.myRef}></div>
            </div>
        )
    }
}