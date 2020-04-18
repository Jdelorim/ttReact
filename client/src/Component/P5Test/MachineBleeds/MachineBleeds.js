import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
// import SimplexNoise from "simplex-noise/simplex-noise";
 import MBClass from './MBClass';

export default class MachineBleeds extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    state= {
        // fps: '',
        myDisplay: 'inline'
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
        console.log(this.myRef);
    }
  
  
    Sketch = p => {
        let MB, time, offscreen;
       
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            MB = new MBClass(p);
            p.smooth();
            p.colorMode(p.HSB, 100);
            time = 0;
            offscreen = p.createGraphics(400, 400, p.P2D);
        }

        p.draw = () => {
            p.background(100,0,0,10);
            offscreen.background(0);
            MB.display(time, offscreen);
            p.directionalLight(100, 0, 100, -10, 0, -100);
            p.rotateX(time *.001);
            p.rotateY(time *.01);
            p.rotateZ(time *.02);
            p.texture(offscreen);
            p.box(400,400,400);
            
           //fps();
            ++time;
        }
        // const fps = () => {
        //     let f  = Math.round(p.frameRate());
        //     this.setState({
        //         fps: f
        //      },
        //     //   ()=>console.log("FPS:",this.state.fps)
        //      );
        // }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight-8);
        }
    }

  

    render(){
        return (
            <>
              <div style={{position: 'absolute',  marginLeft: '20px', marginTop: '10px',fontFamily:'arial black', fontSize: '10px', color: 'white'}}>
              <div>FPS: {this.state.fps}</div>
              <div style={{marginTop: '300px', fontSize: '10em', color: 'rgba(255,255,255,0.9)', letterSpacing:'-9.0px'}}>TRASHTRASH
              <div style={{fontSize: '0.5em', letterSpacing:'5px', textAlign: 'center'}}>coming soon</div>
              </div>
              </div>
              <div ref={this.myRef}></div>
              
            </>
        )
    }

}