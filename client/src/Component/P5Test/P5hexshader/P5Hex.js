import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import './P5Hex.css';
//import SimplexNoise from "simplex-noise/simplex-noise";

export default class P5Hex extends React.Component{
   
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    
    state= {
        fps: '',
        myWidth: this.props.width,
        myHeight: this.props.height
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }
 

    Sketch = p => {
        let simpleShader, time;
        p.preload = () =>{
            simpleShader = p.loadShader('./shaders/basic.vert', './shaders/basic.frag');
        }
        p.setup = () => {
            p.createCanvas(this.state.myWidth, this.state.myHeight, p.WEBGL);
           
           

        p.draw = () => {
   
          p.shader(simpleShader);
          simpleShader.setUniform('res', [p.width, p.height]);
          simpleShader.setUniform('timeIn', time);
          p.rect(0, 0, p.width, p.height);
          time = (p.millis()*0.005);
          
        }

       
        // p.windowResized = () => {
        //     p.resizeCanvas(p.windowWidth, p.windowHeight);
        // }
    }
    }

    render(){
        return (
            <div>
                <div id='canvasHolder' ref={this.myRef}></div>
            </div>
        )
    }

}