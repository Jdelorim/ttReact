import React from 'react';
import WorksMenu from '../Works/WorksMenu';
import './Film.css';

class Film extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="works-container">
                <WorksMenu />
              <div className="works">
                Film
             </div>
            </div>
          </div>
        )
    }
}

export default Film;