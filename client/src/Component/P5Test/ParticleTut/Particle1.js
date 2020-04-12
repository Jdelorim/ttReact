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
        fps: '',
        particleAmount: 1,
        distance: 100
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    Sketch = (p) => {
       
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
            checkParticles = (particles, distance) => {
                particles.forEach(particle => {
                    const d = p.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                    if(d < distance) {
                        p.stroke('rgba(100)');
                        p.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                    }
                })
                console.log(distance);

            }
        }

        let newP = [];
        let partLength;
        let myDistance;
        p.setup = () =>{
            p.createCanvas(window.innerWidth,window.innerHeight, p.P2D); 
            partLength = this.state.particleAmount;
           for(let i =0;i<partLength;i++) {
                newP.push(new jP());
            }
        }
        p.draw = () => {
            p.background(2);
            myDistance = this.state.distance;
            console.log(myDistance);
            // p.translate(-p.width/2, -p.height/2);
            newP.forEach((p, index) => {
                p.update();
                p.display();
                p.checkParticles(newP.slice(index), myDistance);
            })
            fps();
        }
        p.touchStarted =(e)=>{
            console.log(e);
            newP.push(new jP());
            this.setState({
                particleAmount: this.state.particleAmount + 1
            },()=>console.log(this.state.particleAmount))
        }

        // p.mouseClicked =(e)=>{
        //     console.log(e);
        //     newP.push(new jP());
        //     this.setState({
        //         particleAmount: this.state.particleAmount + 1
        //     },()=>console.log(this.state.particleAmount))
        // }

        p.keyPressed = e => {
            newP.pop();
            let p = this.state.particleAmount - 1;
            if(p<0) {
                p = 0;
            }
            this.setState({
                particleAmount: p
            },()=>console.log(this.state.particleAmount))
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


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        },()=>console.log(this.state.distance));
    }

  

    render() {
        return(
            <div className='jcontainer'>
                <div className='FPS'>FPS: {this.state.fps}</div>
                <div style={{color: 'white'}}>Click Mouse to Add Particle, hit any key to remove Particle</div>
                <div className='pamount'>Particle Amount: {this.state.particleAmount} </div>
                <label style={{color: 'white'}}>Distance Length: {this.state.distance}</label>
                <br/>
                <input type='range' min='1' max='300' defaultValue='100' onChange={this.handleChange} name='distance'></input>  
                <div ref={this.myRef}></div>
            </div>
           
        )
    }
    
}

export default Particle1;