import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import './P5test.css';
// import { makeNoise2D } from 'open-simplex-noise';
//use correct version of p5 0.10.2

class P5Grid extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        
    }
    state = {
        FPS: '',
        Width: ''
    }
     //mount p5 instance
     componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
        
    }

  

  
    Sketch = (p) => {
       
        let time, size;
        let fcolor = [];
        var myCanvas;
        // let osc,osc2, rev;
        // let startA;
       
        //---------------Setup--------------------------
    
        p.setup = () => {
            
            myCanvas = p.createCanvas(p.windowWidth, 110, p.WEBGL);
            time = 0; 
            size = 20;
            for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let mix = p.map(j*i,0,p.width,0,255);
                    fcolor[mix]=p.random(0,255);
                }
                
            }
            myCanvas.position(0,0);
            myCanvas.style('z-index', '-10');
            
            p.frameRate(60);
          
            p.rectMode(p.CENTER);

            this.setState({
                Width: p.width
            })

            // startA = false;
          

            // osc.amp(0,0.5);
            // osc.start();
            // rev.drywet(90);
            // rev.process(osc,3,2);

            
            // osc = new p5.Oscillator('sawtooth');
            // osc2 = new p5.Oscillator('sine');
            // rev = new p5.Reverb();

           

        }
        //osc

     

        //----------------DRAW------------------------
        p.draw = () =>{
            p.background(0);
            p.translate(-p.width/2,-p.height/2,0);
            
            let px = p.map(p.noise(time*0.03),0,1,-p.width/2,p.width/2);
            let ph = p.map(p.noise(time*0.04),0,1,-p.height/2,p.height/2);
             let co = p.map(p.noise(time*0.02),0,1,100,181);
            // let ph2 = p.map(p.noise(time*0.07,80),0,1,-120,120);
            
            // let lightSize2 = p.map(p.sin(time*0.5),-1,1,75,80);
            
            p.pointLight(0,co,204,px,ph,60);
            // p.pointLight(0,181,204,px2,ph2,lightSize2);
           
           for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let x = p.map(i,0,p.width,0,p.width);
                    let y = p.map(j,0,p.height,0,p.height);
                    let ii = p.map(i*j,0,p.width,0,255);
                    let ssize = p.map(p.noise(time*0.05,i*j),0,1,0,35);
                    if(fcolor[ii] > 150) {
                        fcolor[ii] = 255;
                    } else {
                        fcolor[ii] = 0;
                    }
                    p.fill(fcolor[ii]);
                    p.rect(x,y,ssize-5,ssize-5);
                    
                }
            }
         
            
            // console.log('px: ', px);
            time=time+1;
            let jfps = Math.round(p.frameRate());
            this.setState({
                FPS: jfps
            }
            // ,()=>console.log('FPS:', this.state.FPS)
            )
        
        }
      
        //  const playOsc = (n) => {
        //     console.log('should be playing sound');
        //     console.log(n);
        //     osc.start();
        //     osc2.start();
        //     osc2.amp(0.5);
        //     osc2.freq(2);
        //     osc.amp(0.05,0.1);

        //     osc.freq(n);
        //     osc.freq(osc2);
        //     osc2.amp(0,1.0);
           
        // }
        
        // const logKey = (e) => {
        //     console.log(`pressed ${e.code}`);
        //     playOsc((Math.random()*100)+60);
        // }
        // const volDown = () => {
        //     console.log('key is up');
        //     osc.amp(0,1.0);
        //     console.log(osc.amp());
        // }
        // document.addEventListener('keydown', logKey);
        //  document.addEventListener('keyup',volDown );
       
         p.windowResized=()=>{
            p.resizeCanvas(p.windowWidth, p.height);
            for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let mix = p.map(j*i,0,p.width,0,255);
                    fcolor[mix]=p.random(0,255);
                }
            }
            this.setState({
                Width: p.width
            })

        }

 

    }
   
    render(){
        return (
            <>
            <div className='p5-container' ref={this.myRef}>
            </div>
                 <div className='p5-menu'>
                <div className='p5-title'>
                    TRASHTRASH
                </div>    
                <div className='p5-menu-holder'>
                    <ul>
                        <li>BIO</li>
                        <li>WORKS</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                </div>
            <div className='fps'>
              <div>FPS: {this.state.FPS}</div> 
              <div>Width: {this.state.Width}</div>
            </div>
           </>
        )
    }
   
}

export default P5Grid;