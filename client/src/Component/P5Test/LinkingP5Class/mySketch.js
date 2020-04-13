import React from 'react';

import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import SimplexNoise from "simplex-noise/simplex-noise";
import myClass from './myClass';


export default class MySketch extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    state = {
        fps: ''
    }
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        let holdClass = [];
        let trigSound, isPlaying, time, amount, distance;
        let simplex;
        p.setup = () => {
            p.createCanvas(p.windowWidth,p.windowHeight-130, p.P2D); 
            console.log(p.width);
            if(p.width < 400) {
                amount = 40;
                distance = 60;
                console.log('hiii');
            } else if(p.width < 700){
                amount = 60;
                distance = 80;
            }else{
                amount = 100;
                distance = 120;
            }
            for(let i=0;i<amount;i++) {
                holdClass.push(new myClass(p));
            }
            isPlaying = false;

            simplex = new SimplexNoise('seed');
            // console.log(simplex.noise2D(1,2));
            time = 0;
        }

        p.draw = () => {
            p.background(0,0,0,20);
            holdClass.forEach((i, index) => {
                i.update(time);
                i.display();
                i.checkParticles(holdClass.slice(index), distance);
                i.returnTrig();
            });
            // fps();
            time = time + 1;
           
        }
      
        p.keyPressed = e => {
            // let r = Math.round(p.random(holdClass.length-1));
            // holdClass[r].playSound();
            // holdClass[0].playSample();
            fps();
        }

        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
             },()=>console.log("FPS:",this.state.fps));
        }
      

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    render(){
        return(
            <div>
            {/* <div style={{color: 'white', position: 'absolute'}}>FPS: {this.state.fps}</div> */}
            <div ref={this.myRef}></div>
            </div>
        )
    }
}