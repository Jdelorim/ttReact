import p5 from 'p5';
import SimplexNoise from "simplex-noise/simplex-noise";

export default class P5ClassTemp {
    constructor(p) {
        this.p = p;
    }
    display = () => {
        console.log(this.p);
    }
}