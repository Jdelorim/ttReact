import React from 'react';
// import P5Grid from '../P5Test/P5Grid';
// import P5Adsr from '../P5Test/P5Adsr';
import Particle1 from '../P5Test/ParticleTut/Particle1.js';
import './Nav.css';

class Nav extends React.Component{
    state = {
        trig: false
    }
  
    render(){
        
        return(
            <div className='nav-container'>
                <Particle1 />
                {/* <P5Grid /> */}
                 {/* <P5Adsr/>  */}
            </div>
        )
    }
}


export default Nav;