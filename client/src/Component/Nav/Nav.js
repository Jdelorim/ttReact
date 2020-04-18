import React from 'react';
import Grid from './Grid1';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{
    state = {
        display: 'block' 
    }
    componentDidMount() {
        this.checkForNav();
    }

    checkForNav = () => {
        if(window.location.pathname === '/playground') {
            this.setState({
                display: 'none'
            })
        } else {
            this.setState({
                display: 'block'
            })
        }

    }
  
    render(){
        
        return(
            <div className='nav-container' style={{display: this.state.display}}>
               <Grid /> 
                 <div className='p5-menu'>
                <div className='p5-title'>
                    <Link style={{color: 'white', textDecoration: 'none'}} to='/'>
                        TRASHTRASH
                    </Link>
                </div>    
                <div className='p5-menu-holder'>
                    <ul>
                        <Link style={{textDecoration: 'none'}} to='/bio'>
                        <li>BIO</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}}to='/works'>
                        <li>WORKS</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}}to='blog'>
                        <li>BLOG</li>
                        </Link>
                        <Link style={{textDecoration: 'none'}}to='contact'>
                        <li>CONTACT</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}


export default Nav;