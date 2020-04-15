import React from 'react';
// import P5Grid from '../P5Test/P5Grid';
// import P5Adsr from '../P5Test/P5Adsr';
//  import Particle1 from '../P5Test/ParticleTut/Particle1.js';
//  import Plexus from '../P5Test/PlexusDesign/Plexus';
import MachineBleeds from '../P5Test/MachineBleeds/MachineBleeds';
// import P5Template from '../P5Template/P5Template';
import './Nav.css';

class Nav extends React.Component{
    state = {
        trig: false
    }
  
    render(){
        
        return(
            <div className='nav-container'>
                {/* <P5Template /> */}
                {/* <Particle1 /> */}
                 {/* <P5Grid />  */}
                {/* <Plexus />  */}
                 {/* <P5Adsr/>  */}
                 <MachineBleeds />
            </div>
        )
    }
}


export default Nav;