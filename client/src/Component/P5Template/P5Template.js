import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import SimplexNoise from "simplex-noise/simplex-noise";
import P5ClassTemp from './P5ClassTemp';


export default class P5Template extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    state= {
        fps: ''
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight, p.P2D);
        }
        p.draw = () => {
            p.background(0);
            fps();
        }
        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
             },
             //()=>console.log("FPS:",this.state.fps)
             );
        }
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    render(){
        return (
            <div>
                <div ref={this.myRef}></div>
            </div>
        )
    }

}