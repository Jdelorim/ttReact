// import React from 'react';
// import p5 from 'p5';
// import "p5/lib/addons/p5.sound";
// import './Particle.css';
// import jP from './PClass';


// class Particle1 extends React.Component{
//     constructor(props){
//         super(props);
//         this.myRef = React.createRef();
//     }
//     state= {
//         fps: '',
//         particleAmount: 100,
//         distance: 50,
       
//     }

//     componentDidMount() {
//         this.myP5 = new p5(this.Sketch, this.myRef.current);
       
//     }
    
//      Sketch = (p) => {
//         let newP = [];
//         let partLength;
//         let myDistance;
//         p.setup = () =>{
//             p.createCanvas(window.innerWidth,window.innerHeight, p.P2D); 
//             partLength = this.state.particleAmount;
//            for(let i =0;i<partLength;i++) {
//                 newP.push(new jP(p));
//             }
//         }
//         p.draw = () => {
//             p.background(2);
//             myDistance = this.state.distance;
//             // console.log(myDistance);
//             // p.translate(-p.width/2, -p.height/2);
//             newP.forEach((i, index, p) => {
//                 i.update();
//                 i.display();
//                 i.checkParticles(newP.slice(index), myDistance);
//             })
//             fps();
//         }
//         p.touchStarted =(e)=>{
//             console.log(e);
//             newP.push(new jP());
//             this.setState({
//                 particleAmount: this.state.particleAmount + 1
//             },()=>console.log(this.state.particleAmount))
//         }
        
//         p.keyPressed = e => {
//             newP.pop();
//             let p = this.state.particleAmount - 1;
//             if(p<0) {
//                 p = 0;
//             }
//             this.setState({
//                 particleAmount: p
//             },()=>console.log(this.state.particleAmount))
//         }


//         const fps = () => {
//             let f  = Math.round(p.frameRate());
//             this.setState({
//                 fps: f
//             })
//         }
//         p.windowResized=()=>{
//             p.resizeCanvas(p.windowWidth, p.windowHeight);
//         }
//     }


//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         },()=>console.log(this.state.distance));
//     }

  

//     render() {
//         return(
//             <div className='jcontainer'>
//                 <div className='FPS'>FPS: {this.state.fps}</div>
//                 <div style={{color: 'white'}}>Click Mouse to Add Particle, hit any key to remove Particle</div>
//                 <div className='pamount'>Particle Amount: {this.state.particleAmount} </div>
//                 <label style={{color: 'white'}}>Distance Length: {this.state.distance}</label>
//                 <br/>
//                 <input type='range' min='1' max='300' defaultValue='100' onChange={this.handleChange} name='distance'></input>  
//                 <div ref={this.myRef}></div>
//             </div>
           
//         )
//     }
    
// }

// export default Particle1;