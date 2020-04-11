import React from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import './Particle.css';


class Particle1 extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    state= {
        fps: ''
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = p => {
        class jP {
            constructor() {
                this.pos = p.createVector(p.random(p.width), p.random(p.height));
                this.vel = p.createVector(p.random(-1,1), p.random(-1.1,1.2));
                this.size = 10;
            }
            update = () => {
                this.pos.add(this.vel);
                this.edges();
                
            }
            display = () => {
                p.noStroke();
                p.fill('rgba(255,255,255,0.5');
                p.circle(this.pos.x, this.pos.y, this.size);
            }
            edges = () => {
                if(this.pos.x < 0 || this.pos.x > p.width) {
                    this.vel.x *= -1;
                }
                if(this.pos.y < 0 || this.pos.y > p.height) {
                    this.vel.y *= -1;
                }
            }
            checkParticles = (particles) => {
                particles.forEach(particle => {
                    const d = p.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                    if(d < 120) {
                        p.stroke('rgba(100)');
                        p.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                    }
                })

            }
        }

        let newP = [];
        let partLength;

        p.setup = () =>{
            p.createCanvas(window.innerWidth,window.innerHeight, p.P2D);
            p.frameRate(60);
            partLength = Math.floor(window.innerWidth / 10);
            //console.log(partLength);
           

            for(let i =0;i<partLength;i++) {
                newP.push(new jP());
            }
        }
        p.draw = () => {
            p.background(2);
            // p.translate(-p.width/2, -p.height/2);
            newP.forEach((p, index) => {
                p.update();
                p.display();
                p.checkParticles(newP.slice(index));
            })
            fps();
        }

        const fps = () => {
            let f  = Math.round(p.frameRate());
            this.setState({
                fps: f
            })
        }
        p.windowResized=()=>{
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            
           
            

        }
    }

    render() {
        return(
            <div className='jcontainer'>
                <div className='FPS'>FPS: {this.state.fps}</div>
                 <div ref={this.myRef}></div>
            </div>
           
        )
    }
    
}

export default Particle1;