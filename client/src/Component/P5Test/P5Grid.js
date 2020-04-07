import React from 'react';
import p5 from 'p5';
import './P5test.css';


class P5Grid extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
     //mount p5 instance
     componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    componentDidUpdate() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

  
    Sketch = (p) => {
        
        let time, size;
        let fcolor = [];
        const getStartWidth = p.width;

        p.setup = () => {
             p.createCanvas(p.windowWidth,200);
            time = 0; 
            size = 20;
            for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let mix = p.map(j*i,0,p.width,0,255);
                    fcolor[mix]=p.random(0,255);
                }
                
            }
            
            p.frameRate(60);
      

        }

        p.draw = () =>{
            p.background(0);
           
            for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let x = p.map(i,0,p.width,0,p.width);
                    let y = p.map(j,0,p.height,0,p.height);
                    let ii = p.map(i*j,0,p.width,0,255);
                  
                    if(fcolor[ii] > 150) {
                        fcolor[ii] = p.random(200,255);
                    } else {
                        fcolor[ii] = p.random(0,100);
                    }
                    p.fill(fcolor[ii]);
                    p.rect(x,y,size-5,size-5);
                    
                }
            }

           
        }
        p.windowResized=()=>{
            p.resizeCanvas(p.windowWidth, 200);
            for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let mix = p.map(j*i,0,p.width,0,255);
                    fcolor[mix]=p.random(0,255);
                }
                
            }
        }
        
        p.mouseMoved=()=>{
            time=time+1;
      
       
    }

    }
   
    
    render(){
        return (
            <div className='p5-container' ref={this.myRef}>
                <div className='p5-title'>
                    TRASHTRASH
                </div>
            </div>
        )
    }
   
}

export default P5Grid;