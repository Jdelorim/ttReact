// import p5 from 'p5';
import SimplexNoise from "simplex-noise/simplex-noise";

export default class MBClass {
    
    constructor(p) {
        this.p = p;
        this.moveY = [];
        this.r1 = p.random(0.01);
        this.r2 = p.random(100);
        this.r3 = p.random(100);
        this.r4 = p.random(100);
        this.ran4 = p.random(3,10);
        this.y = [];
        this.time = 0;
        this.amount = 20;
        this.noiseAmount = 100;
        this.speed = 0.01;
        this.vec = p.createVector(0,0,0);
        this.simplex = new SimplexNoise('seed'); 
        this.n1 = [];
        this.toffset = [];
    }
    // setup = ()=> {
    //     for(let i =0;i<this.amount; i++) {
    //         this.y.push(i);
    //         this.n1.push(i);
    //     }
    // }   

    display = (time) => {
        let {width, height, map} = this.p;
        
        let dist = 120;
        let x = width * .25;
        let speed = 0.01;

        for (let i =0;i<this.amount; i++){

        let p = map(i, 0,this.amount,0, height);
        this.y.push(p);

        let w = map(i,0,this.amount,1,2);
        let w1 = map(i,0,this.amount,2,1);
        let c = map(this.p.sin(i*(time*0.01)*2),-1, 1,60,100);
        
        this.toffset[i] = map(i,0,this.amount, w,w1);
        let s = map(i,0,this.amount,90,100);
        

        let n1x = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r2), -1,1,-dist,dist);
        let n2x = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r3), -1,1,-dist/2,dist/2);
        let n3x = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r4), -1,1,-dist,dist);
        let n1y = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r4), -1,1,-dist,dist);
        let n2y = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r2), -1,1,-dist/2,dist/2);
        let n3y = map(this.simplex.noise2D(time*speed+this.toffset[i],this.r3), -1,1,-dist,dist);

        // this.p.stroke(c+this.toffset[i],s+this.toffset[i], s);
       let hue = map(this.p.sin(time*(speed*4)+(this.toffset[i]*2)), -1,1,10,100);
        this.p.stroke(hue, 100, 100);
        
        let sw1 = map(i,0,this.amount,3,20);
        let sw2 = map(i,0,this.amount,20,3);
        let sw = map(i,0,this.amount, sw1,sw2);
        this.p.strokeWeight(sw);
        
        this.p.line(0, this.y[i], x+n1y, this.y[i]+n1x);
        this.p.line(x+n1y, this.y[i]+n1x, x*2+n2y, this.y[i]+n2x);
        this.p.line(x*2+n2y, this.y[i]+n2x, x*3+n3y, this.y[i]+n3x);
        this.p.line(x*3+n3y, this.y[i]+n3x, x*4, this.y[i]);
        if( this.y[i] > height) {
            this.y[i] = 0;
            // this.toffset[i] = 1;
        } else {
            ++this.y[i];
        }
     }
    }



    // mb = (time) => {
    //     // this.noiseAmount = this.p.mouseX;
    //    for(let i =0;i<1;i++) {
    //    let y1 = this.p.map(this.simplex.noise2D(time*this.speed+i,100),-1,1,-this.noiseAmount,this.noiseAmount);
    //    let x1 =  this.p.map(this.simplex.noise2D(time*this.speed+i,77),-1,1,-this.noiseAmount,this.noiseAmount);
    //    let x2 =  this.p.map(this.simplex.noise2D(time*this.speed+i,55),-1,1,-this.noiseAmount,this.noiseAmount);
    //    let y2 = this.p.map(this.simplex.noise2D(time*this.speed+i,30),-1,1,-this.noiseAmount,this.noiseAmount);
    //    let c =this.p.map(this.p.sin(i+time/3),-1,1,60,80);
    //    let s = this.p.map(i,0,50,70,80);
    //   this.y[i] = this.p.map(time,0,1,0,this.p.height);
      
    //     this.p.stroke(c,s,100);
    //     this.p.strokeWeight(4);
    //     this.p.line(0, this.y[i], this.p.width * .33+x1, this.y[i]+y1);
    //     this.p.line(this.p.width * .33+x1, this.y[i]+y1,this.p.width * .33*2+x2, this.y[i]+y2);
    //     this.p.line(this.p.width * .33*2+x2, this.y[i]+y2,this.p.width * .33*3, this.y[i]);
        
    //     if(this.y[i] > this.p.width) {
    //         this.y[i] = 0;
    //     } else {
    //         this.y[i] = this.y[i] + 1;
    //         console.log('here');
    //     }
        
    //     console.log(this.y[i]);
       
    // }
        
       
    // }
}