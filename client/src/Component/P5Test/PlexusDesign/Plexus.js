import React from 'react';

import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import SimplexNoise from "simplex-noise/simplex-noise";
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
        baseSpeed: 1,
        hue: 100,
        sat: 0,
        lum: 100,
        lineWidth: 1,
        myDisplay: 'none'
       
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        const holdClass = [];
        let time, amount, simplex, mic;
        let t, f;
        
        p.setup = () => {
         p.createCanvas(p.windowWidth-10,p.windowHeight-10, p.P2D); 
          p.colorMode(p.HSB, 100);
            console.log(p.width);
            if(p.width < 400) {
                amount = 40;
            } else if(p.width < 700){
                amount = 60;
            }else {
                amount = 100;
            }
            
            for(let i=0;i<amount;i++) {
                holdClass.push(new PlexusClass(p));
            }
            
            mic = new p5.AudioIn();
            mic.start();

            simplex = new SimplexNoise('seed');
        
            time = 0;
            console.log('starting mic in: ', this.state.micIn );
            t=true;
            f=true;
        }

        p.draw = () => {
            if(f) {
                p.background(0,0,0,50);
            } else {
                p.background(0,0,0,20);
            }
            
            let {hue, sat, lum, micIn, distLength, baseSpeed, lineWidth} = this.state;
            let micAmp = mic.getLevel();
            holdClass.forEach((i, index) => {
                i.update(time, simplex);
                i.checkParticles(holdClass.slice(index), distLength, hue, sat, lum, lineWidth);
            });
            time = time + (baseSpeed*0.1) + (micAmp * micIn);
           
            fps();

            if(t) {
                this.setState({
                    myDisplay: 'inline'
                })
            } else {
                this.setState({
                    myDisplay: 'none'
                })
            }
        }
      
        p.keyPressed = e => {
         console.log(e);
         
            if(e.key === ' ') {
               t = !t;
            //    p.fullscreen(true);
               console.log(t);
            }

            if(e.key === 'f') {
                f = !f;
                console.log(f);
             }
        }
        
        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
             });
             
        }

        p.touchStarted = () => {
            p.userStartAudio();
            // console.log('is pressed');
        }
      

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth-5, p.windowHeight-5);
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
       
        return(
            <>
            <div style={{position: 'absolute', display: this.state.myDisplay,  marginLeft: '20px', marginTop: '10px', fontSize: '10px'}}>
            <div style={{color: 'white'}}>FPS: {this.state.fps}</div>
            <label style={{color: 'white'}}>Distance Length: {this.state.distance}</label>
            <br/>
            <input type='range' min='1' max='300' defaultValue='100' onChange={this.handleChange} name='distLength'></input> 
            <br/>
            <label style={{color: 'white'}}>Mic Intensity: {this.state.micIn}</label>
            <br/>
            <input type='range' min='1' max='30' defaultValue='10' onChange={this.handleChange} name='micIn'></input>
            <br/>
            <label style={{color: 'white'}}>Speed: {this.state.baseSpeed}</label>
            <br/>
            <input type='range' min='1' max='30' defaultValue='1' onChange={this.handleChange} name='baseSpeed'></input>
            <br/>
            <label style={{color: 'white'}}>Line Width: {this.state.lineWidth}</label>
            <br/>
            <input type='range' min='1' max='20' defaultValue='1' onChange={this.handleChange} name='lineWidth'></input>
            <br/>
            <label style={{color: 'white'}}>Hue: {this.state.hue}</label>
            <br/>
            <input type='range' min='0' max='100' defaultValue={this.state.hue} onChange={this.handleChange} name='hue'></input>
            <br/>
            <label style={{color: 'white'}}>Saturation: {this.state.sat}</label>
            <br/>
            <input type='range' min='0' max='100' defaultValue={this.state.sat} onChange={this.handleChange} name='sat'></input>
            <br/>
            <label style={{color: 'white'}}>Luminosity: {this.state.lum}</label>
            <br/>
            <input type='range' min='0' max='100' defaultValue={this.state.lum} onChange={this.handleChange} name='lum'></input>
            <br/>
            <div style={{color: 'white', fontSize: '10px'}}>Press 'F' key to toggle Feedback</div>
            <div style={{color: 'white', fontSize: '10px'}}>Press 'SPACEBAR' to toggle Controls</div>
            </div>
            <div ref={this.myRef}></div>
            </>
        )
    }
}