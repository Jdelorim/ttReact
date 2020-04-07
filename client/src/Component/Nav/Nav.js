import React from 'react';
import P5Grid from '../P5Test/P5Grid';
import './Nav.css';

class Nav extends React.Component{
    
    render(){
        return(
            <div className='nav-container'>
                <P5Grid />
                <div className='nav-title'>
                   
                </div>
            </div>
        )
    }
}


export default Nav;