import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
// import SimplexNoise from "simplex-noise/simplex-noise";
 import MBClass from './MBClass';

export default class MachineBleeds extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    state= {
        fps: '',
        myDisplay: 'inline'
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        let MB, time;
       
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
            MB = new MBClass(p);
            // MB.setup();
            p.colorMode(p.HSB, 100);
            time = 0;
        }
        p.draw = () => {
            p.background(0,0,0,25);
            
            MB.display(time);
          
            fps();
            
            ++time;
        }
        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
             },
            //   ()=>console.log("FPS:",this.state.fps)
             );
        }
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    render(){
        return (
            <>
              <div style={{color: 'white', display: 'relative'}}>FPS: {this.state.fps}</div>
              <div ref={this.myRef}></div>
            </>
        )
    }

}