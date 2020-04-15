// import p5 from 'p5';
// import SimplexNoise from "simplex-noise/simplex-noise";

export default class MBClass {
    
    constructor(p) {
        this.p = p;
        this.moveY = 0;
    }


    display = () => {
      this.mb();
    }

    mb = (time) => {
        this.p.translate(0, this.moveY );
        this.p.stroke(255);
        this.p.strokeWeight(2);
        this.p.line(0, this.p.height/2,this.p.width * .33, this.p.height/2);
        this.p.stroke(200);
        this.p.line(this.p.width * .33, this.p.height/2,this.p.width * .33*2, this.p.height/2);
        this.p.stroke(100);
        this.p.line(this.p.width * .33*2, this.p.height/2,this.p.width * .33*3, this.p.height/2);
        if(this.moveY > this.p.height) {
            this.moveY = 0;
        } else {
            this.moveY = time;
        }
    }
}