import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
//time animation 
//class to see if you can trigger a bunch

class P5Adsr extends React.Component {

    constructor(props) {
        super(props) 
            this.myRef = React.createRef()
    }

    componentDidMount(){
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        let wave, env,envAmp, time, isPlaying, timeLength, fft, modAmp, modFreq;
        p.setup = () => {
            p.createCanvas(p.windowWidth, 300, p.P2D);
            env = new p5.Envelope();
            envAmp = new p5.Envelope();
            env.setRange(0.25, 0);

            wave = new p5.Oscillator('sine');
            wave.amp(0);

            modAmp = new p5.Oscillator('sine');
            modAmp.disconnect();
            time = 0;
            isPlaying = false;
            timeLength = 0;

            fft = new p5.FFT();
        }

        const playSound = () => {
            let maxLen = p.random(0.001, 2.0);
            const types = ['sine', 'triangle', 'sawtooth', 'square'];
            console.log(types);
            let a = p.random(0.05, maxLen);
            let d = p.random(0.05,maxLen);
            let s = p.random(0.1,0.5)+0.25;
            let r = p.random(0.01,maxLen);
            let rt = Math.round((p.random(1,4))-1);
        //    console.log(rt);
            timeLength = (a + d + r);
            
            wave.setType(types[rt]); 
            wave.start();
            
            modAmp.start();
            modAmp.disconnect();
            envAmp.setADSR(0.5, 0.5);
           
            modAmp.freq(p.random(12,100),timeLength);
           
            
            wave.freq(p.random(220,440));
            wave.amp(modAmp,timeLength+0.2);
            
           
            env.setADSR(a, d, s, r);
            env.play(wave);
        }

        p.draw = () => {
            
            p.background(0);
            if(time > (timeLength*60)) {
                time = 0;
                playSound();
                
            }
            let waveform = fft.waveform();
            p.stroke(255);
            p.strokeWeight(5);
            p.noFill();
            p.beginShape();
            for(let i = 0; i< waveform.length;i++) {
                let x = p.map(i,0,waveform.length,0, p.width);
                let y = p.map(waveform[i], -1, 1, p.height, 100);
                p.vertex(x,y);
            }
            p.endShape();

            time = time + 1;
            // console.log(time);
       
       
        p.mouseClicked =() =>{
            playSound();
        } 

       

       
       
    }
    }

    render() {
        return (
            <div className='p5-container' ref={this.myRef}>

            </div>
        )
    }




}


export default P5Adsr;