import React from 'react';
import P5Grid from '../P5Test/P5Grid';

import P5Adsr from '../P5Test/P5Adsr';
import './Nav.css';

class Nav extends React.Component{
    state = {
        trig: false
    }
  
    render(){
        
        return(
            <div className='nav-container'>
                <P5Grid />
                 <P5Adsr/> 
            </div>
        )
    }
}


export default Nav;