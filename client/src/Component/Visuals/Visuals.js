import React from 'react';
import WorksMenu from '../Works/WorksMenu';
import './Visuals.css';

class Visuals extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="works-container">
                <WorksMenu />
              <div className="works">
                VISUALS
             </div>
            </div>
          </div>
        )
    }
}

export default Visuals;