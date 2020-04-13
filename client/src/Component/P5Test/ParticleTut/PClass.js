// import p5 from 'p5';

// export default class jP extends p5 {

//                 constructor(p) {
//                     super(p)
//                     this.pos = p.createVector(p.random(p.width), p.random(p.height));
//                     this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
//                     this.size = 10;
//                     this.r1 = p.random(-1, 1);
//                     this.r2 = p.random(-1, 1);
                   
//                 }

//                 update = () => {
                    
//                     this.pos.add(this.vel);
//                     this.edges();
//                 };

//                 display = () => {
//                     this.p.noStroke();
//                     this.p.fill("rgba(255,255,255,0.5");
//                     this.p.circle(this.pos.x, this.pos.y, this.size);
//                 };

//                 checkParticles = (particles, distance) => {
//                     particles.forEach((particle) => {
//                         const d = this.p.dist(
//                             this.pos.x,
//                             this.pos.y,
//                             particle.pos.x,
//                             particle.pos.y
//                         );
//                         if (d < distance) {
//                             this.p.stroke(255);
//                             this.p.line(
//                                 this.pos.x,
//                                 this.pos.y,
//                                 particle.pos.x,
//                                 particle.pos.y
//                             );
//                         }
//                         if (d > 12) {
//                             this.vel.x *= -1;
//                             this.vel.y *= -1;
//                         } else {
//                             this.vel.x *= 1;
//                             this.vel.y *= 1;
//                         }
//                     });
//                 };
//                 edges = () => {
                   
//                     if (this.pos.x < 0 || this.pos.x > this.p.width) {
//                         this.vel.x *= -1;
//                     }
//                     if (this.pos.y < 0 || this.pos.y > this.p.height) {
//                         this.vel.y *= -1;
//                     }
//                 };
// }



 


