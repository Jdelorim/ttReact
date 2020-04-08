import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import './P5test.css';
// import { makeNoise2D } from 'open-simplex-noise';
//use correct version of p5 0.10.2

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
        var myCanvas;
        let song, rev;
       
        //---------------Setup--------------------------
        p.setup = () => {
            myCanvas = p.createCanvas(p.windowWidth,200, p.WEBGL);
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
            song = new p5.Oscillator('sine');
            rev = new p5.Reverb();
            song.amp(0,0.5);
            song.start();
            rev.drywet(100);
            rev.process(song,3,2);

           

        }
        //----------------DRAW------------------------
        p.draw = () =>{
            
            p.background(0);
            p.translate(-p.width/2,-p.height/2,0);
            
            let px = p.map(p.noise(time*0.03),0,1,-p.width/2,p.width/2);
            let ph = p.map(p.noise(time*0.04),0,1,0,100);
            p.pointLight(255,0,0,px,ph,50);
           
           for(let i=1;i<p.width;i+=size) {
                for(let j=1;j<p.height;j+=size) {
                    let x = p.map(i,0,p.width,0,p.width);
                    let y = p.map(j,0,p.height,0,p.height);
                    let ii = p.map(i*j,0,p.width,0,255);
                    let ssize = p.map(p.noise(time*0.05,i*j),0,1,0,40);
                    if(fcolor[ii] > 150) {
                        fcolor[ii] = p.random(200,255);
                    } else {
                        fcolor[ii] = p.random(0,100);
                    }
                    p.fill(fcolor[ii]);
                    p.rect(x,y,ssize-5,ssize-5);
                    
                }
            }
           
            p.fill(255)
            p.rect(px,ph,100,100);
            
            // console.log('px: ', px);
            time=time+1;
           
            
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
        p.mousePressed=()=> {
           
                p.userStartAudio();
              
        }
    //     p.mouseMoved=()=>{
    //         time=time+1;
      
       
    // }

    }
   
    
    render(){
        return (
            <>
            <div className='p5-container' ref={this.myRef}>
            </div>
                 <div className='p5-menu'>
                <div className='p5-title'>
                    TRASHTRASH
                
                <div className='p5-menu-holder'>
                    <ul>
                        <li>Bio</li>
                        <li>Works</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                </div>
                </div>
           </>
        )
    }
   
}

export default P5Grid;