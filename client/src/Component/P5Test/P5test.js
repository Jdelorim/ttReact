import React from 'react';
import p5 from 'p5';

class P5Test extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
     //mount p5 instance
     componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    // componentDidUpdate() {
    //     this.myP5 = new p5(this.Sketch, this.myRef.current)
    // }

    Sketch = (p) => {
        let time, ranx, rany, ranc;

        p.setup = () => {
            p.createCanvas(1280,720);
            time = 0; 
            ranx = p.random(p.width);
            rany = p.random(p.height);
            ranc = p.random(100,255);
            

        }

        p.draw = () =>{
            
            p.background(0);
            p.stroke(ranc);
            p.strokeWeight(time);

            drawLine(p.width/2-ranx, p.height/2, p.width/2+rany, p.height/2);
            
            time=time+1;
            if(time > 100) {
                time = 0;
                ranc = p.random(50,255);
                ranx = p.random(p.width);
                rany = p.random(p.height);
            } else {
               
            }
            console.log(time);

        }

       const drawLine = (x,y,x1,y1) => {
          p.line(x,y,x1,y1);
        }


    }
   
    
    render(){
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
   
}

export default P5Test;