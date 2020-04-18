import React from 'react';
import p5 from 'p5';
import SimplexNoise from 'simplex-noise/simplex-noise';
export default class Grid extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    state= {
        fps: '',
        color1: ['#F2F2F2','#001B26','#0A353F', '#456A72', '#8EA1A5']
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        let simplex, ran, size, time;
        const {color1} = this.state;
        p.setup = () => {
            if(p.windowWidth < 500) {
                p.createCanvas(p.windowWidth, 100, p.P2D);
            } else {
                p.createCanvas(p.windowWidth, 150, p.P2D);
            }
            
            simplex = new SimplexNoise('seed');
            ran = p.random(1000);
            size = 25;
            time = 0;
        }

        p.draw = () => {
            p.background(50);
            grid(time);
            ++time;
        }

        const grid = (time) => {
            let t = time*0.001;
            for(let i = 1; i<p.width; i+=size) {
                for(let j=1; j<p.height; j+=size) {
                    let n2 = p.map(simplex.noise2D(j*i+t,ran),-1,1,0,4);
                    //let s1 = p.map(p.sin((i*i*100+j*j*10)+t*50),-1,1,0,4);
                    p.fill(color1[Math.floor(n2)]);
                    p.rect(i,j,size-2,size-2);
                }
            }
        }
        
        p.windowResized = () => {
            if(p.windowWidth < 500) {
                p.resizeCanvas(p.windowWidth, 100);
                console.log('hii');
            } else {
                p.resizeCanvas(p.windowWidth,150);
            }
        }
     }

    render(){
        return (
            <div>
                <div className='nav-canvas' ref={this.myRef}></div>
            </div>
        )
    }

}