// import p5 from 'p5';
// import SimplexNoise from "simplex-noise/simplex-noise";

export default class MBClass {
    
    constructor(p) {
        this.p = p;
    }


    display = () => {
        console.log('machine bleeds loaded');
        this.p.stroke(255);
        this.p.line()
    }
}