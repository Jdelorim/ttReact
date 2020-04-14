// import p5 from 'p5';
//import SimplexNoise from "simplex-noise/simplex-noise";

export default class PlexusClass {
   
    constructor(p) {
        this.p = p;
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        // this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
        // this.size = 10;
        // this.r1 = p.random(-1, 1);
        this.r2 = p.random(-1, 1);
        this.r3 = p.random(1,1000);
        this.r4 = p.random(100,255);
     
        // this.rsound = p.random(30,70);
        // this.ramp = p.random(0.001,0.1);
        // this.ra = p.random(0.001,0.5);
        // this.rd = p.random(0.001,0.5);
        // this.rr = p.random(0.001,0.5);

        this.rTime = p.random(0.0001,0.003)
        // this.sine1 = new p5.Oscillator('sine');
        // this.env = new p5.Envelope();
        // this.m = 0;
        // this.switchme = true;
        // this.changeFill = 'rgba(255,0,0)';
        // this.isPlaying = false;
        // this.sample = p.loadSound('/sounds/Kick01.wav');
        // this.simplex = new SimplexNoise('seed'); 
        this.speed = 0.0001;
       
    } 

    update = (time, simplex) => {
       // this.p.stroke(this.p.map(this.p.sin(time,100),-1,1,0,255));
      // console.log('in class', micAmp);
        // let speed = this.p.map(this.simplex.noise2D(this.r3,time*0.0001),-1,1,0,1);
        // console.log(speed);
        
        let x1 = this.p.map(simplex.noise2D((time*this.rTime),this.r3),-1,1,0,this.p.width);
        let y1 = this.p.map(simplex.noise2D((time*this.rTime+0.0001),this.r3*this.r2),-1,1,0, this.p.height);
        this.pos.x = x1;
        this.pos.y = y1;
        //this.edges();
       //console.log(x1,y1);
       
    };
    // display = (hue, sat, lum) => {
    //     this.hue = hue;
    //     this.sat = sat;
    //     this.lum = lum;
    //     // this.p.noStroke();
    //     // this.p.fill(this.hue, this.sat, this.lum);
    //     //this.p.circle(this.pos.x, this.pos.y, this.size);
    // };
    

    checkParticles = (particles, distance, hue, sat, lum) => {
    
        this.p.stroke(hue, sat, lum);
        this.p.strokeWeight(1);
        particles.forEach((particle) => {
            const d = this.p.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < distance) {
                this.p.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            } 
        });
        
    };
    // playDrone = (ps) => {
    //    if(!ps) {
    //        // this.sine1.amp(this.p.random(0.0001,0.01));
    //         this.sine1.amp(this.ramp);
    //        // this.sine1.freq(this.p.random(100,440));
    //        this.sine1.freq(this.rsound);
    //         this.sine1.start();
    //     } else {
    //         this.sine1.stop();
    //     }
    // }
    // playSample = () => {
    //     if(this.sample.isLoaded()){
    //     if(!this.sample.isPlaying()) {
    //    this.sample.play();
    //    this.sample.playMode('sustain');
    //     } else {
    //         this.sample.stop();
    //     }
    // }
    // }
    // playSound = (trig) => {
        
    //     if(trig === true) {
           
    //             this.sine1.start();
    //             this.sine1.amp(0);
    //             this.sine1.freq(this.p.midiToFreq(this.rsound));
    //             this.env.setADSR(this.ra,this.rd,0.01,this.rr);
    //             this.env.play(this.sine1);
    //             trig = false;
           
          
           
    //     } else {
    //         this.sine1.amp(0);
    //         this.sine1.stop();
    //         trig=false;
    //         this.isPlaying = false;
    //     }
          
          
    // }
    
  
    // returnTrig = () => {
    //     return this.switchme;
        
    // }

    // trigSound = () => {
    //    this.sine1.amp(0);
    //     if(this.switchme === true) {
    //         console.log('hit');
    //         this.sine1.start();
    //        this.sine1.amp(0);
    //        this.sine1.freq(this.p.midiToFreq(this.rsound));
    //        this.env.setADSR(this.ra,this.rd,0.01,this.rr);
    //        this.env.play(this.sine1);
    //         this.switchme = false;
    //     } else {
    //         this.sine1.disconnect();

    //         console.log('no');
    //     }
    // }

        
        //     edges = () => {
                   
        //     if (this.pos.x < 0 || this.pos.x > this.p.width) {
        //         this.vel.x *= -1;
        //     }
        //     if (this.pos.y < 0 || this.pos.y > this.p.height) {
        //         this.vel.y *= -1;
        //     }
        //  };


}