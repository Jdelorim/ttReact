import React from 'react';
import WorksMenu from '../Works/WorksMenu';
import './Installations.css';

class Installations extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="works-container">
                <WorksMenu />
              <div className="works">
                Installations
             </div>
            </div>
          </div>
        )
    }
}

export default Installations;